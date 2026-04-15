/**
 * Cloudflare Pages Function — Lead Form Proxy
 *
 * Lives at /api/lead on the same domain as the landing page.
 * Same-origin requests can't be blocked by privacy extensions.
 *
 * Parses the incoming form data (multipart from sendBeacon or
 * url-encoded from fetch) and forwards as url-encoded to Google
 * Apps Script, which expects e.parameter to be populated.
 *
 * Environment variable (set in Cloudflare Pages dashboard):
 *   LEADS_FORM_URL — the Google Apps Script deployment URL
 */

export async function onRequestPost(context) {
  try {
    const url = context.env.LEADS_FORM_URL;
    if (!url) {
      return jsonResponse({ error: 'LEADS_FORM_URL not configured' }, 500);
    }

    // Parse form data from any encoding (multipart or url-encoded)
    const formData = await context.request.formData();

    // Re-encode as url-encoded (what Google Apps Script expects)
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      params.append(key, value);
    }

    // Forward to Google Apps Script
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
      redirect: 'follow',
    });

    return jsonResponse({ ok: true }, 200);

  } catch (err) {
    console.error('Proxy error:', err.message);
    return jsonResponse({ ok: true, warning: 'proxy error logged' }, 200);
  }
}

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
