document.addEventListener('DOMContentLoaded', () => {  
    const topMenu = document.getElementById('qtd-top-menu')  
    const topMenuicon = document.getElementById('qtd-top-menu-icon')  

    document.addEventListener('click', (e) => {  
        if (topMenuicon.contains(e.target)) { 
            topMenu.classList.toggle('qtd-top-menu-expend') 
            topMenu.classList.toggle('hidden')  
        } else {  
            // click outside  
            if(topMenu.classList.contains('qtd-top-menu-expend')){
                topMenu.classList.remove('qtd-top-menu-expend')
                topMenu.classList.add('hidden')
            }
        }  
    }) 
    
});

document.addEventListener('DOMContentLoaded', function() {  
    const slider = document.getElementById('slider');  
    const slides = slider.children;  
    const totalSlides = slides.length;  
    let currentSlide = 0;  

    document.getElementById('next').onclick = function() {  
        currentSlide = (currentSlide + 1) % totalSlides;  
        updateSlider();  
    };  

    document.getElementById('prev').onclick = function() {  
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  
        updateSlider();  
    };  

    function updateSlider() {  
        const offset = -currentSlide * 100;  
        slider.style.transform = `translateX(${offset}%)`;  
    }  
});