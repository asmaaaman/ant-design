import React from 'react';
import MainInput from '../../componets/InputField/input'

function FormControl(props){
  const {control , ...rest} = props;
  
  switch(control){
      case 'input':
          return <MainInput {...rest} />
      default:return null
  }
  
  

}
export default FormControl;