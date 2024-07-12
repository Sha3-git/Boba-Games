import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment-timezone';
import dayjs from 'dayjs';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../App.css';

const localizer = momentLocalizer(moment);

function CalEvent() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [value, setValue] = useState(dayjs());

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://sip-n-play.vercel.app/api/events');
        const fetchedEvents = response.data.map(event => {
          const start = moment.tz(event.start_date, 'UTC').tz(moment.tz.guess()).toDate();
          const end = moment.tz(event.end_date, 'UTC').tz(moment.tz.guess()).toDate();
          return {
            title: event.title,
            start,
            end,
          };
        });
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);




  const handleSelectDate = ({ start }) => {
    setSelectedDate(start);
    const eventsOnDate = events.filter(event =>
      moment(event.start).isSame(start, 'day')
    );
    setSelectedEvents(eventsOnDate);
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectSlot={handleSelectDate}
            selectable
          />
        </Col>
        <Col md={4}>
          <h3>Events on {selectedDate.toDateString()}</h3>
          <ul>
            {selectedEvents.length === 0 ? (
              <li>No events for this date</li>
            ) : (
              selectedEvents.map((event, index) => (
                <li key={index}>
                  <h5>{event.title}</h5>
                  <p>{moment(event.start).format('LT')} - {moment(event.end).format('LT')}</p>
                </li>
              ))
            )}
          </ul>


          {selectedEvents.length === 0 ? (<div>
            <button type="button" className="btn btn-primary my-4 " data-bs-toggle="modal" data-bs-target="#createEvent">
              Add new Event
            </button>

            <div className="modal fade" id="createEvent" tabIndex="-1" aria-labelledby="createEventlabel" aria-hidden="true">
              <div className="modal-dialog">
                <form className="needs-validation" onSubmit noValidate>
                  <div className="modal-content">
                    <div className='modal-error'></div>
                    <div className="modal-header">
                      <h5 className="modal-title" id="createEventlabel">User Registration</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>) : (
            <div>
              <div>

                <form >
                  <label for="start">Start</label><br/>
                  <input
                    type="datetime-local"
                    id="start"
                    name="meeting-time"
                    value="2018-06-12T19:30"
                  />
                  <br></br>
                  <label for="end">End</label><br/>
                  <input
                    type="datetime-local"
                    id="end"
                    name="meeting-time"
                    value="2018-06-12T19:30"
                  />
                </form>

              </div>

              <div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Title</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>
              <label for="reccId" class="form-label">Recurrence</label>
              <select class="form-select" id="reccId" aria-label="Default select example">
                <option value="None" selected>None</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
              </select>

              <button type="button" className="btn btn-danger my-4 " data-bs-toggle="modal" data-bs-target="#deleteEvent">
                Delete Event
              </button>
              <div className="modal fade" id="deleteEvent" tabIndex="-1" aria-labelledby="deleteEventlabel" aria-hidden="true">
                <div className="modal-dialog">
                  <form className="needs-validation" onSubmit noValidate>
                    <div className="modal-content">
                      <div className='modal-error'></div>
                      <div className="modal-header">
                        <h5 className="modal-title" id="deleteEventlabel">Create</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Confirm</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>





              <button type="button" className="btn btn-primary my-4 " data-bs-toggle="modal" data-bs-target="#createEvent">
                Add new Event
              </button>

              <div className="modal fade" id="createEvent" tabIndex="-1" aria-labelledby="createEventlabel" aria-hidden="true">
                <div className="modal-dialog">
                  <form className="needs-validation" onSubmit noValidate>
                    <div className="modal-content">
                      <div className='modal-error'></div>
                      <div className="modal-header">
                        <h5 className="modal-title" id="createEventlabel">User Registration</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">

                      </div>
                      <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          
        </Col>
      </Row>

    </Container >
  );
}

export default CalEvent;
