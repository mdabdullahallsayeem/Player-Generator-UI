document.write('<link href="https://vjs.zencdn.net/7.11.4/video-js.css" rel="stylesheet"><\/link>');
document.write('<script src="https://vjs.zencdn.net/7.11.4/video.min.js"><\/script>');
setTimeout(() => {
  document.getElementById('player').innerHTML = '<video id="vid1" class="video-js vjs-default-skin" controls autoplay width="100%" height="360"><source src="' + new URLSearchParams(window.location.search).get("url") + '" type="application/x-mpegURL"></video>';
  videojs("vid1");
}, 1000);