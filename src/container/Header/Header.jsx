import React from "react";

import "./Header.scss";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => (
  <div
    className="app__header app__wrapper section__padding"
    id="home"
    data-scroll
  >
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <LazyLoadImage
        alt="image"
        effect="blur"
        src={images.welcome}
        delayTime={300}
        threshold={100}
      />
    </div>
  </div>
);

export default Header;
