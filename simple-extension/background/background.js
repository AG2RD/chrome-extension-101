console.log('background');

chrome.runtime.onInstalled.addListener(function () {
  // chrome.runtime.connect({ name: 'hope' });
  console.log('installed');
  // chrome.runtime.onConnect.addListener((port) => {
  //   console.log('connected ', port);
  //   if (port.name === 'hope') {
  //     port.onMessage.addListener(function (msg) {
  //       console.log(msg);
  //       port.message('Hellow from back side');
  //     });
  //   }
  // });

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('request', request);
    if (request.command == 'test') sendResponse({ farewell: 'goodbye' });
  });
});
