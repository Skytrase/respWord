let images = document.querySelectorAll('.imm');
console.log(images)
let current = 0;
setInterval(() => {
  for(let i=0; i<images.length;i++){
    images[i].classList.add('opacity0');
  }
  images[current].classList.remove('opacity0');
  if(current+1 == images.length){
    current = 0;
  }
  else{
    current++;
  }
}, 6000);
function slider() {
for(let i=0; i<images.length;i++){
  images[i].classList.add('opacity0');
}
images[current].classList.remove('opacity0');
if(current+1 == images.length){
  current = 0;
}
else{
  current++;
}
}
slider()
/*-------EDN SLIDER------------- */
let progress = document.getElementById('scrollline');
let totalHeight = document.body.scrollHeight - window.innerHeight;


    window.onscroll = () => {
let progressHeight = (window.pageYOffset / totalHeight)*100;
progress.style.width = progressHeight + '%'}
  /*-----------------End scroll */
  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});
/* -----------------End MunuScrol*/
