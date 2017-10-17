$(document).ready(function(){ "use strict"; $('video, audio').mediaelementplayer();});

var lines = document.getElementById("transcriptWrap").getElementsByTagName("span");
var video = document.getElementsByTagName("video")[0];


    


video.addEventListener("timeupdate", function() {
	"use strict";
    
for (var i = 0; i < lines.length; i++) {
	
	var now = video.currentTime;
  	var start = lines[i].getAttribute("data-start");
    var end = lines[i].getAttribute("data-end");  

      if (now >= start && now <= end) {
        lines[i].className = "current";
      } else {
        lines[i].className = "line";
      }
	
    }
});






