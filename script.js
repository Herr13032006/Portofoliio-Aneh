const header = document.querySelector("header");

// Toggle menu visibility on small screens
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('navlist').classList.toggle('active');
  });
  

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}