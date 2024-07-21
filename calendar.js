document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'dayGridMonth',
      events: [
        {
            title  : 'event1',
            start  : '2024-07-20'
    
          },
          {
            title  : 'event2',
            start  : '2010-01-05',
            end    : '2010-01-07'
          },
          {
            title  : 'event3',
            start  : '2010-01-09T12:30:00',
            allDay : false // will make the time show
          }
      ],
      editable: true,
      selectable: true
    });
  
    calendar.render();
  });