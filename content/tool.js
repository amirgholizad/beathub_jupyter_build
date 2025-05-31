class Tool {
  // This is a base class for all tools.
  // Add your code here to modify this class and create your own indicator.
  constructor(...args) {
    this.args = args;
  }

  indicator(bars) {
    const [period = 14] = this.args;

    return bars.map((bar, index) => {
      if (index < period - 1) {
        return { time: bar.time, value: null }; // Not enough data yet
      }

      const slice = bars.slice(index - period + 1, index + 1);
      const sum = slice.reduce((acc, b) => acc + b.close, 0);
      const avg = sum / period;

      return { time: bar.time, value: avg };
    });
  }
}
