import AOS from 'aos';
import './App.css';

function App() {
  AOS.init();
  return (
    <div className="App">
      <header className="App-header">
       <nav class="navbar navbar-expand-sm sticky-top">
        <a class="navbar-brand mr-auto" href="/">Jeff&Bel</a>
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse center" id="navbarText">
          <ul class="navbar-nav mid-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Pricing</a>
            </li>
          </ul>
        </div> */}
        <a className="navbar-text" href="/">
          RSVP button
        </a>
      </nav>
        
      <div className="header-con">
          <h1 data-aos="fade-up">God's Ordained</h1>
          <h2 data-aos="fade-up" data-aos-duration="1000">Jeff & Bel</h2>
          <p data-aos="fade-up" >We are happy to invite you in our wedding</p>
          <img className="main-img" data-aos="fade-up" src="https://i.pinimg.com/736x/f9/aa/2a/f9aa2a3ba7d2b4cbd535f594f9305280.jpg" alt=""/>
      </div>
      </header>
      <div className="main-body">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">samplesss hvhgdvf</h1>
      </div>
    </div>
  );
}

export default App;
