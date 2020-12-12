import React from 'react';

import CalenderList from './calender-list/calender-list';
import Footer from './calender-footer/calender-footer';
const Calender = () => {
    return (
        <div style={{ flex: 1, display: "flex", flexDirection: 'column' }}>
            <div style={{ flex: 1, maxHeight: '70%' }}>
                <CalenderList></CalenderList>
            </div>
            <div style={{ flex: 1 }}>

                <Footer></Footer>
            </div>
        </div>
    )
}
export default Calender;