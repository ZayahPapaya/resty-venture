import './form_style.scss'
import React, { useState } from 'react';

export const Form = (props: any) => {
  const [method, setMethod] = useState('GET');
  const isSelected = (button: string) => {
    if (button === method) {
      return 'form-selected'
    }
    return ''
  }
  const handleSubmit = (e: any, callApi: Function) => {
    e.preventDefault();
    const formData = {
      method,
      url: e.target[0].value, //'https://pokeapi.co/api/v2/pokemon'
      body: e.target[2].value || undefined,
    };
    console.log('handling body', e.target[2].value)
    callApi(formData);
  }
//////////////////////////////////////////////
// isSelected and the related styling changing is attributed to Hugo
// He came up with this fantastic solve for both setting an active button and returning current selected method for the form
//////////////////////////////////////////////
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, props.callApi)}>
        <label>
          <span id='urlLabel'>URL: </span>
          <input name='url' type='text' />
          <button type='submit'>Go</button>
        </label>
        <label>
          <span id='bodyLabel'>BODY: </span>
          <input name='body' type='text' />
        </label>
        <label className="methods">
          <span className={isSelected("GET")} onClick={() => setMethod("GET")} id="get">GET</span>
          <span className={isSelected("POST")} onClick={() => setMethod("POST")} id="post">POST</span>
          <span className={isSelected("PUT")} onClick={() => setMethod("PUT")} id="put">PUT</span>
          <span className={isSelected("DELETE")} onClick={() => setMethod("DELETE")} id="delete">DELETE</span>
        </label>
      </form>
    </>
  )
};