function add(...num){
    return num.reduce((crr,acc) =>{
        return crr + acc
    })
}
function product(...num){
    return num.reduce((crr,acc) =>{
        return crr * acc
    })
}

module.exports = {
    add,
    product
}