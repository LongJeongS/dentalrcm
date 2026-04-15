/**
 * Cloudflare Pages Function — Lead Form Proxy
 *
 * Lives at /api/lead on the same domain as the landing page.
 * Same-origin requests can't be blocked by privacy extensions.
 *
 * Forwards form submissions to Google Apps Script server-side.
 *
 * Environment variable (set in Cloudflare Pages dashboard):
 *   LEADS_FORM_URL — the Google Apps Script deployment URL
 */

export async function onRequestPost(context) {
  try {
    const url = context.env.LEADS_FORM_URL;
    if (!url) {
      return new Response(JSON.stringify({ error: 'LEADS_FORM_URL not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Forward the form data to Google Apps Script
    const body = await context.request.text();
    const contentType = context.request.headers.get('content-type') || '';

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': contentType },
      body: body,
      redirect: 'follow',
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    // Return 200 even on error — sendBeacon retries on non-2xx
    console.error('Proxy error:', err.message);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
