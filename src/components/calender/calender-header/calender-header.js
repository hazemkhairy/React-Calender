import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeCalenderDay } from '../../../store/action'
const useStyles = makeStyles((theme) => ({

    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2%'
    },
    headerText:{
        margin:'0px'
    }
}));

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const calenderDay = useSelector((store) => { return new Date(store.calenderDay) })
    const handleClickNext = () => {
        const newDate = new Date(calenderDay);
        newDate.setMonth(newDate.getMonth() + 1);

        dispatch(changeCalenderDay(newDate));
    }
    const handleClickPrevious = () => {
        const newDate = new Date(calenderDay);
        newDate.setMonth(newDate.getMonth() - 1);
        dispatch(changeCalenderDay(newDate));

    }
    return (
        <div
            className={classes.container}
        >
            <Button variant="contained" color="primary" onClick={handleClickPrevious}>
                Previous Month
            </Button>
            <div>
                <h1 className={classes.headerText}>

                    {calenderDay.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h1>
            </div>
            <Button variant="contained" color="primary" onClick={handleClickNext}>
                Next Month
            </Button>

        </div>
    )
}
export default Header;