var express = require('express');
var router = express.Router();

var Event = require('../models/event');

var { verifyToken } = require('../utils/token.utils');


router.post('/addEvent',function(req, res) {

  var name = req.body.name;
  var park_id = 'test';
  var start = req.body.start;
  var end = req.body.end;
  var sport = req.body.sport;
  var description = req.body.description;
  var max_people = req.body.max_people;
  var attending = [1234];

  var newEvent = new Event({
    name: name,
    park_id: park_id,
    start: start,
    end: end,
    sport: sport,
    description: description,
    max_people: max_people,
    attending: attending
  });

  Event.addEvent(newEvent, function(err, newEvent){
    if(err) throw err;
    console.log('event has been added', newEvent);
  });

  var result = {
    message : 'event has been added to db'
  };

  res.send(result);
});


//get event by id page
router.get('/getEventById', function(req, res) {
	Event.getEventById(req.query.eventId, function(err, event){
		if(err)
			throw err;
		res.send(event);
	})
});



/* gets the user followed parks in one search query
    given an array of event Id's
*/
router.get('/getUserAttendingEvents', function(req, res) {

  res.send("not implemented yet");
});


/* gets all the events at park
   given a park id
 */
router.get('/getEventsAtPark', function(req, res) {
  res.send("not implemented yet");
});


/*
//get event page dont actually need this function
router.get('/', function(req, res) {
  console.log('Get request for events');
  Event.find({})
  .exec(function(err, Event){
    if(err){
      console.log("Error retrieving events");
    } else {
      res.json(Event);
    }
  });
});
*/


function checkAuthentication(req,res,next){
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // if no token return
  if (!token) {
    return res.status(403).send({
        success: false,
        message: 'No token provided.',
      });
    }

    var result = verifyToken(token);
    // if expired/failed
    if (!result.success)
      return res.status(401).send(result);
    next();
}

module.exports = router;
