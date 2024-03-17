import React from 'react'
import prefrence from "../assets/imgs/Preferences-amico 1.png"
import icon1 from "../assets/imgs/Health, Sport, Apple watch.png"
import icon2 from "../assets/imgs/Group.png"
import icon3 from "../assets/imgs/shop.png"
import icon4 from "../assets/imgs/expand.png"
function features() {
    return (<>
        {/* // <!-- start featuers header --> */}
    <section className="features-hrader">
        <div className="container">
            <div className="d-flex flex-wrap ">
                <div className="col-md-6 mt-5">
                    <h1 className="healthy fw-bold mt-5">Healthy Habits, Happy Lives, Nourishing Youth for a
                        Bright
                        Tomorrow</h1>
                    <h3 className="text-secondary fs-5 fw-light mt-5 mb-5">Empowering Youthful Choices, Crafting a Lifetime
                        of Happiness through Healthy Habits</h3>
                    <hr/>
                    <div>
                        <div className="d-flex">
                            {/* <i className="fa-solid fa-check check fs-5 me-2 mt-1"></i> */}
                            <h5>Upgrade your life style and habits.</h5>
                        </div>
                        <div className="d-flex">
                            {/* <i className="fa-solid fa-check check fs-5 me-2 mt-1"></i> */}
                            <h5>Book your doctor appointment easily.</h5>
                        </div>
                        <div className="d-flex">
                            {/* <i className="fa-solid fa-check check fs-5 me-2 mt-1"></i> */}
                            <h5>Shop your healthy product from your home.</h5>
                        </div>
                    </div>
                </div>
                <div className="mb-4 mt-md-5 col-md-6 col-sm-4">
                    <img src={prefrence} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </section>
    {/* // <!-- end featuers header --> */}
    {/* // <!-- start section two --> */}
    <section>
        <div className="row mt-3 container mx-auto text-center pb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-1 d-flex align-items-center">
                <div className="pe-3">
                    <h1 className="fw-bolder text-dark pt-3">
                        <img src={icon1} alt="" width="50" className="mb-4"/>
                    </h1>
                </div>
                <div>
                    <h6 className="text-start">Track Your Habits, Transform Your Life</h6>
                    <p className="text-secondary text-start">Small Changes, Big Impact: Tracking Habits, Building Futures
                    </p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-1 d-flex align-items-center">
                <div className="pe-3">
                    <h1 className="fw-bolder text-dark pt-3">
                        <img src={icon2} alt="" width="50" className="mb-4"/>
                    </h1>
                </div>
                <div>
                    <h6 className="text-start">Book Your children's Doctor Appointment with Ease</h6>
                    <p className="text-secondary text-start">Your Health, Your Schedule: Effortless Booking for a Better
                        Tomorrow.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-1 d-flex align-items-center">
                <div className="pe-3">
                    <h1 className="fw-bolder text-dark pt-3">
                        <img src={icon3} alt="" width="50" className="mb-4"/>
                    </h1>
                </div>
                <div>
                    <h6 className="text-start">Shop Smart, Healthy Products for Happy Children.</h6>
                    <p className="text-secondary text-start">Elevate Their Health, One Thoughtful Purchase at a Time.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-1 d-flex align-items-center">
                <div className="pe-3">
                    <h1 className="fw-bolder text-dark pt-3">
                            <img src={ icon4} alt="" width="50" className="mb-4"/>
                    </h1>
                </div>
                <div>
                    <h6 className="text-start">Expand Knowledge, Read Articles for Your Child's Health.</h6>
                    <p class="text-secondary text-start">Illuminate Their Future: Unlock Wisdom, Foster Well-being.</p>
                </div>
            </div>
        </div>
    </section>
    {/* // <!-- end section two --> */}
    </>)
}

export default features