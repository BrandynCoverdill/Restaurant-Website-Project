import './styles.css';

/**
 * Content for the menu on the webpage
 * @returns parent
 */
function mainContent() {
	// Create DOM elements
	const parent = document.createElement('div');

	// Append h2 title to the page before anything else
	const h2 = document.createElement('h2');
	h2.textContent = 'Craving our pies? We got you covered!';
	parent.appendChild(h2);

	// Generate a card for each category off their menu
	for (let i = 0; i < 6; i++) {
		// Category
		const card = document.createElement('div');
		card.classList.add('card');
		// Category name
		const cardName = document.createElement('h2');
		cardName.classList.add('menu-category');

		switch (i) {
			case 0:
				cardName.textContent = 'SLICES - Ready Right Now!';
				card.appendChild(cardName);
				for (let j = 0; j < 6; j++) {
					const itemParent = document.createElement('div');
					itemParent.classList.add('item-parent');
					const item = document.createElement('h3');
					item.classList.add('item');
					const price = document.createElement('p');
					price.classList.add('price');
					switch (j) {
						case 0:
							item.textContent = 'Cheese';
							price.textContent = '$3.25';
							break;
						case 1:
							item.textContent = 'Margherita eat-a';
							price.textContent = '$3.77';
							break;
						case 2:
							item.textContent = 'Pepperoni';
							price.textContent = '$3.77';
							break;
						case 3:
							item.textContent = 'Potato Bacon';
							price.textContent = '$3.96';
							break;
						case 4:
							item.textContent = 'Slice of the day';
							price.textContent = '$3.96';
							break;
						case 5:
							item.textContent = 'Daily vegan slice';
							price.textContent = '$3.96';
							break;
						default:
							break;
					}
					itemParent.appendChild(item);
					itemParent.appendChild(price);
					card.appendChild(itemParent);
				}
				break;
			case 1:
				cardName.textContent = 'BUILD YOUR OWN 19" PIE';
				card.appendChild(cardName);
				const container = document.createElement('div');
				container.classList.add('flex-container');
				const itemParent = document.createElement('div');
				itemParent.classList.add('item-parent');
				for (let j = 0; j < 4; j++) {
					const item = document.createElement('h3');
					item.classList.add('item');
					const price = document.createElement('p');
					price.classList.add('price');
					const p = document.createElement('p');
					switch (j) {
						case 0:
							p.textContent = '19" cheese pizza w/ marinara - starts at $18.77';
							p.classList.add('basic-build-pizza');
							itemParent.appendChild(p);
							break;
						case 1:
							item.textContent = 'Substitute Sauce';
							price.textContent = '$1.89';
							p.textContent =
								'alfredo, pesto, bbq sauce, thai peanut, hot wing sauce, olive oil, etrax marinara sauce';
							container.appendChild(item);
							container.appendChild(price);
							container.appendChild(p);
							break;
						case 2:
							item.textContent = 'Add Meat Toppings';
							price.textContent = '$2.78';
							p.textContent =
								'pepperoni, italian sausage, bacon chicekn, canadian bacon, chorizo, salami, pulled pork';
							container.appendChild(item);
							container.appendChild(price);
							container.appendChild(p);
							break;
						case 3:
							item.textContent = 'Add Veggie Toppings';
							price.textContent = '$2.17';
							p.textContent =
								'roasted red peppers, cherry peppers, bell peppers, red onions, shrooms, black olives, pineapple, jalapenos, tomatoes, sundried tomatoes, basil, cilantro, spinach, green onions, roasted garlic, potatoes, mango, pepperoncinis, artichoke hearts, brown sugar roasted jalapenos';
							container.appendChild(item);
							container.appendChild(price);
							container.appendChild(p);
							break;
						default:
							break;
					}
					itemParent.appendChild(container);
					card.appendChild(itemParent);
				}
				break;
			case 2:
				cardName.textContent = 'SPECIALTY 19" PIES';
				card.appendChild(cardName);
				for (let j = 0; j < 28; j++) {
					const itemParent = document.createElement('div');
					itemParent.classList.add('item-parent');
					const item = document.createElement('h3');
					item.classList.add('item');
					const price = document.createElement('p');
					price.classList.add('price');
					const p = document.createElement('p');
					switch (j) {
						case 0:
							item.textContent = 'Old School';
							price.textContent = '$25.90';
							p.textContent = 'pepperoni, red onions & olives';
							break;
						case 1:
							item.textContent = 'Ninja Pie';
							price.textContent = '$25.90';
							p.textContent = 'pepperoni, jalapeno, pineapple';
							break;
						case 2:
							item.textContent = 'Drunk Candy';
							price.textContent = '$25.90';
							p.textContent = 'canadian bacon, pineapple, jalapeno';
							break;
						case 3:
							item.textContent = 'Tritalian';
							price.textContent = '$27.10';
							p.textContent = 'italian sausage, salami, pepperoni';
							break;
						case 4:
							item.textContent = 'Russ-a-Roni';
							price.textContent = '$26.50';
							p.textContent = 'pepperoni, fresh tomatoes, feta';
							break;
						case 5:
							item.textContent = 'Potato & Bacon';
							price.textContent = '$25.60';
							p.textContent = 'alfredo sauce, roasted potatoes, bacon';
							break;
						case 6:
							item.textContent = 'Thai Chicken';
							price.textContent = '$27.80';
							p.textContent =
								'thai peanut sauce, chicken, cilantro, green onions';
							break;
						case 7:
							item.textContent = 'Hot Wing Pie';
							price.textContent = '$28.05';
							p.textContent =
								'hot sauce, chicken, bacon, jalapeno, pepper jack';
							break;
						case 8:
							item.textContent = 'Sweet BBQ Porker';
							price.textContent = '$27.80';
							p.textContent =
								'barbeque sauce, smoked pulled pork, mango, jalapeno';
							break;
						case 9:
							item.textContent = 'Margheritah Eata-Pizza';
							price.textContent = '$27.15';
							p.textContent =
								'olive oil, tomatoes, roasted garlic, fresh basil, oregano';
							break;
						case 10:
							item.textContent = 'Pie Hole Combo';
							price.textContent = '$27.75';
							p.textContent =
								'pepperoni, italian sausage, black olives, mushrooms, mixed bell peppers';
							break;
						case 11:
							item.textContent = 'Munchy Mango';
							price.textContent = '$27.15';
							p.textContent =
								'thai peanut sauce, mangos, brown sugar roasted jalapenos, green onions';
							break;
						case 12:
							item.textContent = 'Pretty Pretty Princess';
							price.textContent = '$29.40';
							p.textContent =
								'pepperoni, italian sausage, bacon, canadian bacon, mexican chorizo';
							break;
						case 13:
							item.textContent = 'Traditional Veggie';
							price.textContent = '$26.65';
							p.textContent =
								'black olives, shrooms, mixed bell peppers, mixed onions, fresh tomatoes';
							break;
						case 14:
							item.textContent = 'Bird Dog';
							price.textContent = '$29.95';
							p.textContent =
								'alfredo sauce, chicken, bacon, roasted red peppers, roasted garlic, cilantro, pepper jack';
							break;
						case 15:
							item.textContent = 'Pesto or Alfredo Veg';
							price.textContent = '$26.40';
							p.textContent =
								"spinach, artichoke hearts, sun dried tom's, rst'd garlic (add chicken $2.78)";
							break;
						case 16:
							item.textContent = 'Pie Hole Supreme';
							price.textContent = '$30.45';
							p.textContent =
								"pepperoni, ital'n sausage, canadian bacon, olives, shrooms, bell peppers, onions";
							break;
						case 17:
							item.textContent = 'Happy Camper';
							price.textContent = '$27.75';
							p.textContent =
								'canadian bacon, italian sausage, roasted red peppers, brown sugar jalapenos, pineapple';
							break;
						case 18:
							item.textContent = 'What Else';
							price.textContent = '$26.40';
							p.textContent =
								'barbeque sauce, cherry peppers, brown sugar jalapenos, sun-drived tomatoes, mango';
							break;
						case 19:
							item.textContent = 'Doomsday Pepper';
							price.textContent = '$29.50';
							p.textContent =
								'hot wing sauce, mexican chorizo, jalapeno, cherry peppers, pepperonici, pepper jack';
							break;
						case 20:
							item.textContent = '5 Cheese Pesto Plus';
							price.textContent = '$25.55';
							p.textContent =
								'pesto, mozzarella, parmesan, feta, cheddar, pepper jack, brown sugar jalapenos';
							break;
						case 21:
							item.textContent = 'Green Goddess';
							price.textContent = '$26.40';
							p.textContent =
								'house made pesto, spinach, green onions, jalapeno, red & green bell peppers';
							break;
						case 22:
							item.textContent = 'Wisconsin Goddess';
							price.textContent = '$25.60';
							p.textContent =
								'alfredo sauce, seasoned potatoes, sprinkled with cheddar cheese';
							break;
						case 23:
							item.textContent = 'Potato Tomato';
							price.textContent = '$27.15';
							p.textContent =
								'alfredo sauce, seasoned potatoes, fresh tomatoes, roasted garlic';
							break;
						case 24:
							item.textContent = 'Hello Please';
							price.textContent = '$27.45';
							p.textContent =
								'red & green bell peppers, onions, mushrooms, pineapple';
							break;
						case 25:
							item.textContent = 'Gandalf The White';
							price.textContent = '$25.60';
							p.textContent =
								'alfredo sauce, roasted garlic, shredded parmesan';
							break;
						case 26:
							item.textContent = 'Granddaddy';
							price.textContent = '$27.80';
							p.textContent =
								'alfredo sauce, red onions, pineapple, feta crumbles';
							break;
						case 27:
							item.textContent = 'Too Kool 4 Skool';
							price.textContent = '$25.90';
							p.textContent = 'salami, mushrooms, pepperoncini';
							break;
						default:
							break;
					}
					itemParent.appendChild(item);
					itemParent.appendChild(price);
					itemParent.appendChild(p);
					card.appendChild(itemParent);
				}
				break;
			case 3:
				cardName.textContent = 'VEGAN PIES';
				card.appendChild(cardName);
				for (let j = 0; j < 4; j++) {
					const itemParent = document.createElement('div');
					itemParent.classList.add('item-parent');
					const item = document.createElement('h3');
					item.classList.add('item');
					const price = document.createElement('p');
					price.classList.add('price');
					const p = document.createElement('p');
					switch (j) {
						case 0:
							item.textContent = 'Caprese';
							price.textContent = '$27.45';
							p.textContent =
								'olive oil, tomatoes, fresh basil, tapped with balsamic glaze';
							break;
						case 1:
							item.textContent = 'Pineapple Princess';
							price.textContent = '$25.30';
							p.textContent =
								'thai peanue sauce, Dole pineapple, roasted red peppers and fresh basil';
							break;
						case 2:
							item.textContent = 'Thai Mango';
							price.textContent = '$27.45';
							p.textContent =
								'thai peanut sauce, mangos, brown sugar, jalapenos, roasted red peppers, green onions';
							break;
						case 3:
							item.textContent = "Boots 'n Spurs";
							price.textContent = '$26.65';
							p.textContent =
								"bbq, rst'd red peppers, onions, green onions, shrooms, cherry peppers, sundried tomatoes";
							break;
						default:
							break;
					}
					itemParent.appendChild(item);
					itemParent.appendChild(price);
					itemParent.appendChild(p);
					card.appendChild(itemParent);
				}
				break;
			case 4:
				cardName.textContent = 'MORE GOODIES & SPECIALS';
				card.appendChild(cardName);
				for (let j = 0; j < 4; j++) {
					const itemParent = document.createElement('div');
					itemParent.classList.add('item-parent');
					const item = document.createElement('h3');
					item.classList.add('item');
					const price = document.createElement('p');
					price.classList.add('price');
					const p = document.createElement('p');
					switch (j) {
						case 0:
							item.textContent = 'Bread stix';
							price.textContent = '$6.60';
							p.textContent = 'Cheesy or cheesy garlic';
							break;
						case 1:
							item.textContent = 'Garden salad';
							price.textContent = '$5.00 (add chicken $2.12)';
							break;
						case 2:
							item.textContent = 'Happy hour';
							price.textContent = '(two slices and a ftn drk) $6.66';
							break;
						case 3:
							item.textContent = 'Student special';
							price.textContent = '(any two slices) $5.55';
							break;
						default:
							break;
					}
					itemParent.appendChild(item);
					itemParent.appendChild(price);
					itemParent.appendChild(p);
					card.appendChild(itemParent);
				}
				break;
			case 5:
				cardName.textContent = 'DRINKS';
				card.appendChild(cardName);
				for (let j = 0; j < 4; j++) {
					const itemParent = document.createElement('div');
					itemParent.classList.add('item-parent');
					const item = document.createElement('h3');
					item.classList.add('item');
					const price = document.createElement('p');
					price.classList.add('price');
					switch (j) {
						case 0:
							item.textContent = 'Micro brews';
							price.textContent = '$4.72';
							break;
						case 1:
							item.textContent = 'Domestic brews';
							price.textContent = '$3.77';
							break;
						case 2:
							item.textContent = 'Energy drinks';
							price.textContent = '$3.30';
							break;
						case 3:
							item.textContent = 'Fountain drinks';
							price.textContent = '$2.74';
							break;
						default:
							break;
					}
					itemParent.appendChild(item);
					itemParent.appendChild(price);
					card.appendChild(itemParent);
				}
				break;

			default:
				break;
		}

		// Append card to the parent
		parent.appendChild(card);
	}

	// Add attributes to elements
	parent.classList.add('menu');

	// return parent element
	return parent;
}

/**
 * Function to export to index.js
 * @returns menu
 */
const menu = () => {
	const menu = document.createDocumentFragment();
	menu.appendChild(mainContent());
	return menu;
};

export default menu;
