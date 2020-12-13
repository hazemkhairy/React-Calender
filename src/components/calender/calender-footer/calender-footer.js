import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddEventModalButton from '../add-event-modal/add-event-modal-button';


const useStyles = makeStyles(() => ({

    container: {
        display: 'flex',
        flexDirection:'row-reverse',
        alignItems: 'center',
        justifyContent: 'end',
        padding: '2% 2%'
    },
}));
const Footer = () => {

    const classes = useStyles();


    return <div className={classes.container}>

        <AddEventModalButton />
    </div>
}
export default Footer;