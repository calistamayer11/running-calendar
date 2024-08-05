document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  // Fetch events from the backend
  fetch('/training-plan')
      .then(response => response.json())
      .then(events => {
          // Initialize FullCalendar with the fetched events
          var calendar = new FullCalendar.Calendar(calendarEl, {
              timeZone: 'UTC',
              initialView: 'dayGridMonth',
              events: events,
              editable: true,
              selectable: true
          });

          // Render the calendar
          calendar.render();
      })
      .catch(error => console.error('Error fetching events:', error));
});
