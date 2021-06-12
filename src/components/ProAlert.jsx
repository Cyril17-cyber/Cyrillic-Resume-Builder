import React from 'react';
import LockIcon from '@material-ui/icons/Lock';

function ProAlert(props) {
    return (
        <div className="proAlert">
            <LockIcon />
            <div className="content">
                <p>
                    The feature you're trying to access is currently unavailable but will be made available in a future pro version which will give you the access to build resumes from scratch, edit and build card templates, grant you access to more templates and the color picker.
                </p>
            </div>
            <button className="pro" onClick={props.alert}>OK</button>
        </div>
    )
}

export default ProAlert;