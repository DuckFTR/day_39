'use strict'

//функция определения псевдомассива
function isPseudoArray(obj) {
    if (obj.hasOwnProperty('length') === true && obj.hasOwnProperty('0') === true) {
        return true;
    } else {
        return false
    }
}

let example = {
    name: 'john',
    surname: 'carl',
    0: 23,
    length: 3,
}


console.log('Объек - псевдомассив?' + ' ' + isPseudoArray(example));

//функция определения иттерируемого объекта


let example2 = {
    name: 'john',
    surname: 'carl',
    0: 23,
    length: 3,
    [Symbol.iterator]() {
        return {
            fullName: this.name + this.surname
        }
    }
}

function isIteratedObj(obj) {
    if (Object.getOwnPropertySymbols(obj).length === 0) {
        return false
    } else {
        return true
    }
}


console.log('Объек - итерируемый?' + ' ' + isIteratedObj(example2))

//функция возврата массива со значениями определенного свойства

const charactersArr = [
    {'name': 'barney', 'age': 36},
    {'name': 'fred', 'age': 40},
    {'name': 'floyd', 'age': 27},
    {'name': 'george', 'age': 34}
];

function pluck(arr, propName) {
    return arr.map(obj => {
        return obj[propName]
    })
}

console.log(pluck(charactersArr, 'age'))

//функция количества свойств в объекте

let a = {a: 1, b: 2};
let b = {};

function count(obj) {
    let howMany = 0;
    for (let key in obj)
        howMany++;
    return howMany
}

console.log(count(a));
console.log(count(b));

//функция POST
function Post(title, text, published_at, published, deleted) {
    this.title = title;
    this.text = text;
    this.published_at = published_at;
    this.published = published;
    this.deleted = deleted;
}

let post = new Post('Статья', 'Текст статьи', Date.now(), true, false)

console.log(post.published_at)

Object.defineProperties(post, {
    'title':
        {
            configurable: false,
        },
    'text':
        {
            configurable: false
        },
    'isAllow':
        {
            get: function () {
                return this.published === true && this.deleted === true;
            },
            configurable: false,
            enumerable: true
        },
    'published':
        {
            writable: false,
            configurable: false,
            enumerable: true
        },
    'deleted':
        {
            writable: false,
            configurable: false,
            enumerable: true
        },
    'published_at':
        {
            get() {
                let a = new Date ()
                return a.getDate()+'.'+a.getMonth()+ '.'+a.getFullYear() + ' ' + a.getHours()+':'+a.getMinutes()
            },
            configurable: false,
            enumerable: true
        },
    'publishedSet':
        {
            set(newDate) {
                this.published_at = newDate
            },
            configurable: false,
            enumerable: false
        }
});

console.log(post.published_at)

console.log(Object.keys(post))

