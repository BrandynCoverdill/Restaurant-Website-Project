import './styles.css';

/**
 * Content for the contact on the webpage
 * @returns parent
 */
function mainContent() {
	// Create DOM elements
	const parent = document.createElement('div');
	const h2 = document.createElement('h2');
	const p1 = document.createElement('p');
	const address = document.createElement('address');
	const a1 = document.createElement('a');
	const a2 = document.createElement('a');

	// Text content for the elements
	h2.textContent = 'Pie Hole on Broadway - Boise, ID';
	p1.textContent = 'You can contact this location either by phone or in person';
	a1.textContent = '205 N 8th St, Boise, ID, 83702';
	a2.textContent = '\r\n208-314-2078';

	// Style elements that have newlines
	a2.style.whiteSpace = 'pre';

	// Add attributes to elements
	parent.classList.add('contact');
	a1.setAttribute('href', 'https://maps.app.goo.gl/Lornf8GPiz3UM3EN6');
	a2.setAttribute('href', 'tel:208-314-2078');

	// Apply element hierarchy
	address.appendChild(a1);
	address.appendChild(a2);
	parent.appendChild(h2);
	parent.appendChild(p1);
	parent.appendChild(address);

	// Return parent element
	return parent;
}

/**
 * Export function to return to index.js
 * @returns contact
 */
const contactLoad = () => {
	const contact = document.createDocumentFragment();
	contact.appendChild(mainContent());
	return contact;
};

export default contactLoad;
