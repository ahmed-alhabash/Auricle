let mega_menu = document.querySelector('.mega-menu');

mega_menu.addEventListener('click',()=>{
    document.querySelector('.side-bar').classList.toggle('open')
}) 

let btn =document.querySelector('.buttons-up-an-down')
window.onscroll =()=>{
    if(this.scrollY >= 1000){
    btn.style.display='block'
    }else{
        btn.style.display='none'
    }
}
btn.onclick =()=>{
window.scrollTo({
    top:0,
    behavior:'smooth'
})
}
// jquery code start
$(document).ready(function(){
    $('body').css('paddingTop',$('.navbar').innerHeight())

   
})


// jquery code end