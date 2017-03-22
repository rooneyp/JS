chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log("intercepted: " + info.url);
    return {redirectUrl: chrome.extension.getURL("replacement.txt")};
  },
  {
    urls: [
      "http://www.rte.ie/static/player/config/*"
    ],
    types: ["other"]
  },
  ["blocking"]);
