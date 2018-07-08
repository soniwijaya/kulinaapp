function panjangbilangan(panjang){

    let bilanganpertama = 0
    let bilangankedua = 1
    let tampung = 0
    let deret = []

    for(let i=0; i < panjang; i++){
        
        deret.push(bilanganpertama)
        tampung = bilanganpertama + bilangankedua
        bilanganpertama = bilangankedua
        bilangankedua = tampung

    }

    return deret
}

console.log(panjangbilangan(20))