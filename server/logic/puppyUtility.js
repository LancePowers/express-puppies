
var puppyData = require('../models/puppies');
var tempArray = puppyData.tempPuppyArray;

function handleSingleGet(puppyID){
  if (pup.length>0){
      return pup[0];
    } else {
      return {error: "Puppy ain't existing here"};
    }
}

function handleAllGet(){
  return tempArray;
}

function handlePost(puppyID, puppyName, puppyAge){
  var pup = findPuppy(puppyID);
  if(pup.length>0){
    return {error: 'That puppy already exists'}
  } else {
    var newPostPuppy = new puppyData.Puppy(
        parseInt(puppyID), puppyName, parseInt(puppyAge)
      )
    tempArray.push(newPostPuppy);
    return {
      message: 'Added another puppy',
      puppy: newPostPuppy
    }
  }
}

function handlePut(puppyID, submittedBodyObject){
  if(Object.keys(submittedBodyObject).length===0){
    return {message: 'Um... did you remember to type something?'}
  }
  if(submittedBodyObject.puppyAge && isNaN(parseInt(submittedBodyObject.puppyAge))){
    return{message: 'Um... Age = number!'}
  }
  var pup = findPuppy(puppyID);
  if(pup.length > 0){
    for (var i = 0; i < tempArray.length; i++) {
      if(tempArray[i].puppyID === parseInt(puppyID)){
        for (var key in submittedBodyObject) {
          if (key === 'puppyName') {
            tempArray[i].puppyName = submittedBodyObject.puppyName;
          } else if (key === 'puppyAge'){
            tempArray[i].puppyAge = parseInt(submittedBodyObject.puppyAge);
          }
        }
      }
    }
    return tempArray;
  } else {
    return {error: 'um... that\'s not a puppy'}
  }
}


function handleDelete(puppyID){
 var pup = findPuppy(puppyID);
 if(pup.length > 0){
   for (var i = 0; i < tempArray.length; i++) {
     if(tempArray[i].puppyID === parseInt(puppyID)){
       var deletedPup = tempArray.splice(i,1);
       return {message: 'puppy\'s taking a very long nap',
              puppy: deletedPup}
     }
   }
 } else {
   return {error: 'um... that\'s not a puppy'}
 }
}

function findPuppy(puppyID){
  return tempArray.filter(function(puppy){
    return puppy.puppyID===parseInt(puppyID);
  });
  return pup;
}

module.exports = {
  handleSingleGet: handleSingleGet,
  handleAllGet: handleAllGet,
  handlePost: handlePost,
  handlePut: handlePut,
  handleDelete: handleDelete
}
