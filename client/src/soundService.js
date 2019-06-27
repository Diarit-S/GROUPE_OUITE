class Audio {
  constructor() {
    this.volume = localStorage.getItem('audio') ? localStorage.getItem('audio') : undefined;
  }

  mute(audio, icon) {
    audio.muted = !audio.muted;

    if (icon === 'sound-icon') {
      icon = 'sound-icon muted';
      localStorage.setItem('audio', false);
      this.volume = localStorage.getItem('audio');
      return icon;
    } else {
      icon = 'sound-icon';
      localStorage.setItem('audio', true);
      this.volume = localStorage.getItem('audio');
      return icon;
    }
  }

  restoreAudioSettings(audio, icon) {
    audio.volume = 1;
    if (this.volume) {
      if (this.volume === 'false') {
        audio.muted = !audio.muted;
        icon = 'sound-icon muted';
      } else {
        icon = 'sound-icon';
      }
    }
    return icon;
  }
}

export default new Audio();