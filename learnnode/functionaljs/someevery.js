function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
            return submittedUsers.every( function (element, index, array){
                return goodUsers.indexOf(element) != -1;
            }); 
        };
    }

    module.exports = checkUsersValid
