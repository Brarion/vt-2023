function isHappy(n: number): boolean {
    function getNext(n: number): number {
        let sum = 0;
        while (n > 0) {
            const digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        return sum;
    }

    let slow = n;
    let fast = getNext(n);

    while (fast !== 1 && fast !== slow) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
}

const result1 = isHappy(19); // Возвращает true
const result2 = isHappy(2); // Возвращает false

console.log(result1);
console.log(result2);