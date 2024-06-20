let celcious = document.getElementById('cel');
let fahrenhiet = document.getElementById('fah');
let kelvin = document.getElementById('kel');
let btn = document.getElementById('mybtn');
let ctemp;
let ftemp;
let ktemp;

celcious.addEventListener('input', function(){
    ctemp = parseInt(celcious.value);
    ftemp = parseInt((ctemp*(9/5)) + 32);
    ktemp = parseInt(ctemp+273);

    fahrenhiet.value=ftemp;
    kelvin.value=ktemp;
})
kelvin.addEventListener('input', function(){
    ktemp = parseInt(kelvin.value);
    ctemp = parseInt(ktemp-273);
    ftemp = parseInt((ktemp - 273) * (9/5) + 32);

    fahrenhiet.value=ftemp;
    celcious.value=ctemp;
})
fahrenhiet.addEventListener('input', function(){
    ftemp = parseInt(fahrenhiet.value);
    ktemp = parseInt((ftemp -32) * (5/9) + 273);
    ctemp = parseInt((ftemp - 32) * (5/9));

    kelvin.value=ktemp;
    celcious.value=ctemp;
})
btn.addEventListener('click',()=>{
    celcious.value="";
    fahrenhiet.value="";
    kelvin.value="";
})