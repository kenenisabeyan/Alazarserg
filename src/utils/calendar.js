import { WEDDING_CONFIG } from '../config/weddingConfig';

/**
 * Generates and triggers download of a standardized .ICS calendar file
 * Compatible with Apple Calendar, Google Calendar, Outlook, and mobile devices.
 */
export function downloadCalendarInvite() {
  try {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Alazar Serg//Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${WEDDING_CONFIG.couple.names} — Wedding Celebration`,
      'DTSTART:20270424T110000Z',
      'DTEND:20270424T210000Z',
      `LOCATION:${WEDDING_CONFIG.venue.fullAddress}`,
      `DESCRIPTION:You are warmly invited to celebrate the wedding of ${WEDDING_CONFIG.couple.names}. Dress Code: Modern Black-Tie Optional / Festive Traditional Attire.`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ALAZAR-SERG-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch (err) {
    console.error('Failed to download calendar file:', err);
    return false;
  }
}
