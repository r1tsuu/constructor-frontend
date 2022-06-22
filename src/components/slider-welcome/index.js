import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const defaultList = [
  "/assets/slider-welcome/welcome_1.jpg",
  "/assets/slider-welcome/welcome_2.jpg",
  "/assets/slider-welcome/welcome_3.jpg",
  "/assets/slider-welcome/welcome_4.png",
  "/assets/slider-welcome/welcome_5.jpg",
  "/assets/slider-welcome/welcome_6.jpg",
];

const Slide = ({ imgSrc }) => {
  return (
    <>
      <SplideSlide className={styles["slide"]}>
        <div className={cx("image", "slide__image")}>
          <img src={imgSrc} alt="slide" />
        </div>
      </SplideSlide>
    </>
  );
};

export const SliderWelcome = ({ list }) => {
  const slidesToShow = list || defaultList;
  return (
    <>
      <Splide
        options={{
          type: "loop",
          gap: "86px",
          focus: "center",
          padding: "312px",
          pagination: false,
          breakpoints: {
            1550: {
              padding: "188px",
              gap: "74px",
            },
            1024: {
              padding: "30px",
            },
          },
        }}
        className={cx("container__large", "slider")}
      >
        {slidesToShow.map((src, index) => (
          <Slide imgSrc={src} key={index} />
        ))}
      </Splide>
    </>
  );
};
