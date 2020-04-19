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
    "src": "audio/Eagles-vocals.mp3",
    "name": "Eagles - Vocals",
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/Eagles-bass.mp3",
    "name": "Eagles - Bass",
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/Eagles-drums.mp3",
    "name": "Eagles - Drums",
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/Eagles-guitars.mp3",
    "name": "Eagles - Guitars",
    "muted":true,
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/Steve.mp3",
    "name": "Steve",
    "waveOutlineColor": '#EEFFEE',
    "gain":0.4,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/Chris.mp3",
    "name": "Chris",
    "waveOutlineColor": '#EEFFEE',
    "gain":0.4,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/Michel.mp3",
    "name": "Michel",
    "waveOutlineColor": '#EEFFEE',
    "gain":0.4,
    "states": {
      "shift": false
    }
  }
]).then(function() {
  //can do stuff with the playlist.
});
