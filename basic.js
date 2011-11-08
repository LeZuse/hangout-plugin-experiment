// basic structure of a Google+ Hangout application
(function () {

  // setup UI elements for the G+ Hangout gadget/app
  function setupMoodUI() {
    var moodField = $('<input/>').attr({
      'id': 'mood-field',
      'type': 'text',
      'maxlength': 40
    });
    var submitButton = $('<input/>').attr({
      'id': 'mood-submit',
      'type': 'submit',
      'value': 'Broadcast'
    });
    var moodForm = $('<form/>').attr({
      'id': 'mood-form',
      'action': ''
    }).append($('<legend/>').append(moodField).append(submitButton);
    moodForm.submit(onMoodFormSubmit);
    var moodNotices = $('<div/>').attr({
      'id': 'mood-notices'
    });
    var body = $('body');
    body.append(moodNotices).append(moodForm);
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