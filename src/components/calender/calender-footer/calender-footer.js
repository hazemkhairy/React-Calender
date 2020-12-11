import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import AddEventModal from '../add-event-modal/add-event-modal';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '2% 2%'
    },
}));
const Footer = () => {
    const [addModalOpen, setAddModalOpen] = useState(false);

    const classes = useStyles();
    return <div className={classes.container}>
        <AddEventModal
            isOpen={addModalOpen}
            handleClose={() => { setAddModalOpen(false) }}
        />
        <Button variant="contained" color="primary" onClick={() => { setAddModalOpen(true) }}>
            Add
        </Button>
    </div>
}
export default Footer;