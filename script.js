
function showPage(){
  const hash = location.hash || '#cover';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const target = document.querySelector(hash) || document.querySelector('#cover');
  target.classList.add('active');
  document.querySelectorAll('.jump-select').forEach(s=>s.value=hash);
  window.scrollTo({top:0, behavior:'smooth'});
}
window.addEventListener('hashchange', showPage);
window.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.jump-select').forEach(select=>{
    select.addEventListener('change', e=>{ location.hash=e.target.value; });
  });
  document.querySelector('.back-top').addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
  showPage();
});
