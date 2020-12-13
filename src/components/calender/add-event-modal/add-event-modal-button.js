import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import AddEventModal from './add-event-modal';

const AddEventModalButton = ({ desiredDate }) => {

    const [addModalOpen, setAddModalOpen] = useState(false);
    return (
        <div>
            <AddEventModal
                desiredDate={desiredDate}
                isOpen={addModalOpen}
                handleClose={() => { setAddModalOpen(false) }}
            />
            <Button variant="contained" color="primary" onClick={() => { setAddModalOpen(true) }}>
                Add
            </Button>
        </div>
    )
}
export default AddEventModalButton;