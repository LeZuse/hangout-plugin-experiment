// basic structure of a Google+ Hangout application
(function () {

  // setup UI elements for the G+ Hangout gadget/app
  function setupFormHandler() {
    var moodForm = $('#mood-form');
    moodForm.submit(onMoodFormSubmit);
  }

  function onMoodFormSubmit(evt) {
    alert("yo yo");
    var moodVal = $('#mood-field').val();
    var moodNotices = $('#mood-notices');
    var newNotice = $('<div>' + moodVal + '</div>');
    moodNotices.append(newNotice);
    return false;
  }

  if (gapi && gapi.hangout) {
    // expose
    window.gapi = gapi;
    window.hangoutApi = gapi.hangout;
    gapi.hangout.onApiReady.add(function (evt) {
      if (apiReadyEvent.isApiReady) {
        // enter your application code here.
        setupFormHandler();
      }
    });
  }
})();


function mute(set) {
  if (!gapi || !gapi.hangout) return console.log('failed loading');

  // Array of Participant
  // var parts = gapi.hangout.getEnabledParticipants();

  // console.log(parts);

  // if (parts.length > 0) {
  //   if (set) {
  //     gapi.hangout.av.muteParticipantMicrophone(parts[0]);
  //   } else {
  //     gapi.hangout.av.muteParticipantMicrophone(parts[0]);
  //   }
  // }

  gapi.hangout.av.setMicrophoneMute(set);

}
