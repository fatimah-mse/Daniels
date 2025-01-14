// Access To Elements 
let navLinks = document.querySelectorAll('.nav-link')
var numbers = document.getElementById('numbers')
let num = document.querySelectorAll('.num')
let preloader = document.querySelector('#preloader')
let started = false

// NavLinks Border Bottom and close ul after Select a Link
navLinks.forEach(element => {
    element.addEventListener('click', function() {
        var navBar = document.querySelector('.navbar-collapse')
        navBar.classList.remove('show')

        navLinks.forEach(e => e.classList.remove('active'))
        this.classList.add('active')
    })
})

// Change Navbar Background Color
window.addEventListener('scroll',() =>{

    var navbar = document.querySelector('.navbar')
    var progress = document.querySelector('#about-desc')
    var spans = document.querySelectorAll('.progress-span')
    
    window.scrollY > 50 ? up.classList.add('show') : up.classList.remove('show') 

    window.scrollY > 50 ?  navbar.classList.add('scroll') : navbar.classList.remove('scroll')

    if (window.scrollY >= progress.offsetTop - 150) {
        spans.forEach((e) => {
            e.style.width = e.dataset.width
        })
    }

    if (window.scrollY >= numbers.offsetTop - 500) {
        if (!started) {
            num.forEach(num => counter(num))
        }
        started = true
    }

}) 

// Scroll To Top
function Top () {
window.scrollTo({
    top: 0,
    behavior: "smooth"
})
}

// Animation With AOS Library
window.addEventListener('load', () => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false })
})

// Animation With Typed JS Library
let typed = new Typed('.auto-type' ,
    {
        strings: ["Larry Daniels" , "Developer" , "Designer"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    }) 

// Show Portfolio
function show (obj) {

    let title = document.querySelectorAll('.titles p')
    let all = document.querySelectorAll('.all')
    let brand = document.querySelectorAll('.brand')
    let design = document.querySelectorAll('.design')
    let graphic = document.querySelectorAll('.graphic')

    title.forEach(e => {
        e.classList.remove('active')
    })
    obj.classList.add('active')

    if (obj.id === 'brand') {
        brand.forEach(e => {
            e.style.display = 'flex'
        })
        design.forEach(e => {
            e.style.display = 'none'
        })
        graphic.forEach(e => {
            e.style.display = 'none'
        })
        AOS.refresh()
    }
    else if (obj.id === 'design') {
        brand.forEach(e => {
            e.style.display = 'none'
        })
        design.forEach(e => {
            e.style.display = 'flex'
        })
        graphic.forEach(e => {
            e.style.display = 'none'
        })
        AOS.refresh()
    }
    else if (obj.id === 'graphic') {
        brand.forEach(e => {
            e.style.display = 'none'
        })
        design.forEach(e => {
            e.style.display = 'none'
        })
        graphic.forEach(e => {
            e.style.display = 'flex'
        })
        AOS.refresh()
    }
    else {
        all.forEach(e => {
            e.style.display = 'flex'
        })
        AOS.refresh()
    }

}
// Swiper 
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true
  })

// Increase Number
// num.forEach(num => counter(num))
function counter(obj) {
    var goal = obj.dataset.number
    var count = setInterval( () => {
        obj.textContent++
        if (obj.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal )
}

// Preloader
if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
  })
  }