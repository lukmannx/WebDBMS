//!identifier

/**
 * identifire adalah penamaan variabel, fungsi ataupun variabel
 * karakter pertamanya hanya bisa huruf a-z, atau A-Z dan simbol undersore atau dollar
 * tidak boleh menggunakan angka d depan
 * tidak boleh menggunakan bahasa yang sudah ada default di js
 */

//!statement

/**
 * statement = suatu pernyataan js yang paling dasar dan memiliki tugas tertentu
 */

/*let name = "hello world" //statement dasar/biasa
console.log(name)

//!expression
/**
 * expression merupakan ekspresi js yang berfungsi untuk menghasilkan nilai tertentu
 */

/*let first = 1
let second = 2
let result = first + second
//console.log(result)

if(result>1){
    console.log('maka hasilnya'+result+'cm')
}

//!scope
/**
 * cakupan kode agar bisa mengakses atau membatasi
 */

//!global scope
/**
 * global scope merupakan cakupan di seluruh file
 */

/**var a = "Halo rekan rekan"
function first(){
    console.log(a)
}

function second(){
    a = 'nilainya sudah di ubah'
    console.log(a)
}

first()
second()

//!jenis variabel
/**
 * var = bersifat global tidak bisa block/bisa di ubah
 * let = bersifat scope/bisa di ubah
 * const = bersifat scope/tidak bisa di ubah
 */

/*var a = 'mobil' //global scope |dapat dipanggil di semua tempat
function kendaraan(){
    a = 'sepeda' //local scope |dapat dipanggil hanya di dalam function
    console.log(a)
    if(true){
        const b = 'motor' //block scope |hanya dipanggil dalam block
        console.log(b)
    }
}
kendaraan() //memanggil function kendaraan

//!closure
/**
 * closure adalah cara mengakses variabel dari parent scope di dalam child scope parent
 */

/*function helo(sapa) {
    var text = 'Assalamualaikum ' + sapa
    return function () {
        console.log(text)
    }
}
var nama = helo("Ahik")
nama()

//chalange

//? function name(nama, kelas) {
//?     var fullName = 'Nama : '+nama
//?     var kela = 'Kelas : '+kelas
//?     return function (){
//?         console.log(fullName +'\n'+kela)
//?     }
//? }
//? var cape = name('Lukman Hakim','rpl a')
//? cape()

//!tipe data pada js
/**
 * tipe data adalah karakteristik dari nilai sebuah data, di js terdapat 7 yaitu: null, undifined, boolean, number, bigInteger, string, dan symbol (es6)
 * dan tipe data kompleks object
 * 
 * loosely typed yaitu variabel tidak menentukan sebuah tipe data, melainkan nilai yang menentukan tipe data tersebut
 */

// let a = 'saya'
// let b = 2
// let z = null

// console.log(typeof z)

/**
 * tipe data undifined
 * tipe data yang nilainya kosong atau tidak di definisikan
 */

/**
 * tipe data null
 * tipe data primitif yang nilainya kosong atau null
 */

// let a = null
// console.log(a)

/**
 * String 
 * String merupakan tipe data yang menampung katrakter symbolnya '',"",``
 */

// let a = 18
// if(a <= 17){
//     a = 'anda belum cukup umur'
//     console.log(a/2)
// }else{
//     a = 'cukup umur'
//     console.log(a)
// }

//  let d = 'faiq paig'
//  console.log(d.length)
 
//  let kata = 'helloworld'
//  for(let i = 0; i < kata.length; i++){
//      console.log(kata[i])
//  }

//!menghitung jumlah
let a = ''

//!
/**
 * Boolean
 * sebuah tipe data yang menentukan kebenaran, dan hanya memiliki 2 nilai yaitu true dan false
 */

// let belajar = true
// if(belajar){
//     console.log('Kelas ini sedang belajar')
// }

//!Object
/**
 * object merupakan tipe data complex yang berisis props(properti)
 */

// let object = {} // null
// console.log(typeof object)

// let identitas = {
//     firstName : 'Dias',
//     lastName : 'Utsman',
//     email : 'hmberr@gmail.com',
//     instagram : 'utssrr',
//     addres : {
//         planet : 'bekasi',
//         number : '17',
//         street : 'jalan robod'
//     }
// }
//cara memanggil object

// console.log('Nama saya : '+identitas.firstName)
// console.log('saya tinggal di'+identitas.addres.planet)

//cara memanggil object dengan array
// console.log(identitas['firstName']+identitas.lastName)
// console.log(identitas['addres']['number'])
// let tugas = {
//     kendaraan : {
//         mobil : 'pejit',
//         motor : 'supraX',
//         sepeda : 'bemeex'},
//     jalan : 'jalan berkah',
//     kota : 'bekasi',
//     platNomer : 'jabodetabek',
//     kereta : {
//         namaKa : 'Argo Bromo anggrek',
//         tujuan : 'senen - pasar turi',
//     } //    key      //value
    
// }

// console.table(tugas)

/*const mobil = 'pejit'
const motor  = 'harley'
 console.log(`Saya punya mobil ${mobil} dan motor saya ${motor}`)

 //shorthand named property
 let [a,b,c] = [[true,2,3]]

 //ternarary operator //seperti if else tapi lebih singkat
 let a = 9
  a<10
  ? console.log('nilai a kurang dari 10')
  : console.log('nilai a lebih dari 10')

/**
 ** function
 * merupakan sebuah blok kode untuk membungkus sebuah proses penulisan kode agar tidak diulangi kembali
 */
//?normal function
/*
function name(params) {
    console.log('saya belajar javaScript')
}
name()

//?anonymous function

const anon = function(param){
    console.log(param)
}
anon('Saya belajar javaScript')

//?arrow function

let third = (parameter) => {
    console.log(parameter)
}
third("Ini adalah arrow function")
*/
//*high-order-function
//fungsi yang menerima argumen berupa fungsi lain serta return bisa berupa fungsi juga
/*
function genap(number) {
    return number % 2 == 0
}

function print(number, callback) {
    let isTrue = callback(number)
    if (ifTrue){
        console.log(`${number} adalah bilangan genap`)
    }else{
        console.log(`${number} adalah bilangan ganjil`)
    }
}
print(10, genap)
*/
//ex
function kecepatan(mobil) {
    return mobil >= 100
}
function warna(mobil) {
    return mobil == 'merah'
}
function kendaraan(mobil, callback) {
    let a = callback(mobil)
    if(a){
        console.log(`mobil dengan kecepatan ${mobil} adalah mobil saya`)
    }else{
        console.log(`mobil dengan kecepatan ${mobil} adalah bukan mobil saya`)
    }
}
kendaraan(100, kecepatan)

//normal function
/*
function genap(number) {
    return number % 2 == 0
}

function print(number) {
    let isTrue = genap(number)
    if (isTrue) {
        console.log(`${number} adalah bilangan genap`)
    }else{
        console.log(`${number} adalah bilangan ganjil`)
    }
}
*/