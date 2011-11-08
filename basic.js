// basic structure of a Google+ Hangout application
(function () {

  // setup UI elements for the G+ Hangout gadget/app
  function setupFormHandler() {
    var moodForm = $('#mood-form');
    moodForm.submit(onMoodFormSubmit);
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
        setupFormHandler();
      }
    });
  }
})();