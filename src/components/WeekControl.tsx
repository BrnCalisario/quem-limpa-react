import React, { useState, useEffect } from "react";

const findMonday = (date: Date) => {
    var d = new Date(date)

    if (d.getDay() == 0) {
        d.setDate(d.getDate() + 1)
        return d
    }

    while (d.getDay() > 1) {
        d.setDate(d.getDate() - 1)
    }

    return d
}

const shiftDays = (date: Date, shift: number) => {
    const shifted = new Date(date)
    shifted.setDate(shifted.getDate() + shift)
    return shifted
}

interface Props {
    onChangeWeek: (week: Date) => void
}

const WeekControl: React.FC<Props> = ({ onChangeWeek }) => {

    const [week, setWeek] = useState(findMonday(new Date()));

    const handleWeek = (shift: number) => {
        setWeek(shiftDays(week, shift))
        onChangeWeek(week)
    }

    return (
        <div id='week-title'>
            <i className="arrow left fas fa-arrow-left" onClick={() => handleWeek(-7)}></i>

            <div>
                <h1 id="week-text">Semana {week.getDate()}/{week.getMonth() + 1}</h1>
            </div>

            <i className="arrow right fas fa-arrow-right" onClick={() => handleWeek(7)}></i>
        </div>
    )
}

export { shiftDays, findMonday, WeekControl }