var express = require('express');
var router = express.Router();
var utilities = require('../logic/puppyUtility');

//GET Single puppy
router.get('/puppy/:id', function(req, res, next) {
  var response = utilities.handleSingleGet(req.params.id);
  res.json(response);
});

//GET All Puppies
router.get('/puppies', function(req, res, next){
  var response = utilities.handleAllGet();
  res.json(response);
});

//Post Single Puppy
router.post('/puppies', function(req, res, next){ //what does next do?
  var response = utilities.handlePost(req.body.puppyID, req.body.puppyName, req.body.puppyAge);
  res.json(response)
})

//Put Single Puppy
router.put('/puppy/:id', function(req, res, next){
  var response = utilities.handlePut(req.body.puppyID, req.body);
  res.json(response);
})

//DELETE Single Puppy
router.delete('/puppy/:id', function(req, res, next){
  var response = utilities.handleDelete(req.body.puppyID);
  res.json(response);
})


// //send a json version of the array to client side.
// router.get('/puppies', function(req, res, next) {
// res.json(tempPuppyArray);
// });
//
// /* Creates and event to happen whenever someone goes to html
// gets rquest parameter of id(prefaced with colon)
// creates pup and sends it as a json file.*/
// router.get('/puppy/:id', function(req, res, next){
//   var pup = findPuppy(req)
//   if (pup.length>0){
//     res.json(pup[0])
//   } else {
//     res.json("Puppy ain't existing here");
//   }
// });
//
// /*Uses the id portion of the html to loop (filter.()) through the puppy
// array and find any puppy with a matching id. returns results as an array of
// puppies that match.*/

//
// // http -f POST localhost:3000/api/v1/puppies puppyID=4 puppyName=Taco puppyAge=7
// // http -f GET localhost:3000/api/v1/puppies
// // gets variables from the paramaters sent in the post
// // creates a new instance of puppy and adds it to the array.
// router.post('/puppies', function(req, res, next){
//   var newPostPuppy = new Puppy(
//     parseInt(req.body.puppyID), req.body.puppyName, parseInt(req.body.puppyAge)
//   )
//   tempPuppyArray.push(newPostPuppy);
//   res.send(req.body)
// })
//
// router.put('/puppies', function(req, res, next){
//   var response =
//   res.json(response)
// })

module.exports = router;
