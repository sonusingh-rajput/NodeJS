function product(...num){
    return num.reduce((crr,acc)=>{
        return crr*acc
    })
}

module.exports = product