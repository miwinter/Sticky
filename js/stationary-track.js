var playlist = WaveformPlaylist.init({
  samplesPerPixel: 3000,
  zoomLevels: [500, 1000, 3000, 5000],
  mono: true,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  state: 'shift',
  waveOutlineColor: '#E0EFF1',
  colors: {
      waveOutlineColor: '#E0EFF1',
      timeColor: 'grey',
      fadeColor: 'black'
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200 //width of controls in pixels
  }
});

playlist.load([
  {
    "src": "audio/Vocals30.mp3",
    "name": "Vocals",
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/BassDrums30.mp3",
    "name": "Drums",
    "start": 30
  }
]).then(function() {
  //can do stuff with the playlist.
});
