chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('app/views/index.html', {
    width: 800,
    height: 800,
    minWidth: 500,
    minHeight: 600
  });
});