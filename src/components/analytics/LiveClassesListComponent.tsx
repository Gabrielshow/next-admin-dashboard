import React from 'react'
import { classData } from '@/data/constant';
import LiveClassesListHeader from './LiveClassesLIstHeader';
import LiveClassesListItem from './LiveClassesListItem';


const LiveClassesListComponent = () => {
  return (
    <div className="flex flex-col">
        <LiveClassesListHeader students={"Students"} lessons={"Lessons"} teacher={"Teacher"} status={"Status"} dateCreated={"Date Created"} duration={"Duration"} details={"Details"}  />
        {classData && classData.map((item, index) => (
            <LiveClassesListItem 
            key={item.id}
            id={item.id}
            students={item.students}
            lessons={item.lessons}
            teacher={item.teacher}
            status={item.status}
            dateCreated={item.dateCreated}
            duration={item.duration}
            details={item.details}
            className={index % 2 === 1 ? 'bg-blue': ''}
            />
        ))}
        
    </div>
  )
}

export default LiveClassesListComponent