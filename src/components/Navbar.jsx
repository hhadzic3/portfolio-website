import React from 'react';

export default () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" >
      <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Amina Karup</a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
              </ul>
          </div>
      </div>
  </nav>
  <header className="masthead">
  <div className="container h-100">
      <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">Psychotherapeutin in Ausbildung</h1>
              <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5">As a psychologist and psychotherapist, I support you with your concerns. I accompany you on topics such as depression, burnout, fear, trauma, compulsions, personality disorders, psychosomatic complaints, chronic illnesses, partnership conflicts and lovesickness, self-worth, grief reactions and life crises.</p>
              <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
      </div>
  </div>
</header>
<section className="page-section bg-primary" id="about">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                  <h2 className="text-white mt-0">I've got what you need!</h2>
                  <hr className="divider light my-4"/> 
                  <p className="text-white-50 mb-4">I am a psychotherapist in training under supervision (method: psychoanalytically oriented psychotherapy) and clinical psychologist in training</p>
                  <p className="text-white-50 mb-4">Graduation: International Baccalaureate at the Vienna International School</p>
                    <p className="text-white-50 mb-4">Bachelor in Psychology in Vienna, Austria (BSc)</p>
                  <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
              </div>
          </div>
      </div>
  </section>
</div>
    )
}


