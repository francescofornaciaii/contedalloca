const cards=Array.from(document.querySelectorAll('.photo-button'));
const dialog=document.getElementById('lightbox');
const image=document.getElementById('lightbox-image');
const label=document.getElementById('lightbox-label');
const count=document.getElementById('lightbox-count');
const closeButton=document.getElementById('lightbox-close');
let currentIndex=0,opener=null;
let scrollLock=null;
function lockPageScroll(){
  if(scrollLock)return;
  const root=document.documentElement;
  scrollLock={x:window.scrollX,y:window.scrollY,behavior:root.style.scrollBehavior};
  root.style.setProperty('--lightbox-page-top',`${-scrollLock.y}px`);
  root.style.setProperty('--lightbox-scrollbar-gap',`${window.innerWidth-root.clientWidth}px`);
  root.classList.add('lightbox-open');
  document.body.classList.add('lightbox-open');
}
function unlockPageScroll(){
  if(!scrollLock)return;
  const root=document.documentElement;
  const {x,y,behavior}=scrollLock;
  scrollLock=null;
  root.style.scrollBehavior='auto';
  document.body.classList.remove('lightbox-open');
  root.classList.remove('lightbox-open');
  root.style.removeProperty('--lightbox-page-top');
  root.style.removeProperty('--lightbox-scrollbar-gap');
  window.scrollTo(x,y);
  root.style.scrollBehavior=behavior;
}
function showImage(index){currentIndex=(index+cards.length)%cards.length;const card=cards[currentIndex];image.src=card.dataset.full;image.alt=card.querySelector('img').alt;label.textContent=card.dataset.label;count.textContent=`${currentIndex+1} / ${cards.length}`}
cards.forEach((card,index)=>card.addEventListener('click',()=>{
  if(dialog.open)return;
  opener=card;
  lockPageScroll();
  try{showImage(index);dialog.showModal();closeButton.focus({preventScroll:true})}
  catch(error){unlockPageScroll();throw error}
}));
closeButton.addEventListener('click',()=>dialog.close());
document.getElementById('lightbox-prev').addEventListener('click',()=>showImage(currentIndex-1));
document.getElementById('lightbox-next').addEventListener('click',()=>showImage(currentIndex+1));
dialog.addEventListener('close',()=>{image.removeAttribute('src');unlockPageScroll();opener?.focus({preventScroll:true})});
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();showImage(currentIndex+(event.key==='ArrowRight'?1:-1))}});
let touchStart=null;
dialog.addEventListener('touchstart',event=>{
  const touch=event.touches[0];
  touchStart=event.touches.length===1?{x:touch.clientX,y:touch.clientY}:null;
},{passive:true});
dialog.addEventListener('touchmove',event=>{
  if(event.touches.length!==1){touchStart=null;return}
  if(dialog.open&&event.cancelable)event.preventDefault();
},{passive:false});
dialog.addEventListener('touchend',event=>{
  const start=touchStart,touch=event.changedTouches[0];
  touchStart=null;
  if(!start||!touch||!dialog.open)return;
  const dx=touch.clientX-start.x,dy=touch.clientY-start.y;
  if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy))showImage(currentIndex+(dx<0?1:-1));
},{passive:true});
dialog.addEventListener('touchcancel',()=>{touchStart=null},{passive:true});
let wheelDistance=0,lastWheelAt=0,lastWheelChange=0;
dialog.addEventListener('wheel',event=>{
  if(!dialog.open)return;
  event.preventDefault();
  const now=performance.now();
  const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?window.innerHeight:1);
  if(!delta)return;
  if(now-lastWheelAt>400||Math.sign(delta)!==Math.sign(wheelDistance))wheelDistance=0;
  lastWheelAt=now;
  if(now-lastWheelChange<180){wheelDistance=0;return}
  wheelDistance+=delta;
  if(Math.abs(wheelDistance)<60)return;
  showImage(currentIndex+(wheelDistance>0?1:-1));
  wheelDistance=0;
  lastWheelChange=now;
},{passive:false});
