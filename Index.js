function changeBg(){
    var navbar = document.getElementById('nav-ull');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('bgColor');
    }else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg)

function changeBgd(){
    var divbar = document.getElementById('btndown');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        divbar.classList.remove('bgColour');
    }else{
        divbar.classList.add('bgColour');
    }
}

window.addEventListener('scroll', changeBgd);

/* JS for text change */

var words = ['see gestures', 'count reps', 'feel emotions', 'sense colors', 'check safety', 'identify plants'];
var newTexts = document.querySelector('.span1');
var counter = 0;

function changeText(){
    newTexts.textContent = words[counter];
    counter = (counter + 1) % words.length;
}

var intervalId = setInterval(changeText, 5700);

/* JS for the social icons */

document.addEventListener('DOMContentLoaded', function(){
    let iconSection = document.querySelectorAll('.socialicons');

    let iconFade = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add('visible');
            } 
        });
    }, {threshold: 0.5});
    iconSection.forEach(section => {
        iconFade.observe(section);
    });
});



/* Js for videos */

let currentSlide = 0;

    function showSlide(index) {
        let wrapper = document.querySelector('.carousel-wrapper');
        let video = document.querySelectorAll('.videos');
        let videoWidth = video[0].offsetWidth;

        currentSlide = index;
        wrapper.style.transform = `translateX(-${videoWidth * index}px)`;
    }

    function nextSlide() {
        let video = document.querySelectorAll('.videos');
        if (currentSlide < video.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            let video = document.querySelectorAll('.videos');
            currentSlide = video.length - 1;
        }
        showSlide(currentSlide);
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        showSlide(currentSlide);
    });

    /* drop down JS */

    function toggleContent(contentId, icon) {
        const content = document.getElementById(contentId);
        content.style.display = content.style.display === 'none' ? 'block' : 'none';

        // Toggle the angle-down and angle-up icons
       
        icon.classList.toggle('fa-angle-down');
         icon.classList.toggle('fa-angle-up');
        icon.classList.toggle('fa-angle-down');
    }
    


    /* Active states */

    function deactivateAllSections(){
        let listItems = document.querySelectorAll('.sections');
        listItems.forEach(function(item){
            item.classList.remove('active-section');
        });
    }

    document.getElementById('section1').addEventListener('click', function(){
        deactivateAllSections();
        this.classList.add('active-section');
        window.location.href = 'help.html';
    });

    document.getElementById('section2').addEventListener('click', function(){
        deactivateAllSections();
        this.classList.add('active-section');
        window.location.href = 'label.html';
    });

    document.getElementById('section3').addEventListener('click', function(){
        deactivateAllSections();
        this.classList.add('active-section');
        window.location.href = 'train.html';
    });

    document.getElementById('section4').addEventListener('click', function(){
        deactivateAllSections();
        this.classList.add('active-section');
        window.location.href = 'result.html';
    });

    document.getElementById('section5').addEventListener('click', function(){
        deactivateAllSections();
        this.classList.add('active-section');
        window.location.href = 'play.html';
    });

    document.getElementById('section6').addEventListener('click', function(){
        deactivateAllSections();
        this.classList.add('active-section');
        window.location.href = 'export.html';
    });

    document.getElementById('section7').addEventListener('click', function(){
        deactivateAllSections();
        this.classList.add('active-section');
        window.location.href = 'import.html';
    });

    document.getElementById('section8').addEventListener('click', function(){
        deactivateAllSections();
        this.classList.add('active-section');
        window.location.href = 'tip.html';
    });

function toggleMenu(){
    let navLinks = document.querySelector('.nav-ul');
    navLinks.classList.toggle('show');

    let burgerIcon = document.querySelector('.burger i');
    burgerIcon.classList.toggle('fa-window-close');
}

