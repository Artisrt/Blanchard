
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');
const headerInput = document.querySelector('.header__input');
const submitForm = document.querySelector('header__form');


const active = function () {
  search.classList.toggle('active');
  if (search.classList.contains('active')) {
    clear.style.opacity = '1';
    console.log('Содержит .active');
  }
  else {
    clear.style.opacity = '0';
    console.log('Не содержит .active');
  }

}

icon.addEventListener('click', function (e) {
  e.stopPropagation();
  active()

})
clear.addEventListener('click', function () {
  document.getElementById('headerSearch').value = ''
});

document.addEventListener('click', function (event) {
  const target = event.target;
  const its_menu = target == search || search.contains(target);
  const its_btnMenu = target == icon;
  const menu_is_active = search.classList.contains("active");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    active();
  }
})
