// reduce
// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0 )

// console.log(myTotal);



// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "python Course",
        price : 3999
    },
    {
        itemName : "web Course",
        price : 1999
    },
    {
        itemName : "jMob dev course",
        price : 15999
    },
    {
        itemName : "Data science",
        price : 18999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);