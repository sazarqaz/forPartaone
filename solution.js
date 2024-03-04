const fs = require('fs');
const { performance } = require('perf_hooks');

function readNumbersFromFile(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    const numbers = data.trim().split('\n').map(Number);
    return numbers;
}

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

function findMedian(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
        return sorted[middle];
    }
}

function findMean(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

function findIncreasingSequence(numbers) {
    let maxLength = 0;
    let currentLength = 1;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength){
                maxLength = currentLength;
            }
            currentLength = 1;
        }
    }

    if (currentLength > maxLength){
        maxLength = currentLength;
    }
    
    return maxLength;
}

function findDecreasingSequence(numbers) {
    let maxLength = 0;
    let currentLength = 1;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] <= numbers[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
            currentLength = 1;
        }
    }

    if (currentLength > maxLength) {
        maxLength = currentLength;
    }

    return maxLength;
}

function main() {
    const filename = 'C:/Users/kyi/Desktop/JavaScript/10m.txt'; //вкажіть свій шлях до файлу з числами

    const start = performance.now();
    const numbers = readNumbersFromFile(filename);
    
    console.log('Максимальне число:', findMax(numbers));
    console.log('Мінімальне число:', findMin(numbers));
    console.log('Медіана:', findMedian(numbers));
    console.log('Середнє арифметичне значення:', findMean(numbers));
    console.log('Найбільша послідовність, яка зібльшується:', findIncreasingSequence(numbers));
    console.log('Найбільша послідовність, яка зменшується:', findDecreasingSequence(numbers));

    const end = performance.now();
    
    console.log('Час виконання у секундах:', (end - start)/1000);
}

main();




