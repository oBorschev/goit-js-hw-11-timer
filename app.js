class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;

    this.refs = {
      fieldDays: this.selector.querySelector('span[data-value="days"]'),
      fieldHours: this.selector.querySelector('span[data-value="hours"]'),
      fieldMins: this.selector.querySelector('span[data-value="mins"]'),
      fieldSecs: this.selector.querySelector('span[data-value="secs"]')
    };

    this.updateTimer();
  }
  updateTimer() {
    this.timerId = setInterval(() => {
      this.startTime = Date.now();
      this.deltaTime = this.targetDate.getTime() - this.startTime;

      this.days = String(
        Math.floor(this.deltaTime / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      this.hours = String(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      this.mins = String(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      this.secs = String(
        Math.floor((this.deltaTime % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      this.refs.fieldDays.textContent = this.days;
      this.refs.fieldHours.textContent = this.hours;
      this.refs.fieldMins.textContent = this.mins;
      this.refs.fieldSecs.textContent = this.secs;
    }, 1000);
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019")
});
