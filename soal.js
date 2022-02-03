/**
 * terdapat 2 function
 * tahun <= 2001 itu tidak bayar pajak
 * 
 * cc >= 150 harus bayar pajak
 */

function tahun(motor) {
    return motor >= 2001
}

function cc(motor) {
    return motor >= 150
}

function pajaq(motor, callback) {
    let a = callback(motor)
    if(a){
        console.log(`motor ${motor} harus bayar pajak`)
    }else{
        console.log(`motor ${motor} tidak bayar pajak`)
    }
}
pajaq(1999, tahun)