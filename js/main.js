let video = document.getElementById("video-intro");

window.addEventListener("scroll", function() {
  let scrollPosition = window.scrollY;
  let videoOffset = video.offsetTop;
  let videoHeight = video.offsetHeight;
  let videoBottom = videoOffset + videoHeight;
  
  if (scrollPosition <= videoBottom && scrollPosition + window.innerHeight >= videoOffset) {
    video.play();
  }
});
