/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'


export default function mitra_regist() {
  return (
    <div>
    {/* Required meta tags */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Bootstrap CSS */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <title>Sign Up</title>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 side bg-color-yellow">
          <img className="m-left image my-center" src="/images/sign_up1.png" alt="" />
        </div>
        <div className="col-md-8 ms-5 pb-5">
          <h4 className="poppins mt-4">
            Selamat Datang
          </h4>
          <h1 className="poppins fw-bold">Segera Daftarkan Diri Anda</h1>
          <div className="button mt-3">
            <a className=" text-white poppins btn bg-color-yellow rounded-pill ps-4 pe-4 shadow" href="#" role="button">Mitra</a>
            <Link href="visitor_regist"><button className="poppins btn ms-2 rounded-pill ps-4 pe-4 shadow text-color-yellow" role="button">Pengunjung</button></Link>
          </div>
          <form action method="post">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="input-Name mt-4 ">
                    <label htmlFor="inputName" className="poppins form-label">Nama Lengkap</label>
                    <input type="Text" id="inputName" required className="width-form-1 rounded1 form-control" />
                  </div>
                  <div className="input-NoTelp mt-2">
                    <label htmlFor="inputNoTelp" className="poppins form-label">No. Telp</label>
                    <input type="Text" id="inputNoTelp" required className="width-form-1 rounded1 form-control" />
                  </div>
                  <div className="input-Alamat mt-2">
                    <label htmlFor="inputAlamat" className="poppins form-label">Alamat Lengkap</label>
                    <input type="Text" id="inputAlamat" required className="width-form-1 rounded1 form-control" />
                  </div>
                  <div className="input-Email mt-2">
                    <label htmlFor="inputEmail" className="poppins form-label">Email</label>
                    <input type="Text" id="inputEmail" required className="width-form-1 rounded1 form-control" />
                  </div> 
                  <div className="input-Password mt-2">
                    <label htmlFor="inputPassword" className="poppins form-label">Password</label>
                    <input type="Text" id="inputPassword" required className="width-form-1 rounded1 form-control" />
                  </div>    
                </div>
                <div className="col-md-6">
                  <div className="input-image1 mt-4 ">
                    <div className="mb-3">
                      <label htmlFor="formFileSm" className="form-label">Link Foto Usaha</label>
                      <input className="form-control  rounded1 form-control-sm" required id="formFileSm" type="text" />
                    </div>
                  </div>
                  <div className="input-image1 mt-2 ">
                    <div className="mb-3">
                      <label htmlFor="formFileSm" className="form-label">Link Foto Pribadi</label>
                      <input className="form-control  rounded1  form-control-sm" required id="formFileSm" type="text" />
                    </div>
                  </div>
                  <a type="submit" className="poppins mt-4 center-button btn bg-color-yellow rounded-pill width-button margin-end height-button  shadow text-white" href="#" role="button">Kirim</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* Bootstrap Bundle with Popper */}
  </div>
  )
}
