import React from 'react'
import './style.css';
import './App.css';
 import logo from "./images/blog.jpg" ;
 
export default function index() {
  return (
    <div className="App">
    {/* <img src={logo} alt="" /> */}
<body id="home">
<header class="hero blog">
  <div id="navbar" class="navbar">
    <h1 class ="logo">
      <span class="text primary">

        <i class=" ">MidPoint</i>
      </span>
    </h1>
    <nav>
      <ul>
      <li><a href="/About">About Us</a></li>
      <li><a href="/contact">Sign In</a></li>
      <li><a href="#sıgn up">Sign Up</a></li>
      </ul>
    </nav>
  </div>
</header>
<main>
  <section id="contact" class="contact flex-columns">
    <div class="row">
      <div class="column"> <div class="column-1">
      <img src={logo} alt="" />
        </div>  </div>
       <div class="column"> <div class="column-2 bg-light">
        <h2>Sign In </h2>
        <form action="" class="callback-form">
          <div class="form-control">
            <div class="form-control">
              <label for="name"></label>
              <input type="text" name="name" id="name" placeholder="Enter name"></input>
            </div>
            <div class="form-control">
             <label for="email"></label>
             <input type="text" email="email" placeholder="Enter Email"></input>
          </div>
       
        </div>
        <input type="text" value="Send" id="submit" class="btn"></input>
        </form>
        </div>
        </div>
    
    </div>
  </section>
</main>

</body>
  </div>
);
}
  
