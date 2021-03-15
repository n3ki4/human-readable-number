module.exports = function toReadable (number) {
    let defaultNumLinks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let decimalNumLinks = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    let bigDecimalNumLinks = [20, 30, 40, 50, 60, 70, 80, 90]
    let defaultReadableNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let defaultDecimalReadableNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let bigDecimalReadableNum = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let splitNum = number.toString().split('')
    if (splitNum.length == 1) {
        for (let i = 0; i < defaultNumLinks.length; i++) {
            if (splitNum[0] == defaultNumLinks[i]) {
                return defaultReadableNum[i]
            }
        }
    } 
    else if (splitNum.length == 2) {
        if (splitNum[0] == 1) {
            for (let i = 0; i < decimalNumLinks.length; i++) {
                if (splitNum.join('') == decimalNumLinks[i]) {
                    return defaultDecimalReadableNum[i]
                }
            }
        } 
        else {
            if (splitNum[1] == 0) {
                for (let i = 0; i < bigDecimalNumLinks.length; i++) {
                    if (splitNum.join('') == bigDecimalNumLinks[i]) {
                        return bigDecimalReadableNum[i]
                    }
                }
            } 
            else {
                for (let i = 0; i < defaultNumLinks.length; i++) {
                    if (splitNum[1] == defaultNumLinks[i]) {
                        var tmp = defaultReadableNum[i]
                        splitNum[1] = "0"
                    }
                }
                for (let i = 0; i < bigDecimalNumLinks.length; i++) {
                    if (splitNum.join('') == bigDecimalNumLinks[i]) {
                        return bigDecimalReadableNum[i] + ' ' + tmp
                    }
                }


            }
        }
    }
    else if (splitNum.length == 3) {
        for (let i = 0; i < defaultNumLinks.length; i++){
            if (splitNum[0] == defaultNumLinks[i]){
                var first = defaultReadableNum[i]

            }
        }
        splitNum.splice(0,1)
        if (splitNum[0] == 1){
            for (let i = 0; i<decimalNumLinks.length;i++){
                if (splitNum.join('') == decimalNumLinks[i]){
                    var second = defaultDecimalReadableNum[i]
                }
            }
            return first+" hundred "+second
        }
        else{
            for (let i = 0; i < defaultNumLinks.length; i++) {
                if (splitNum[1] == defaultNumLinks[i]) {
                    var third = defaultReadableNum[i]
                    splitNum[1] = "0"
                }
            }
            for (let i = 0; i < bigDecimalNumLinks.length; i++) {
                if (splitNum.join('') == bigDecimalNumLinks[i]) {
                    var second = bigDecimalReadableNum[i]
                }
            }
            if (third === 'zero' && second != undefined){
                return first+" hundred "+second
            }
            else if (second === undefined && third != 'zero'){
                return first+' hundred '+third
            }
            else if (second === undefined && third === 'zero'){
                return first+' hundred'
            }
            else{
                return first+' hundred '+second+' '+third
            }

        }


    }
}
