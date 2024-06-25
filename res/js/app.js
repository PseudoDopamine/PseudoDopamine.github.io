// DOM Elements
const navBar = document.querySelector("nav.bar"), timerSegments = document.querySelector(".timer").querySelectorAll("td"), streamButton = document.querySelector("header .stream.button");

// State management
const featureTime = new Date("2024-06-27T21:00:00.000+01:00").getTime();

const updateTimer = setInterval(() => {
	const timer = featureTime - new Date().getTime();

	if (timer < 0) {
		for (const segment of timerSegments) segment.innerText = 0;
		streamButton.style.backgroundColor = "#9609F1";
		streamButton.innerText = "Watch NOW!";

		clearInterval(updateTimer);

		return;
	}

	const secs = Math.floor(timer / 1000), mins = Math.floor(secs / 60), hours = Math.floor(mins / 60), days = Math.floor(hours / 24);

	timerSegments[0].innerText = days;
	timerSegments[1].innerText = hours % 24;
	timerSegments[2].innerText = mins % 60;
	timerSegments[3].innerText = secs % 60;
}, 1000);

// Event listeners
window.addEventListener("scroll", () => { navBar.classList.toggle("scrolled", window.scrollY > 0); });
