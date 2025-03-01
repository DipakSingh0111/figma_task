import React from 'react';
import './App.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function App() {
  return (
    <>
      <header>
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li className="dropdown">
              <a href="#" className="nav-link">CATEGORIES~</a>
              <ul className="dropdown-menu">
                <div className="dropdown-columns">
                  {/* Left Column */}
                  <div className="left-col">
                    <li><a href="#">All</a></li>
                    <li><a href="#">Cooking</a></li>
                    <li><a href="#">Indian</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Norwegian</a></li>
                    <li><a href="#">Arts & Croft</a></li>
                    <li><a href="#">Category 04</a></li>
                    <li><a href="#">Yoga</a></li>
                    <li><a href="#">Academic</a></li>
                    <li><a href="#">Back to Roots</a></li>
                    <li><a href="#">Funterseting</a></li>
                  </div>

                  {/* Right Column */}
                  <div className="right-col">
                    <li className="quote">"Do anything, but<br />let it produce joy.</li>
                    <li className="author">-Wait Whitman</li>
                  </div>
                </div>
              </ul>
            </li>

            <li>
              <a href="#">TEACH</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
            <li>
              <a href="#" className="signup">
                SIGNUP
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="content">
            <h1>Hobbies ❤️ Happiness ❤️ Home</h1>
            <p>
              A Nordic startup which brings incredibly interesting hobbies from
              around the world to people of all ages.
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Enter your email" />
              <button>START EXPLORING</button>
            </div>
          </div>
          <div className="image-container">
            <img src="/images/header.jpeg" alt="Family enjoying hobbies" />
          </div>
        </section>
        <section className="explore">
          <p>Explore. Enroll. Have Fun. Repeat - here hobby meets happiness</p>
        </section>
      </main>
      <div className="features-container">
        <div className="feature">
          <img src="/images/icon_1.png" alt="Learn Something New" />
          <h3>Learn something new</h3>
          <p>
            Explore your passion and go beyond the physical and mental boundaries of
            time, age, gender, or geography.
          </p>
        </div>
        <div className="feature">
          <img src="/images/icon_2.png" alt="Skilled & Passionate Teachers" />
          <h3>Skilled &amp; Passionate Teachers</h3>
          <p>
            We offer interactive classes by experts who are qualified and trusted.
          </p>
        </div>
        <div className="feature">
          <img src="/images/icon_3.png" alt="Take classes anytime, anywhere" />
          <h3>Take classes anytime, anywhere</h3>
          <p>
            Join sessions at your own convenience and pace, from the comforts of
            your home.
          </p>
        </div>
        <div className="feature">
          <img src="/images/icon_4.png" alt="Pay as you go" />
          <h3>Pay as you go</h3>
          <p>
            No enrollment fee for our classes. You only pay for the classes that you
            take. Your payment is safe and secure with us.
          </p>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <span className="discount">60% OFF</span>
          <span className="bookmark">★</span>
          <img src="/images/Discover.jpeg" alt="Class Image" />
          <div className="card-content">
            <h3>LANGUAGE</h3>
            <p>Class name - Lorem ipsum dolor sit amet</p>
            <p>
              by John Doe <span className="rating">⭐ 4.7</span>
            </p>
            <p className="price">
              kr1000 <span className="old-price">kr2500</span>
            </p>
            <a href="#" className="enroll-btn">
              Enroll now
            </a>
          </div>
        </div>
        <div className="card">
          <span className="discount">60% OFF</span>
          <span className="bookmark">★</span>
          <img src="/images/Discover.jpeg" alt="Class Image" />
          <div className="card-content">
            <h3>LANGUAGE</h3>
            <p>Class name - Lorem ipsum dolor sit amet</p>
            <p>
              by John Doe <span className="rating">⭐ 4.7</span>
            </p>
            <p className="price">
              kr1000 <span className="old-price">kr2500</span>
            </p>
            <a href="#" className="enroll-btn">
              Enroll now
            </a>
          </div>
        </div>
        <div className="card">
          <span className="discount">60% OFF</span>
          <span className="bookmark">★</span>
          <img src="/images/Discover.jpeg" alt="Class Image" />
          <div className="card-content">
            <h3>LANGUAGE</h3>
            <p>Class name - Lorem ipsum dolor sit amet</p>
            <p>
              by John Doe <span className="rating">⭐ 4.7</span>
            </p>
            <p className="price">
              kr1000 <span className="old-price">kr2500</span>
            </p>
            <a href="#" className="enroll-btn">
              Enroll now
            </a>
          </div>
        </div>
        <div className="card">
          <span className="discount">60% OFF</span>
          <span className="bookmark">★</span>
          <img src="/images/Discover.jpeg" alt="Class Image" />
          <div className="card-content">
            <h3>LANGUAGE</h3>
            <p>Class name - Lorem ipsum dolor sit amet</p>
            <p>
              by John Doe <span className="rating">⭐ 4.7</span>
            </p>
            <p className="price">
              kr1000 <span className="old-price">kr2500</span>
            </p>
            <a href="#" className="enroll-btn">
              Enroll now
            </a>
          </div>
        </div>
      </div>
      <h2>Browse by category</h2>
      <div className="categories">
        <div className="category">
          <img src="/images/Language.jpeg" alt="Language" />
          <p>Language</p>
        </div>
        <div className="category">
          <img src="/images/cooking.jpeg" alt="Cooking" />
          <p>Cooking</p>
        </div>
        <div className="category">
          <img src="/images/music.jpeg" alt="Music" />
          <p>Music</p>
        </div>
        <div className="category">
          <img src="/images/arts.jpeg" alt="Arts & Craft" />
          <p>Arts &amp; Craft</p>
        </div>
        <div className="category">
          <img src="/images/yoga.jpeg" alt="Yoga" />
          <p>Yoga</p>
        </div>
        <div className="category">
          <img src="/images/chess.jpeg" alt="Academics" />
          <p>Academics</p>
        </div>
        <div className="category">
          <img src="/images/root.jpeg" alt="Back to Roots" />
          <p>Back to Roots</p>
        </div>
        <div className="category">
          <img src="/images/fun.jpeg" alt="Funteresting" />
          <p>Funteresting</p>
        </div>
      </div>
      <h2>Six reasons to choose our class</h2>
      <div className="reasons">
        <div className="reason-icons">
          <div className="reason">
            <img src="/images/teachers.jpg" alt="Live Classes" />
            <p>Interactive live online classes</p>
          </div>
          <div className="reason">
            <img src="/images/teachers.jpg" alt="Teachers" />
            <p>Learning from passionate, talented teachers</p>
          </div>
          <div className="reason">
            <img src="/images/teachers.jpg" alt="Global" />
            <p>Cross country sharing of hobbies</p>
          </div>
          <div className="reason">
            <img src="/images/teachers.jpg" alt="Global" />
            <p>Cross country sharing of hobbies</p>
          </div>
          <div className="reason">
            <img src="/images/teachers.jpg" alt="Global" />
            <p>Cross country sharing of hobbies</p>
          </div>
          <div className="reason">
            <img src="/images/teachers.jpg" alt="Global" />
            <p>Cross country sharing of hobbies</p>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="title">Love from community</h1>
        <div className="testimonials">
          <div className="testimonial-card">
            <div className="image-container">
              <img src="/images/ramdom.jpeg" alt="Karandeep" />
            </div>
            <div className="name">Karandeep</div>
            <p className="text">
              It is nice to be on an international platform where there are teachers
              from around the world.
            </p>
          </div>
          <div className="testimonial-card highlight">
            <div className="image-container">
              <img src="/images/ramdom.jpeg" alt="Kalpana" />
            </div>
            <div className="name">Kalpana</div>
            <p className="text">
              The best thing about these classes is that they are live and
              interactive...
            </p>
          </div>
          <div className="testimonial-card">
            <div className="image-container">
              <img src="/images/ramdom.jpeg" alt="Kirti" />
            </div>
            <div className="name">Kirti</div>
            <p className="text">
              As a student, I get to explore and learn about different cultural
              specialties...
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <h2>Meet our teachers</h2> */}
        <div className="teachers">
          <div className="teacher-card">
            <img src="/images/ramdom.jpeg" alt="Karandeep" />
            <div className="teacher-info">
              <div className="teacher-name">Karandeep</div>
              <div className="teacher-subject">YOGA</div>
            </div>
          </div>
          <div className="teacher-card">
            <img src="/images/ramdom.jpeg" alt="Asier" />
            <div className="teacher-info">
              <div className="teacher-name">Asier</div>
              <div className="teacher-subject">ARTS &amp; CRAFT</div>
            </div>
          </div>
          <div className="teacher-card">
            <img src="/images/ramdom.jpeg" alt="Marius Neilson" />
            <div className="teacher-info">
              <div className="teacher-name">Marius Neilson</div>
              <div className="teacher-subject">ACADEMICS</div>
            </div>
          </div>
          <div className="teacher-card">
            <img src="/images/ramdom.jpeg" alt="Nichola" />
            <div className="teacher-info">
              <div className="teacher-name">Nichola</div>
              <div className="teacher-subject">LANGUAGE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="image-wrapper">
          <div className="blob" />
          <img src="/images/teacher.jpeg" alt="Teacher and student" />
        </div>
        <div className="content">
          <h2>
            Become a <span style={{ color: "#1d1d7a" }}>certified teacher</span>
          </h2>
          <p>
            We only have the best and trusted teachers from the globe. Join us if
            you have the skill and passion to share it.
          </p>
          <ul>
            <li>Make your own schedule</li>
            <li>Teach students on an international platform</li>
            <li>
              Become part of an international community of passionate educators
            </li>
          </ul>
          <a href="#" className="btn">
            START TEACHING →
          </a>
        </div>
      </div>
      <div className="container">
        <div className="header">
          {/* <h3>Our blogs</h3>
  <a href="#">SHOW ALL</a> */}
        </div>
        <div className="blog-list">
          <div className="blog-card">
            <img src="/images/blogs.jpg" alt="Blog Image" />
            <div className="blog-content">
              <span className="category">CATEGORY 01</span>
              <div className="title">
                Blog name - Lorem ipsum dolor sit amet, et varius et consectetur
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </div>
              <div className="footer">
                <span>Publisher name</span>
                <span>💬 0</span>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <img src="/images/blogs.jpg" alt="Blog Image" />
            <div className="blog-content">
              <span className="category">CATEGORY 03</span>
              <div className="title">
                Blog name - Lorem ipsum dolor sit amet, et varius et consectetur
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </div>
              <div className="footer">
                <span>Publisher name</span>
                <span>💬 12</span>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <img src="/images/blogs.jpg" alt="Blog Image" />
            <div className="blog-content">
              <span className="category">CATEGORY 02</span>
              <div className="title">
                Blog name - Lorem ipsum dolor sit amet, et varius et consectetur
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </div>
              <div className="footer">
                <span>Publisher name</span>
                <span>💬 0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1>Start learning new skills today and pursue your passion</h1>
        <p>Join the community of global learners and start exploring today.</p>
        <div className="input-group">
          <input type="email" placeholder="Enter your email" />
          <button>GET STARTED →</button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-column">
          <h3>Class Categories</h3>
          <ul>
            <li>Language</li>
            <li>Cooking</li>
            <li>Music</li>
            <li>Arts &amp; Craft</li>
            <li>Yoga</li>
            <li>Academic</li>
            <li>Back To Roots</li>
            <li>Funtreesting</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Learn</h3>
          <ul>
            <li>All Classes</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Teach</h3>
          <ul>
            <li>Become A Teacher</li>
          </ul>
        </div>
        <div className="footer-column">
          <img src="/images/product.jpg" alt="Sell Your Products" className="footer-image" />
          <p>SELL YOUR PRODUCTS WITH US</p>
        </div>
      </footer>
      <div className="footer-bottom">
        © Project 2021. All rights reserved. Made with ❤️ by SimplePlan
        <div className="social-icons">
          <a href="#"><FaFacebook />
          </a>
          {/* Facebook Icon */}
          <a href="#"><FaInstagram />
          </a>
          {/* Instagram Icon */}
          <a href="#"><FaLinkedin />
          </a>
          {/* LinkedIn Icon */}
          <a href="#"><FaTwitter />
          </a>
          {/* Twitter Icon */}
          <a href="#"><FaYoutube />
          </a>
          {/* YouTube Icon */}
        </div>
      </div>
    </>
  );
}

export default App;