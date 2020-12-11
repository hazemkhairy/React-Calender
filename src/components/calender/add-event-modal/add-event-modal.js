import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addEvent } from '../../../store/action'
import { dateToString } from '../../../utils/helperFunctions'
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: '50%',
        backgroundColor: '#fff',
        padding: '10% 5%'
    },
    form: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',

    }
}));

const AddEventModal = ({ isOpen, handleClose }) => {
    const [name, setName] = useState('');
    const [descripition, setDescripition] = useState('');
    const [date, setDate] = useState(new Date());
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(addEvent({ name, descripition, date, id: dateToString(date) }))
        setName('');
        setDescripition('');
        setDate(new Date());
        handleClose();
        
    }
    return <Modal
        open={isOpen}
        onClose={handleClose}
        className={classes.modal}
    >
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit}  >
                <TextField
                    required
                    type="text"
                    id="name"
                    variant="outlined"
                    autoFocus
                    label="Event Name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                /><TextField
                    required
                    type="text"
                    id="descripition"
                    label="Descripition"
                    variant="outlined"

                    value={descripition}
                    onChange={(e) => { setDescripition(e.target.value) }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                /><TextField
                    required
                    variant="outlined"
                    type="datetime-local"
                    id="date"
                    label="Day"
                    value={date.toISOString().slice(0, 16)}
                    onChange={(e) => { setDate(new Date(e.target.value)) }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button type="submit" variant="contained" color="primary">Add</Button>
            </form>
        </div>
    </Modal>
}

export default AddEventModal;