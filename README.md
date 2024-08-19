# React Calendar Application

A simple and intuitive calendar application built with React, using Context API for state management and Tailwind CSS for styling.

## Live link: https://event-calendar-five.vercel.app/

## Features

- View a calendar with all events
- Add new events with title and date
- View a list of all events
- Edit existing events
- Delete events
- Responsive design

## Technologies Used

- React
- React Router
- Context API
- react-big-calendar
- Tailwind CSS
- date-fns
- moment.js

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/atharva00-7/EventCalendar.git

2. **Navigate to the project directory:**
   ```bash
   cd EventCalendar

3. **Install the dependencies:**
   ```bash
   npm install

4. **Start the development server:**
   ```bash
   npm run dev

## Project Structure
   - src/
      - components/
         - Calendar.js
         - EventForm.js
         - EventList.js
         - EventDetails.js
      - context/
         - EventContext.js
   - App.js
   - index.js

## Components

### Calendar.js

The main component that renders the calendar view, event list, and event form. It uses `react-big-calendar` to display the calendar and events.

### EventForm.js

A form component for adding new events. It captures the event title and date.

### EventList.js

Displays a list of all events with options to edit or delete each event.

### EventDetails.js

A page component for editing an existing event. It allows users to update the event title and date or delete the event.

## Context

### EventContext.js

Manages the application state using React's Context API. It provides functions for adding, updating, and deleting events.

## Usage

1. **View Calendar**: The main page displays a calendar view with all events.

2. **Add Event**: 
   - Fill out the "Add Event" form on the right side of the page.
   - Enter the event title and select a date.
   - Click "Add Event" to create a new event.

3. **View Events**: 
   - All events are listed below the calendar view.
   - The calendar also displays events on their respective dates.

4. **Edit Event**:
   - Click the "Edit" button next to an event in the list.
   - You'll be taken to a new page where you can modify the event details.
   - Update the title or date as needed.
   - Click "Update Event" to save your changes.

5. **Delete Event**:
   - To delete an event from the list view, click the "Delete" button next to the event.
   - To delete an event from the edit page, click the "Delete Event" button.

## Customization

- To modify styles, edit the Tailwind classes in the component files.
- To add more fields to events (e.g., time, description), update the `EventContext`, form components, and display components accordingly.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
