import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEventContext } from '../context/EventContext';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, updateEvent, deleteEvent } = useEventContext();
  const [event, setEvent] = useState(null);
  const [title, setTitle] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const foundEvent = events.find(e => e.id === parseInt(id));
    if (foundEvent) {
      setEvent(foundEvent);
      setTitle(foundEvent.title);
      setEventDetails(foundEvent.eventDetails);
      setDate(foundEvent.date);
    }
  }, [events, id]);

  const handleUpdate = () => {
    updateEvent(parseInt(id), { title, eventDetails, date });
    navigate('/');
  };

  const handleDelete = () => {
    deleteEvent(parseInt(id));
    navigate('/');
  };

  if (!event) return <div>Event not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Event Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Event Details
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="eventDetails"
            type="textarea"
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Event
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;