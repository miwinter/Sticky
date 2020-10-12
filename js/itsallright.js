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
    "src": "audio/itsallright-drums.mp3",
    "name": "Drums",
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/itsallright-bass.mp3",
    "name": "Bass",
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/itsallright-vocals.mp3",
    "name": "Vocals",
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/itsallright-guitar-1.mp3",
    "name": "Guitar 1",
    "waveOutlineColor": '#EEFFEE',
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/itsallright-guitar-2.mp3",
    "name": "Guitar 2",
    "waveOutlineColor": '#EEFFEE',
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/itsallright-guitar-3.mp3",
    "name": "Guitar 3",
    "waveOutlineColor": '#EEFFEE',
    "gain":0.7,
    "states": {
      "shift": false
    }
  }
]).then(function() {
  //can do stuff with the playlist.
});
