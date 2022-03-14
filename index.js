// Globale variablen
let quote = "";
let quoteNumber = 0;

// Event listeners
// Check of menu geopend/gesloten moet worden afhankelijk van schermgrootte
window.addEventListener('resize', corrigeerMenu);

// Roep functies aan nadat alle DOM elementen geladen zijn
document.addEventListener("DOMContentLoaded", function () {
	shuffleQuote();
	setCurrentYear();
});

// Shuffle de quotes zodat er een random quote verschijnt
function shuffleQuote() {
	let randomNumber = Math.floor(Math.random() * 8);

	// Zolang huidige quote gelijk is aan random nummer, genereer nieuw random nummer
	while (quoteNumber === randomNumber) {
		randomNumber = Math.floor(Math.random() * 8);
	}

	switch (randomNumber) {
		case 0:
			quote = '“Do not try to be perfect, just do your best”';
			break;
		case 1:
			quote = '“You can do anything you set your mind to” ~ Eminem';
			break;
		case 2:
			quote = '“Quiet the mind and the soul will speak” ~ Buddha';
			break;
		case 3:
			quote = '“Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin. ~ Mother Teresa';
			break;
		case 4:
			quote = '“Be yourself, everyone else is already taken” ~ Oscar Wilde';
			break;
		case 5:
			quote = '“Do not let anyone dull your sparkle”';
			break;
		case 6:
			quote = '“All great changes are preceded by chaos” ~ Deepak Chopra';
			break;
		case 7:
			quote = '“Why worry? If you have done the very best you can, worrying will not make it any better” ~ Walt Disney';
			break;
	}

	quoteNumber = randomNumber;

	// Wijs nieuwe quote toe aan quote element
	document.getElementById("inspirational-quote").innerHTML = quote;
}

// Wijs jaar van huidige datum toe aan year element
function setCurrentYear() {
	document.getElementById("year").innerHTML = new Date().getFullYear();
}

// Maak menu (on)zichtbaar na schermresize
function corrigeerMenu() {
	let menuIcon = document.getElementById("menu-icon");
	let nav = document.getElementById("nav");

	if (window.innerWidth >= 850) {
		menuIcon.classList.add("open");
		nav.style.display = "block";
	} else {
		menuIcon.classList.remove("open");
		nav.style.display = "none";
	}
}

// Open of sluit menu afhankelijk van huidige status
function toggleMenu() {
	let menuIcon = document.getElementById("menu-icon");
	let nav = document.getElementById("nav");

	// Voeg toe of verwijder de class .open aan #menu-icon
	if (menuIcon.classList.contains("open")) {
		menuIcon.classList.remove("open");
		nav.style.display = "none";
	} else {
		menuIcon.classList.add("open");
		nav.style.display = "block";
	}
}