import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flyer from '../event-flyers/blush-jul-2.jpeg';

const EventList = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/events/')
    .then((res) => {
      console.log(res.data)
      setEvents([...res.data])
    })
  }, []);

  const splitDate = (date) =>{
    const newDate = date.split('T')
    return newDate[0]
  }

  const deleteEvent = (id) => {
    axios.delete('http://localhost:5000/events/')
    .then(res => {
      console.log(res.data);
      setEvents(events.filter(ev => ev._id !== id));
    });
  }
  return (
    
    events.map((event) => {
      return <div key={event._id} className='event'>
        <div className='event-header'>
          <div className='event-name'>
            <span>{event.eventName}</span>
          </div>
          <div className='event-date'>
            <span>{splitDate(event.date)}</span>
          </div>
        </div>
        <div className='event-body'>
          <div className="flyer-container">
            <img src={Flyer} alt="flyer" />
            {/* <img src={require(event.flyerImage)} alt="" /> */}
          </div>
          <span>Description: {event.description}</span>
        </div>
      </div>
    })
    );
}

export default EventList;
