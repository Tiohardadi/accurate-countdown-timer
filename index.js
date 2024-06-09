class CountdownTimer {
    constructor(duration, onUpdate = null, onComplete = null) {
      this.duration = duration;
      this.onUpdate = onUpdate;
      this.onComplete = onComplete;
      this.endTime = null;
      this.requestId = null;
    }
  
    start() {
      this.endTime = Date.now() + this.duration * 1000;
      this.update();
    }
  
    update() {
      const now = Date.now();
      const timeLeft = Math.max(0, this.endTime - now) / 1000;
      
      if (this.onUpdate) {
        this.onUpdate(timeLeft);
      }
  
      if (timeLeft > 0) {
        this.requestId = requestAnimationFrame(this.update.bind(this));
      } else {
        if (this.onComplete) {
          this.onComplete();
        }
      }
    }
  
    stop() {
      if (this.requestId) {
        cancelAnimationFrame(this.requestId);
      }
    }
  }
  
  module.exports = CountdownTimer;
  