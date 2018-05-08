var playlist = { "Slowdive": "Alison", "My Bloody Valentine": "Sometimes"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.['Phil Ochs'] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist["Slowdive"]
}