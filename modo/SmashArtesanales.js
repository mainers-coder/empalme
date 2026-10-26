let cart = [], sum = 0;
function add(name, price) { cart.push({ name, price }); sum += price; render(); }
function render() { let h = ""; cart.forEach(c => h += `<div class='d-flex justify-content-between small'><span>${c.name}</span><span>$${c.price}</span></div>`); document.getElementById('cart').innerHTML = h || "Carrito vacío"; document.getElementById('total').innerText = "$" + sum.toLocaleString('es-AR'); }
function pedir() { if (cart.length == 0) { alert("Carrito vacío ATR!"); return } let msg = "Hola Crazy! Quiero pedir:%0A" + cart.map(c => "- " + c.name + " $" + c.price).join("%0A") + "%0ATotal: $" + sum; window.open("https://wa.me/5491136277226?text=" + msg, "_blank"); }
