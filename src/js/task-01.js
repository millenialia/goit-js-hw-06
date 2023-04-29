const navItemEl = document.querySelectorAll('.item')
console.log('Number of categories:', navItemEl.length);

navItemEl.forEach((el)=> {
    console.log('Category:', el.firstElementChild.textContent);
    console.log('Elements:', el.lastElementChild.children.length);
})