//#1
function maxAndMin(arr) {
    return Math.max(arr) + " " + Math.min(arr);
}
console.log(maxAndMin([5, 9, 1, 24]));
console.log(maxAndMin([9])); //9 9 
console.log(maxAndMin([])); // 0 0 
//#2
function isSquare(x) {
    let a = 0;
    let b = 0;

    if(number < 0) {
        return false;
    }

    for(let i = 0; i <= x; i++){
        if(a * b == x){
            return true;
        }
        else if(a == x, b == x){
            return false;
        }
        else {
            a++
            b++
        }
    }
  }
  console.log(inSquare(-1));

/////////////////////////////////////////
//#3
function filterStrings(arr) {
    const newArr = [];
    
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i].length == 4) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterStrings(["Dima", "Nikita", "Alexandr", "Egor"]))
////////////////////////////////////////////////////////////////////////
function isPrime(x){
    if(x <= 1){
        return false;
    }
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}
isPrime(28);
function getPrimes(x) {
    let primes = [];
    while(i <= x){
    for (let i = 2; i < x; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes
    }
}
////////////////////////////////////////////////////////////////
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    
    addBack(value) {
        const newNode = new Node(value, null);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.length++;
    }

    deleteBack() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
        } else {
            let current = this.head;
            let previous = null;

            while (current.next) {
                previous = current;
                current = current.next;
            }

            previous.next = null;
        }

        this.length--;
    }

    getValueByIndex(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        return current.value;
    }

    addFront(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    deleteFront() {
        if (this.head) {
            this.head = this.head.next;
            this.length--;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

class HighScores {
    constructor() {
        this.scores = new SinglyLinkedList();
        this.maxScores = 10;
    }

    addScore(score) {
        this.scores.addToFront(score);
    }

    removeScore() {
        this.scores.deleteFront();
    }

    printScores() {
        this.scores.print();
    }
}
// Определяет, является ли переданная строка палиндромом.
// Примеры:
// шалаш - true
// непалиндром - false
function isPalindrome(str) {
    let n = ''
    for (let i = str.length - 1; i >= 0; --i) {
        n += str[i]
    }
    return str == n
}
    console.log(isPalindrome('шалаш'))
    console.log(isPalindrome('непалиндром'))
// Определяет является ли переданное число простым
    function isPrime(x){
        if(x <= 1){
            return false;
        }
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    }
    isPrime(28);
    
// Возвращает массив всех простых чисел до limit
    function getPrimes(x) {
        let primes = [];
        while(i <= x){
        for (let i = 2; i < x; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        return primes
        }
    }

////////////////////////////////////////////
class Stack {
    constructor() {
        this.data = [];
        this.t = -1;
    }

    size() {
        return t + 1;
    }

    isEmpty() {
        if (this.t === -1) return true;
        return false;

    }

    top() {
        if (this.isEmpty) return null;

        return this.data[this.t];
    }

    push(value) {
        this.data[this.t + 1] = value;
        this.t++;
    }

    pop() {
        this.t--;
    }
}