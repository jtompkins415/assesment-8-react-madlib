function addCommas(num) {

    if(typeof num !== 'number'){
        throw Error('Input is not a number')
    }

    const out = num.toLocaleString();
    return out
}

module.exports = addCommas;