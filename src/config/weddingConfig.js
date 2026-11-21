/**
 * ALAZAR SERG — Global Wedding Configuration
 * Centralized source of truth for dates, location, contacts, and calendar.
 */
export const WEDDING_CONFIG = {
  couple: {
    names: 'ALAZAR SERG',
    groom: 'Alazar',
    bride: 'Serg',
    monogram: 'A&S',
    tagline: 'A Celebration of Love, Heritage & Forever'
  },
  date: {
    iso: '2027-04-24T14:00:00+03:00', // UTC+3 East Africa Time
    display: 'April 24, 2027',
    time: '2:00 PM EAT',
    day: '24',
    month: 'April',
    year: '2027',
    rsvpDeadline: 'March 15, 2027'
  },
  venue: {
    name: 'Kuriftu Resort & Spa',
    subTitle: 'Lakefront Pavilion',
    city: 'Bishoftu',
    region: 'Oromia',
    country: 'Ethiopia',
    fullAddress: 'Kuriftu Resort & Spa, Lakefront Pavilion, Bishoftu, Oromia, Ethiopia',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kuriftu+Resort+and+Spa+Bishoftu+Ethiopia',
    appleMapsUrl: 'https://maps.apple.com/?q=Kuriftu+Resort+%26+Spa+Bishoftu+Ethiopia'
  },
  palette: {
    alabaster: '#FAF8F5',
    linen: '#F0ECE4',
    espresso: '#1F1D1B',
    champagneGold: '#B89B72',
    richGold: '#D4B47C',
    oliveSage: '#6E7B68'
  }
};
