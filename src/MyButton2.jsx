// src/MyButton2.js
import React from 'react';
import PropTypes from 'prop-types';

const MyButton2 = ({ label, onClick }) => {
    return (
        <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {label}
        </button>
    );
};

MyButton2.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

MyButton2.defaultProps = {
    onClick: () => alert('Button222 clicked! test2222'),
};

export default MyButton2;