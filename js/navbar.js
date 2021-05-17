addEventListener('DOMContentLoaded', () => {
    const menu_btn = document.querySelector('.menu-btn')
    if (menu_btn){
        menu_btn.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu-items')
            menu_items.classList.toggle('show')
        })
    }
})