chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('app/views/main.html', {
    width: 500,
    height: 600,
    minWidth: 500,
    minHeight: 600
  });
});
