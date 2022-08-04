import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="container-section">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                        <div className="contact-leftside col-12 col-lg-5">
                            <h1 className="main-heading">connect with our <br />sales team.</h1>
                            <p className="main-hero-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus natus earum, eum mollitia quibusdam eligendi?</p>
                            <figure>
                                <img src="./images/hero1.jpg" alt="hero1" className='img-fluid' />
                            </figure>
                        </div>

                        {/* right side contact page  */}
                        <div className="contact-rightside col-12 col-lg-7">
                        <form method='POST'>
                            <div className="row">
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input type="text" name="" id="" placeholder='First Name' className='form-control'/>
                                </div>
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input type="text" name="" id="" placeholder='Last Name' className='form-control'/>
                                </div>
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input type="number" name="" id="" placeholder='Phone Number' className='form-control'/>
                                </div>
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input type="text" name="" id="" placeholder='Email Address' className='form-control'/>
                                </div>
                              
                            </div>
                            <div className="row">
                                <div className="col-12 contact-input-feild">
                                    <input type="text" name="" id="" placeholder='Add Address' className='form-control' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" name="" id="" placeholder='Enter Your Massages' className='form-control' />
                                </div>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input form-checkbox-style" value="" id='flexCheckChecked' />
                                <label class='form-check-label' className='main-hero-para '>
                                    I agree that the AmarjeetPay may contact me ar the email address or phone number above
                                </label>
                            </div>
                            <button type='submit' className='btn btn-style w-100'>Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
      
    </>
  )
}

export default Contact;
