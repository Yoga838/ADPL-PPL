import React from 'react'

export default function login() {
  return (
    <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <title>Log In</title>
        <div className='bg-color-yellow'>
        <div className="container">
          <div className="row  ">
            <div className="col-md-12 ">
              <div className="rounded1 width-form mx-auto bg-light mt-login mb-login pt-5 ">    
                <h1 className="poppins fw-bold text-color-yellow text-center">Tem.U</h1>
                <form className="margin-input center  set-width" action method="post">
                  <div className="input-email ">
                    <label htmlFor="inputEmail" className="poppins form-label">Email</label>
                    <input type="email" id="inputEmail" className="rounded1 form-control" />
                  </div>
                  <div className="input-password ">
                    <label htmlFor="inputPassword5" className="poppins form-label">Password</label>
                    <input type="password" id="inputPassword5" className="rounded1 form-control" />
                  </div>
                  <a className="poppins mt-4 center-button btn bg-color-yellow rounded-pill ps-5 pe-5 mb-5 shadow text-white" href="#" role="button">Login</a>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
