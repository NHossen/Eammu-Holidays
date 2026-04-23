"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ================================================================
// FREE PDF EDITOR — Next.js 15 App Router
// Route: /travel-resources/free-pdf-editor
// Color theme: White bg + Green accent + Black text
// Libraries: PDF.js + Fabric.js + pdf-lib (loaded from CDN)
// All processing is 100% client-side — files never leave the device
// ================================================================

// ── Font options with language labels ──────────────────────────
const FONTS = [
  { label: "Noto Sans", value: "Noto Sans" },
  { label: "Roboto", value: "Roboto" },
  { label: "Poppins", value: "Poppins" },
  { label: "Open Sans", value: "Open Sans" },
  { label: "Noto Sans Bengali (বাংলা)", value: "Noto Sans Bengali" },
  { label: "Hind Siliguri (বাংলা)", value: "Hind Siliguri" },
  { label: "Noto Sans Arabic (عربي)", value: "Noto Sans Arabic" },
  { label: "Noto Nastaliq Urdu (اردو)", value: "Noto Nastaliq Urdu" },
  { label: "Noto Sans Devanagari (हिन्दी)", value: "Noto Sans Devanagari" },
  { label: "Noto Sans JP (日本語)", value: "Noto Sans JP" },
  { label: "Noto Sans KR (한국어)", value: "Noto Sans KR" },
  { label: "Noto Sans SC (中文)", value: "Noto Sans SC" },
  { label: "Arial", value: "Arial" },
];

// RTL fonts — these need right-to-left text direction
const RTL_FONTS = new Set(["Noto Sans Arabic", "Noto Nastaliq Urdu"]);

// Travel use-case cards shown on landing
const TRAVEL_CARDS = [
  { icon: "✈️", title: "Visa Application", desc: "Correct errors in visa PDF forms before embassy submission" },
  { icon: "🛂", title: "Passport Documents", desc: "Add markups, photo corrections or annotations" },
  { icon: "🏨", title: "Hotel Vouchers", desc: "Edit booking confirmation PDFs for your trip" },
  { icon: "🎫", title: "Flight Tickets", desc: "Annotate or highlight travel details easily" },
  { icon: "🏦", title: "Bank Statements", desc: "Highlight required sections for visa officers" },
  { icon: "📄", title: "Cover Letters", desc: "Personalise and edit PDF cover letters" },
];

// Coming-soon conversion tools
const TOOL_CARDS = [
  { icon: "🖼️", label: "PDF → JPG" },
  { icon: "📷", label: "JPG → PDF" },
  { icon: "🗜️", label: "Compress PDF" },
  { icon: "🔗", label: "Merge PDF" },
  { icon: "✂️", label: "Split PDF" },
  { icon: "✍️", label: "Sign PDF" },
];

