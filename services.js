document.getElementById('y').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
