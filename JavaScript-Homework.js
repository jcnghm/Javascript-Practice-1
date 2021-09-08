//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// Ex 1

function findWords(){
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            console.log("Matched dog_name")
        } else {
            console.log("No Matches")}
    }
}
findWords()

// Ex 2

// function findWords(n,s){
//     return n.filter( element => s.includes(element) ); 
// }

// console.log(findWords(dog_names,dog_string))

// Ex 3

// function findWords(string, names){
//     for ( element in string ){

//         if (element in names){
//             return "Matched dog_name"
//         }  else {
//             return "No matches"
//         } 
//     }
// }

// console.log(findWords(dog_string, dog_names))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    for(let i = 0; i < Given_arr.length; i++){
        if(i % 2 == 0){
            Given_arr.splice(i, 1, "even index")
        }
    }
    return Given_arr
} 
console.log(replaceEvens())  

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
