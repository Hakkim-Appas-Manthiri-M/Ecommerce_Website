import React, {useState} from 'react'

const home = () => {
    const [num, setNum] = useState(0);
  // let x = 1;

  // const handleclick = () =>{
    //  x=x+1;
    //  console.log("x:", x);
    // setNum((a)=>{
    //   return a = a+1;
    // });
  // }

  return (
    <div>
      {/* <h1 className='text-danger'>{num}</h1>
      <button onClick={handleclick}>Click</button> */}
      <nav className="navbar navbar-light bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand manufacturing-consent-regular mx-4" href="#">Mods Fashion</a>
            <form class="d-flex mx-auto">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-dark " type="submit">Search</button>
            </form>
          
        </div>  
      </nav>

    <nav className="navbar navbar-expand navbar-light bg-danger">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-lg-3">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item dropdown mx-lg-3">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Men
              </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">T-Shirts</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Formal Shirts</a>
                    <a class="dropdown-item" href="#">Causual Shirts</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Pants</a>
                  </div>
            </li>
            <li class="nav-item dropdown mx-lg-1">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Women
              </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Nightwear</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Silk Sarees</a>
                    <a class="dropdown-item" href="#">Cotton Sarees</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Kurtis</a>
                  </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default home
