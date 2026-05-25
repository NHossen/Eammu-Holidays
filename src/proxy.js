import { NextResponse } from 'next/server';

const BAD_BOTS = [
  'gptbot', 'chatgpt-user', 'google-extended', 'ccbot',
  'anthropic-ai', 'claude-web', 'cohere-ai', 'perplexitybot',
  'diffbot', 'omgilibot', 'applebot-extended',
  'ahrefsbot', 'semrushbot', 'mj12bot', 'dotbot', 'blexbot',
  'petalbot', 'dataforseobot', 'seekportbot', 'siteauditbot',
  'bytespider', 'amazonbot', 'ia_archiver',
  'python-requests', 'go-http-client', 'scrapy',
  'curl', 'wget', 'libwww-perl', 'java/',
];

const rateLimitMap = new Map();
const RATE_LIMIT = 60;
const WINDOW_MS = 60 * 1000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.start > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }

  entry.count += 1;
  if (entry.count > RATE_LIMIT) return true;
  return false;
}

// ← function নাম "proxy" হবে
export function proxy(request) {
  const ua = request.headers.get('user-agent')?.toLowerCase() || '';
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '0.0.0.0';

  if (BAD_BOTS.some((bot) => ua.includes(bot))) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  if (!ua || ua.length < 10) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  if (isRateLimited(ip)) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: { 'Retry-After': '60' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images/|icons/|fonts/).*)',
  ],
};