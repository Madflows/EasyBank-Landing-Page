var navBtn = document.querySelector('.nav-toggle');
var navList = document.querySelector('.navList');
var navLinks = document.querySelectorAll('.navList li')


// toggle menu on nav-toggle click
navBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
})



// Hide menu when any navigation link is clicked
navLinks.forEach((e) => {
    e.addEventListener('click',() => {
        navList.classList.remove('active')
    })
})



// Change navbg on scroll
function scrollHeader(){
    const nav = document.querySelector('.nav')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80){
         nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)
