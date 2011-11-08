// basic structure of a Google+ Hangout application
(function () {

  // setup UI elements for the G+ Hangout gadget/app
  function setupMoodUI() {
  }

  function onMoodFormSubmit(evt) {
    var moodVal = $('mood-field').val();
    var moodNotices = $('mood-notices');
    var newNotice = $('<div>' + moodVal + '</div>');
    moodNotices.append(newNotice);
    return false;
  }

  if (gapi && gapi.hangout) {
    gapi.hangout.onApiReady.add(function (evt) {
      if (apiReadyEvent.isApiReady) {
        // enter your application code here.
        setupMoodUI();
        $('legend').html('Yo yo yo');
        alert('end');
      }
    });
  }
})();