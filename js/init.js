// setup timer with set textual date in the future
const timer1 = new CountdownTimer({
	selector: "#holidayCountdown",
	targetDate: new Date("December, 13 2022 00:00:00"),
});

timer1.startTimer();