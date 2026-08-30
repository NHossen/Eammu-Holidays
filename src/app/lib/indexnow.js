// lib/indexnow.js
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "8b379408be724ca589bc9bbd8ee2f77d";
const HOST = "eammu.com";

async function submitToIndexNow(urls) {
  if (!urls || !urls.length) {
    return { success: false, message: "No URLs provided" };
  }

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    const text = await res.text().catch(() => "");

    return {
      success: res.status === 200 || res.status === 202,
      status: res.status,
      body: text,
    };
  } catch (err) {
    return { success: false, error: String(err) };
  }
}

module.exports = { submitToIndexNow };