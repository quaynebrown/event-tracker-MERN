import axios from 'axios';
import React, { useState,useEffect }  from 'react';


const EventForm = (props) => {
    const [userName, setUserName] = useState(props.username);
    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(new Date());
    const [flyerImage, setFlyerImage] = useState("");

    // useEffect = (() => {
    //     // write some code
    // }, []);


    const onUserChange = (e) => {
        setUserName(e.target.value)
    }

    const onDescChange = (e) => {
        setDescription(e.target.value)
    }

    const onEventNameChange = (e) => {
        setEventName(e.target.value)
    }

    const onLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const onFlyerImageChange = (e) => {
        setFlyerImage(e.target.value)
    }

    const onDateChange = (e) => {
        setDate(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const event = {
            eventName,
            description,
            date,
            username: userName,
            location,
            flyerImage
        }

        axios.post('http://localhost:5000/events/add', event)
        .then(res => console.log(res.data))

        window.location = '/';
    }
  return (
    <form className='event-form' action="post" onSubmit={onSubmit}>
        <div>
            <label htmlFor="username" required>Username: </label>
            <input type="text" name="username" id="username" value={userName} onChange={onUserChange} />
        </div>
          <div>
              <label htmlFor="eventName" required>Event Name: </label>
              <input type="text" name="eventName" id="eventName" value={eventName} onChange={onEventNameChange} />
          </div>
          <div>
              <label htmlFor="description" required>Description: </label>
              <input type="text" name="description" id="description" value={description} onChange={onDescChange} />
          </div>
          <div>
              <label htmlFor="location" required>Location: </label>
              <input type="text" name="location" id="location" value={location} onChange={onLocationChange} />
          </div>
          <div>
              <label htmlFor="date" required>Date: </label>
              <input type="date" name="date" id="date" value={date} onChange={onDateChange}/>
          </div>
          <div>
              <label htmlFor="flyerImage">Flyer Image: </label>
              <input type="file" name="flyerImage" id="flyerImage" value={flyerImage} onChange={onFlyerImageChange} />
          </div>
          <div>
              <button type="submit">Add Event</button>
          </div>
    </form>
  )
}

export default EventForm;