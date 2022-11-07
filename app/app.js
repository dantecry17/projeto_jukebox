let botao = document.querySelector('.menu_icon_header');
let menu = document.querySelector('.menu_lateral');

botao.addEventListener('click', function(){
    menu.classList.toggle('menu_burger--ativo');
})