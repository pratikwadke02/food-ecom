import React from "react";
import './Home.css';

const Home = () => {
  return (
    <>
      <header>
        <a href="#" className="logo">
          <i className="fas fa-utensils"></i>Momo.
        </a>

        <nav className="navbar">
          <a className="active" href="#home">
            home
          </a>
          <a href="#dishes">dishes</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#review">review</a>
          <a href="#order">order</a>
        </nav>

        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-shopping-cart"></a>
        </div>
      </header>

      <form action="" id="search-form">
        <input
          type="search"
          placeholder="search here..."
          name=""
          id="search-box"
        />
        <label htmlFor="search-box" className="fas fa-search"></label>
        <i className="fas fa-times" id="close"></i>
      </form>

      {/* <section className="home" id="home">
        <div className="swiper-container home-slider">
          <div className="swiper-wrapper wrapper">
            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>Steam Momo</h3>
                <p></p>
                <a href="#" className="btn">
                  Add To Card
                </a>
              </div>
              <div className="image">
                <img src="images/streammomo.jpeg" alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>Steam Cheese Momo</h3>
                <p></p>
                <a href="#" className="btn">
                  Add To Card
                </a>
              </div>
              <div className="image">
                <img src="images/steamchessemomo.jpeg" alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>Seek Momo</h3>
                <p></p>
                <a href="#" className="btn">
                  Add To Card
                </a>
              </div>
              <div className="image">
                <img src="images/seekhmomo.jpeg" alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>Tandur Momo</h3>
                <p></p>
                <a href="#" className="btn">
                  Add To Card
                </a>
              </div>
              <div className="image">
                <img src="images/tandurmomo.jpeg" alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>Extra Cheese Momo</h3>
                <p></p>
                <a href="#" className="btn">
                  Add To Card
                </a>
              </div>
              <div className="image">
                <img src="images/extracheesemomo2.jpeg" alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>Choco Momo</h3>
                <p></p>
                <a href="#" className="btn">
                  Add To Card
                </a>
              </div>
              <div className="image">
                <img src="images/chocomomo.jpeg" alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish </span>
                <h3>kurkureperi Momo</h3>
                <p></p>
                <a href="#" className="btn">
                  Add To Card
                </a>
              </div>
              <div className="image">
                <img src="images/kurkureperimomo.jpeg" alt="" />
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section> */}

      <section className="dishes" id="dishes">
        <h3 className="sub-heading"> our dishes </h3>
        <h1 className="heading"> popular dishes </h1>

        <div className="box-container">
          <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src="images/dish-1.png" alt="" />
            <h3>cheese burger</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs 40</span>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src="images/dish-2.png" alt="" />
            <h3>Fries </h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs 199</span>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src="images/tandur momo.jpeg" alt="" />
            <h3>Tanduri Momo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs 50</span>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src="images/dish-4.png" alt="" />
            <h3>Momo Pizza</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs 199</span>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src="images/dish-5.png" alt="" />
            <h3>choco cake</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs 110</span>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src="images/frenchfrie.jpeg" alt="" />
            <h3>French Fries</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs 90</span>
            <a href="#" className="btn">
              add to cart
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h3 className="sub-heading"> about us </h3>
        <h1 className="heading"> why choose us? </h1>

        <div className="row">
          <div className="image">
            <img src="images/aboutmomo.jpeg" alt="" />
          </div>

          <div className="content">
            <h3>best food in the Orai City</h3>
            <p></p>
            <p></p>
            <div className="icons-container">
              <div className="icons">
                <i className="fas fa-shipping-fast"></i>
                <span>free delivery</span>
              </div>
              <div className="icons">
                <i className="fas fa-rupee-sign"></i>
                <span>COD</span>
              </div>
              <div className="icons">
                <i className="fas fa-headset"></i>
                <span>10Am To 9Pm service</span>
              </div>
            </div>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>

      <section className="menu" id="menu">
        <h3 className="sub-heading"> our menu </h3>
        <h1 className="heading"> speciality </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="images/menu-1.jpg" alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Cheese Pizza</h3>
              <p></p>
              <a href="#" className="btn">
                add to cart
              </a>
              <span className="price">Rs 220</span>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/menu-2.jpg" alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Double Deaker Burger</h3>
              <p></p>
              <a href="#" className="btn">
                add to cart
              </a>
              <span className="price">Rs 99</span>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/menu-3.jpg" alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Butter Rumali Roti</h3>
              <p></p>
              <a href="#" className="btn">
                add to cart
              </a>
              <span className="price">Rs 25</span>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/menu-4.jpg" alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Desert</h3>
              <p></p>
              <a href="#" className="btn">
                add to cart
              </a>
              <span className="price">Rs 149</span>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/menu-5.jpg" alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Choco Fruit Plate</h3>
              <p></p>
              <a href="#" className="btn">
                add to cart
              </a>
              <span className="price">Rs 310</span>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/menu-6.jpg" alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>CupCake</h3>
              <p></p>
              <a href="#" className="btn">
                add to cart
              </a>
              <span className="price">Rs 150</span>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/menu-7.jpg" alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Drinks</h3>
              <p></p>
              <a href="#" className="btn">
                add to cart
              </a>
              <span className="price">Rs 140</span>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/menu-8.jpg" alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Mix Fruits</h3>
              <p></p>
              <a href="#" className="btn">
                add to cart
              </a>
              <span className="price">Rs 220</span>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/menu-9.jpg" alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Lemon Juice</h3>
              <p></p>
              <a href="#" className="btn">
                add to cart
              </a>
              <span className="price">Rs 130</span>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="review" id="review">
        <h3 className="sub-heading"> customer's review </h3>
        <h1 className="heading"> what they say </h1>

        <div className="swiper-container review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src="images/vishal.jpeg" alt="" />
                <div className="user-info">
                  <h3>Vishal</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p></p>
            </div>

            <div className="swiper-slide slide">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src="images/kirti.jpeg" alt="" />
                <div className="user-info">
                  <h3>kirti</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p></p>
            </div>

            <div className="swiper-slide slide">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src="images/ayush.jpeg" alt="" />
                <div className="user-info">
                  <h3>Ayush</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p></p>
            </div>

            <div className="swiper-slide slide">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src="images/priya.jpeg" alt="" />
                <div className="user-info">
                  <h3>priya</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p></p>
            </div>

            <div className="swiper-slide slide">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src="images/heena.jpg" alt="" />
                <div className="user-info">
                  <h3>Heena</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="order" id="order">
        <h3 className="sub-heading"> Save Info </h3>
        <h1 className="heading"> free and fast </h1>

        <form action="">
          <div className="inputBox">
            <div className="input">
              <span>your name</span>
              <input type="text" id="name" placeholder="enter your name" />
            </div>
            <div className="input">
              <span>your number</span>
              <input
                type="number"
                id="number"
                placeholder="enter your number"
              />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>your order</span>
              <input type="text" id="foodname" placeholder="enter food name" />
            </div>
            <div className="input">
              <span>additional food</span>
              <input type="test" id="add_food" placeholder="extra with food" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>quantity</span>
              <input
                type="number"
                id="quantity"
                placeholder="how many orders"
              />
            </div>
            <div className="input">
              <span>date and time</span>
              <input id="date" type="datetime-local" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>your address</span>
              <textarea
                name=""
                id="address"
                placeholder="enter your address"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="input">
              <span>your message</span>
              <textarea
                name=""
                id="message"
                placeholder="enter your message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>

          <input
            type="button"
            className="btn"
            //   onClick={}
          />
        </form>
      </section>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>locations</h3>
            <a href="#">Orai</a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">dishes</a>
            <a href="#">about</a>
            <a href="#">menu</a>
            <a href="#">reivew</a>
            <a href="#">order</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">7007220590</a>
            <a href="#">themomopoint36@gmail.com</a>
            <a href="#">Station Road,Infront of Peter England Showroom(Orai)</a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="">facebook</a>
            <a href="https://instagram.com/themomopointofficial?igshid=YmMyMTA2M2Y=">
              instagram
            </a>
          </div>
        </div>

        <div className="credit">
          {" "}
          copyright @ 2021 by <span>mr. web designer</span>{" "}
        </div>
      </section>
      <div className="loader-container">
        <img src="images/loader.gif" alt="" />
      </div>
    </>
  );
};

export default Home;
