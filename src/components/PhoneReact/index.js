
import React from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
  
export default class PhoneInputGfg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: "" };
  }
  render(){
    return (
      <div>
        <PhoneInput
          country={'br'}
          value={this.state.phone}
          onChange={phone => this.setState({ phone })}
          inputStyle={{borderRadius:6, width:320, height:40, borderColor: "#3D454C"}}
          containerStyle={{marginLeft:48}}
          buttonStyle={{borderColor: "#3D454C", borderRadius:6, borderTopRightRadius: 0, borderBottomRightRadius:0 }}
          enableAreaCodes={['br']}
          enableAreaCodeStretch
          masks={{br: '(..) .....-....',}}
          
        />
      </div>
    );
  }
};

