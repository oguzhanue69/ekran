const main = document.querySelector(".main");
const Samsung = document.querySelector(".left");
const Apple = document.querySelector(".right");

//Burada sol kısmın maujse üzerine geldiğinde classına active ekliyoruz.
Samsung.addEventListener("mouseenter", function(){
    main.classList.add("active-left")
} )
//buradan sağ kısmın içine mouse geldiğinde active class'ı ekleniyor.
Apple.addEventListener("mouseenter", ()=>{
    main.classList.add("active-right")
})


// buradan sol kısımdan mouse ayrılınca classın'a active left kaldırılıyor.
Samsung.addEventListener("mouseleave", ()=>{
    main.classList.remove("active-left")
})

// burada sağ kısımdan mouse ayrılınca active-right classı kaldırılıyor.
Apple.addEventListener("mouseleave", ()=>{
    main.classList.remove("active-right")
})