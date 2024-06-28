document.addEventListener("DOMContentLoaded", function(e) {           
  var media = document.getElementById('myAudio');  
  // Playing event
  media.addEventListener("playing", function() {
      console.log("Playing event triggered");
  });
  // Pause event
  media.addEventListener("pause", function() { 
      console.log("Pause event triggered"); 
      
  });
  
});
this.registerEvent("volumechange", this.GetAudioId(Index), cur, this.EventVolumeChangeMedia); 
this.registerEvent("timeupdate", this.GetAudioId(Index), cur, this.EventTimeUpdateMedia); 
this.registerEvent("ended", this.GetAudioId(Index), cur, this.EventEndedMedia); 
this.registerEvent("input", this.GetSliderId(Index), cur, this.InputSliderMedia);
