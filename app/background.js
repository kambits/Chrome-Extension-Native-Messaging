var port = chrome.runtime.connectNative('com.company.app_test');

setInterval(() => port.postMessage({ text: "App to Host!" }), 5000);

port.onMessage.addListener(function(msg) {
  console.log("Received: " + msg);
});
port.onDisconnect.addListener(function() {
  console.log("Disconnected");
});
// port.postMessage({ text: "ping" });

