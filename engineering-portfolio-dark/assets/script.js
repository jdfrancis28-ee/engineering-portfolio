const header=document.querySelector('.site-header');
const links=document.querySelectorAll('a[href^="#"]');
links.forEach(link=>link.addEventListener('click',e=>{const id=link.getAttribute('href');if(id.length>1){const target=document.querySelector(id);if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}}}));
window.addEventListener('scroll',()=>{header.style.boxShadow=window.scrollY>30?'0 10px 35px rgba(0,0,0,.22)':'none';});
