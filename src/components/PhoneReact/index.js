import React from 'react'
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

function ReactPhone (){
  
  return (
    <IntlTelInput 
    containerClassName="intl-tel-input"
    inputClassName="form-control"
    style={{marginLeft:48}}

  />
  )
}

export default ReactPhone


 