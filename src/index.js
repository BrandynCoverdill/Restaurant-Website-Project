import PageLoad from './pageload';
import Home from './home';
import Menu from './menu';
import Contact from './contact';

// Global variables
const content = document.querySelector('.content');

function pageLoad() {
	content.appendChild(PageLoad());
	const homeBtn = document.querySelector('nav ul li:nth-child(1) a');
	const menuBtn = document.querySelector('nav ul li:nth-child(2) a');
	const contactBtn = document.querySelector('nav ul li:nth-child(3) a');
	const section = document.querySelector('.main-content');
	homeBtn.style.cssText += `
        color: black;
        text-decoration: none;
        pointer-events: none;
    `;

	// Add event listeners for Tab-switching
	homeBtn.addEventListener('click', (e) => {
		e.preventDefault();
		section.textContent = '';
		section.appendChild(Home());
		homeBtn.style.cssText += `
            color: black;
            text-decoration: none;
            pointer-events: none;
        `;
		menuBtn.style.cssText -= `
            color: black;
            text-decoration: none;
            pointer-events: none;
        `;
		contactBtn.style.cssText -= `
            color: black;
            text-decoration: none;
            pointer-events: none;
        `;
	});

	menuBtn.addEventListener('click', (e) => {
		e.preventDefault();
		section.textContent = '';
		section.appendChild(Menu());
		homeBtn.style.cssText -= `
            color: black;
            text-decoration: none;
            pointer-events: none;
        `;
		menuBtn.style.cssText += `
            color: black;
            text-decoration: none;
            pointer-events: none;
        `;
		contactBtn.style.cssText -= `
            color: black;
            text-decoration: none;
            pointer-events: none;
        `;
	});

	contactBtn.addEventListener('click', (e) => {
		e.preventDefault();
		section.textContent = '';
		section.appendChild(Contact());
		homeBtn.style.cssText -= `
            color: black;
            text-decoration: none;
            pointer-events: none;
        `;
		menuBtn.style.cssText -= `
            color: black;
            text-decoration: none;
            pointer-events: none;
        `;
		contactBtn.style.cssText += `
            color: black;
            text-decoration: none;
            pointer-events: none;
        `;
	});
}

pageLoad();
