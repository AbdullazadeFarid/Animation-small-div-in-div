

var conteiner = document.querySelector(".conteiner")

var small_conteiner = document.querySelector(".small_conteiner")

var fast = document.querySelector(".fast")

var slow = document.querySelector(".slow")


fast.addEventListener("click" , function(){
    small_conteiner.style.transform= `translateY(359px)`; // burda yaziriqki icindeki div x oxu uzre bugeder getsin
    small_conteiner.style.transition = 'all 1s ' //gedisin suretini azaldirig
setTimeout(function(){  // nece vaxtdan (asagda gosterdiyimiz 1400 du) sora hansi yere qayitdigini gosteririk

    small_conteiner.style.transform= `translateY(0px)`; //1400 mili saniye sora x oxu uzre evvelki koordinatina qayitsin yeni(0 a)

},1400)

})


slow.addEventListener("click" , function(){
    small_conteiner.style.transform= `translateY(359px)`;
    small_conteiner.style.transition = 'all 3s '
setTimeout(function(){

    small_conteiner.style.transform= `translateY(0px)`;

},3100)

})