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
        <div className="bg-blue-400 w-[205px] h-[45px]">
            <p> {icon} {title}</p>
        </div>
    )
}

const OverviewWelcome: React.FC<OverviewWelcomeProps> = ({username}) => {
  return (
    <div>
        <div>
            <p> Hi {username}👋, Welcome to your dashboard</p>
        </div>

        <div>
            <div>
                <OverviewButton title={"Download Student List"}/>
                <OverviewButton title={"Download Tutor List"} />
            </div>

        </div>

    </div>
  )
}

export default OverviewWelcome