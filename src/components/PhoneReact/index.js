import React from 'react'

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

function ReactPhone() {
//  const input= document.querySelector('.input')

// console.log("value", input.value)

  return (
    <IntlTelInput
      containerClassName="intl-tel-input"
      inputClassName="form-control input"
      style={{ marginLeft: 48, 
      
      }}
    />
  )
}

export default ReactPhone


