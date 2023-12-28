// getCookie();
// function getCookie(name){
//     const dCookie = decodeURIComponent(document.cookie)
//     console.log(dCookie);
// }



// document.cookie= "age=19; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"; 


console.log(document.cookie.substring(0,14));


// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// context.font = "50px Arial";
// context.textAlign="center";
// context.fillText("Merhabalar",0,50);
// context.lineWidth=1;
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,500);
// context.lineTo(50,200);
// context.stroke();
// context.fill();


// kullanma();
// async function kullanma(){
//     console.log(await deneme());
// }
// async function deneme(){
//     a=1+1;
//     if(a==2){
//         return "Geriye basarili bir sekilde deger donduruldu."    
//     }
//     throw "Bir hata oldu";
// }


// let p =new Promise((oldu,olmadi)=>{
//     a=3;
//     if(a==3){
//         oldu("Islem gerceklesti");
//     }else{
//         olmadi("Islem gerceklesmedi");
//     }
// })


// p.then((mesaj) => console.log(mesaj)).then((mesaj) => console.log(mesaj)).catch((mesaj) => console.log(mesaj));
