function sum(...num){
    return num.reduce((curr,acc) => {
        return curr + acc
    })
}

module.exports = sum;