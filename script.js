var m1 = document.getElementById('moins1');  
var p1 = document.getElementById('plus1');
var n1 = document.getElementById('numero1');
var m2 = document.getElementById('moins2');  
var p2 = document.getElementById('plus2');
var n2 = document.getElementById('numero2');
var numero1 = 1;
var numero2 = 1;
var ship = document.getElementById('shipping');
var total = document.getElementById('total');
var prix_bag = 54.99;
var prix_shoes = 74.99;
var prix_tot = 148.98;
var con = document.getElementById('continue');
var buy = document.getElementById('buy');

function moins1() {
    numero1 -= 1;
    if (numero1<0){
        numero1 = 0
    }
    prix_tot = Math.round((numero1*prix_bag+numero2*prix_shoes)*100)/100;
    if (prix_tot===0){
        ship.innerHTML = "$"+0;
    }
    else{
        ship.innerHTML = "$"+19;
    }
    total.innerHTML = "$"+ prix_tot
    n1.innerHTML = numero1;
}
function plus1() {
    numero1 += 1;
    n1.innerHTML = numero1;
    prix_tot = Math.round((numero1*prix_bag+numero2*prix_shoes)*100)/100;
    if (prix_tot===0){
        ship.innerHTML = "$"+0;
    }
    else{
        ship.innerHTML = "$"+19;
    }
    total.innerHTML = "$"+ prix_tot
}function moins2() {
    numero2 -= 1;
    if (numero2<0){
        numero2 = 0
    }
    prix_tot = Math.round((numero1*prix_bag+numero2*prix_shoes)*100)/100;
    if (prix_tot===0){
        ship.innerHTML = "$"+0;
    }
    else{
        ship.innerHTML = "$"+19;
    }
    total.innerHTML = "$"+ prix_tot
    n2.innerHTML = numero2;
}function plus2() {
    numero2 += 1;
    prix_tot = Math.round((numero1*prix_bag+numero2*prix_shoes)*100)/100;
    if (prix_tot===0){
        ship.innerHTML = "$"+0;
    }
    else{
        ship.innerHTML = "$"+19;
    }
    total.innerHTML = "$"+ prix_tot
    n2.innerHTML = numero2;
}
function pop(){
    alert("🚀🚀Votre compte est bien enregistré ! 🚀🚀")
}
function pop2(){
    alert("🎉🎉Merci pour votre achat, votre commande a bien été enregistrée ! Le montant de votre commande est de: "+prix_tot+"$ !")
}
m1.onclick = moins1;
p1.onclick = plus1;
m2.onclick = moins2;
p2.onclick = plus2;
con.onclick = pop;
buy.onclick = pop2;
