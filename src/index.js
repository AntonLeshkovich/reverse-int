module.exports = function reverse (n) {
    let arr = Array.from(n.toString());
    let reverseValue = arr.reduce(function (previousValue, item) {
        return Number(`${item}${previousValue}`);
    });
    return reverseValue;
}
