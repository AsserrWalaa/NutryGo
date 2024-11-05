import React from 'react';
import contact from "../assets/imgs/Contact us-cuate 1 (1).png"
const ContactUs = () => {
  return (
    <div>
      {/* start contact us */}
      <div className="contactUS ColorOne">
        <div className="container text-light">
          <h1 className="pt-5">Contact Us</h1>
          <p className="pt-4 pb-5">Already use Nutry? Sign in so we can tailor your support experience. <br/>
            If that’s not possible, we’d still like to hear from you.</p>
        </div>
      </div>
      {/* end contact us */}
      
      {/* start box */}
      <div className="d-flex container">
        <div className="box position-relative px-5 pb-5 border-1 border-white shadow bg-white col col-12 col-sm-12 col-md-12 col-lg-8">
          <form className="mt-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your email address</label>
              <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Your Name"/>
            </div>
          </form>
          <div className="topics">
            <div>
              <h6 className="fw-bold">Select topic</h6>
            </div>
            <div className="topics-row-one">
              <input type="radio" className="btn-check topic-check" name="options" id="option1" autoComplete="off" />
              <label className="btn topic-check border-secondary border-secondary " htmlFor="option1">Adding or removing
                users</label>

              <input type="radio" className="btn-check topic-check" name="options" id="option2" autoComplete="off"/>
              <label className="btn topic-check border-secondary active" htmlFor="option2">Billing and plans</label>

              <input type="radio" className="btn-check topic-check" name="options" id="option3" autoComplete="off"/>
              <label className="btn topic-check border-secondary mt-md-1 mt-sm-1" htmlFor="option3">Connection Trouble</label>
            </div>
            <div className="topics-row-two mt-2">
              <input type="radio" className="btn-check topic-check" name="options" id="option4" autoComplete="off" />
              <label className="btn topic-check border-secondary" htmlFor="option4">Notifications</label>

              <input type="radio" className="btn-check topic-check" name="options" id="option5" autoComplete="off"/>
              <label className="btn topic-check border-secondary" htmlFor="option5">Managing Channels</label>

              <input type="radio" className="btn-check topic-check" name="options" id="option6" autoComplete="off"/>
              <label className="btn topic-check border-secondary" htmlFor="option6">Signing in</label>
            </div>
            <div className="topics-row-three mt-2">
              <input type="radio" className="btn-check topic-check" name="options" id="option7" autoComplete="off" />
              <label className="btn topic-check border-secondary" htmlFor="option7">New design feedback</label>

              <input type="radio" className="btn-check topic-check" name="options8" id="option9" autoComplete="off"/>
              <label className="btn topic-check border-secondary" htmlFor="option8">Trial of a paid plan</label>
            </div>
          </div>
          <div>
            <form className="mt-4">
              <div className="">
                <label htmlFor="help" className="form-label fw-bold fw-bold">Or tell us what you need help with?</label>
                <input type="email" className="form-control form-control-lg" id="help" aria-describedby="emailHelp"/>
                <button type="button" className=" buttons text-light mt-3 py-2 px-4 ">Get help</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-4 d-none d-sm-none d-md-none d-lg-block">
          {/* Modify the image source path to be relative to your project */}
          <img src={contact} className="col-md-0 col-sm-0" alt="" width="360"/>
        </div>
      </div>
      {/* end box */}
    </div>
  );
};

export default ContactUs;
