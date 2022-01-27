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

var a = 'mobil' //global scope |dapat dipanggil di semua tempat
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

// function helo(sapa) {
//     var text = 'Assalamualaikum ' + sapa
//     return function () {
//         console.log(text)
//     }
// }
// var nama = helo("Ahik")
// nama()

//chalange
function name(nama, kelas) {
    var fullName = 'Nama : '+nama
    var kela = 'Kelas : '+kelas
    return function (){
        console.log(fullName +'\n'+kela)
    }
}
var cape = name('Lukman Hakim','rpl a')
cape()