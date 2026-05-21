import "../css/style.css";

const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thanks-card");
const submitButton = document.querySelector(".rating-card__button");
const ratingItems = document.querySelectorAll(".rating-card__rating-item");
const thanksMessage = document.querySelector(".thanks-card__message");

ratingItems?.forEach((element) => {
	element.addEventListener("click", () => {
		ratingItems.forEach((element) => {
			element.classList.remove("active");
		});
		element.classList.add("active");
	});
});

submitButton?.addEventListener("click", () => {
	const activeRating =
		document.querySelector<HTMLLIElement>(".active")?.textContent;
	if (thanksMessage instanceof HTMLSpanElement)
		thanksMessage.innerText = `You selected ${activeRating} out of 5`;

	// The animation that I manually made with basic tools like setTimeout sync'd with rotateY in the CSS file
	// if (
	// 	ratingCard instanceof HTMLElement &&
	// 	thanksCard instanceof HTMLElement
	// ) {
	// 	ratingCard.classList.add("rotate-rating");
	// 	setTimeout(() => {
	// 		ratingCard.innerHTML = "";
	// 	}, 125);
	// 	setTimeout(() => {
	// 		ratingCard.classList.add("is-hidden");
	// 		thanksCard.classList.remove("is-hidden");
	// 		thanksCard.classList.add("rotate-thanks");
	// 	}, 125);
	// }
	const cardInner = document.querySelector(".card-inner");
	if (cardInner instanceof HTMLElement) {
		cardInner.classList.add("is-flipped");
	}
});
