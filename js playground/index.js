// nameShuffler('john McClane'); => "McClane john"
//code wars problems 
// shuffle name 
function nameShuffler (name) {
    let newOrder = name.split(' ').reverse().join(' ')

    // console.log(newOrder)
}
// nameShuffler('john McClane')
// remove exclamation from end of sentence 
function remove (string) {  
    let newWord = string.replace(/!+$/g, '')
    console.log(newWord)
    return newWord;
  }
//   remove('Hi!')
function camelCase (string) {
    let word = string.replace(/-|_+/g, ' ').split(' ')
    word1 =word.shift()
    word2 = word.splice(0).map((word) => word.charAt(0).toUpperCase()+ word.slice(1)).join('')
    word3 =word1 + word2
    
    console.log(word3)
}
camelCase('the-works-three')
