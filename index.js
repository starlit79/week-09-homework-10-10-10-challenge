/*
@Challenge 01 - Write a function called 'takeTheSpace' when given a string of space separated numbers return 
the highest and lowest numbers.
@Example - takeTheSpace("1 2 3 4 5") would return "5, 1" and takeTheSpace("1 2 -3 4 5") would return "5, -3".
@Test - Make a function call of takeTheSpace()
*/
const takeTheSpace = (string) => {
    let stringArray = string.split(' ')
    let integerArray = []
    stringArray.forEach(num => {
        integerArray.push(parseInt(num))
    });
    integerArray.sort((a, b) => b - a)

    return `'` + integerArray.shift() + `, ` + integerArray.pop() + `'`
}

const string2 = "1 2 3 4 5"
const string3 = "1 2 -3 4 5"
console.log(takeTheSpace(string2))
console.log(takeTheSpace(string3))


/*
@Challenge 02 - Create a function called 'descendingSort' that sorts an array of numbers from highest value to lowest value. 
@Example - This array [42, 501, 24601, 88], should return [42, 88, 501, 24601]
@Test - Make a function call of descendingSort()
*/
const descendingSort = numArray => numArray.sort((a, b) => a - b)

let array2 = [42, 501, 24601, 88]
console.log(descendingSort(array2))

/*
@Challenge 03 - Create a function called 'toTheSecond' that converts hours into seconds.
@Example - 1 hour should return 3,600 seconds.
@Test - Make a function call of toTheSecond()
*/

const toTheSecond = hours => hours * 60 * 60 + " seconds"

console.log(toTheSecond(1))

/*
@Challenge 04 - Create a function called 'theRightMatch' that checks the equality of two different given parameters.
Both the value and the type of parameters need to be tested in order to have a matching equality.
@Example - (0, "0") should return false because the type does not match and (5, 5) should return true because the value and type match.
@Test - Make a function call of theRightMatch()
*/
const theRightMatch = (a, b) => a === b

console.log(theRightMatch(0, "0"))
console.log(theRightMatch(5, 5))

/*
@Challenge 05 - Bellow there is a function called 'iHaveThePower' with some broken code. The purpose of this function is to multiply ONLY
even numbers to the power of 3. As of right now odd numbers can be sent through and multiplied your job is to fix that.
@Example - sending through a 7 should return the "Not an even number" notice.
@Test - Make a function call of iHaveThePower().
*/
function iHaveThePower(number) {
    if (number % 2 === 0) {
        return Math.pow(number, 3)
    } else {
        return 'Not an even number'
    }
}

console.log(iHaveThePower(7))
console.log(iHaveThePower(2))

/*
@Challenge 06 - Bellow there is a function that returns true if two arrays contain identical values, and false otherwise. But testing the code, 
you see that something is not quite right. Rewrite the code so that it correctly checks if two arrays are equal.
Running the code yields the following results: checkEquals([1, 2], [1, 3]) returns as false, and checkEquals([1, 2], [1, 2]) returns as false.
@Example - checkEquals([1, 2], [1, 2]) should return as true.
@Test - Use the function call checkEquals([], [])
*/
function checkEquals(arr1, arr2) {
    let trueCount = 0
    //check if length of the array is equal first
    if (arr1.length === arr2.length) {
        for (let k = 0; k < arr1.length; k++) {
            for (let i = 0; i < arr2.length; i++) {
                if (arr1[k] === arr2[i]) {
                    trueCount++
                }
            }
        }
        console.log({ trueCount })
    } if (trueCount === arr1.length) {
        return true
    } else {
        return false
    }//if either two conditions are met then return false
}

//this function will work even if the array length is not equal
console.log(checkEquals([1, 2], [1, 3]))
console.log(checkEquals([1, 2], [1, 2]))
console.log(checkEquals([1, 2, 3], [1, 2]))
console.log(checkEquals([1, 2, 3], [1, 2, 3]))


