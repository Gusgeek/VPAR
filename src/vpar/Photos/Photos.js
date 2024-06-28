document.addEventListener("DOMContentLoaded", function(e) {           
  var media = document.getElementById('myPhoto');  
  // Playing event
  media.addEventListener("playing", function() {
      console.log("Playing event triggered");
  });
  // Pause event
  media.addEventListener("pause", function() { 
      console.log("Pause event triggered"); 
      
  });
  
});
this.registerEvent("volumechange", this.GetPhotoId(Index), cur, this.EventVolumeChangeMedia); 
this.registerEvent("timeupdate", this.GetPhotoId(Index), cur, this.EventTimeUpdateMedia); 
this.registerEvent("ended", this.GetPhotoId(Index), cur, this.EventEndedMedia); 
this.registerEvent("input", this.GetSliderId(Index), cur, this.InputSliderMedia);

