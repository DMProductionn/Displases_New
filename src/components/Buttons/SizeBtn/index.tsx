import React from 'react';
import { useState } from 'react';
import style from './SizeBtn.module.css'
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import Select, { ActionMeta, SingleValue } from 'react-select';

export default function SizeBtn() {
  const dispatch = useDispatch()

  const [ selectedOption, setSelectedOption ] = useState('');
  
  

  const handleChange = (newValue: SingleValue<{ value: string; label: string; }>, actionMeta: ActionMeta<{ value: string; label: string; }>) => {
    if (actionMeta.action === 'select-option' && newValue) {
      setSelectedOption(newValue.value);
      // dispatch(setSize(selectedOption))
    }
  }

  const options = [
    {value: 'S', label: 'S'},
    {value: 'M', label: 'M'},
    {value: 'L', label: 'L'},
    {value: 'XL', label: 'XL'},
    {value: 'XXL', label: 'XXL'},
  ]

  return (
    <>
      <Select 
        options={options}
        onChange={handleChange}
        className='select-container'
        classNamePrefix='select'
        placeholder='РАЗМЕР'
        isSearchable={false}
      />
    </>
  );
}
