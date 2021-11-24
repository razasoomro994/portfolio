import React from 'react'
import "./Service.css"
function Service() {
    return (
        <div>
            
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <h3>We do offer awesome <span>Services</span></h3>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="bx bxl-dribbble" /></div>
                <h4 className="title"><a href>Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-file" /></div>
                <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-tachometer" /></div>
                <h4 className="title"><a href>Magni Dolores</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-world" /></div>
                <h4 className="title"><a href>Nemo Enim</a></h4>
                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Services Section */}


      
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-6 col-6">
              <div className="icon-box">
                <i className="ri-store-line" style={{color: '#ffbb2c'}} />
                <h3><a href>Lorem Ipsum</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}} />
                <h3><a href>Dolor Sitema</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="ri-calendar-todo-line" style={{color: '#e80368'}} />
                <h3><a href>Sed perspiciatis</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-4 mt-lg-0">
              <div className="icon-box">
                <i className="ri-paint-brush-line" style={{color: '#e361ff'}} />
                <h3><a href>Magni Dolores</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-4">
              <div className="icon-box">
                <i className="ri-database-2-line" style={{color: '#47aeff'}} />
                <h3><a href>Nemo Enim</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-4">
              <div className="icon-box">
                <i className="ri-gradienter-line" style={{color: '#ffa76e'}} />
                <h3><a href>Eiusmod Tempor</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-4">
              <div className="icon-box">
                <i className="ri-file-list-3-line" style={{color: '#11dbcf'}} />
                <h3><a href>Midela Teren</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-4">
              <div className="icon-box">
                <i className="ri-price-tag-2-line" style={{color: '#4233ff'}} />
                <h3><a href>Pira Neve</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line" style={{color: '#b2904f'}} />
                <h3><a href>Dirada Pack</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-4">
              <div className="icon-box">
                <i className="ri-disc-line" style={{color: '#b20969'}} />
                <h3><a href>Moton Ideal</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-4">
              <div className="icon-box">
                <i className="ri-base-station-line" style={{color: '#ff5828'}} />
                <h3><a href>Verdo Park</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-4">
              <div className="icon-box">
                <i className="ri-fingerprint-line" style={{color: '#29cc61'}} />
                <h3><a href>Flavor Nivelanda</a></h3>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Features Section */}


        </div>
    )
}

export default Service 