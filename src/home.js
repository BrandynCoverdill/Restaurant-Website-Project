import './styles.css';

function mainContent() {
	// Create DOM elements
	const parent = document.createDocumentFragment();

	// Create three articles with it's content
	for (let i = 0; i < 3; i++) {
		const article = document.createElement('article');

		switch (i) {
			case 0:
				// Create elements
				const iframe = document.createElement('iframe');

				// Set attribute of elements
				iframe.setAttribute(
					'src',
					'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11557.18431077552!2d-116.20348873478049!3d43.60037653767119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef850993be097%3A0x5872eee815c3ec85!2sPie%20Hole!5e0!3m2!1sen!2sus!4v1699866737586!5m2!1sen!2sus'
				);
				iframe.setAttribute('width', '100%');
				iframe.setAttribute('height', '100%');
				iframe.setAttribute('style', 'border: 0');
				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('loading', 'lazy');
				iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

				// Append elements to parent element
				article.appendChild(iframe);
				break;
			case 1:
				// Create elements
				const h2First = document.createElement('h2');
				const p1 = document.createElement('p');
				const p2 = document.createElement('p');

				// Add content to the elements
				h2First.textContent = 'Pie Hole on Broadway';
				p1.textContent =
					'Open all day & night for your pizza needs. Serving pizza 7 days a week, 365 days a year until the wee hours of every morning in Boise, Idaho.';
				p2.textContent =
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod explicabo ipsum placeat, minima molestias consequatur id quasi eos ex consequuntur velit maxime laborum, omnis minus quae numquam reprehenderit non quidem!';

				// Append elements to parent element
				article.appendChild(h2First);
				article.appendChild(p1);
				article.appendChild(p2);
				break;
			case 2:
				// Create elements
				const h2Second = document.createElement('h2');
				const address = document.createElement('address');
				const p3 = document.createElement('p');
				const p4 = document.createElement('p');
				const a1 = document.createElement('a');
				const a2 = document.createElement('a');

				// Add content to elements
				h2Second.textContent = "Throwin' Dough";
				p3.textContent = '11AM-3AM';
				p4.textContent = '7 Days a week!';
				a1.textContent = '205 N 8th St\r\nBoise, ID\r\n83702';
				a2.textContent = '\r\n208-314-2078';

				// Add attributes to elements
				a1.setAttribute('href', 'https://maps.app.goo.gl/Lornf8GPiz3UM3EN6');
				a2.setAttribute('href', 'tel:208-314-2078');

				// Append elements to the parent element
				article.appendChild(h2Second);
				article.appendChild(address);
				address.appendChild(p3);
				address.appendChild(p4);
				address.appendChild(a1);
				address.appendChild(a2);
				break;

			default:
				break;
		}

		// Append article to parent element
		parent.appendChild(article);
	}

	// Return parent element
	return parent;
}

// Generates the website's content
const pageload = () => {
	const content = document.createDocumentFragment();
	content.appendChild(mainContent());
	return content;
};

export default pageload;
