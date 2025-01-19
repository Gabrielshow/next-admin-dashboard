import { Status } from '@/types/status';

export const tutorData = [
  { countryCode: 'US', countryName: 'United States', countryPopulation: 331002651 },
  { countryCode: 'IN', countryName: 'India', countryPopulation: 1380004385 },
  { countryCode: 'GB', countryName: 'United Kingdom', countryPopulation: 67886011 },
];

export const studentData = [
  { countryCode: 'US', countryName: 'United States', countryPopulation: 331002651 },
  { countryCode: 'NG', countryName: 'Nigeria', countryPopulation: 206139589 },
  { countryCode: 'BR', countryName: 'Brazil', countryPopulation: 212559417 },
];

// Assuming you have the Status type defined somewhere
export const salesData: { 
  id: number; 
  username: string; 
  recipient: string; 
  date: string; 
  details: string; 
  amount: string; 
  status: Status; // Use the Status type here
}[] = [
  {
    id: 1,
    username: 'John Doe',
    recipient: 'Jane Smith',
    date: '2025-01-15',
    details: 'Product purchase',
    amount: '100',
    status: 'Paid', // This is now correctly typed
  },
  {
    id: 2,
    username: 'Alice Johnson',
    recipient: 'Bob Brown',
    date: '2025-01-16',
    details: 'Service fee',
    amount: '50',
    status: 'Pending',
  },
  {
    id: 3,
    username: 'Charlie Adams',
    recipient: 'David Clark',
    date: '2025-01-17',
    details: 'Consultation',
    amount: '75',
    status: 'Failed',
  },
  {
    id: 4,
    username: 'Eve Taylor',
    recipient: 'Frank Wilson',
    date: '2025-01-18',
    details: 'Subscription renewal',
    amount: '200',
    status: 'Paid',
  },
  {
    id: 5,
    username: 'Grace Lee',
    recipient: 'Henry Moore',
    date: '2025-01-19',
    details: 'Online course',
    amount: '120',
    status: 'Pending',
  },
  {
    id: 6,
    username: 'Ivy Walker',
    recipient: 'Jack Hall',
    date: '2025-01-20',
    details: 'Product return',
    amount: '30',
    status: 'Failed',
  },
  {
    id: 7,
    username: 'Liam Harris',
    recipient: 'Mia Evans',
    date: '2025-01-21',
    details: 'Advertising service',
    amount: '150',
    status: 'Paid',
  },
  {
    id: 8,
    username: 'Noah Wright',
    recipient: 'Olivia Scott',
    date: '2025-01-22',
    details: 'Subscription service',
    amount: '90',
    status: 'Pending',
  },
];

export const classData: {
     id: number;
    students: string;
    lessons: {type: string, role: string};
    teacher: {name: string, method: string};
    status: string;
    dateCreated: string;
    duration: string;
    details?: string;
}[] = [
  {
  id: 1,
  students: "Adenekan Akeem",
  lessons: {type: 'Private Lessons', role: 'Intermediate Piano Lessons',},
  teacher: {name: 'Bekwa Undie', method: 'Virtual'},
  status: 'Live',
  dateCreated: '18/12/2024',
  duration: 'per Hour',
  details: 'Details',
},
  {
  id: 2,
  students: "Adenekan Akeem",
  lessons: {type: 'Private Lessons', role: 'Intermediate Piano Lessons',},
  teacher: {name: 'Bekwa Undie', method: 'Virtual'},
  status: 'Live',
  dateCreated: '18/12/2024',
  duration: 'per Hour',
  details: 'Details',
},
  {
  id: 3,
  students: "Adenekan Akeem",
  lessons: {type: 'Private Lessons', role: 'Intermediate Piano Lessons',},
  teacher: {name: 'Bekwa Undie', method: 'Virtual'},
  status: 'Live',
  dateCreated: '18/12/2024',
  duration: 'per Hour',
  details: 'Details',
},
  {
  id: 4,
  students: "Adenekan Akeem",
  lessons: {type: 'Private Lessons', role: 'Intermediate Piano Lessons',},
  teacher: {name: 'Bekwa Undie', method: 'Virtual'},
  status: 'Live',
  dateCreated: '18/12/2024',
  duration: 'per Hour',
  details: 'Details',
},
  {
  id: 5,
  students: "Adenekan Akeem",
  lessons: {type: 'Private Lessons', role: 'Intermediate Piano Lessons',},
  teacher: {name: 'Bekwa Undie', method: 'Virtual'},
  status: 'Live',
  dateCreated: '18/12/2024',
  duration: 'per Hour',
  details: 'Details',
},
  {
  id: 6,
  students: "Adenekan Akeem",
  lessons: {type: 'Private Lessons', role: 'Intermediate Piano Lessons',},
  teacher: {name: 'Bekwa Undie', method: 'Virtual'},
  status: 'Live',
  dateCreated: '18/12/2024',
  duration: 'per Hour',
  details: 'Details',
},
  {
  id: 7,
  students: "Adenekan Akeem",
  lessons: {type: 'Private Lessons', role: 'Intermediate Piano Lessons',},
  teacher: {name: 'Bekwa Undie', method: 'Virtual'},
  status: 'Live',
  dateCreated: '18/12/2024',
  duration: 'per Hour',
  details: 'Details',
},
  {
  id: 8,
  students: "Adenekan Akeem",
  lessons: {type: 'Private Lessons', role: 'Intermediate Piano Lessons',},
  teacher: {name: 'Bekwa Undie', method: 'Virtual'},
  status: 'Live',
  dateCreated: '18/12/2024',
  duration: 'per Hour',
  details: 'Details',
},
]