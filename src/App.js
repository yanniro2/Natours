/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Style/main.css";
import nat1 from "./Img/nat-1.jpg";
import nat1Large from "./Img/nat-1-large.jpg";
import nat2 from "./Img/nat-2.jpg";
import nat2large from "./Img/nat-2-large.jpg";
import nat3 from "./Img/nat-3.jpg";
import nat3Large from "./Img/nat-3-large.jpg";
import nat8 from "./Img/nat-8.jpg";
import nat9 from "./Img/nat-9.jpg";
import logoGreen1 from "./Img/logo-green-1x.png";
import logoGreen2 from "./Img/logo-green-2x.png";
import logoGreenSmall1 from "./Img/logo-green-small-1x.png";
import logoGreenSmall2 from "./Img/logo-green-small-2x.png";
import logoWhite from "./Img/logo-white.png";
import { GiWorld } from "react-icons/gi";
import { VscCompass } from "react-icons/vsc";
import { BiMapAlt } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import videomp4 from "./Clip/video.mp4";
import videowebm from "./Clip/video.webm";
function App() {
  return (
    <div className="App">
      <div className="navigation">
        <input
          type="checkbox"
          name="navigation-link"
          id="navi-toggle"
          className="navigation__checkbox"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon"> </span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span> About natous
              </a>
            </li>

            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>your benifits
              </a>
            </li>

            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>popular tours
              </a>
            </li>

            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>stories
              </a>
            </li>

            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>book now
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="header">
        <div className="header__logo-box">
          <img src={logoWhite} alt="logoimage" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>

          <a href="#section-tour" className="btn btn--white btn--animated">
            Discover our tour
          </a>
        </div>
      </header>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventurous people
            </h2>
          </div>

          {/* <!-- Row 1 (1/2)--> */}
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertaiary u-margin-bottom-small">
                you're going to fall in love with nature
              </h3>
              <p className="paragraph">
                It is not so much for its beauty that the forest makes a claim
                upon men’s hearts, as for that subtle something, that quality of
                air that emanation from old trees, that so wonderfully changes
                and renews a weary spirit.
              </p>
              <h3 className="heading-tertaiary u-margin-bottom-small">
                live adventures like you never have before
              </h3>
              <p className="paragraph">
                For most of history, man has had to fight nature to survive in
                this century he is beginning to realize that, in order to
                survive, he must protect it.
              </p>

              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  // srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                  srcSet={`${nat1} 300w, ${nat1Large} 1000w`}
                  alt="Photo1"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  className="composition__photo--p1 composition__photo"
                />
                {/* <!-- <img
                src="img/nat-1-large.jpg"
                alt="Photo 1"
                className="composition__photo--p1 composition__photo"
              /> --> */}
                <img
                  // srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                  srcSet={`${nat2} 300w, ${nat2large} 1000w`}
                  alt="Photo2"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  className="composition__photo--p2 composition__photo"
                />

                <img
                  // srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                  srcSet={`${nat3} 300w, ${nat3Large} 1000w`}
                  alt="Photo3"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  className="composition__photo--p3 composition__photo"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <GiWorld className="feature-box__icon" />
              <i className="feature-box__icon icon-basic-world"></i>
              <h3 className="heading-tertaiary u-margin-bottom-small">
                Explore The world
              </h3>
              <p className="feature-box__text paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, modi.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <VscCompass className="feature-box__icon" />
              <i className="feature-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertaiary u-margin-bottom-small">
                meet nature
              </h3>
              <p className="feature-box__text paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, modi.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <BiMapAlt className="feature-box__icon" />
              <i className="feature-box__icon icon-basic-map"></i>
              <h3 className="heading-tertaiary u-margin-bottom-small">
                find your way
              </h3>
              <p className="feature-box__text paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, modi.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <BsHeart className="feature-box__icon" />
              <i className="feature-box__icon icon-basic-heart"></i>
              <h3 className="heading-tertaiary u-margin-bottom-small">
                live a healthier life
              </h3>
              <p className="feature-box__text paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, modi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-tour" id="section-tour">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Most popular tour</h2>
        </div>
        <div className="row">
          {/* <!-- orange --> */}
          <div className="col-1-of-3">
            <div className="card">
              {/* <!-- FRONT --> */}
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>

                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    the sea Explorer
                  </span>
                </h4>

                <div className="card__details">
                  <ul>
                    <li className="">3 day tour</li>
                    <li className="">Up to 30 people</li>
                    <li className="">2 tour guides</li>
                    <li className="">Sleep in cozy hostels</li>
                    <li className="">Difficulty: Very Easy</li>
                  </ul>
                </div>
              </div>
              {/* <!-- BACK --> */}
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#popup" className="btn btn--white btn--animated">
                    book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- green --> */}
          <div className="col-1-of-3">
            <div className="card">
              {/* <!-- FRONT --> */}
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>

                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    the forest hiker
                  </span>
                </h4>

                <div className="card__details">
                  <ul>
                    <li className="">7 day tour</li>
                    <li className="">Up to 40 people</li>
                    <li className="">6 tour guides</li>
                    <li className="">Sleep in provided tents</li>
                    <li className="">Difficulty: Medium</li>
                  </ul>
                </div>
              </div>
              {/* <!-- BACK --> */}
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$497</p>
                  </div>
                  <a href="#popup" className="btn btn--white btn--animated">
                    book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- blue --> */}
          <div className="col-1-of-3">
            <div className="card">
              {/* <!-- FRONT --> */}
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>

                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    The snow adventurer
                  </span>
                </h4>

                <div className="card__details">
                  <ul>
                    <li className="">5 day tour</li>
                    <li className="">Up to 15 people</li>
                    <li className="">3 tour guides</li>
                    <li className="">Sleep in provided tents</li>
                    <li className="">Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              {/* <!-- BACK --> */}
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$897</p>
                  </div>
                  <a href="#popup" className="btn btn--white btn--animated">
                    book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-center-text u-margin-top-huge">
          <a href="#" className="btn btn--green">
            Discover all tours
          </a>
        </div>
      </section>
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={videomp4} type="video/mp4" />
            <source src={videowebm} type="video/webm" />
            your browser is not supported!.
          </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">we make people genuinely happy</h2>
        </div>
        <div className="row">
          <div className="story">
            {/* <!-- person 1 --> */}
            <figure className="story__shape">
              <img src={nat8} alt="Person on a tour" className="story__img" />
              <figcaption className="story__caption">Mary Smith</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertaiary u-margin-bottom-small">
                i had the best week every with my family
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                culpa mollitia sint, dolore voluptatibus obcaecati nostrum
                quaerat excepturi veritatis dolor illum, eius qui praesentium
                quos quibusdam quae molestiae officia dignissimos. dolore
                voluptatibus obcaecati nostrum quaerat excepturi veritatis dolor
                illum, eius qui praesentium quos quibusdam quae molestiae
                officia dignissimos.
              </p>
            </div>
          </div>

          <div className="story">
            {/* <!-- person 2 --> */}
            <figure className="story__shape">
              <img src={nat9} alt="Person on a tour" className="story__img" />
              <figcaption className="story__caption">Jack Wilson</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertaiary u-margin-bottom-small">
                Wow! my life is completely different now
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                culpa mollitia sint, dolore voluptatibus obcaecati nostrum
                quaerat excepturi veritatis dolor illum, eius qui praesentium
                quos quibusdam quae molestiae officia dignissimos. dolore
                voluptatibus obcaecati nostrum quaerat excepturi veritatis dolor
                illum, eius qui praesentium quos quibusdam quae molestiae
                officia dignissimos.
              </p>
            </div>
          </div>
        </div>
        <div className="u-center-text u-margin-top-huge">
          <a href="#" className="btn-text story__btn">
            Read all stories &rarr;
          </a>
        </div>
      </section>

      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Start booking now</h2>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full name"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email address"
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>

                <div className="form__group u-margin-bottom-medium">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="small"
                      name="size"
                    />
                    <label htmlFor="small" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Small tour group
                    </label>
                  </div>

                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="large"
                      name="size"
                    />
                    <label htmlFor="large" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Large tour group
                    </label>
                  </div>
                </div>

                <div className="form__group">
                  <button className="btn btn--green">Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__logo_box">
          <picture className="footer__logo">
            <source
              //   srcset="
              //   img/logo-green-small-1x.png 1x,
              //   img/logo-green-small-2x.png 2x
              // "
              srcSet={`${logoGreenSmall1} 1x , ${logoGreenSmall2} 2x`}
              media="(max-width: 37.5rem)"
            />
            <img
              // srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
              srcSet={`${logoGreen1} 1x , ${logoGreen2} 2x`}
              alt="footer logo"
            />
          </picture>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer_item">
                  <a href="#" className="footer__link">
                    company
                  </a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer__link">
                    contact us
                  </a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer__link">
                    careers
                  </a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer__link">
                    privacy policy
                  </a>
                </li>
                <li className="footer_item">
                  <a href="#" className="footer__link">
                    terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              built by{" "}
              <a href="#" className="footer__link">
                Niroyan Kugaruban
              </a>{" "}
              for online course 2021 &copy; Advance Css and Sass You are 100%
              allowed to use this webpage for both personal and commercial use,
              but NOT to claim it as your own design. A credit to the original
              author, Niroyan Kugaruban, is of course highly appreciated!
            </p>
          </div>
        </div>
      </footer>
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src={nat8} alt="Tourimage 1" className="popup__img" />

            <img src={nat9} alt="Tourimage 2" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tour" className="popup__close">
              {" "}
              &times;{" "}
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              start booking now
            </h2>
            <h3 className="heading-tertaiary u-margin-bottom-small">
              important &ndash; release read these terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis
              perspiciatis est aliquam eaque magni doloremque a libero
              voluptatem quibusdam tempore, sunt harum minus? Nulla ab eveniet
              quis magnam ducimus. Odio veniam sit dolorum modi molestiae
              delectus expedita soluta odit possimus obcaecati vitae laudantium
              sed eligendi, aspernatur ad dolor necessitatibus.
            </p>
            <a href="#" className="btn btn--green">
              Book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
