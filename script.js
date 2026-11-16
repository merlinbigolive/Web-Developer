const progress=document.getElementById('progressBar');
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'); const nav=document.querySelector('.topbar nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
let ticking=false;
function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';document.querySelectorAll('.parallax').forEach(el=>{const r=el.parentElement.getBoundingClientRect();if(r.bottom>-200&&r.top<innerHeight+200){const speed=Number(el.dataset.speed||.08);el.style.transform=`translate3d(0,${(r.top-innerHeight/2)*-speed}px,0) scale(1.08)`}});ticking=false}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true}},{passive:true});updateScroll();
