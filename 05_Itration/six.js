// const coding = ["js", "ruby", "cpp", "python"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// } )

// console.log(values);


// const myNum = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 , 9, 10]
// const newNums = myNum.filter( (num) => {
//     return num <= 6
// } )
// console.log(newNums);


// const myNum = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 , 9, 10]
// const newNums = myNum.filter( (num) => num <= 6 )
// console.log(newNums);


// const myNum = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 , 9, 10]
// newNums = []
// myNum.forEach(items => {
//     if (items <7){
//         newNums.push(items)
//     }
// });
// console.log(newNums)



const Books = [
    {title: "book1", genre: "tech", published : 1994, edition : 2022},
    {title: "book2", genre: "history", published : 1997, edition : 2023},
    {title: "book3", genre: "tech", published : 1994, edition : 2024},
    {title: "book4", genre: "history", published : 1997, edition : 2025},
    {title: "book5", genre: "science", published : 1998, edition : 2022},
    {title: "book6", genre: "history", published : 1999, edition : 2021},
    {title: "book7", genre: "science", published : 2000, edition : 2019},
]

// const userBooks = Books.filter( (bk) => bk.genre === "history" )
const userBooks = Books.filter ( (bk) => {
    return bk.published >= 1995 && bk.genre ==="history"
} )

console.log(userBooks);