
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);


function CalEvent() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEvents, setSelectedEvents] = useState([]);
  
    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const response = await axios.get('http://localhost:4000/api/events');
            console.log('Raw API Response:', response.data); // Debug log to inspect the raw data
            const fetchedEvents = response.data.map(event => {
              const start = moment(event.start_date).toDate();
              const end = moment(event.end_date).toDate();
              console.log('Event:', { title: event.title, start, end }); // Debugging log
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
        </Col>
      </Row>
    </Container>
  )
}

export default CalEvent
