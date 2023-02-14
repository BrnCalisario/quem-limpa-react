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

const getWeek = (date: Date) => {
    const initialDate = date
    const weekDates = []

    for (let i = 0; i < 5; i++) {
        const day = new Date(initialDate)
        day.setDate(initialDate.getDate() + i)
        weekDates.push(day)
    }
    return weekDates
}

interface Props {
    onChangeWeek: (week: Date) => void
}

const WeekControl: React.FC<Props> = ({ onChangeWeek }) => {

    const [week, setWeek] = useState(findMonday(new Date()));

    const dayMonth = () => {
        const day = week.getDate()
        const month = week.getMonth() + 1

        const dayF = day < 10 ? "0" + day : day
        const monthF = month < 10 ? "0" + month : month

        return dayF + "/" + monthF
    }

    const handleWeek = (shift: number) => {
        setWeek(pastWeek => {
            var newWeek = shiftDays(pastWeek, shift)
            onChangeWeek(newWeek)
            return newWeek
        })
    }

    return (
        <div id='week-title'>
            <i className="arrow left fas fa-arrow-left" onClick={() => handleWeek(-7)}></i>

            <div>
                <h1 id="week-text">Semana {dayMonth()}</h1>
            </div>

            <i className="arrow right fas fa-arrow-right" onClick={() => handleWeek(7)}></i>
        </div>
    )
}

export { WeekControl, findMonday, shiftDays, getWeek }

