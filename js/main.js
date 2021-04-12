const form = document.forms.transport;
const elInputYear = document.querySelector('.year');
const elInputPrice = document.querySelector('.price');
const radioCar = document.querySelector('.car');
const radioECar = document.querySelector('.e-car');
const radioMoto = document.querySelector('.moto');
const radioTrucks = document.querySelector('.trucks');
const btnCalk = document.querySelector('.btn-calk');
const result = document.querySelector('.result');
const input = document.querySelector('input');


form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    

    const data = new FormData (ev.target);
    const a = Number( elInputYear.value );
    const b = Number( elInputPrice.value );
    const val = data.get('trans');
    
    
    
    

    

    const sum = b * val * a / 1000;

    result.innerHTML = sum;
});