document.addEventListener('scroll', (e) => {
    const nav = document.querySelector('.navbar')

    let hScroll = window.scrollY;

    
    if ( hScroll >= 760){
        nav.classList.add('nav-scroll')

    }else{
        nav.classList.remove('nav-scroll')
    }
    
})

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navbar')
   if ( screen.width < 992) {
        nav.classList.add('bg-dark')
   }
    
})