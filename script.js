let lastScrollTop = 0; // to keep track of last scroll position
const header = document.querySelector('header'); // grab the header element

// Debounce function to limit the number of scroll events
function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}

function handleScroll() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // get current scroll position

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.classList.add('hidden'); // Hide header
    } else {
        // Scrolling up
        header.classList.remove('hidden'); // Show header
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // prevent negative scroll value
}

// Apply debounced scroll handler
window.addEventListener('scroll', debounce(handleScroll, 20)); // 20ms debounce
