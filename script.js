const navSlide = () => {
    //variabler
    const hamburgare = document.querySelector('.hamburgare'); //hamburgar variabel
    const nav = document.querySelector('.nav-links'); //nav variabel
    const navLinks = document.querySelectorAll('.nav-links li'); //navlänk variabel
    //variabler

    //togglar navigationsmenyn
    hamburgare.addEventListener('click', ()=> { //kollar om du klickat på hamburgare
        nav.classList.toggle('nav-active'); //kör klassen .nav-active i css

        //animerar in länkarna
        navLinks.forEach((link, index) => { //for loop som går igenom alla element i listan
            if (link.style.animation) { //ifall animationen redan har körts
                link.style.animation = ''; //återställ animationen
            } else { //ifall animationen inte körts
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; //ease animation med bestämd tid för varje element
            }
            navLinks[index].addEventListener('click', ()=> {
                nav.classList.toggle('nav-active');
                hamburgare.classList.toggle('toggle');
                lockScroll();
            });
        });
        //animerar in länkarna
        
        hamburgare.classList.toggle('toggle'); //animerar hamburgarikon
    });
    //togglar navigationsmenyn
}

function lockScroll() {
    document.body.classList.toggle('lock-scroll');

}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



navSlide(); //callar funktionen