import React from 'react';

const Nav = () => {
  return (
    <>
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">Resnica</h4>
                <p className="text-muted">VSŠ je najboljša višja šola.</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Povezave</h4>
                <ul className="list-unstyled">
                  <li><a href="/login" className="text-white">Login</a></li>
                  <li><a href="/register" className="text-white">Register</a></li>
                  <li><a href="/Me" className="text-white">Profile</a></li>
                  <li><a href="/create" className="text-white">Ustvari post</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width = "20">
                <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H326.4L288 448L368.8 380.7C376.6 374.1 376.5 362.1 368.5 355.8L250.6 263.2C235.1 251.7 216.8 270.1 227.8 285.2L288 368L202.5 439.2C196.5 444.3 194.1 452.1 199.1 459.8L230.4 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/>
              </svg>
              <strong>Domov</strong>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                    aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export  default Nav;