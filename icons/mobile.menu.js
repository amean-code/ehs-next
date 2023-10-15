
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const MobileMenu = document.querySelector('.mobile_menu')


toggleBtn.onclick = function(){
    MobileMenu.classList.toggle('open')

    const isOpen = MobileMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}