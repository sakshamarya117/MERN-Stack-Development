import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(4,'Min.4 chahracters req.').required('Name is Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});


const Signup = () => {

  //initialize the formik
  const signupform = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''

    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema:SignupSchema,
  });

  return (
    // <div>
    //     <h1>
    //         Sign Up Here
    //     </h1>
    // </div>


    <div>

      <div className="bg-success d-flex justify-content-center align-items-center vh-100">

        <div className="card w-25 p-4">
          {/* <div class=class"w-25 d-block m-auto" src="img/gfm.jpg">

  </div> */}
          <img className="w-25 d-block m-auto" src="/download (11).jpg" alt="" />
          <h3 className="text-center my-2 fw-bold">Sign In Here</h3>
          <form onSubmit={signupform.handleSubmit}>
            <label htmlFor="email"  >Name</label>
            <span style={{fontStyle:'0.7em',color:'red', marginLeft:20}}>{signupform.errors.name}</span>
            <input type="name" className="form-control mb-1" name='name' onChange={signupform.handleChange} values={signupform.values.name} />
            <label htmlFor="email" >Email Address</label>
            <span style={{fontStyle:'0.7em',color:'red', marginLeft:20}}>{signupform.errors.email}</span>

            <input type="email" className="form-control mb-1" name='email' onChange={signupform.handleChange} values={signupform.values.email} />
            <label htmlFor="password" >Password</label>
            <input type="password" className="form-control" name='password' onChange={signupform.handleChange} values={signupform.values.password} />
            <button type="submit" className="btn btn-success w-100 mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Signup