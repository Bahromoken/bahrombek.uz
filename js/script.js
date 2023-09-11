var backgroundImage = [
    "city1.webp",
    "city2.gif",
    "music.gif",
    "city3.gif",
    "walk.gif",
    "metro.gif",
    "room.gif",
    "walk.gif",
    "star.gif",
    "planet.gif",
    "snow.gif",
    "room.gif",
    "drive.gif",
    "planet.gif"

  ];

  function pickImageAndMusic() {
    var t = "./images/" + backgroundImage[Math.floor(Math.random() * backgroundImage.length)];
    var n = document.createElement("style");

    n.innerHTML = `.background-image { background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${t}); background-size: cover; background-position: center; }`;
    document.head.appendChild(n);

    var backgroundMusic = [
      "1.mp3",
      "asf.mp3",
      "carti.mp3",
      "giga.mp3",
      "tyler.mp3",
      "patrick.mp3",
      "b.mp3",
      "heart.mp3",
      "girl.mp3",
      "sigma.mp3",
      "durden.mp3",
      "bully.mp3",
      "carti.mp3",
      "heart.mp3",
      "disk.mp3",
      "i.mp3",
      "left-me.mp3",
      "rdr2.mp3"
    ];

    var i = "./music/" + backgroundMusic[Math.floor(Math.random() * backgroundMusic.length)];
    var mysong = document.getElementById("mysong");
    
    var sourceElement = document.getElementById("song");
    sourceElement.setAttribute("src", i);

    document.getElementById("mysong").load();
    document.getElementById("mysong").play();
  }
  

  

  // Randomize background image and music on page load
  window.addEventListener("load", function() {
    pickImageAndMusic();
  });