import React from 'react';
import Styles from './column-header.module.css'
const ColumnHeader = ({ data }) => {

    return (
        <div className={Styles.container} >
            <div  >{data.toLocaleDateString('en-US', { weekday: 'long' })}</div>
        </div>
    )

}
export default ColumnHeader