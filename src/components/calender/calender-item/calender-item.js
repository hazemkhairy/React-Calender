import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Styles from './calender-item.module.css';
import { dateToString } from '../../../utils/helperFunctions'
import { useHistory } from 'react-router-dom';

const CalenderItem = ({ data, events }) => {
    const [invalid, setInvalid] = useState(false);
    const [loading, setLoading] = useState(true);;
    const history = useHistory();
    const handleNavigate =  ()=>{
        console.log('x')
        history.push(`/dayDetails/${dateToString(data)}`)
    }
    useEffect(
        () => {
            let temp = new Date();
            if (data.getMonth() !== temp.getMonth()) {
                setInvalid(true);
            }
            setLoading(false);
        }, []
    )
    if (loading) {
        return <CircularProgress />
    }
    const getSample = () => {
        let temp = [];
        for (let i = 0; i < events.length && i < 3; i++) {
            temp.push(
                <div key={`${dateToString(data)}${i}`} className={Styles.eventContainer}>
                    <p className={Styles.eventName}>
                        {events[i].name.slice(0, 10)}
                        {events[i].name.length > 10 ? "..." : ''} </p>
                </div>
            )
        }
        return temp;
    }
    return (
        <div onClick={handleNavigate}  className={Styles.container + ' ' + (invalid ? Styles.invalid : Styles.valid)}  >
            <h5 className={events ? Styles.textTopLeft : Styles.textCenter}>
                {data.getDate()}
            </h5>
            {events && <div style={{ flex: 2, overflowY: 'auto', overflowX: 'hidden' }}>
                {getSample()}
            </div>}

        </div>
    )

}
export default CalenderItem