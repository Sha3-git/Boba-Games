const eventRouter = require("express").Router();
const Event = require("../models/Event");
const express = require("express");
const app = express();
app.use(express.json());

// Retrieve all events
eventRouter.get("/", async (req, res) => {
    const events = await Event.find({});
    return res.json(events);
});

// GET any events with ID
eventRouter.get('/:id', async (req, res) => {
    try {
        // Find the requested events from the database (mongoDB)
        const events = await Event.findById(req.params.id);
        if (!events) {
            return res.status(404).send('Event not found');
        }
        res.status(200).json(events);
    } catch (error) {
        res.status(500).send('Server error');
    }
});


// Add a new event.
eventRouter.post('/', async (req, res) => {
    const { title, description, category, start_date, end_date, start_time, end_time, recurrence } = req.body;
  const event = new Event({
    title,
    description,
    category,
    start_date,
    end_date,
    start_time,
    end_time,
    recurrence,
  });
  try {
    // Save the new event to the database (MongoDB)
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ error: 'Invalid Input data' });
    } else {
      res.status(500).send({ error: 'Something went wrong while saving the event: ' + error.message });
    }
  }
});

// Update an existing event.

eventRouter.put('/:id', async (req, res) => {
    const { title, description, category, start_date, end_date, start_time, end_time, recurrence } = req.body;

    try {
        // Update the existing book in the database (mongoDB)
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            { title, description, category, start_date, end_date, start_time, end_time, recurrence } ,
            { new: true, runValidators: true }
        );
        // Return error if book id is incorrect
        if (!updatedEvent) {
            return res.status(404).send('Event not found');
        }

        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(400).send('Error: Something went wrong while updating the event: ' + error.message);
    }
});

// Delete an event.
eventRouter.delete('/:id', async (req, res) => {
    try {

        // Delete the existing event from the database (mongoDB)
        const deletedEvent  = await Event.findByIdAndDelete(req.params.id);

        // Return error if event id is incorrect
        if (!deletedEvent ) {
            return res.status(404).send('Event not found');
        }
        res.status(200).send(`Event id ${deletedEvent._id} is deleted successfully`);
    } catch (error) {
        res.status(500).send('Error: Something went wrong while deleting the event:' + error.message);
    }
});

module.exports = eventRouter;