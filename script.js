let lastScrollTop = 0; 
const header = document.querySelector('header'); 

// Debounce function to limit the number of scroll events
function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}

function handleScroll() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop; 

    if (currentScroll > lastScrollTop) {
        
        header.classList.add('hidden'); 
    } else {
       
        header.classList.remove('hidden'); 
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}


window.addEventListener('scroll', debounce(handleScroll, 20)); 
