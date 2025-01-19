import React from 'react';
// import classData from '@/data/constant';

interface LiveClassesListItemProps {
    id: number;
    students: string;
    lessons: {type: string, role: string};
    teacher: {name: string, method: string};
    status: string;
    dateCreated: string;
    duration: string;
    details?: string;
    className?: string;
}

const LiveClassesListItem: React.FC<LiveClassesListItemProps> = ({id, students, lessons, teacher, status, dateCreated, duration, details, className}) => {
  return (
    <div className={`flex flex-row justifyy-between py-2 px-2 items-center ${className}`}>
        <p>{id}</p>
        <p>{students}</p>
        <div className="flex flex-col justify-around py-2 px-2">
            <p className="text-bold text-small nowrap-whitespace">{lessons.type}</p>
            <p className="text-small"> {lessons.role} </p>
        </div>
        <div className="flex flex-col justify-around py-2 px-2">
            <p className="text-bold text-small nowrap-whitespace">{teacher.name}</p>
            <p className="text-small"> {teacher.method} </p>
        </div>
        <div className="flex flex-row items-center rounded-[12px] bg-green-300">
            {status}
        </div>
        <p>{dateCreated}</p>
        <p>{duration}</p>
        <div className="bg-blue-400 text-white rounded-[4px] flex justify-center items-center">
            {details} {/* add icon here*/}
        </div>

    </div>
  )
}

export default LiveClassesListItem