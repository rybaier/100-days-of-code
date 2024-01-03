// nameShuffler('john McClane'); => "McClane john"
//code wars problems 
// shuffle name 
function nameShuffler (name) {
    let newOrder = name.split(' ').reverse().join(' ')

    // console.log(newOrder)
}
nameShuffler('john McClane')

// remove exclamation from end of sentence 
function remove (string) {  
    let newWord = string.replace(/!+$/g, '')
    console.log(newWord)
    return newWord;
  }
  remove('Hi!')

  //turn a string to camelCase
function camelCase (string) {
    let word = string.replace(/-|_+/g, ' ').split(' ')
    word1 =word.shift()
    word2 = word.splice(0).map((word) => word.charAt(0).toUpperCase()+ word.slice(1)).join('')
    word3 =word1 + word2
    
    console.log(word3)
}
// camelCase('the-works-three')

// let principal = this.targets.find("principal").value
// let interest = this.targets.find("interest").value
// let years = this.targets.find("years").value
// // let amount = principal * ((1 + (interest/100)) ** years)
// let annual = this.targets.find("annual").value

// this.targets.find("amount").innerHTML = "The amount you will have is: $" + amount 

let principal = 100
let interest = 2
let years = 10
let amount = 0
let annual = 5
// console.log(principal, years, interest, annual)
// let newPrincipal = 0
//  for (i = 0; i < years; i++){
//     newPrincipal = annual + (principal * (1 + (interest/100)))
//     principal = newPrincipal
//     amount = principal
//     console.log(newPrincipal, principal)        
// }
    

// console.log(amount, 'works')


function fizzBuzz(n) {
    // Write your code here
  
        for (let i = 1; i<=n; i++) {
            if( i % 3 === 0 && i % 5 === 0) { console.log('FizzBuzz')} 
            else if ( i % 3 === 0 ) { console.log('Fizz') } 
            else if ( i % 5 === 0)  console.log('Buzz')   
            else  console.log(i)
            
            }
    }
     
// fizzBuzz(15)

function matchingBraces(braces) {
    // Write your code here
    const matchSquare = '[]'
    const matchCurly = '{}'
    const matchParenth = '()'
    console.log(braces)
    let newArray = braces.toString().split(',')
    console.log(newArray)
    
}

// matchingBraces(['{}[]()', '(){]}'])

// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area
// between two points such that no points are inside the area.
// A vertical area is an area of fixed-width extending infinitely along the y-axis 
// (i.e., infinite height). The widest vertical area is the one with the maximum width.

// Note that points on the edge of a vertical area are not considered included in the area.
var maxWidthOfVerticalArea = function(points) {
    let width = points.length - 1
    points.sort()
    console.log(points, width)

   points.forEach(point => {
    let x = point[0]
    console.log(x)
   })
   
};

// maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])

// Given an array of integers nums and an integer target, return indices of the 
// two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function(nums, target) {
    for (let i = 0; i<nums.length; i++){
        for (let j = i+1; j<nums.length; j++){
            if (nums[i] + nums[j] == target) return [i,j]
        }
    }
     
  }; 

///////////////////////////////////////////////////////////////////////////////////////////////////
// 2024 

  // You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
  // starting with word1. If a string is longer than the other, append the additional letters onto the 
  // end of the merged string. Return the merged string.

  var mergeAlternately = function(word1, word2) {
    let word1Array = word1.split("");
    let word2Array = word2.split("")
    let newWord = []

    if (word1.length + word2.length < 1 || word1.length + word2.length > 100 ) 
        return 'A word size does not meet minimum or maximum requirements.'
    if (word1Array.length == word2Array.length) {
        for (let i = 0; i<word1Array.length; i++){
            newWord.push(word1Array[i])
            newWord.push(word2Array[i])
        }
        return newWord.join('')
   } else if (word1Array.length > word2Array.length) {
        for (let i = 0; i<word1Array.length; i++){
            newWord.push(word1Array[i])
            newWord.push(word2Array[i])
         }
        return newWord.join('')
   } else if (word1Array.length < word2Array.length) {
        for (let i = 0; i<word2Array.length; i++){
            newWord.push(word1Array[i])
            newWord.push(word2Array[i])
         }
        return newWord.join('')
   }
};

// mergeAlternately("morewords", "evenmorewords")

// 