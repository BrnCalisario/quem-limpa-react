import React from "react";

interface Props {
    dayName: string;
    dayNum: number;
    selected: boolean;
    onClick: (e: React.MouseEvent) => void;
}

const DayBox: React.FC<Props> = ({ dayName, onClick, selected, dayNum }) => {
    return (
        <div className={`dia ${selected ? 'selected': ''}`} onClick={onClick}>
            <p>{dayName}</p>
            <span className="num-dia">{dayNum < 10 ? "0" + dayNum : dayNum}</span>
        </div>
    )
}

export default DayBox;