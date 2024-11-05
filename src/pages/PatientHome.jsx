import React from "react";
import hero from "../assets/imgs/Online Doctor-rafiki (1) 1.png"
import blogs from "../assets/imgs/taylor-kiser-6hxK5l-sHys-unsplash 1.png"
import author from "../assets/imgs/author.png"
import Accordion from 'react-bootstrap/Accordion';
import icon1 from "../assets/imgs/Health, Sport, Apple watch.png"
import icon2 from "../assets/imgs/Group.png"
import icon3 from "../assets/imgs/shop.png"
import icon4 from "../assets/imgs/expand.png"
const Home = () => {
  return (
    <div>
      {/* start header */}
      <section className="header">
        <div className="container">
          <div className="d-flex flex-wrap">
            <div className="discover col-md-6 mt-md-2">
              <h1 className="fw-bold text-dark mt-5">
                Discover a world of vibrant health through our youth nutrition
                platform.
              </h1>
              <h3 className="text-secondary fs-5 fw-light mt-5 mb-5">
                Unleash the benefits of smart choices, inspiring habits, and
                expert guidance for a resilient, thriving future ahead!"
              </h3>
              <div>
                <form className="d-flex mt-5">
                  <button className="buttons text-light px-3" type="submit">
                    Get Started
                  </button>
                  <button
                    className="btn btn-outline-secondary bg-white text-dark ms-2"
                    type="submit"
                  >
                    Learn More
                  </button>
                </form>
              </div>
            </div>
            <div className="mb-4 mt-md-5 col-md-6 col-sm-4">
              <img
                src={hero} className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section> 
      {/* end header */}
      
      <hr className="container text-center fw-bold w-75 mt-2" />

      {/* start section */}
      <section className="Two">
        <div className="text-center mt-5 mb-2">
          <h1 className="">Healthy Habits, Happy Lives</h1>
          <p className="text-secondary mb-2">
            The Ultimate Youth Nutrition Hub for Health and Happiness
          </p>
          .
        </div>
        <div className="row mt-3 container mx-auto text-start">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-1 d-flex align-items-center">
            <div className="pe-3">
              <h1 className="fw-bolder text-dark pt-3">
                <img
                  src={icon1}
                  alt=""
                  width="50"
                  className="mb-4"
                />
              </h1>
            </div>
            <div>
              <h6 className="text-start">
                Track Your Habits, Transform Your Life
              </h6>
              <p className="text-secondary text-start">
                Small Changes, Big Impact: Tracking Habits, Building Futures
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-1 d-flex align-items-center">
            <div className="pe-3">
              <h1 className="fw-bolder text-dark pt-3">
                <img
                  src={icon2}
                  alt=""
                  width="50"
                  className="mb-4"
                />
              </h1>
            </div>
            <div>
              <h6 className="text-start">
                Book Your children's Doctor Appointment with Ease
              </h6>
              <p className="text-secondary text-start">
                Your Health, Your Schedule: Effortless Booking for a Better
                Tomorrow.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-1 d-flex align-items-center">
            <div className="pe-3">
              <h1 className="fw-bolder text-dark pt-3">
                <img
                  src={icon3}
                  alt=""
                  width="50"
                  className="mb-4"
                />
              </h1>
            </div>
            <div>
              <h6 className="text-start">
                Shop Smart, Healthy Products for Happy Children.
              </h6>
              <p className="text-secondary text-start">
                Elevate Their Health, One Thoughtful Purchase at a Time.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-1 d-flex align-items-center">
            <div className="pe-3">
              <h1 className="fw-bolder text-dark pt-3">
                <img
                  src={icon4}
                  alt=""
                  width="50"
                  className="mb-4"
                />
              </h1>
            </div>
            <div>
              <h6 className="text-start">
                Expand Knowledge, Read Articles for Your Child's Health.
              </h6>
              <p className="text-secondary text-start">
                Illuminate Their Future: Unlock Wisdom, Foster Well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      <hr className="container text-center fw-bold w-75 mt-2" />

      {/* start section */}
      <section class="three">
        <div class="text-center m-5">
            <h1>Ready to dive in?</h1>
            <h1>Start your free trial tody.</h1>
            <form class="">
                <button class="buttons text-light mt-3 px-3 py-2 " type="submit">Download App</button>
            </form>
        </div>
      </section>
      {/* start section */}
      
      <hr className="container text-center fw-bold w-75 mt-2" />

      {/* start section */}
      <section class="four mb-4">
        <div>
            <div class="text-center">
                <div class="m-5">
                    <h1>Want product news and updates?</h1>
                    <h1 class="frequently">Sign up for our newsletter.</h1>
                </div>
            </div>
            <form class="d-flex justify-content-center ">
                <input class="form-control me-2 w-25" type="email" placeholder="Enter email address" aria-label="email"/>
                <button class="buttons text-light px-3" type="submit">Notify me</button>
            </form>
        </div>
      </section>
      {/* end section */}

      <hr className="container text-center fw-bold w-75 mt-2" />
  
      {/* start blogs */}
      <div class="blog-head text-center mt-5 mb-4">
        <h6 class="blog-one">From the blog</h6>
        <h1 class="blog-two">From our blog</h1>
        <p class="text-secondary">Knowledge is Nurturing: Cultivate a Healthier Tomorrow through Enlightened Parenting.
        </p>
      </div>
      {/* end blogs */}
      {/* start blogs cards */}
      <section class="blog-cards mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="card cards mt-3 me-lg-3 border-1 shadow col-lg-3 col-md-6 col-sm-12">
                    <img src={blogs} classNamess="card-img-top mt-2"
                        alt="..."/>
                    <div class="card-body">
                        <h6 class="text-secondary mt-2">Article</h6>
                        <h6 class="card-title text-bold mt-3">Management of food allergies</h6>
                        <p class="card-text text-secondary mt-3 mb-3">Worldwide, approximately 8 and 2% of children and
                            adults,
                            respectively, suffer from food allergy, Cow's milk, egg, peanut ...</p>
                        <div class="Author d-flex mt-5 mb-2">
                            <div class="author-img me-3">
                                <img src={author} alt=""/>
                            </div>
                            <div class="author-data">
                                <h6>Author name</h6>
                                <p class="text-secondary">Jun 27, 2023 · 6 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card cards mt-3 me-lg-3 border-1 shadow col-lg-3 col-md-6 col-sm-12">
                    <img src={blogs} classNamess="card-img-top mt-2"
                        alt="..."/>
                    <div class="card-body">
                        <h6 class="text-secondary mt-2">Article</h6>
                        <h6 class="card-title text-bold mt-3">Management of food allergies</h6>
                        <p class="card-text text-secondary mt-3 mb-3">Worldwide, approximately 8 and 2% of children and
                            adults,
                            respectively, suffer from food allergy, Cow's milk, egg, peanut ...</p>
                        <div class="Author d-flex mt-5 mb-2">
                            <div class="author-img me-3">
                                <img src={author} alt=""/>
                            </div>
                            <div class="author-data">
                                <h6>Author name</h6>
                                <p class="text-secondary">Jun 27, 2023 · 6 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card cards mt-3 me-lg-3 border-1 shadow col-lg-3 col-md-6 col-sm-12">
                    <img src={blogs} className="card-img-top mt-2"
                        alt="..."/>
                    <div class="card-body">
                        <h6 class="text-secondary mt-2">Article</h6>
                        <h6 class="card-title text-bold mt-3">Management of food allergies</h6>
                        <p class="card-text text-secondary mt-3 mb-3">Worldwide, approximately 8 and 2% of children and
                            adults,
                            respectively, suffer from food allergy, Cow's milk, egg, peanut ...</p>
                        <div class="Author d-flex mt-5 mb-2">
                            <div class="author-img me-3">
                                <img src={author} alt=""/>
                            </div>
                            <div class="author-data">
                                <h6>Author name</h6>
                                <p class="text-secondary">Jun 27, 2023 · 6 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      {/* end blogs cards */}

      {/* start FAQ */}
      <section class="five w-75 m-auto">
        <div class="text-center mt-5 mb-4">
            <h1 class="frequently">Frequently asked questions</h1>
        </div>
    <Accordion className="accordion"  >
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is my personal data and information secure when using Nutry?</Accordion.Header>
        <Accordion.Body>
        Nutry takes the privacy and security of user data seriously. It implements measures to protect your personal information, and you can refer to the app's privacy policy for detailed information on data security practices.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does nutry work?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga nisi explicabo vitae quibusdam, impedit rerum, ducimus dolorum quo tempore nesciunt amet suscipit reprehenderit provident consequatur vel rem perferendis sapiente!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can i customize my nutrition plan on nutry?</Accordion.Header>
        <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga nisi explicabo vitae quibusdam, impedit rerum, ducimus dolorum quo tempore nesciunt amet suscipit reprehenderit provident consequatur vel rem perferendis sapiente!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Is nutry suitable for parents and childrens?</Accordion.Header>
        <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga nisi explicabo vitae quibusdam, impedit rerum, ducimus dolorum quo tempore nesciunt amet suscipit reprehenderit provident consequatur vel rem perferendis sapiente!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Can i track my habits and nutrition plan on nutry?</Accordion.Header>
        <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga nisi explicabo vitae quibusdam, impedit rerum, ducimus dolorum quo tempore nesciunt amet suscipit reprehenderit provident consequatur vel rem perferendis sapiente!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
      {/* end FAQ */}
            <hr className="container text-center fw-bold w-75 mt-2" />

    </div>
  );
};

export default Home;
