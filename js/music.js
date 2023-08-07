var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

        icon.onclick = function() {
          if(mysong.paused) {
            mysong.play();
            icon.src = "./images/on.png";
          }else{
            mysong.pause();
            icon.src = "./images/off.png";
          }
        };