/*
@Challenge 07 - Created a function called 'theCount' that returns the total number of parameters passed in.
@Example - theCount(index, array, random) would return a 3 because there are a total of 3 parameters.
@Test- Make a function call of theCount().
*/

const theCount = (index, array, random) => {
    let arrayItems = []
    arrayItems.push(index)
    arrayItems.push(array)
    arrayItems.push(random)
    return arrayItems.length
}

console.log(theCount('4, 3, 5', [2, 5, 4], 'lalalala'))
/*
@Challenge 08 - Below there is an array with the ingredients to a classic burger. Create a function called 'holdTheTomatoes'
and remove the tomatoes from the array.
@Example - ['Top bun', 'Lettuce', 'Onion', 'Cheese', 'Bottom bun'] should be returned.
@Test - Make a function call of holdTheTomatoes()
*/
let burger = ['Top bun', 'Lettuce', 'Tomato', 'Onion', 'Cheese', 'Bottom bun']

const holdTheTomatoes = ingredients => ingredients.filter( ingredient => ingredient !== 'Tomato')

console.log(holdTheTomatoes(burger))

/*
@Challenge 09 - Below there is code which attempts to add a clone of an array to itself. There is no error message, 
but the results are not as expected. Can you fix the code?
@Example - copyCat([1, 1]) should return [1, 1, [1, 1]]
@Test - Use the function call copyCat([1, 1])
*/
function copyCat(arr) {
    let newArray = []
    arr.forEach(item => newArray.push(item))
    arr.push(newArray)
    return arr
}

console.log(copyCat([1, 1]))


/*
@Challenge 10 - Create a function called 'justEnough' all the items below in the objects are 20% off and you have $438 dollars and you
must spend EXACTLY $438 INCLUDING the tax. You can not be over or below the 438. Once you know which items you will be getting
move them into a new variable called 'shoppingCart' and return your shopping cart.
@Example - You must first create an equation that determines the new price of these items then adds the tax onto that price. 
For example 20% off 400 is 320, plus the 2.50 the Apple Tv will cost 322.50.
@Make a function call of justEnough()
*/
let sales2 = {
    game: {
        title: 'Last of Us 2',
        price: 60,
        tax: 2.50
    },
    television: {
        title: 'Apple Tv',
        price: 400,
        tax: 2.50
    },
    book: {
        title: 'Javascript for Dummies',
        price: 40,
        tax: 2.50
    },
    candy: {
        title: 'M&Ms',
        price: 5,
        tax: 2.50
    },
    music: {
        title: 'Stranger In Town',
        price: 35,
        tax: 2.50
    },
    streaming: {
        title: 'Netflix',
        price: 15,
        tax: 2.50
    }
}


//const{game, television, book, candy, music, streaming} = sales
// Below is a simple function that returns the percentage of a number you can either implement this into your code
// or come up with your own method! *Note this returns what gets taken away not the new price.
// the console.log will return 80 instead of the 320 for the Apple tv.
let math = function percentage(num, per) {
    return (num / 100) * (100 - per);
}

const justEnough = (sales, budget) => {
    let priceArray = []
    let shoppingCart = []
    for(const prop in sales){
        // console.log({prop})
        // console.log(sales[prop].price)
        sales[prop].price = math(sales[prop].price, 20) + 2.5
        priceArray.push(sales[prop].price)
    }
    priceArray.sort((a, b) => b - a)
    
    for(let i = 0; i < priceArray.length; i ++){
        if(budget >= priceArray[i]){
            budget-=priceArray[i]
            console.log({budget})
            if(budget === 0){
                priceArray.splice(i+1)
            }
        }
    }
    for(const prop in sales){
        for(let i = 0; i < priceArray.length; i++){
            if (sales[prop].price === priceArray[i]){
                shoppingCart.push(`${prop}: $${sales[prop].price}`)
            }
        }
    }
    console.log({sales})
    return shoppingCart
}
let budget2 = 438
console.log(justEnough(sales2, budget2))
//console.log({sales})
//console.log(math(sales.television.price, 20))
//