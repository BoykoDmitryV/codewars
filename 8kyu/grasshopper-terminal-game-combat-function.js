// 8 kyu
// Grasshopper - Terminal game combat function
// 1385591% of 3,52011,728 of 33,471rom4eg
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// Fundamentals

// function combat(health, damage) {
// // Write your code here
//   }

function combat(health, damage) {
    // Write your code here
    if(health - damage < 0){
      return 0
    } else {
      return health - damage
    }
  }
  
  combat(100, 30)
  combat(95, 5)
