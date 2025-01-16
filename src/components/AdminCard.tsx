import React from 'react';

interface AdminCardProps {
    text: string;
    className?: string;
}

const AdminCard: React.FC<AdminCardProps> = ({ text, className }) => {
    return (
        <div className={`admin-card ${className}`}>
            <div>{text}</div>
        </div>
    );
}

export default AdminCard;
