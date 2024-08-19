import React from 'react';
import { useEventContext } from '../context/EventContext';
import { Link } from 'react-router-dom';

const EventList = () => {
  const { events, deleteEvent } = useEventContext();

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      {events.length === 0 ? (
        <p>No events added yet.</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id} className="mb-2 p-2 bg-gray-100 rounded flex justify-between items-center">
              <div className='flex flex-col'>
              <div>{event.title} - {event.date}</div>
              <div>{event.eventDetails}</div>
              </div>
              <div>
                <Link 
                  to={`/event/${event.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteEvent(event.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
