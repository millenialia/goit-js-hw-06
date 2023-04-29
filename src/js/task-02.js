const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients')

const ingridientsEL = ingredients.map((ingridient) => {
  
  const ingridientEL = document.createElement('li');
  ingridientEL.textContent = ingridient
  ingridientEL.classList = 'item'

  return ingridientEL
})



list.append(...ingridientsEL)

