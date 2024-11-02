// setup timer with set textual date in the future
const timer1 = new CountdownTimer({
	selector: "#holidayCountdown",
	targetDate: new Date("November, 29 2024 17:00:00"),
});

timer1.startTimer();