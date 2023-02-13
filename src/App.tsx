import { useState } from 'react'
import boschLogo from './assets/images/bosch-logo.svg';
import DayBox from './components/DayBox';
import { WeekControl } from './components/WeekControl';


const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
const duplas = ["Dupla 1", "Dupla 2", "Dupla 3", "Dupla 4", "Dupla 5"]

function App() {

    const [dayCleaners, setDayCleaners] = useState(duplas[0])
    const [selected, setSelected] = useState(0)

    const [week, setWeek] = useState(new Date())

    const handleWeek = (newWeek : Date) => {
        setWeek(newWeek)
    }

    const handleBoxClick = (index: number) => {
        setDayCleaners(duplas[index])
        setSelected(index)
    }

    return (
        <div className="App">
            <div id="dias">
                <img src={boschLogo} alt="logo bosch" />

                <WeekControl onChangeWeek={handleWeek} />

                {days.map((d, i) => (
                    <DayBox
                        onClick={() => handleBoxClick(i)}
                        key={d}
                        dayName={d + "-feira"}
                        selected={i === selected} />
                ))}


                <div id="creditos">
                    Powered by ETS
                </div>
            </div>


            <div id="content">
                <h3>Quem limpa:</h3>
                <div id="cleaners">{dayCleaners}</div>
            </div>
        </div>
    )
}

export default App
