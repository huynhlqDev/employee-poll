// ConfirmDialog.js
import React from 'react';

const ConfirmDialog = ({ message, onCancel, onConfirm }) => {
    return (
        <div className="confirm-dialog">
            <p>{message}</p>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onConfirm}>Confirm</button>
        </div>
    );
};

export default ConfirmDialog;
