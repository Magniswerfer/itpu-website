import { Calendar } from "lucide-preact";

const NextMeetings = () => {
  const calculateNextMeetings = () => {
    const meetings = [];
    const startDate = new Date(2024, 10, 19); // November 19, 2024 (0-based month)
    const today = new Date();

    // Find closest future meeting
    let nextMeeting = new Date(startDate);
    while (nextMeeting < today) {
      nextMeeting.setDate(nextMeeting.getDate() + 29); // 4 weeks + 1 day
      // Handle weekend adjustments
      const dayOfWeek = nextMeeting.getDay();
      if (dayOfWeek === 0) { // Sunday -> Monday
        nextMeeting.setDate(nextMeeting.getDate() + 1);
      } else if (dayOfWeek === 6) { // Saturday -> Monday
        nextMeeting.setDate(nextMeeting.getDate() + 2);
      }
    }

    // Calculate next 6 meetings
    let currentMeeting = new Date(nextMeeting);
    for (let i = 0; i < 6; i++) {
      meetings.push(new Date(currentMeeting));
      currentMeeting.setDate(currentMeeting.getDate() + 29);
      // Handle weekend adjustments
      const dayOfWeek = currentMeeting.getDay();
      if (dayOfWeek === 0) { // Sunday -> Monday
        currentMeeting.setDate(currentMeeting.getDate() + 1);
      } else if (dayOfWeek === 6) { // Saturday -> Monday
        currentMeeting.setDate(currentMeeting.getDate() + 2);
      }
    }

    return meetings;
  };

  const monthNames = [
    "Januar", "Februar", "Marts", "April", "Maj", "Juni",
    "Juli", "August", "September", "Oktober", "November", "December"
  ];

  const dayNames = [
    "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"
  ];

  // Convert Sunday-based day index (0-6) to Monday-based (0-6)
  const getMondayBasedDay = (date) => {
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
  };

  const meetings = calculateNextMeetings();

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-4">
        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
        <h2 className="text-lg font-semibold">Kommende møder</h2>
      </div>

      <div className="space-y-3">
        {meetings.map((date, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              index === 0 ? 'bg-enl-green-light border border-enl-green' : 'bg-enl-gray'
            }`}
          >
            <div className="font-semibold">
              {dayNames[getMondayBasedDay(date)]}, {date.getDate()} {monthNames[date.getMonth()]} {date.getFullYear()}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Meetings are scheduled every 4 weeks + 1 day, moving to Monday if they fall on a weekend.
      </p>
    </div>
  );
};

export default NextMeetings;
