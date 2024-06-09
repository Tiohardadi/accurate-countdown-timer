# Accurate Countdown Timer

A simple and accurate countdown timer library.

## Installation

You can install the library via npm:

```
npm install accurate-countdown-timer
```

## Usage

You can use the library in various ways, depending on your needs.

### Basic Usage

```javascript
const CountdownTimer = require('accurate-countdown-timer');

// Using with onUpdate and onComplete callbacks
const timer1 = new CountdownTimer(60, (timeLeft) => {
  console.log('Time left: ' + timeLeft.toFixed(1) + ' seconds');
}, () => {
  console.log('Countdown finished');
});
timer1.start();

// Using only with onComplete callback
const timer2 = new CountdownTimer(30, null, () => {
  console.log('Countdown finished');
});
timer2.start();
```

## API

- `new CountdownTimer(duration, onUpdate, onComplete)`: Creates a new countdown timer instance.
  - `duration`: The countdown duration in seconds.
  - `onUpdate` (optional): A callback function that is called every frame with the time left in seconds.
  - `onComplete` (optional): A callback function that is called when the countdown finishes.
- `start()`: Starts the countdown timer.
- `stop()`: Stops the countdown timer.

## License

This project is licensed under the ISC License.
