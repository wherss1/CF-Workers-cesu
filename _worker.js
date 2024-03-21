addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  if (url.pathname == "/" && url.search == "") {
    url.href="https://cloudflarest.blockly.tk/200mb.zip"
    let request = new Request(url, event.request);
    event.respondWith(fetch(request));
  }
})
