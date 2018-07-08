// konsep pencarian bilangan prima
// contoh angka 11 % 1 = 0 diskip perulangan mulai dari 2. karena brp pun 11 mod 1 adalah 0
// 11 % 2 = 1  15 % 2 = 1
// 11 % 3 = 2  15 % 3 = 0 <-- bukan bilangan prima
// 11 % 4 = 3  
// 11 % 5 = 1
// 11 % 6 = 5
// 11 % 7 = 4
// 11 % 8 = 3
// 11 % 9 = 2
// 11 % 10 = 1 <-- bilangan prima karena habis dibagi dirinya sendiri

function angkaPrima(angka) {
    var cek = true;
    for(var i=2;i<angka;i++){
        if(angka%i==0){
            cek = false;
            return false;
        }
    }
    if(cek==true){
        return true;
    }
}
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false