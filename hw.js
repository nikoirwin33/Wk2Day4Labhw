// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

function Grade(x){
    if(x >= 80){
        console.log("You did a good job!")
    }else if (x >= 70){
        console.log("Keep trying")
    }else if (x >=60){
        console.log("ehhhhh")
    }else if (x >=55){
        console.log("Not too good")
    }else if(x <= 55){
         console.log("Bad Grade but you'll get em next time!")
    }
//     
//     Grade(80)
//======================================================================================================
// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

  function countByTen(){
    for(let i = 0; i <= 100; i = i + 10){
      console.log(i)
    if(i ==100){
          i = 100 
      }
  }
  }
  
  // countByTen()
   
//======================================================================================================  

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

      function change(x, y){
         let z = 0
        let i = 0
       while (i < y - x){
          z += 4
          i++
      }
    }
       // console.log(z)
      

      // change(20,50)
//======================================================================================================

//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paid and amount cost

let bills = [100, 50, 20, 10]

function change(amountPaid){
let pChange = new Array(bills.length).fill(0)
let count = 0;
while(amountPaid >= 0 && count < bills.length){
    
    let bill = bills[count]
    let neededBack = Math.min(Math.floor(amountPaid/bill))
    amountPaid -= bill *= neededBack
    pChange[count] = neededBack
    count++
}
return pChange

}

// console.log(change(5490))


//======================================================================================================


// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for(let i = 0; i <=100; i++) {
    
  if(i % 3 == 0 && i % 5 == 0){
      console.log(i + ' FizzBuzz')
  }else if(i % 5== 0 && i % 3 !== 0){
      console.log(i + ' Buzz')
  }else if(i % 3 == 0){
      console.log(i + ' Fizz')
  }else{
//       console.log(i)
}
}
}
