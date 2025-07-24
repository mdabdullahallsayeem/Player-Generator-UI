document.write('<script src="https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js"><\/script>');
setTimeout(() => {
  new Clappr.Player({
    source: new URLSearchParams(window.location.search).get("url"),
    parentId: "#player",
    autoPlay: true,
    width: "100%",
    height: 360
  });
}, 1000);