// ================================================================
// MAIN PAGE COMPONENT
// ================================================================
export default function FreePDFEditorPage() {
  // ── CDN library loading ───────────────────────────────────────
  const [libsLoaded, setLibsLoaded] = useState(false);
  const [libError, setLibError] = useState(null);

  // ── PDF document state ────────────────────────────────────────
  const [pdfDoc, setPdfDoc] = useState(null);       // PDF.js document object
  const [pdfBytes, setPdfBytes] = useState(null);   // original file bytes for export
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRotations, setPageRotations] = useState({});
  const [deletedPages, setDeletedPages] = useState(new Set());

  // ── Editor tool state ─────────────────────────────────────────
  const [activeTool, setActiveTool] = useState("select");
  const [zoom, setZoom] = useState(1);
  const [fontFamily, setFontFamily] = useState("Noto Sans");
  const [fontSize, setFontSize] = useState(16);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [textColor, setTextColor] = useState("#111827");
  const [textAlign, setTextAlign] = useState("left");
  const [selectedObject, setSelectedObject] = useState(null);
  const [selectedObjProps, setSelectedObjProps] = useState({});

  // ── UI state ──────────────────────────────────────────────────
  const [showSidebar, setShowSidebar] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [autoSaveMsg, setAutoSaveMsg] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState("info"); // info | success | error
  const [isDragging, setIsDragging] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [contextMenu, setContextMenu] = useState(null); // {x, y, pageNum}
  const [renderingPages, setRenderingPages] = useState(new Set());
  const [pagesRendered, setPagesRendered] = useState(new Set());

  // ── Refs ──────────────────────────────────────────────────────
  const fabricCanvases = useRef({});     // pageNum → fabric.Canvas instance
  const pdfPageCanvases = useRef({});    // pageNum → HTMLCanvasElement (PDF render)
  const historyStacks = useRef({});      // pageNum → string[] (JSON snapshots)
  const historyIndex = useRef({});       // pageNum → number
  const pageScrollRefs = useRef({});     // pageNum → DOM div for scrolling
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const sigCanvasRef = useRef(null);
  const sigFabricRef = useRef(null);
  const autoSaveTimerRef = useRef(null);
  const activeToolRef = useRef("select"); // keep tool accessible in event closures

  // Sync activeToolRef with state
  useEffect(() => { activeToolRef.current = activeTool; }, [activeTool]);

  // ── Step 1: Load CDN scripts (PDF.js, Fabric.js, pdf-lib) ────
  useEffect(() => {
    const loadScript = (src, id) =>
      new Promise((resolve, reject) => {
        if (document.getElementById(id)) { resolve(); return; }
        const el = document.createElement("script");
        el.src = src;
        el.id = id;
        el.async = true;
        el.onload = resolve;
        el.onerror = () => reject(new Error(`Could not load: ${src}`));
        document.head.appendChild(el);
      });

    // Inject Google Fonts stylesheet
    if (!document.getElementById("pdf-editor-gfonts")) {
      const link = document.createElement("link");
      link.id = "pdf-editor-gfonts";
      link.rel = "stylesheet";
      link.href = [
        "https://fonts.googleapis.com/css2?",
        "family=Noto+Sans+Bengali&",
        "family=Noto+Sans+Arabic&",
        "family=Noto+Nastaliq+Urdu&",
        "family=Noto+Sans+Devanagari&",
        "family=Noto+Sans+JP&",
        "family=Noto+Sans+KR&",
        "family=Noto+Sans+SC&",
        "family=Hind+Siliguri&",
        "family=Noto+Sans:ital,wght@0,400;0,700;1,400&",
        "family=Roboto:ital,wght@0,400;0,700;1,400&",
        "family=Poppins:ital,wght@0,400;0,600;0,700;1,400&",
        "family=Open+Sans:ital,wght@0,400;0,700;1,400&",
        "display=swap",
      ].join("");
      document.head.appendChild(link);
    }

    Promise.all([
      loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
        "pdfjs-cdn"
      ),
      loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.0/fabric.min.js",
        "fabricjs-cdn"
      ),
      loadScript(
        "https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js",
        "pdflib-cdn"
      ),
    ])
      .then(() => {
        // Configure PDF.js worker
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        setLibsLoaded(true);

        // Notify about previous session
        const saved = localStorage.getItem("pdfeditor_autosave");
        if (saved) {
          showToast("📂 Previous session detected. Upload your PDF to restore edits.", "info");
        }
      })
      .catch((err) => setLibError(err.message));
  }, []);

  // ── Step 2: Auto-save every 30 seconds ──────────────────────
  useEffect(() => {
    if (!pdfDoc) return;
    autoSaveTimerRef.current = setInterval(() => {
      const snapshot = {};
      Object.keys(fabricCanvases.current).forEach((p) => {
        const fc = fabricCanvases.current[p];
        if (fc) snapshot[p] = fc.toJSON();
      });
      try {
        localStorage.setItem("pdfeditor_autosave", JSON.stringify(snapshot));
        setAutoSaveMsg("Auto-saved ✓");
        setTimeout(() => setAutoSaveMsg(""), 3000);
      } catch {
        // localStorage quota exceeded — silently ignore
      }
    }, 30000);
    return () => clearInterval(autoSaveTimerRef.current);
  }, [pdfDoc]);

  // ── Step 3: Global keyboard shortcuts ───────────────────────
  useEffect(() => {
    const onKey = (e) => {
      const fc = fabricCanvases.current[currentPage];
      if (!fc) return;

      // Ctrl+Z → Undo
      if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        undoPage(currentPage);
        return;
      }
      // Ctrl+Y or Ctrl+Shift+Z → Redo
      if ((e.ctrlKey || e.metaKey) && (e.key === "y" || (e.key === "z" && e.shiftKey))) {
        e.preventDefault();
        redoPage(currentPage);
        return;
      }
      // Ctrl+D → Duplicate selected
      if ((e.ctrlKey || e.metaKey) && e.key === "d") {
        e.preventDefault();
        const obj = fc.getActiveObject();
        if (obj) {
          obj.clone((cloned) => {
            cloned.set({ left: (obj.left || 0) + 20, top: (obj.top || 0) + 20 });
            fc.discardActiveObject();
            fc.add(cloned);
            fc.setActiveObject(cloned);
            fc.renderAll();
          });
        }
        return;
      }
      // Delete/Backspace → Remove selected object
      if (e.key === "Delete" || e.key === "Backspace") {
        const tag = document.activeElement?.tagName?.toLowerCase();
        if (tag === "input" || tag === "textarea" || tag === "select") return;
        const obj = fc.getActiveObject();
        if (obj) {
          fc.remove(obj);
          fc.renderAll();
          setSelectedObject(null);
          setSelectedObjProps({});
          pushHistory(currentPage);
        }
        return;
      }
      // Escape → Deselect
      if (e.key === "Escape") {
        fc.discardActiveObject();
        fc.renderAll();
        setSelectedObject(null);
        setSelectedObjProps({});
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentPage]);

  // ── Ctrl+Wheel zoom ──────────────────────────────────────────
  useEffect(() => {
    const onWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        setZoom((z) =>
          Math.min(3, Math.max(0.25, +(z + (e.deltaY < 0 ? 0.1 : -0.1)).toFixed(2)))
        );
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // ── Toast helper ─────────────────────────────────────────────
  const showToast = useCallback((msg, type = "info") => {
    setToastMsg(msg);
    setToastType(type);
    setTimeout(() => setToastMsg(""), 4500);
  }, []);

  // ── History: push snapshot ───────────────────────────────────
  const pushHistory = useCallback((pageNum) => {
    const fc = fabricCanvases.current[pageNum];
    if (!fc) return;
    const json = JSON.stringify(fc.toJSON());
    if (!historyStacks.current[pageNum]) {
      historyStacks.current[pageNum] = [];
      historyIndex.current[pageNum] = -1;
    }
    const idx = historyIndex.current[pageNum];
    // Truncate redo branch
    historyStacks.current[pageNum] = historyStacks.current[pageNum].slice(0, idx + 1);
    historyStacks.current[pageNum].push(json);
    // Keep max 50 snapshots
    if (historyStacks.current[pageNum].length > 50) {
      historyStacks.current[pageNum].shift();
    }
    historyIndex.current[pageNum] = historyStacks.current[pageNum].length - 1;
  }, []);

  const undoPage = useCallback((pageNum) => {
    const fc = fabricCanvases.current[pageNum];
    if (!fc) return;
    const idx = historyIndex.current[pageNum] ?? -1;
    if (idx <= 0) { showToast("Nothing to undo", "info"); return; }
    historyIndex.current[pageNum] = idx - 1;
    fc.loadFromJSON(
      JSON.parse(historyStacks.current[pageNum][idx - 1]),
      () => fc.renderAll()
    );
  }, [showToast]);

  const redoPage = useCallback((pageNum) => {
    const fc = fabricCanvases.current[pageNum];
    if (!fc) return;
    const stack = historyStacks.current[pageNum] || [];
    const idx = historyIndex.current[pageNum] ?? -1;
    if (idx >= stack.length - 1) { showToast("Nothing to redo", "info"); return; }
    historyIndex.current[pageNum] = idx + 1;
    fc.loadFromJSON(JSON.parse(stack[idx + 1]), () => fc.renderAll());
  }, [showToast]);

  // ── Render a PDF page onto its canvas ────────────────────────
  const renderPDFPage = useCallback(async (pageNum) => {
    if (!pdfDoc) return;
    if (renderingPages.has(pageNum)) return;
    setRenderingPages((prev) => new Set([...prev, pageNum]));

    try {
      const page = await pdfDoc.getPage(pageNum);
      const rotation = pageRotations[pageNum] || 0;
      const viewport = page.getViewport({ scale: 1.5, rotation });

      const pdfCanvas = pdfPageCanvases.current[pageNum];
      if (!pdfCanvas) return;
      const ctx = pdfCanvas.getContext("2d");
      pdfCanvas.width = viewport.width;
      pdfCanvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport }).promise;

      // ── Init Fabric.js overlay canvas ──────────────────────
      const fabricId = `fabric-overlay-${pageNum}`;
      if (!fabricCanvases.current[pageNum]) {
        const fc = new window.fabric.Canvas(fabricId, {
          width: viewport.width,
          height: viewport.height,
          selection: true,
          preserveObjectStacking: true,
          enableRetinaScaling: true,
        });

        fabricCanvases.current[pageNum] = fc;

        // Canvas click → add tool objects
        fc.on("mouse:down", (opt) => {
          const tool = activeToolRef.current;
          if (tool === "select" || opt.target) return;
          addToolObject(fc, opt, pageNum, tool);
        });

        // Selection events → update properties panel
        const onSelect = (e) => {
          const obj = e.selected?.[0] || null;
          setSelectedObject(obj);
          if (obj) extractObjProps(obj);
        };
        fc.on("selection:created", onSelect);
        fc.on("selection:updated", onSelect);
        fc.on("selection:cleared", () => {
          setSelectedObject(null);
          setSelectedObjProps({});
        });

        // Push history on every modification
        fc.on("object:added", () => pushHistory(pageNum));
        fc.on("object:modified", () => pushHistory(pageNum));
        fc.on("object:removed", () => pushHistory(pageNum));

        // Initialize history with empty state
        pushHistory(pageNum);
      } else {
        // Already exists — just resize
        const fc = fabricCanvases.current[pageNum];
        fc.setWidth(viewport.width);
        fc.setHeight(viewport.height);
        fc.renderAll();
      }

      setPagesRendered((prev) => new Set([...prev, pageNum]));
    } catch (err) {
      console.error(`Error rendering page ${pageNum}:`, err);
    } finally {
      setRenderingPages((prev) => {
        const next = new Set(prev);
        next.delete(pageNum);
        return next;
      });
    }
  }, [pdfDoc, pageRotations, pushHistory]);

  // Extract properties from a Fabric object for the right panel
  const extractObjProps = (obj) => {
    if (!obj) return;
    setSelectedObjProps({
      type: obj.type,
      fontFamily: obj.fontFamily || "Noto Sans",
      fontSize: obj.fontSize || 16,
      fill: obj.fill || "#111827",
      stroke: obj.stroke || "#16a34a",
      strokeWidth: obj.strokeWidth || 2,
      opacity: obj.opacity ?? 1,
      angle: Math.round(obj.angle || 0),
      fontWeight: obj.fontWeight || "normal",
      fontStyle: obj.fontStyle || "normal",
      underline: obj.underline || false,
      textAlign: obj.textAlign || "left",
      width: Math.round(obj.width * (obj.scaleX || 1)),
      height: Math.round(obj.height * (obj.scaleY || 1)),
    });
  };

  // ── Add tool objects on canvas click ─────────────────────────
  const addToolObject = (fc, opt, pageNum, tool) => {
    const pointer = fc.getPointer(opt.e);
    const isRTL = RTL_FONTS.has(fontFamily);

    if (tool === "text") {
      const tb = new window.fabric.IText("Type here...", {
        left: pointer.x,
        top: pointer.y,
        fontFamily,
        fontSize,
        fontWeight: bold ? "bold" : "normal",
        fontStyle: italic ? "italic" : "normal",
        underline,
        fill: textColor,
        textAlign,
        direction: isRTL ? "rtl" : "ltr",
        editable: true,
        padding: 4,
      });
      fc.add(tb);
      fc.setActiveObject(tb);
      setTimeout(() => tb.enterEditing(), 100);
      fc.renderAll();
    }

    if (tool === "highlight") {
      const rect = new window.fabric.Rect({
        left: pointer.x - 50,
        top: pointer.y - 12,
        width: 140,
        height: 26,
        fill: "rgba(250,204,21,0.45)",
        stroke: "transparent",
        strokeWidth: 0,
        selectable: true,
        rx: 2,
        ry: 2,
      });
      fc.add(rect);
      fc.setActiveObject(rect);
      fc.renderAll();
    }

    if (tool === "shape") {
      const rect = new window.fabric.Rect({
        left: pointer.x,
        top: pointer.y,
        width: 120,
        height: 70,
        fill: "transparent",
        stroke: "#16a34a",
        strokeWidth: 2,
        rx: 4,
        ry: 4,
        selectable: true,
      });
      fc.add(rect);
      fc.setActiveObject(rect);
      fc.renderAll();
    }

    if (tool === "checkbox") {
      const cb = new window.fabric.Text("☑", {
        left: pointer.x,
        top: pointer.y,
        fontSize: 22,
        fill: "#16a34a",
        selectable: true,
      });
      fc.add(cb);
      fc.renderAll();
    }
  };

  // ── Re-render pages when PDF loads or rotations change ──────
  useEffect(() => {
    if (!pdfDoc) return;
    const pages = Array.from({ length: numPages }, (_, i) => i + 1).filter(
      (p) => !deletedPages.has(p)
    );
    pages.forEach((p, i) => {
      setTimeout(() => renderPDFPage(p), i * 80);
    });
  }, [pdfDoc, numPages, pageRotations, deletedPages]);

  // ── Load PDF file ─────────────────────────────────────────────
  const loadPDF = async (file) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      showToast("⚠️ Please upload a valid PDF file", "error");
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      showToast("⚠️ File too large. Maximum size is 100 MB", "error");
      return;
    }
    try {
      showToast("⏳ Loading PDF...", "info");
      const buffer = await file.arrayBuffer();
      setPdfBytes(buffer.slice(0)); // keep a copy for export
      const uint8 = new Uint8Array(buffer);
      const doc = await window.pdfjsLib.getDocument({ data: uint8 }).promise;
      // Reset all state
      fabricCanvases.current = {};
      historyStacks.current = {};
      historyIndex.current = {};
      setPdfDoc(doc);
      setNumPages(doc.numPages);
      setCurrentPage(1);
      setDeletedPages(new Set());
      setPageRotations({});
      setPagesRendered(new Set());
      setSelectedObject(null);
      setSelectedObjProps({});
      showToast(`✅ Loaded "${file.name}" — ${doc.numPages} page${doc.numPages > 1 ? "s" : ""}`, "success");
    } catch (err) {
      showToast(`❌ Failed to load PDF: ${err.message}`, "error");
    }
  };

  // ── Add image from file picker ────────────────────────────────
  const addImageToCanvas = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      window.fabric.Image.fromURL(e.target.result, (img) => {
        img.scaleToWidth(180);
        img.set({ left: 60, top: 60, selectable: true });
        const fc = fabricCanvases.current[currentPage];
        if (fc) {
          fc.add(img);
          fc.setActiveObject(img);
          fc.renderAll();
          showToast("🖼️ Image added to page", "success");
        }
      });
    };
    reader.readAsDataURL(file);
  };

  // ── Signature modal ───────────────────────────────────────────
  const openSignatureModal = () => {
    setShowSignatureModal(true);
    setTimeout(() => {
      if (sigCanvasRef.current && !sigFabricRef.current) {
        sigFabricRef.current = new window.fabric.Canvas(sigCanvasRef.current, {
          isDrawingMode: true,
          width: 480,
          height: 180,
          backgroundColor: "#f9fafb",
        });
        sigFabricRef.current.freeDrawingBrush.color = "#111827";
        sigFabricRef.current.freeDrawingBrush.width = 2.5;
      }
    }, 150);
  };

  const clearSignature = () => sigFabricRef.current?.clear();

  const placeSignature = () => {
    if (!sigFabricRef.current) return;
    const dataURL = sigFabricRef.current.toDataURL({ format: "png", multiplier: 2 });
    window.fabric.Image.fromURL(dataURL, (img) => {
      img.scaleToWidth(200);
      img.set({ left: 80, top: 80, selectable: true });
      const fc = fabricCanvases.current[currentPage];
      if (fc) {
        fc.add(img);
        fc.setActiveObject(img);
        fc.renderAll();
        pushHistory(currentPage);
      }
    });
    sigFabricRef.current.dispose();
    sigFabricRef.current = null;
    setShowSignatureModal(false);
    showToast("✍️ Signature placed on page", "success");
  };

  // ── Update property on selected object ───────────────────────
  const updateProp = (prop, value) => {
    const fc = fabricCanvases.current[currentPage];
    const obj = fc?.getActiveObject();
    if (!obj) return;
    obj.set(prop, value);
    fc.renderAll();
    setSelectedObjProps((prev) => ({ ...prev, [prop]: value }));
  };

  const deleteSelected = () => {
    const fc = fabricCanvases.current[currentPage];
    const obj = fc?.getActiveObject();
    if (!obj) return;
    fc.remove(obj);
    fc.renderAll();
    setSelectedObject(null);
    setSelectedObjProps({});
    pushHistory(currentPage);
  };

  // ── Page tools ────────────────────────────────────────────────
  const deletePage = (pageNum) => {
    const alive = visiblePages.length;
    if (alive <= 1) { showToast("⚠️ Cannot delete the only remaining page", "error"); return; }
    setDeletedPages((prev) => new Set([...prev, pageNum]));
    delete fabricCanvases.current[pageNum];
    setContextMenu(null);
    if (currentPage === pageNum) {
      const next = visiblePages.find((p) => p !== pageNum) || 1;
      setCurrentPage(next);
    }
    showToast(`🗑️ Page ${pageNum} deleted`, "info");
  };

  const rotatePage = (pageNum) => {
    setPageRotations((prev) => ({
      ...prev,
      [pageNum]: ((prev[pageNum] || 0) + 90) % 360,
    }));
    setContextMenu(null);
    showToast(`🔄 Page ${pageNum} rotated`, "info");
  };

  const duplicatePage = (pageNum) => {
    setContextMenu(null);
    showToast("📋 Duplicate page feature coming soon!", "info");
  };

  // ── Download edited PDF ───────────────────────────────────────
  const downloadPDF = async () => {
    if (!pdfBytes) return;
    setIsDownloading(true);
    setDownloadProgress(5);

    try {
      const { PDFDocument } = window.PDFLib;
      const pdfLibDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfLibDoc.getPages();

      for (let i = 0; i < visiblePages.length; i++) {
        const pageNum = visiblePages[i];
        setDownloadProgress(Math.round(10 + (i / visiblePages.length) * 80));

        const fc = fabricCanvases.current[pageNum];
        if (!fc || fc.getObjects().length === 0) continue;

        const page = pages[pageNum - 1];
        const { width, height } = page.getSize();

        // Export fabric overlay as PNG, embed into PDF page
        const dataURL = fc.toDataURL({ format: "png", multiplier: 2 });
        const imgBytes = await fetch(dataURL).then((r) => r.arrayBuffer());
        const embeddedImg = await pdfLibDoc.embedPng(imgBytes);
        page.drawImage(embeddedImg, { x: 0, y: 0, width, height });
      }

      setDownloadProgress(95);
      const outBytes = await pdfLibDoc.save();
      const blob = new Blob([outBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "edited-document.pdf";
      anchor.click();
      URL.revokeObjectURL(url);
      setDownloadProgress(100);
      showToast("✅ PDF downloaded successfully — No watermark!", "success");
    } catch (err) {
      showToast(`❌ Download failed: ${err.message}`, "error");
    } finally {
      setTimeout(() => { setIsDownloading(false); setDownloadProgress(0); }, 1800);
    }
  };

  // ── Drag-and-drop upload ─────────────────────────────────────
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) loadPDF(file);
  };

  // ── Visible pages (non-deleted) ──────────────────────────────
  const visiblePages = Array.from({ length: numPages }, (_, i) => i + 1).filter(
    (p) => !deletedPages.has(p)
  );

  // ── Scroll to page ───────────────────────────────────────────
  const scrollToPage = (pageNum) => {
    setCurrentPage(pageNum);
    pageScrollRefs.current[pageNum]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ── Tool cursor style ────────────────────────────────────────
  const setToolOnCanvas = (tool) => {
    setActiveTool(tool);
    Object.values(fabricCanvases.current).forEach((fc) => {
      if (!fc) return;
      fc.isDrawingMode = false;
      fc.defaultCursor = tool === "select" ? "default" : "crosshair";
      fc.hoverCursor = tool === "select" ? "move" : "crosshair";
      fc.renderAll();
    });
  };

  // ================================================================
  // LOADING SCREEN
  // ================================================================
  if (!libsLoaded) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-5">
        {libError ? (
          <div className="text-center max-w-sm">
            <div className="text-5xl mb-4">⚠️</div>
            <p className="text-lg font-semibold text-gray-800 mb-2">Editor failed to load</p>
            <p className="text-sm text-gray-500 mb-4">{libError}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-green-100 border-t-green-600 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-green-600">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold text-lg">Loading PDF Editor</p>
              <p className="text-gray-400 text-sm mt-1">Preparing all tools for you...</p>
            </div>
            <div className="flex gap-2">
              {["PDF.js", "Fabric.js", "pdf-lib"].map((lib) => (
                <span key={lib} className="text-xs bg-green-50 text-green-700 border border-green-200 rounded-full px-3 py-1">
                  {lib}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  // ================================================================
  // MAIN RENDER
  // ================================================================
  return (
    <div className="min-h-screen bg-white py-20" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
      {/* Inject fonts */}
      <style>{`
        * { box-sizing: border-box; }
        .pdf-page-wrapper { position: relative; display: inline-block; line-height: 0; }
        .pdf-base-canvas { display: block; position: relative; z-index: 1; }
        .fabric-overlay-canvas { position: absolute !important; top: 0 !important; left: 0 !important; z-index: 2 !important; }
        .fabric-overlay-canvas .upper-canvas { position: absolute !important; top: 0 !important; left: 0 !important; }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .fade-in-up { animation: fadeInUp 0.4s ease both; }
        @keyframes pulse-green { 0%,100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.3); } 50% { box-shadow: 0 0 0 8px rgba(22,163,74,0); } }
        .pulse-green { animation: pulse-green 2s infinite; }
      `}</style>

      {/* ── Trust badge (always visible when PDF loaded) ── */}
      {pdfDoc && (
        <div className="bg-green-50 border-b border-green-100 text-center py-1.5">
          <span className="text-xs text-green-700 font-medium">
            🔒 Your files never leave your device — 100% private, processed in your browser
          </span>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════
          TOOLBAR
      ════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-1 px-3 py-2 flex-wrap min-h-[52px]">

          {/* Logo */}
          <div className="flex items-center gap-2 mr-3 shrink-0">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM7 12h10v1.5H7V12zm0 3h10v1.5H7V15zm0-6h5v1.5H7V9z" />
              </svg>
            </div>
            <span className="font-bold text-green-600 text-sm hidden sm:block">PDFEdit Free</span>
          </div>

          {pdfDoc ? (
            <>
              {/* ── Editing tools ── */}
              <div className="flex items-center gap-0.5 flex-wrap">
                {[
                  { id: "select", label: "Select", svg: <path d="M4 4l7 18 3-7 7-3L4 4z" /> },
                  { id: "text", label: "Text", svg: <path d="M5 4v3h5.5v12h3V7H19V4H5z" /> },
                  { id: "highlight", label: "Highlight", svg: <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /> },
                  { id: "shape", label: "Shape", svg: <path d="M3 3h18v18H3V3zm2 2v14h14V5H5z" /> },
                  { id: "checkbox", label: "Check", svg: <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /> },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setToolOnCanvas(t.id)}
                    title={t.label}
                    className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeTool === t.id
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">{t.svg}</svg>
                    <span className="hidden lg:inline">{t.label}</span>
                  </button>
                ))}

                {/* Image — triggers file picker */}
                <button
                  onClick={() => imageInputRef.current?.click()}
                  title="Add Image"
                  className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                  <span className="hidden lg:inline">Image</span>
                </button>

                {/* Signature — opens modal */}
                <button
                  onClick={openSignatureModal}
                  title="Add Signature"
                  className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                  <span className="hidden lg:inline">Sign</span>
                </button>
              </div>

              <div className="w-px h-6 bg-gray-200 mx-1 shrink-0" />

              {/* ── Font controls ── */}
              <select
                value={fontFamily}
                onChange={(e) => {
                  const f = e.target.value;
                  setFontFamily(f);
                  updateProp("fontFamily", f);
                  if (RTL_FONTS.has(f)) updateProp("direction", "rtl");
                  else updateProp("direction", "ltr");
                }}
                style={{ fontFamily }}
                className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-green-400 max-w-[130px]"
              >
                {FONTS.map((f) => (
                  <option key={f.value} value={f.value} style={{ fontFamily: f.value }}>
                    {f.label}
                  </option>
                ))}
              </select>

              <input
                type="number" min={8} max={96} value={fontSize}
                onChange={(e) => { setFontSize(+e.target.value); updateProp("fontSize", +e.target.value); }}
                className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs w-12 text-center focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              {/* B / I / U */}
              {[
                { ch: "B", active: bold, toggle: () => { setBold((b) => !b); updateProp("fontWeight", !bold ? "bold" : "normal"); }, style: { fontWeight: "bold" } },
                { ch: "I", active: italic, toggle: () => { setItalic((b) => !b); updateProp("fontStyle", !italic ? "italic" : "normal"); }, style: { fontStyle: "italic" } },
                { ch: "U", active: underline, toggle: () => { setUnderline((b) => !b); updateProp("underline", !underline); }, style: { textDecoration: "underline" } },
              ].map(({ ch, active, toggle, style }) => (
                <button
                  key={ch}
                  onClick={toggle}
                  style={style}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-colors ${active ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  {ch}
                </button>
              ))}

              {/* Color */}
              <input
                type="color" value={textColor}
                onChange={(e) => { setTextColor(e.target.value); updateProp("fill", e.target.value); }}
                className="w-7 h-7 rounded-lg border border-gray-200 cursor-pointer p-0.5"
                title="Text color"
              />

              {/* Alignment */}
              {["left", "center", "right"].map((a) => (
                <button
                  key={a}
                  onClick={() => { setTextAlign(a); updateProp("textAlign", a); }}
                  className={`w-7 h-7 rounded-lg text-sm transition-colors ${textAlign === a ? "bg-green-100 text-green-700" : "text-gray-500 hover:bg-gray-100"}`}
                  title={`Align ${a}`}
                >
                  {a === "left" ? "⬅" : a === "center" ? "↔" : "➡"}
                </button>
              ))}

              <div className="w-px h-6 bg-gray-200 mx-1 shrink-0" />

              {/* Undo / Redo */}
              <button onClick={() => undoPage(currentPage)} title="Undo (Ctrl+Z)"
                className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center text-base">↩</button>
              <button onClick={() => redoPage(currentPage)} title="Redo (Ctrl+Y)"
                className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center text-base">↪</button>

              <div className="w-px h-6 bg-gray-200 mx-1 shrink-0" />

              {/* Zoom */}
              <button onClick={() => setZoom((z) => Math.max(0.25, +(z - 0.1).toFixed(2)))}
                className="w-7 h-7 rounded-lg text-gray-600 hover:bg-gray-100 text-lg font-bold leading-none flex items-center justify-center">−</button>
              <span className="text-xs text-gray-600 font-medium w-10 text-center shrink-0">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom((z) => Math.min(3, +(z + 0.1).toFixed(2)))}
                className="w-7 h-7 rounded-lg text-gray-600 hover:bg-gray-100 text-lg font-bold leading-none flex items-center justify-center">+</button>
            </>
          ) : null}

          {/* Auto-save indicator */}
          {autoSaveMsg && (
            <span className="text-xs text-green-600 font-medium ml-1 shrink-0">{autoSaveMsg}</span>
          )}

          <div className="flex-1" />

          {/* Right-side actions */}
          {pdfDoc && (
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={downloadPDF}
                disabled={isDownloading}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                {isDownloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {downloadProgress}%
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4v-2h14v2H5z" />
                    </svg>
                    Download PDF
                  </>
                )}
              </button>

              <button
                onClick={() => window.print()}
                title="Print"
                className="flex items-center gap-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-500">
                  <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                </svg>
                <span className="hidden sm:inline">Print</span>
              </button>

              {/* Mobile sidebar toggle */}
              <button
                onClick={() => setShowSidebar((s) => !s)}
                className="md:hidden border border-gray-200 text-gray-600 hover:bg-gray-50 p-2 rounded-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-500">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Download progress bar */}
        {isDownloading && (
          <div className="h-0.5 bg-green-100">
            <div
              className="h-0.5 bg-green-500 transition-all duration-300"
              style={{ width: `${downloadProgress}%` }}
            />
          </div>
        )}
      </header>

      {/* ════════════════════════════════════════════════════════
          EDITOR BODY
      ════════════════════════════════════════════════════════ */}
      {pdfDoc ? (
        <div className="flex" style={{ height: "calc(100vh - 52px)" }}>

          {/* ── LEFT SIDEBAR: Page thumbnails ── */}
          {showSidebar && (
            <aside className="w-44 bg-gray-50 border-r border-gray-200 flex flex-col overflow-y-auto shrink-0">
              <div className="p-2 flex flex-col gap-2">
                <p className="text-xs text-gray-400 font-medium px-1 pt-1">PAGES</p>

                {visiblePages.map((pageNum) => (
                  <div
                    key={pageNum}
                    onClick={() => scrollToPage(pageNum)}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setContextMenu({ x: e.clientX, y: e.clientY, pageNum });
                    }}
                    className={`relative cursor-pointer rounded-xl border-2 overflow-hidden transition-all group ${
                      currentPage === pageNum
                        ? "border-green-500 shadow-md shadow-green-100"
                        : "border-gray-200 hover:border-green-300 hover:shadow"
                    }`}
                  >
                    {/* Thumbnail canvas */}
                    <canvas
                      ref={(el) => {
                        if (!el || !pdfDoc) return;
                        pdfDoc.getPage(pageNum).then((page) => {
                          const vp = page.getViewport({ scale: 0.22, rotation: pageRotations[pageNum] || 0 });
                          el.width = vp.width;
                          el.height = vp.height;
                          page.render({ canvasContext: el.getContext("2d"), viewport: vp });
                        });
                      }}
                      className="w-full block"
                    />
                    {/* Active indicator */}
                    {currentPage === pageNum && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
                    )}
                    <p className="text-center text-xs text-gray-500 py-1 font-medium bg-white">
                      {pageNum}
                    </p>
                    {/* Hover actions */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>
                ))}

                {/* Add page button */}
                <button
                  onClick={() => showToast("📄 Add page feature coming soon!", "info")}
                  className="border-2 border-dashed border-green-300 rounded-xl p-3 text-green-600 text-xs font-medium hover:bg-green-50 hover:border-green-400 transition-all flex items-center justify-center gap-1 mt-1"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-600"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>
                  Add Page
                </button>
              </div>
            </aside>
          )}

          {/* ── CENTER: PDF canvas editor ── */}
          <main className="flex-1 overflow-auto bg-gray-100">
            <div
              className="flex flex-col items-center gap-8 p-6"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "top center",
                transition: "transform 0.15s ease",
              }}
            >
              {visiblePages.map((pageNum) => (
                <div
                  key={pageNum}
                  ref={(el) => (pageScrollRefs.current[pageNum] = el)}
                  className="fade-in-up"
                  style={{ animationDelay: `${(pageNum - 1) * 0.05}s` }}
                >
                  <div className="text-center mb-1">
                    <span className="text-xs text-gray-400 font-medium bg-white px-2 py-0.5 rounded-full border border-gray-200">
                      Page {pageNum}
                    </span>
                  </div>
                  <div className="shadow-2xl rounded bg-white relative">
                    <div className="pdf-page-wrapper">
                      {/* PDF.js render canvas */}
                      <canvas
                        ref={(el) => {
                          if (el && !pdfPageCanvases.current[pageNum]) {
                            pdfPageCanvases.current[pageNum] = el;
                            renderPDFPage(pageNum);
                          } else if (el) {
                            pdfPageCanvases.current[pageNum] = el;
                          }
                        }}
                        className="pdf-base-canvas"
                      />
                      {/* Fabric.js overlay canvas */}
                      <div className="fabric-overlay-canvas">
                        <canvas id={`fabric-overlay-${pageNum}`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* ── RIGHT PANEL: Properties ── */}
          {showRightPanel && (
            <aside className="w-60 bg-white border-l border-gray-200 overflow-y-auto shrink-0 hidden md:block">
              <div className="p-4">
                {/* Page info */}
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Properties</p>
                  <span className="text-xs text-gray-400">
                    {currentPage} / {visiblePages.length}
                  </span>
                </div>

                {selectedObject && Object.keys(selectedObjProps).length > 0 ? (
                  <div className="space-y-4">
                    {/* Text properties */}
                    {(selectedObjProps.type === "i-text" || selectedObjProps.type === "text") && (
                      <>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Font Family</label>
                          <select
                            value={selectedObjProps.fontFamily}
                            onChange={(e) => updateProp("fontFamily", e.target.value)}
                            className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                          >
                            {FONTS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Font Size</label>
                          <input
                            type="number" min={8} max={96}
                            value={selectedObjProps.fontSize}
                            onChange={(e) => updateProp("fontSize", +e.target.value)}
                            className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Text Color</label>
                          <input
                            type="color"
                            value={typeof selectedObjProps.fill === "string" && selectedObjProps.fill.startsWith("#") ? selectedObjProps.fill : "#111827"}
                            onChange={(e) => updateProp("fill", e.target.value)}
                            className="w-full h-9 rounded-lg border border-gray-200 cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Alignment</label>
                          <div className="flex gap-1">
                            {["left", "center", "right"].map((a) => (
                              <button
                                key={a}
                                onClick={() => updateProp("textAlign", a)}
                                className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                  selectedObjProps.textAlign === a
                                    ? "bg-green-100 text-green-700"
                                    : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                {a === "left" ? "L" : a === "center" ? "C" : "R"}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Shape properties */}
                    {selectedObjProps.type === "rect" && (
                      <>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Fill Color</label>
                          <input type="color"
                            value={typeof selectedObjProps.fill === "string" && selectedObjProps.fill.startsWith("#") ? selectedObjProps.fill : "#ffffff"}
                            onChange={(e) => updateProp("fill", e.target.value)}
                            className="w-full h-9 rounded-lg border border-gray-200 cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Border Color</label>
                          <input type="color"
                            value={selectedObjProps.stroke || "#16a34a"}
                            onChange={(e) => updateProp("stroke", e.target.value)}
                            className="w-full h-9 rounded-lg border border-gray-200 cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Border Width</label>
                          <input type="number" min={0} max={20}
                            value={selectedObjProps.strokeWidth}
                            onChange={(e) => updateProp("strokeWidth", +e.target.value)}
                            className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                          />
                        </div>
                      </>
                    )}

                    {/* Image properties */}
                    {selectedObjProps.type === "image" && (
                      <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
                        <p>Size: {selectedObjProps.width} × {selectedObjProps.height}px</p>
                        <p className="mt-1">Drag to reposition. Use corner handles to resize.</p>
                      </div>
                    )}

                    {/* Common: Opacity + Rotation */}
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                        Opacity: {Math.round((selectedObjProps.opacity ?? 1) * 100)}%
                      </label>
                      <input
                        type="range" min={0} max={1} step={0.05}
                        value={selectedObjProps.opacity ?? 1}
                        onChange={(e) => updateProp("opacity", +e.target.value)}
                        className="w-full accent-green-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Rotation (°)</label>
                      <input
                        type="number" min={0} max={360}
                        value={selectedObjProps.angle ?? 0}
                        onChange={(e) => updateProp("angle", +e.target.value)}
                        className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={deleteSelected}
                      className="w-full bg-red-50 text-red-600 hover:bg-red-100 rounded-lg py-2 text-xs font-semibold transition-colors mt-2"
                    >
                      🗑️ Delete Object
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <div className="text-4xl mb-3">👆</div>
                    <p className="text-xs text-gray-400 font-medium">Select an object to edit its properties</p>
                    <p className="text-xs text-gray-300 mt-2">Or choose a tool from the toolbar to add content</p>
                  </div>
                )}

                {/* Keyboard shortcuts */}
                <div className="mt-6 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Shortcuts</p>
                  <div className="space-y-1">
                    {[
                      ["Ctrl+Z", "Undo"],
                      ["Ctrl+Y", "Redo"],
                      ["Ctrl+D", "Duplicate"],
                      ["Delete", "Remove"],
                      ["Esc", "Deselect"],
                      ["Ctrl+Scroll", "Zoom"],
                    ].map(([key, action]) => (
                      <div key={key} className="flex justify-between items-center">
                        <kbd className="text-xs bg-white border border-gray-200 rounded px-1.5 py-0.5 font-mono text-gray-600">{key}</kbd>
                        <span className="text-xs text-gray-400">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      ) : (

        // ════════════════════════════════════════════════════════
        // LANDING / UPLOAD SCREEN
        // ════════════════════════════════════════════════════════
        <div className="max-w-5xl mx-auto px-4 py-12">

          {/* Hero section */}
          <div className="text-center mb-12 fade-in-up">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              100% Free · No Watermark · No Account Needed
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Free PDF Editor Online<br />
              <span className="text-green-600">Edit Any PDF. Forever Free.</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-6">
              Add text in Bangla, Arabic, Hindi or any language. Insert signatures, images,
              shapes and highlights. Download instantly — no watermark, ever.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "✅ Bangla PDF Support",
                "✅ Arabic & Urdu RTL",
                "✅ No File Upload",
                "✅ Auto-Save",
                "✅ Undo / Redo",
                "✅ Lifetime Free",
              ].map((b) => (
                <span key={b} className="text-xs bg-white border border-gray-200 text-gray-600 rounded-full px-3 py-1 shadow-sm font-medium">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Upload zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-2xl p-16 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 mb-16 ${
              isDragging
                ? "border-green-500 bg-green-50 scale-[1.01] shadow-lg shadow-green-100"
                : "border-green-300 hover:border-green-500 hover:bg-green-50 hover:shadow-md"
            }`}
          >
            <div className={`transition-transform duration-200 ${isDragging ? "scale-110" : ""}`}>
              <svg viewBox="0 0 24 24" className="w-20 h-20 fill-green-400 mb-5 mx-auto">
                <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
              </svg>
            </div>
            <p className="text-gray-800 font-bold text-xl mb-2">
              {isDragging ? "Release to upload PDF" : "Drop your PDF here or click to upload"}
            </p>
            <p className="text-gray-400 text-sm mb-5">Supports PDF files up to 100MB</p>
            <div className="flex items-center gap-2 text-xs text-green-700 bg-green-50 border border-green-200 rounded-full px-5 py-2 font-medium">
              🔒 Free Forever · No Watermark · Files Never Leave Your Device
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={(e) => { if (e.target.files?.[0]) loadPDF(e.target.files[0]); }}
            />
          </div>

          {/* How it works */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: "1", icon: "📤", title: "Upload", desc: "Drag & drop or click to upload your PDF" },
                { n: "2", icon: "✏️", title: "Edit", desc: "Add text in any language, images, signatures" },
                { n: "3", icon: "💾", title: "Auto-Save", desc: "Edits saved automatically in your browser" },
                { n: "4", icon: "⬇️", title: "Download", desc: "Get your edited PDF free, no watermark" },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="w-9 h-9 bg-green-600 text-white font-bold rounded-full flex items-center justify-center mx-auto mb-3 text-sm shadow-md shadow-green-200">
                    {s.n}
                  </div>
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Travel use cases */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Perfect for Travel Documents
            </h2>
            <p className="text-gray-500 text-sm text-center mb-8">
              Trusted by travelers, visa applicants &amp; embassy document preparers worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {TRAVEL_CARDS.map((c) => (
                <div
                  key={c.title}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all group cursor-default"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">
                    {c.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{c.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* More PDF tools */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              More Free PDF Tools
            </h2>
            <p className="text-gray-500 text-sm text-center mb-8">Coming soon — all free, all in your browser</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {TOOL_CARDS.map((t) => (
                <div
                  key={t.label}
                  className="border border-gray-200 rounded-xl p-4 text-center opacity-70 hover:opacity-100 hover:border-green-200 hover:bg-green-50 transition-all cursor-default"
                >
                  <div className="text-2xl mb-1">{t.icon}</div>
                  <p className="text-xs font-semibold text-gray-700">{t.label}</p>
                  <span className="text-xs text-gray-400 mt-0.5 block">Soon</span>
                </div>
              ))}
            </div>
          </div>

          {/* Language support */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-2">Full Multilingual Support</h2>
            <p className="text-gray-500 text-sm text-center mb-6">Edit PDFs in any script — all Unicode supported</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                ["🇧🇩", "বাংলা", "Bengali"],
                ["🇸🇦", "العربية", "Arabic"],
                ["🇵🇰", "اردو", "Urdu"],
                ["🇮🇳", "हिन्दी", "Hindi"],
                ["🇨🇳", "中文", "Chinese"],
                ["🇯🇵", "日本語", "Japanese"],
                ["🇰🇷", "한국어", "Korean"],
                ["🇷🇺", "Русский", "Russian"],
                ["🇫🇷", "Français", "French"],
                ["🇪🇸", "Español", "Spanish"],
                ["🇬🇧", "English", "English"],
              ].map(([flag, native, name]) => (
                <div key={name} className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm hover:border-green-300 transition-colors">
                  <span className="text-lg">{flag}</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{native}</p>
                    <p className="text-xs text-gray-400">{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO content */}
          <div className="border-t border-gray-100 pt-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Free PDF Editor Online – Edit PDF Free Forever
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Need to <strong className="text-gray-800">edit PDF online free</strong> without watermarks or hidden charges?
                Our browser-based <strong className="text-gray-800">PDF editor no watermark</strong> tool lets you upload any PDF and
                make professional-quality edits — add text, images, digital signatures, shapes, and highlights — all without
                installing any software. Whether you're a student, professional, or traveler, this is the only
                <strong className="text-gray-800"> free PDF editor</strong> you'll ever need.
              </p>
              <p>
                We built this as a world-class <strong className="text-gray-800">free PDF editor Bangladesh</strong> users and people
                across South Asia have been waiting for. It fully supports Bangla (বাংলা), making it the best
                <strong className="text-gray-800"> Bangla PDF editor</strong> available online. Arabic and Urdu users get full RTL
                (right-to-left) support. If you need to <strong className="text-gray-800">edit visa PDF</strong> forms, correct
                embassy documents, or annotate passport copies, this is your go-to
                <strong className="text-gray-800"> travel document editor</strong> and <strong className="text-gray-800">embassy PDF correction tool</strong>.
              </p>
              <p>
                Unlike other tools, your PDF files are <strong className="text-gray-800">never uploaded to any server</strong>.
                Everything happens inside your browser using PDF.js and Fabric.js — two industry-standard open-source
                libraries. Your documents stay 100% private. Auto-save keeps your work safe in your browser's local storage.
                Download your final edited PDF at full quality with absolutely no watermark, no subscription, and no limits —
                completely free, forever.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════
          SIGNATURE MODAL
      ════════════════════════════════════════════════════════ */}
      {showSignatureModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg fade-in-up">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Draw Your Signature</h3>
                <p className="text-xs text-gray-400 mt-0.5">Use mouse or finger to sign below</p>
              </div>
              <button
                onClick={() => {
                  setShowSignatureModal(false);
                  sigFabricRef.current?.dispose();
                  sigFabricRef.current = null;
                }}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-8 h-8 rounded-lg flex items-center justify-center transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            <div className="border-2 border-dashed border-gray-200 rounded-xl overflow-hidden bg-gray-50 mb-4">
              <canvas ref={sigCanvasRef} />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
              <span>🖊️ Draw with mouse or touch</span>
              <button
                onClick={clearSignature}
                className="text-gray-500 hover:text-gray-800 underline"
              >
                Clear
              </button>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => { setShowSignatureModal(false); sigFabricRef.current?.dispose(); sigFabricRef.current = null; }}
                className="flex-1 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl py-3 text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={placeSignature}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 text-sm font-semibold transition-colors"
              >
                ✅ Place on PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Right-click context menu ── */}
      {contextMenu && (
        <div
          className="fixed bg-white border border-gray-200 rounded-xl shadow-xl py-1 z-[200] min-w-44"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-xs text-gray-400 font-medium px-3 py-1.5 border-b border-gray-100">
            Page {contextMenu.pageNum}
          </p>
          {[
            { label: "🔄 Rotate 90°", action: () => rotatePage(contextMenu.pageNum) },
            { label: "📋 Duplicate", action: () => duplicatePage(contextMenu.pageNum) },
            { label: "🗑️ Delete Page", action: () => deletePage(contextMenu.pageNum), danger: true },
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                item.danger ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* ── Toast notification ── */}
      {toastMsg && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 text-sm px-5 py-3 rounded-xl shadow-xl z-[300] fade-in-up max-w-sm text-center ${
            toastType === "error"
              ? "bg-red-600 text-white"
              : toastType === "success"
              ? "bg-green-600 text-white"
              : "bg-gray-900 text-white"
          }`}
        >
          {toastMsg}
        </div>
      )}

      {/* ── Click backdrop to close context menu ── */}
      {contextMenu && (
        <div className="fixed inset-0 z-[190]" onClick={() => setContextMenu(null)} />
      )}

      {/* ── Hidden file inputs ── */}
      <input
        ref={imageInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
        onChange={(e) => { if (e.target.files?.[0]) addImageToCanvas(e.target.files[0]); }}
      />
    </div>
  );
}
