//lvl 71
let result = ''
function formatePhoneNumber(a){
    result = ''
    result += '('
    result = result + String(a[0]) + String(a[1]) + String(a[2])
    result += ') '
    result = result + String(a[3]) + String(a[4]) + String(a[5])
    result += '-'
    result = result + String(a[6]) + String(a[7]) + String(a[8]) + String(a[9])
    return result
}
console.log(formatePhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) //(012) 345-6789
//lvl 72
let add = ''
function sayHelloBye(a, b){
    add = ''
    result = ''
    if(b==1){
        add = 'Hello '
    }else if(b==0){
        add = 'Bye, '
    }else{
        add = 'Invalid'
    }
    result = add + a
    return result
}
console.log(sayHelloBye('Turgut', 1)) //Hello Turgut
console.log(sayHelloBye('my life', 0)) //Bye, my life
//lvl 73
let s = ''
function isSymmetric(x){
    s = String(x)
    if(s.split('').reverse().join('') == s){
        return true
    }else{
        return false
    }
}
console.log(isSymmetric(7227)) //true
console.log(isSymmetric(123)) //false
//lvl 74
function chatRoomStatus(a){
    result = ''
    if(a.length == 0){
        result = 'Никого нет в сети.'
    }else if(a.length == 1){
        result = a[0] + ' онлайн.'
    }else if(a.length == 2){
        result = a[0] + ' и ' + a[1] + ' в сети.'
    }else{
        result = a[0] + ', ' + a[1] + ' и ещё ' + String(a.length - 2) + ' онлайн.'
    }
    return result
}
console.log(chatRoomStatus([])) //Никого нет в сети.
console.log(chatRoomStatus(['Megakanal'])) //Мегаканал онлайн.
console.log(chatRoomStatus(['sasha1234', 'chel'])) //sasha1234 и chel в сети.
console.log(chatRoomStatus(['chel', 'sssr', 'Megakanal', 'ti kto'])) //chel, sssr и ещё 2 онлайн.
//lvl 75
let count = 0
function countTrue(a){
    count = 0
    for (i in a){
        if(a[i] === true){
            count++
        }
    }
    return count
}
console.log(countTrue([true, 2, false, true, false, true, true]))
console.log(countTrue([]))
//Тесты
// 1) 
//создайте пустой обьект 3мя способами
let obj1a = {}
let obj1b = new Object()
// let obj1c = Object.create() третий способ

// 2)
//создайте обьект с вашими персональными данными 
//пример: 
let obj2 = {
    name: 'Alex',
    age: 24
}
let obj2t = {
    name: 'Turgut',
    age: 13
}

// 3)
//чем является name в обьекте ниже?
let obj3 = {
    name: 'Alex',
    age: 24
}
//Ответ: ключом (свойством).

// 4)
//чем является 'Alex' в обьекте ниже?
let obj4 = {
    name: 'Alex',
    age: 24
}
//Ответ: значением.

// 5)
//создайте пустой обьект и добавте в него данные о человеке из ткста ниже в виде ключ/значения
/*
Здравствуйте меня зовут Самуил. Я родился 4 мая 1998го года. Мне 24 года.
Я вышел победителем в конкурсе Мистер Будующее.
У меня 2 награды по высшей математике.
Я люблю много читать и много программировать.
*/
let obj5 = {
    name: 'Samuil',
    birthdate: '04.05.1998',
    wonContests: 'Mister Future',
    mathAwards: 2,
    hobbies: ['Reading', 'Programming']
}

// 6)
//выведите в консоли значение name из обьекта
let obj6 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj6.name)

// 7)
//выведите в консоли значение age из обьекта
let obj7 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj7.age)

//8)
//выведите в консоли значение isMarried из обьекта
let obj8 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj8.isMarried)

//9)
//выведите в консоли имя первого ребенка из обьекта
let obj9 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    children: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj9.children[0])

//10)
//выведите в консоли имена всех детей с помощью for из обьекта
let obj10 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for(i of obj10.childs){
    console.log(i)
}

//11)
//выведите в консоли значение itMaster из обьекта
let obj11 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj11.awards.itMaster)

//12)
//выведите в консоли все свойства с помощью for...in из обьекта
let obj12 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for(i in obj12){
    console.log(i)
}

//13)
//выведите в консоли значение всех свойств с помощью for...in из обьекта
let obj13 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for(i in obj13){
    console.log(obj13[i])
}

//14)
//поменяйте имя дочери на 'Linda' в обьекте ниже
let obj14 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj14.childs[1] = 'Linda'

//15)
//поменяйте значение 'job' на 'menedjer' в обьекте ниже
let obj15 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj15.job = 'menedjer'

//16)
//выведите в консоли значение itMaster из обьекта c помощью квадратных скобок
let obj16 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj16['awards']['itMaster'])

//17)
//выведите в консоли значение name из обьекта c помощью квадратных скобок
let obj17 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj17['name'])

//18)
//удалите job из обьекта и поменяйте значение hasJob на 'false'
let obj18 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj18.job
obj18.hasJob = false

//19)
//удалите name из обьекта
let obj19 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj19.name

//20)
//удалите job из обьекта c помощью квадратных скобок и поменяйте значение hasJob на 'false'
let obj20 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj20['job']
obj20.hasJob = false