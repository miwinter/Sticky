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
      "src": "audio/waiting-vocals.mp3",
      "name": "ZZ Top - Vocals",
      "gain":0.7,
      "states": {
        "shift": false
      }
    },
    {
      "src": "audio/waiting-bass.mp3",
      "name": "ZZ Top - Bass",
      "gain":0.7,
      "states": {
        "shift": false
      }
    },
    {
      "src": "audio/waiting-drums.mp3",
      "name": "ZZ Top - Drums",
      "gain":0.7,
      "states": {
        "shift": false
      }
    },
    {
      "src": "audio/waiting-guitars.mp3",
      "name": "ZZ Top - Guitars",
      "gain":0.7,
      "states": {
        "shift": false
      }
    }
  ]).then(function() {
    //can do stuff with the playlist.
  });
  