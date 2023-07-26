const burgerPhone = document.querySelector('#burger-phone');
const phoneMenu = document.querySelector('#phone-menu')

burgerPhone.addEventListener('click', () => {
    phoneMenu.classList.toggle('disp')
})