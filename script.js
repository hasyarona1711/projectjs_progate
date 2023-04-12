let angka='';
let operator='';
let hasil='0';
// mengambil angka
const numbers = document.querySelectorAll(".number");

// console.log(numbers);
numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputAngka(event.target.value);
        updateLayar(hasil);
    });
});

//menampilkan angka di screen kalkulator
const layarKalkulator = document.querySelector(".calculator-screen");
const updateLayar = (number)=>{
    layarKalkulator.value = number;
}

//input angka ke layar
const inputAngka = (number)=>{
    if(hasil === '0'){
        hasil = number;
    }else{
        hasil += number;
    }
}

//mengambil operator dari html
const operators = document.querySelectorAll(".operator");
operators.forEeach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
    });
});

//input operator ke kalkulator
const inputOperator = (operator)=>{
    angka = hasil;
    perhitunganOperator = operator;
    hasil = '0';
}

//mengambil sama dengan
const samadengan =  document.querySelector(".sama-dengan");
samadengan.addEventListener("click",()=>{
    hitung();
    updateLayar(hasil);
});

//menghitung
const hitung = ()=>{
    let total = '';
    switch(perhitunganOperator){
        case '+':
            total = parseInt(angka) + parseInt(hasil);
            break;
        case '-':
            total = parseInt(angka) - parseInt(hasil);
            break;
        case '*':
            total = parseInt(angka) * parseInt(hasil);
            break;
        case '/':
            total = parseInt(angka) / parseInt(hasil);
            break;
        default:
            return;
    }
    hasil = total;
    perhitunganOperator='';
}

//ambil tombol hapus
const hapusTombol = document.querySelector(".hapus-semua");
hapusTombol.addEventListener("click",()=>{
    hapusSemua();
    updateLayar(angka);
})
//hapus semua angka
const hapusSemua = ()=>{
    angka = '';
    hasil = '';
    perhitunganOperator = '';
}


