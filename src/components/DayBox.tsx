import React from "react";

interface Props {
    dayName: string;
    selected: boolean;
    onClick: (e: React.MouseEvent) => void;
}

const DayBox: React.FC<Props> = ({ dayName, onClick, selected }) => {
    return (
        <div className={`dia ${selected ? 'selected': ''}`} onClick={onClick}>
            <p>{dayName}</p>
        </div>
    )
}

export default DayBox;