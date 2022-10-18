const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (Close) {
    Close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
var quantity = document.getElementById('quantity');
var rate = document.getElementById('rate');
var amount = document.getElementById('amount');

amount= x*y;
document.getElementById('amount').innerHTML="amount";

