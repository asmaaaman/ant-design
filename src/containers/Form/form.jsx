import React from 'react';
import MainButton from '../../componets/Button/button';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import FormControl from '../../containers/FormControl/formcontrol';
import { useHistory } from 'react-router-dom';


  function FormikLogin(){
    const initialValues = {
        email:"",
        password:""
    }
    const validationSchema = Yup.object({
        email:Yup.string().
        required('Email Field Required'),

        password:Yup.string().required('This Field is Required')
        
    })
    const history = useHistory();
    const onSubmit = ()=> {
   
        history.push('/menu');
  
    }


    return (
      
      <Formik
       validationSchema = { validationSchema}
       initialValues    = { initialValues   }
       onSubmit={onSubmit}
       >
      {formik=>(
          <Form>
              <FormControl
            control="input"
            name="email"
            type="email"
            label="Email"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            label="Password"
          />


           <MainButton type="submit"
            label="Sign In"
            color="secondary"
           />
          </Form>

      )}

      </Formik>
     
      )

}


  export default FormikLogin;
  
  