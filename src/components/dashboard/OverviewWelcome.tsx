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
        <div className="bg-blue-400 flex-1 h-[45px] flex justify-center items-center rounded-[4px] py-2 px-2 mx-1">
            <p>{icon} {title}</p>
        </div>
    );
}

const OverviewWelcome: React.FC<OverviewWelcomeProps> = ({ username }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between w-full bg-grey-300 p-2">
            <div className="flex-1">
                <p className="text-sm md:text-base">Hi {username}👋, Welcome to your dashboard</p>
            </div>

            <div className="flex flex-row gap-2 flex-wrap">
                <OverviewButton title={"Download Student List"} />
                <OverviewButton title={"Download Tutor List"} />
            </div>
        </div>
    );
}

export default OverviewWelcome