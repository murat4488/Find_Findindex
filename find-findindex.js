/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
    
    return usersArray.find(function(obj){
        return obj['username'] === username;
    })

}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
//I could not find the solution even I spent too much time. 
// Then I search the solution.    
//source:http://curric.rithmschool.com/springboard/exercises/js-array-find-findindex/solution/index.html
const idx = usersArray.findIndex(function(obj){
    return obj['username'] === username;
  })
  if(idx === -1) return;
  return usersArray.splice(idx,1)[0];
}

