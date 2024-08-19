import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEventContext } from '../context/EventContext';
import EventForm from './EventForm';
import EventList from './EventList';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const { events } = useEventContext();

  const calendarEvents = events.map(event => ({
    id: event.id,
    title: event.title,
    start: new Date(event.date),
    end: new Date(event.date),
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Calendar App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <BigCalendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            className="bg-white shadow-md rounded p-4 mb-4"
          />
          <EventList />
        </div>
        <div>
          <EventForm />
        </div>
      </div>
    </div>
  );
};

export default Calendar;