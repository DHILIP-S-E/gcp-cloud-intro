// Web Audio API Festive Sound Synthesizer
// Generates authentic ambient Indian classical drone & festive sound effects

class FestiveSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = false;
  private isPlayingAmbient: boolean = false;
  private droneOscillators: OscillatorNode[] = [];
  private ambientIntervalId: number | null = null;
  private volume: number = 0.5;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      const target = this.isMuted ? 0 : this.volume;
      this.masterGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.05);
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime, 0.05);
    }
    if (!this.isMuted && !this.isPlayingAmbient) {
      this.startAmbient();
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // Continuous Tanpura meditative ambient drone
  public startAmbient() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isPlayingAmbient) return;

    this.isPlayingAmbient = true;
    const now = this.ctx.currentTime;

    // Tanpura frequencies (Tonic: C#3 / 138.59 Hz, Pa: 207.65 Hz, Sa: 277.18 Hz)
    const freqs = [138.59, 207.65, 277.18, 554.37];
    
    const ambientGain = this.ctx.createGain();
    ambientGain.gain.setValueAtTime(0.001, now);
    ambientGain.gain.linearRampToValueAtTime(0.12, now + 3);
    ambientGain.connect(this.masterGain);

    this.droneOscillators = freqs.map((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const oscGain = this.ctx!.createGain();
      
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Low pass filter for warmth
      const filter = this.ctx!.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);

      // Subtle LFO vibrato
      const lfo = this.ctx!.createOscillator();
      const lfoGain = this.ctx!.createGain();
      lfo.frequency.setValueAtTime(0.2 + idx * 0.05, now);
      lfoGain.gain.setValueAtTime(1.5, now);
      lfo.connect(osc.frequency);
      lfo.start();

      oscGain.gain.setValueAtTime(0.2 / (idx + 1), now);
      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(ambientGain);
      osc.start();

      return osc;
    });

    // Random festive bell / temple chime every 4 to 8 seconds
    this.ambientIntervalId = window.setInterval(() => {
      if (!this.isMuted && this.isPlayingAmbient) {
        this.playTempleChime();
      }
    }, 5500);
  }

  public stopAmbient() {
    this.isPlayingAmbient = false;
    if (this.ambientIntervalId) {
      clearInterval(this.ambientIntervalId);
      this.ambientIntervalId = null;
    }
    this.droneOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore already stopped
      }
    });
    this.droneOscillators = [];
  }

  // Soft Indian temple bell / brass chime
  public playTempleChime() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const chimeFreqs = [523.25, 659.25, 783.99, 1046.5]; // Pentatonic notes
    const freq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.98, now + 2.5);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 3.1);
  }

  // Diya lighting flame ignition sound
  public playDiyaIgniteSound() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;

    // 1. Warm harmonic whoosh
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(587.33, now + 0.3); // D5

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.85);

    // 2. High sparkle chime
    const chime = this.ctx.createOscillator();
    const chimeGain = this.ctx.createGain();
    chime.type = 'triangle';
    chime.frequency.setValueAtTime(880, now + 0.05);
    chime.frequency.exponentialRampToValueAtTime(1320, now + 0.4);

    chimeGain.gain.setValueAtTime(0.001, now);
    chimeGain.gain.linearRampToValueAtTime(0.12, now + 0.1);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    chime.connect(chimeGain);
    chimeGain.connect(this.masterGain);
    chime.start(now + 0.05);
    chime.stop(now + 1.25);
  }

  // Realistic firework sound (whoosh up + burst crackle)
  public playFireworkBurstSound() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;

    // Deep low thump
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(140, now);
    subOsc.frequency.exponentialRampToValueAtTime(35, now + 0.4);

    subGain.gain.setValueAtTime(0.2, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(now);
    subOsc.stop(now + 0.55);

    // White noise sparkle crackle
    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.setValueAtTime(3, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.08, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    whiteNoise.start(now);
    whiteNoise.stop(now + 0.45);
  }
}

export const soundEngine = new FestiveSoundEngine();
