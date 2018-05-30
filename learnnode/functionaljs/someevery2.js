// .some and .every sandbox

function bigger5(element, index, array){
    return element > 5;
}


// at least one elem has fulfill the condition to return true
console.log ( [1, 2, 3, 6, 8, 9, 1].some( bigger5) );
console.log ( [1, 2, 3].some( bigger5) );

// for _every_ al elems have to fulfill the condition
console.log ( [1, 6, 7].every (bigger5) );
console.log ( [6, 7].every (bigger5) );



var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];


var test  = [
      { id: 1 },
      { id: 3 }
    ];


 function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
            submittedUsers.every( function (element, index, array){
                    return goodUSers.indexOf(element) != -1;
            });
        };
    }

console.log ("Check valid users");
console.log( checkUsersValid( goodUsers ) );
