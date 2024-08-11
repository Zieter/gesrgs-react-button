// src/MyButton.js
import React from 'react';
import PropTypes from 'prop-types';

const MyButton = ({ label, onClick }) => {
    return (
        <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {label}
        </button>
    );
};

MyButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

MyButton.defaultProps = {
    onClick: () => alert('Button clicked! test'),
};

export default MyButton;
