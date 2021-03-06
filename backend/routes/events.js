const router = require('express').Router();
let Event = require('../models/event.model');

// Get all events
router.route('/').get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add new event
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const eventName = req.body.eventName;
    const location = req.body.location;
    // const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const flyerImage = req.body.flyerImage;

    const newEvent = new Event({
        username,
        description,
        eventName,
        location,
        // duration,
        date,
        flyerImage
    });

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get event by ID
router.route('/:id').get((req, res) => {
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete event by ID
router.route('/:id').delete((req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json('Event deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update event by ID
router.route('/update/:id').post((req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            event.username = req.body.username;
            event.description = req.body.description;
            event.eventName = req.body.eventName;
            event.location = req.body.location;
            // event.duration = Number(req.body.duration);
            event.date = Date.parse(req.body.date);
            event.flyerImage = req.body.flyerImage;

            event.save()
                .then(() => res.json('Event updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;