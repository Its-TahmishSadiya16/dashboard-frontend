// src/components/Filter.js
import React from 'react';

const Filter = ({ label, options, onChange }) => (
  <div>
    <label>{label}</label>
    <select onChange={onChange}>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default Filter;
