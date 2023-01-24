module.exports = function reverse (n) {
    let absValue = Math.abs(n); 
    let arr = Array.from(absValue.toString());
    let reverseValue = arr.reduce(function (previousValue, item) {
        return `${item}${previousValue}`;
    });
    let result = Number(reverseValue);
    return result;
}
