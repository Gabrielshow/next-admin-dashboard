import React from 'react';

interface DetailsCardProps {
    className?: string;
}

const DetailsCard: React.FC<DetailsCardProps> = ({className}) => {
  return (
    <div className={`rounded-[2px] py-2 ${className}`}>
        <div className="flex flex-row justify-betweem items-center">
            <p className="text-bold">Live Class</p>
            <p className="cursor-pointer"> X </p>
        </div>
        <div className="w-full h-[2px] bg-grey-300">
        </div>
        <div className="flex flex-column gap-2 items-center px-2">
            <div className="bg-blue-300 rounded-[10px] py-2 px-2 flex flex-row justify-between items-center">
                <div className="flex flex-column justify-around">
                    <p>Time Elapsed </p>
                    <h3 className="text-bold"> 28:30 </h3>
                </div>
                <div className="flex flex-column justify-around">
                    <p>Time left </p>
                    <h3 className="text-bold"> 11:30 </h3>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <p className="nowrap-whitespace"> Student's name</p>
                <h4 className="text-bold nowrap-whitespace">Adenekan Akeem</h4>
            </div>
            <div className="flex flex-row justify-between items-center">
                <p className="nowrap-whitespace"> Teacher's name</p>
                <h4 className="text-bold nowrap-whitespace">Bekwa Undie</h4>
            </div>
            <div className="flex flex-row justify-between items-center">
                <p className="nowrap-whitespace"> Lesson</p>
                <h4 className="text-bold nowrap-whitespace">Intermediate Piano Lessons</h4>
            </div>
            <div className="flex flex-row justify-between items-center">
                <p className="nowrap-whitespace"> Lesson Category</p>
                <h4 className="text-bold nowrap-whitespace">Private</h4>
            </div>
            <div className="flex flex-row justify-between items-center">
                <p className="nowrap-whitespace"> Lesson Type</p>
                <h4 className="text-bold nowrap-whitespace">Virtual</h4>
            </div>
            <div className="flex flex-row justify-between items-center">
                <p className="nowrap-whitespace"> Lesson Duration</p>
                <h4 className="text-bold nowrap-whitespace">40 minutes</h4>
            </div>
            <button className="border-[2px] border-blue-300 rounded-[20px] w-[40px] h-[10px] flex flex-row justify-center items-center">Close</button>
        </div>

    </div>
  )
}

export default DetailsCard;