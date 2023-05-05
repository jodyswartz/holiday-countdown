// setup timer with set textual date in the future
const timer1 = new CountdownTimer({
	selector: "#holidayCountdown",
	targetDate: new Date("July, 17 2023 00:00:00"),
});

timer1.startTimer();