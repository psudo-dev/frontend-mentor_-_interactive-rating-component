import "../css/style.css";

const thanksMessage = document.querySelector(".thanks-card__message");
const radioInputs = document.querySelectorAll(".rating-card__input");
const form = document.querySelector("#rating-form");
const thanksCard = document.querySelector(".thanks-card");
const cardInner = document.querySelector(".card-container__inner");
const thanksTitle = document.querySelector(".thanks-card__title");

let lastCheckedInput: HTMLInputElement | null = null;

radioInputs.forEach((input) => {
	input.addEventListener("click", (event) => {
		if (input instanceof HTMLInputElement) {
			if (input === lastCheckedInput) {
				input.checked = false;
				lastCheckedInput = null;
			} else {
				lastCheckedInput = input;
			}
		}
	});
});

form?.addEventListener("submit", (e) => {
	e.preventDefault();
	if (form instanceof HTMLFormElement) {
		const data = new FormData(form);
		const rating = data.get("rating");

		if (
			thanksMessage instanceof HTMLSpanElement &&
			thanksTitle instanceof HTMLHeadingElement
		) {
			if (rating) {
				thanksMessage.textContent = `You selected ${rating} out of 5`;
				thanksTitle.style.color = "var(--white)";
			} else {
				thanksMessage.textContent = `You submitted a blank rating!`;
				thanksTitle.style.color = "transparent";
			}
		}

		if (cardInner instanceof HTMLElement) {
			cardInner.classList.remove("de-flipped");
			cardInner.classList.add("is-flipped");
		}

		radioInputs.forEach((input) => {
			if (input instanceof HTMLInputElement) {
				input.checked = false;
			}
		});
		lastCheckedInput = null;
	}
});

thanksCard?.addEventListener("click", () => {
	if (cardInner instanceof HTMLElement) {
		cardInner.classList.remove("is-flipped");
		cardInner.classList.add("de-flipped");
	}
});

// submitButton?.addEventListener("click", () => {
// 	const activeRating =
// 		document.querySelector<HTMLLIElement>(".active")?.textContent;
// 	if (thanksMessage instanceof HTMLSpanElement)
// 		thanksMessage.innerText = `You selected ${activeRating} out of 5`;

// 	// The animation that I manually made with basic tools like setTimeout sync'd with rotateY in the CSS file
// 	// if (
// 	// 	ratingCard instanceof HTMLElement &&
// 	// 	thanksCard instanceof HTMLElement
// 	// ) {
// 	// 	ratingCard.classList.add("rotate-rating");
// 	// 	setTimeout(() => {
// 	// 		ratingCard.innerHTML = "";
// 	// 	}, 125);
// 	// 	setTimeout(() => {
// 	// 		ratingCard.classList.add("is-hidden");
// 	// 		thanksCard.classList.remove("is-hidden");
// 	// 		thanksCard.classList.add("rotate-thanks");
// 	// 	}, 125);
// 	// }
// 	const cardInner = document.querySelector(".card-inner");
// 	if (cardInner instanceof HTMLElement) {
// 		cardInner.classList.add("is-flipped");
// 	}
// });
