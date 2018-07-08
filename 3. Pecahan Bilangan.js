function convert(nilai){

    let toString = String(nilai)

    let result = []

    for( let i = 0; i < toString.length; i ++ ){
        let tampung = `${toString[i]}`
        for( let k = i+1 ; k < toString.length ; k ++ ){
            tampung += "0"
        }
        result.push(Number(tampung))
    }

    return result
}

console.log(convert(1345679))