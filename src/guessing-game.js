class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.arr = [];
        this.mid = 0;
        for (min; min <= max; min++) {
            this.arr.push(min);
        }
    }

    guess() {
        this.mid = this.arr[Math.round((this.arr.length - 1) / 2)];
        return this.mid;
    }

    lower() {
        this.setRange(this.min, this.mid);
    }

    greater() {
        this.setRange(this.mid, this.max);
    }
  }

  module.exports = GuessingGame;
