// // Call, apply va bind
// // bind()=> objectni funksiya yoki boshqa bir object bilan bog'lab beradi. BIrinchi argumenti nimani bog'lash kerak bo'lsa o'shani nomi
// // yoziladi va qolganlari ixtiyoriy. Chaqirish uchun qo'shimcha () qo'shib qoyilishi zarur
// // apply=> objectni funksiya yoki boshqa bir object bilan bog'lab beradi. BIrinchi argumenti nimani bog'lash kerak bo'lsa o'shani nomi
// // yoziladi va qo'shimcha ular [] bo'lishi shart.
// // call()=> objectni funksiya yoki boshqa bir object bilan bog'lab beradi. BIrinchi argumenti nimani bog'lash kerak bo'lsa o'shani nomi
// //  yoziladi va qolganlari ixtiyoriy


// const G5_dasturchilar=[
//     {
//         id:1,
//         name:"Abdulaziz",
//         age:17,
//         job:'developer'
//     },
//     {
//         id:2,
//         name:"Azizbek",
//         age:17,
//         job:'developer'
//     },
//     {
//         id:3,
//         name:"Hojiakbar",
//         age:15,
//         job:'developer'
//     },
//     {
//         id:4,
//         name:"Abdurahmon",
//         age:18,
//         job:'developer'
//     },
//     {
//         id:5,
//         name:"Shoaziz",
//         age:16,
//         job:'developer'
//     },
//     {
//         id:6,
//         name:"Asilbek",
//         age:22,
//         job:'develope'
//     },
//     {
//         id:7,
//         name:"Zuhriddin",
//         age:26,
//         job:'developer'
//     },
//     {
//         id:8,
//         name:"Bexruz",
//         age:17,
//         job:'develope'
//     },
//     {
//         id:9,
//         name:"Sobirjon",
//         age:16,
//         job:'developer'
//     },
//     {
//         id:10,
//         name:"Odina",
//         age:15,
//         job:'developer'
//     },
//     {
//         id:11,
//         name:"Ruqayya",
//         age: 18,
//         job:'deveoper'
//     },
// ]

// function AddUser(name='User',age=10-30,job='developer' ) {
//     G5_dasturchilar.push({ id: G5_dasturchilar.length + 1, name: name, agr: age, job: job });
//     return G5_dasturchilar
// }
// // console.log(AddUser('Dilshoda', 15));
// let bedelete=[...G5_dasturchilar]
// function Userdel(id) {
//     bedelete = bedelete.filter((item) => item.id != id);
//     return bedelete
    
// }
// // console.log(Userdel(2));

// function edit(id,age) {
//     return G5_dasturchilar.filter((item) => item.id == id ? item.age = age:item)
// }
// edit(1, 30);
// console.log(G5_dasturchilar);

















