import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { TreeItem, TreeView } from '@material-ui/lab';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { stringToDate } from '../../../utils/helperFunctions'

const useStyle = makeStyles((theme) => ({
    mainContainer: {
        padding: '1%'

    },
    root: {
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px double #000',
        backgroundColor: '#11111111',
    }
}));

const DayDetails = () => {
    const classes = useStyle();
    const { id } = useParams();
    const date = stringToDate(id);
    const events = useSelector((store) => {
        return store.dayEvents[id];
    })
    if (!events || !events.length)
        return <h1>This day has No Events</h1>

    const getEventsSorted = () => {
        let ret = {};
        for (let i = 0; i < events.length; i++) {
            let hour = (new Date(events[i].date)).getHours();
            if (!ret[hour])
                ret[hour] = []
            ret[hour].push(events[i]);
        }
        return ret;
    }
    const getContent = () => {
        let ret = []
        let sortedEvents = getEventsSorted();
        for (const [key, value] of Object.entries(sortedEvents)) {
            let hourTree = [];
            let hourString = (new Date(0, 0, 0, key))
                .toLocaleTimeString('en-US', { hour: '2-digit' });

            for (let i = 0; i < value.length; i++) {
                let event = value[i];
                let timeString = (new Date(event.date))
                    .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

                hourTree.push(
                    <TreeItem
                        key={event.date.toString()}
                        nodeId={event.date.toString()}
                        label={timeString + ': ' + event.name} >
                        <h4>
                            {event.descripition}
                        </h4>

                    </TreeItem>
                )
            }
            ret.push(
                <TreeItem
                    key={key}
                    nodeId={key}
                    label={hourString}
                >
                    {hourTree}
                </TreeItem>
            )
        }
        return ret;

    }
    return <div
        className={classes.mainContainer}
    >
        <div className={classes.headerContainer}>
            <h1>{date.toDateString()}</h1>
        </div>
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {getContent()}
        </TreeView>
    </div>
}
export default DayDetails;