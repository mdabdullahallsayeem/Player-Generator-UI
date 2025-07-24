function generatePlayer() {
  const url = encodeURIComponent(document.getElementById('videoURL').value);
  const player = document.getElementById('playerSelect').value;
  const autoplay = document.getElementById('autoplay').checked ? 'true' : 'false';
  const directLink = 'embed.html?player=' + player + '&url=' + url + '&autoplay=' + autoplay;
  const embed = '<iframe src="' + directLink + '" width="100%" height="360" frameborder="0" allowfullscreen></iframe>';
  document.getElementById('embedCode').value = embed;
  document.getElementById('directLink').value = directLink;
  document.getElementById('output').style.display = 'block';
}