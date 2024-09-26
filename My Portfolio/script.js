var menuBtn = document.querySelector('.nav-bar .nav-menu-btn')
var menuList = document.querySelector('.nav-bar .nav-list')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
})