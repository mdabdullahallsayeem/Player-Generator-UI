document.write('<script src="https://cdn.jwplayer.com/libraries/IDzF9Zmk.js"><\/script>');
setTimeout(() => {
  jwplayer("player").setup({
    file: new URLSearchParams(window.location.search).get("url"),
    width: "100%",
    aspectratio: "16:9",
    autostart: true
  });
}, 1000);