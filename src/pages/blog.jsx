import React from 'react'
import taylor from "../assets/imgs/taylor-kiser-6hxK5l-sHys-unsplash 1.png"
import author from "../assets/imgs/author.png"
function blog() {
  return (
      <div>
          {/* <!-- start page header --> */}
    <div class="blog-head text-center mt-5 mb-4">
      <h6 class="blog-one">From the blog</h6>
      <h1 class="blog-two">From our blog</h1>
      <p class="text-secondary">Knowledge is Nurturing: Cultivate a Healthier Tomorrow through Enlightened Parenting.</p>
    </div>
    {/* <!-- end page header --> */}
    {/* <!-- start cards section --> */}
    <section class="blog-cards mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="card cards mt-3 me-lg-3 border-1 shadow col-lg-3 col-md-6 col-sm-12">
            <img src={taylor} class="card-img-top mt-2" alt="..."/>
            <div class="card-body">
              <h6 class="text-secondary mt-2">Article</h6>
              <h6 class="card-title text-bold mt-3">Management of food allergies</h6>
              <p class="card-text text-secondary mt-3 mb-3">Worldwide, approximately 8 and 2% of children and adults,
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
          <img src={taylor} class="card-img-top mt-2" alt="..."/>
            <div class="card-body">
              <h6 class="text-secondary mt-2">Article</h6>
              <h6 class="card-title text-bold mt-3">Management of food allergies</h6>
              <p class="card-text text-secondary mt-3 mb-3">Worldwide, approximately 8 and 2% of children and adults,
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
          <div class="card cards mt-3 me-lg-3  border-1 shadow col-lg-3 col-md-6 col-sm-12">
            <img src={taylor} class="card-img-top mt-2" alt="..."/>
            <div class="card-body">
              <h6 class="text-secondary mt-2">Article</h6>
              <h6 class="card-title text-bold mt-3">Management of food allergies</h6>
              <p class="card-text text-secondary mt-3 mb-3">Worldwide, approximately 8 and 2% of children and adults,
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
          {/* <!-- end cards section --> */}
      </div>
  )
}

export default blog