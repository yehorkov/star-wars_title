window.addEventListener("DOMContentLoaded", () => {
	function stars(count, selector) {
		for (let i = 0; i < count; i++) {
			let scene = document.querySelector(selector);
			let star = document.createElement("i");
			let x = Math.floor(Math.random() * window.innerWidth);
			let y = Math.floor(Math.random() * window.innerHeight);
			let size = Math.random() * 2.6;

			let duration = Math.random() * 10;

			star.style.left = `${x}px`;
			star.style.top = `${y}px`;
			star.style.width = `${size}px`;
			star.style.height = `${size}px`;

			star.style.animationDuration = `${5 + duration}s`;
			star.style.animationDelay = `${duration}s`;

			scene.appendChild(star);
		}
	}

	stars(500, ".content");
});
