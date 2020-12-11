import React from 'react';
import Styles from './calender-header.module.css'
const CalenderHeader = ({ data }) => {

    return (
        <div className={Styles.container} >
            <div  >{data.toLocaleDateString('en-US', { weekday: 'long' })}</div>
        </div>
    )

}
export default CalenderHeader