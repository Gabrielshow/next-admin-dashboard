import React from 'react';
import Image from 'next/image';

interface OverviewWelcomeProps {
    username: string;
}

interface OverviewButtonProps {
    icon?: React.ReactNode;
    title: string;
}

const OverviewButton: React.FC<OverviewButtonProps> = ({icon, title}) => {
    return (
        <div className="bg-blue-400 w-[205px] h-[45px] flex justify-center items-center rounded-[4px] py-2 px-2">
            <p> {icon} {title}</p>
        </div>
    )
}

const OverviewWelcome: React.FC<OverviewWelcomeProps> = ({username}) => {
  return (
    <div className="flex flex-row justify-between w-full bg-grey-300">
        <div>
            <p> Hi {username}👋, Welcome to your dashboard</p>
        </div>

        <div className="flex flex-row gap-2">
                <OverviewButton title={"Download Student List"}/>
                <OverviewButton title={"Download Tutor List"} />
        </div>


    </div>
  )
}

export default OverviewWelcome