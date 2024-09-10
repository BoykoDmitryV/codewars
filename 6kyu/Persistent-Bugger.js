function persistence(num) {
    let counter = 0

    while (num >= 10) {
        num = num.toString().split('').reduce((a, b) => a * b);
        counter++
    }
    return counter
}