const cards=Array.from(document.querySelectorAll('.photo-button'));
const dialog=document.getElementById('lightbox');
const image=document.getElementById('lightbox-image');
const label=document.getElementById('lightbox-label');
const count=document.getElementById('lightbox-count');
const closeButton=document.getElementById('lightbox-close');
let currentIndex=0,opener=null;
function showImage(index){currentIndex=(index+cards.length)%cards.length;const card=cards[currentIndex];image.src=card.dataset.full;image.alt=card.querySelector('img').alt;label.textContent=card.dataset.label;count.textContent=`${currentIndex+1} / ${cards.length}`}
cards.forEach((card,index)=>card.addEventListener('click',()=>{opener=card;showImage(index);dialog.showModal();closeButton.focus()}));
closeButton.addEventListener('click',()=>dialog.close());
document.getElementById('lightbox-prev').addEventListener('click',()=>showImage(currentIndex-1));
document.getElementById('lightbox-next').addEventListener('click',()=>showImage(currentIndex+1));
dialog.addEventListener('close',()=>{image.removeAttribute('src');opener?.focus()});
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();showImage(currentIndex+(event.key==='ArrowRight'?1:-1))}});
let touchStartX=0;dialog.addEventListener('touchstart',event=>{touchStartX=event.changedTouches[0].screenX},{passive:true});dialog.addEventListener('touchend',event=>{const delta=event.changedTouches[0].screenX-touchStartX;if(Math.abs(delta)>65)showImage(currentIndex+(delta<0?1:-1))},{passive:true});
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
