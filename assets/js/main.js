/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Agregar clase show-menu a nav menu
       nav.classList.toggle('show-menu')
       // Agregar show-icon para mostrar y ocultar el icono del menú
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Selecionar cada dropdown item
dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown__button') 

    // 2. Selecionar cada click del botón
    dropdownButton.addEventListener('click', () =>{
        // 7. Seleccionar la clase show-dropdown actual
        const showDropdown = document.querySelector('.show-dropdown')
        
        // 5. Llamar a la funcion toggleItem
        toggleItem(item)

        // 8. Remover la clase show-dropdown de otros items
        if(showDropdown && showDropdown!== item){
            toggleItem(showDropdown)
        }
    })
})

// 3. Crear una función para mostrar el dropdown
const toggleItem = (item) =>{
    // 3.1. Selecionar cada dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. Si el mismo item contiene la clase show-dropdown, remover
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        // 4. Agregar el height maximo al dropdown content y agregar la clase show-dropdown
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container')

// Función para eliminar estilos desplegables en modo móvil cuando el navegador cambia de tamaño
const removeStyle = () =>{
    // Validar si la media query llega a 1118px
    if(mediaQuery.matches){
        // Removemos el estilo de height de dropdown container
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        // Removemos la clase show-dropdown de dropdown item
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)


//=========== new   ==============
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [""],
        typeSpeed: 0,
        backSpeed: 0,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings:  ["UI UX designer", "Developer", "Android developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
