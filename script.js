const navSlide = () => {
    //variabler
    const hamburgare = document.querySelector('.hamburgare'); //hamburgar variabel
    const nav = document.querySelector('.nav-links'); //nav variabel
    const navLinks = document.querySelectorAll('.nav-links li'); //navlänk variabel
    var isOpen = false;
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
        });
        //animerar in länkarna
        isOpen = true;
        hamburgare.classList.toggle('toggle'); //animerar hamburgarikon
    });

    var btn = document.querySelectorAll('.nav-links li a');
        for (var i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', function() {
                if (isOpen){
                isOpen = false;
                lockScroll();
                nav.classList.toggle('nav-active');
                navLinks.forEach((link, index) => {
                    link.style.animation = '';
                });
                hamburgare.classList.toggle('toggle');
            }
            });
        };
}

function lockScroll() {
    document.body.classList.toggle('lock-scroll');

}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function flip() {
    document.body.classList.toggle('flip');
}

navSlide(); //callar funktionen