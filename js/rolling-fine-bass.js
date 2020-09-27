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
    "src": "audio/rollingfine-drums.mp3",
    "name": "Drums",
    "gain":0.99,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/rollingfine-bass.mp3",
    "name": "Bass",
    "gain":0.7,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/rollingfine-vocals-1.mp3",
    "muted":true,
    "name": "Vocals 1",
    "gain":0.5,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/rollingfine-vocals-2.mp3",
    "name": "vocals 2",
    "muted":false,
    "gain":0.25,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/rollingfine-guitar-rythm1.mp3",
    "name": "Guitar 1",
    "waveOutlineColor": '#EEFFEE',
    "gain":0.15,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/rollingfine-guitar-rythm2.mp3",
    "name": "Guitar 2",
    "waveOutlineColor": '#EEFFEE',
    "gain":0.25,
    "states": {
      "shift": false
    }
  },
  {
    "src": "audio/rollingfine-guitar-slide.mp3",
    "name": "Guitar Slide",
    "waveOutlineColor": '#EEFFEE',
    "gain":0.15,
    "states": {
      "shift": false
    }
  }
]).then(function() {
  //can do stuff with the playlist.
});
