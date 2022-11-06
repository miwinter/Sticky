var playlist = WaveformPlaylist.init({
  samplesPerPixel: 3000,
  zoomLevels: [500, 1000, 3000, 5000],
  mono: true,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  state: 'shift',
  isAutomaticScroll: true,
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
    "src": "audio/cherry-red-Batterie.wav",
    "name": "Batterie",
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/cherry-red-Basse.wav",
    "name": "Basse",
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/cherry-red-Guitare-1.wav",
    "name": "Guitare Steve",
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/cherry-red-Guitare-2.wav",
    "name": "Guitare Michel",
    "muted":false,
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/cherry-red-Chant.wav",
    "name": "Voix",
    "waveOutlineColor": '#EEFFEE',
    "gain":0.7,
    "states": {
      "shift": false
    }
  }
]).then(function() {
  //can do stuff with the playlist.
});
