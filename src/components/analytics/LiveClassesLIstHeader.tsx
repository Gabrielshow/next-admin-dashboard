import React from 'react';

interface LiveClassesListHeaderProps {
    id?: string;
    students: string;
    lessons: string;
    teacher: string;
    status: string;
    dateCreated: string;
    duration: string;
    details?: string;
    className?: string; 
}

const LiveClassesListHeader: React.FC<LiveClassesListHeaderProps> = ({id, students, lessons, teacher, status, duration, dateCreated, details, className}) => {
  return (
    <div className={`flex flex-row justify-evenly items-center py-2 px-2 ${className}`}>
        <p>{id}</p>
        <p>{students}</p>
        <p>{lessons}</p>
        <p>{teacher}</p>
        <p>{status}</p>
        <p>{dateCreated}</p>
        <p>{duration}</p>
        <p>{details}</p>
    </div>
  )
}

export default LiveClassesListHeader;