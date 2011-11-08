// basic structure of a Google Hangout application
(function () {
  if (gapi && gapi.hangout) {
    gapi.hangout.onApiReady.add(function (evt) {
      if (apiReadyEvent.isApiReady) {
        // enter your application code here.
      }
    });
  }
})();