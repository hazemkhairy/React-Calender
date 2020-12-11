import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import CalenderItem from '../calender-item/calender-item'
import CalenderHeader from '../calender-header/calender-header'
import styles from './calender-list.module.css'
import { useSelector } from 'react-redux'
import { dateToString } from '../../../utils/helperFunctions'
const CalenderList = () => {
    const events = useSelector((store) => {
        return store.dayEvents
    })
    const [monthData, SetMonthData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(
        () => {
            setLoading(true);
            const today = new Date()
            const temp = [];
            for (let i = 0; i < 35; i++) {

                temp.push(new Date(today.getFullYear(), today.getMonth(), i))

            }
            SetMonthData(temp);
            setLoading(false)
        }
        , []
    )
    const fillColumnDays = (dayNumber) => {
        let temp = [];
        for (let i = dayNumber; i < monthData.length; (i += 7)) {
            temp.push(<CalenderItem
                key={dateToString(monthData[i])}
                data={monthData[i]}
                events={events[dateToString(monthData[i])]}
            />);
        }
        return temp
    }
    const getColumn = (dayNumber) => {
        return <div key={`C${dayNumber}`} className={styles.column} >
            <CalenderHeader key={`H${dayNumber}`} data={monthData[dayNumber]} />
            {fillColumnDays(dayNumber)}
        </div>
    }
    const fillData = () => {
        const temp = [];
        for (let i = 0; i < 7; i++) {
            temp.push(getColumn(i));
        }
        return temp;
    }
    if (loading) {
        return <CircularProgress />
    }


    return (
        <div name="c" className={styles.container}>

            {fillData()}

        </div>
    )
}
export default CalenderList