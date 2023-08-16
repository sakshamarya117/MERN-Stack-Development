import React from 'react'

const Login = () => {
  return (
    // <div>
    //     {/* <h1>Login Here</h1> */}

    // </div>
    <div className="bg-success d-flex justify-content-center align-items-center vh-100">

    <div className="card w-25 p-4 shadow">
     {/* <div class=class"w-25 d-block m-auto" src="img/gfm.jpg">

      </div> */}
     <img className="w-25 d-block m-auto" src="/download (11).jpg" alt="" />
     <h3 className="text-center mb-2 fw-bold">Login Here</h3>
     <form>
     {/* <label htmlFor="email">Email Address</label> */}
     <input type="email" className="form-control my-4 " placeholder="Email Address"
            />
     {/* <label htmlFor="password">Password</label> */}
     <input type="password" className="form-control mb-3" placeholder="Password" />
     <button type="button" className="btn btn-success w-100 mb-2 mt-2">
      Submit
     </button>
     <a href=""> <p className='text-center m-0'>Forget Password?</p></a>
     </form>
     </div>
</div>

  )
}

export default Login
