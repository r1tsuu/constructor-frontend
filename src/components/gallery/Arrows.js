import classNames from "classnames/bind";
import { builder } from "../../utils/constants";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const ArrowSvg = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24"
        cy="24"
        r="23.25"
        fill="white"
        stroke="white"
        stroke-width="1.5"
      />
      <path
        d="M22.8553 18.8574L28.5696 24.5717L22.8553 30.286"
        stroke="#262627"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ArrowPrev = () => {
  return (
    <button
      className={cx("arrow", "prev", "splide__arrow splide__arrow--prev")}
    >
      <ArrowSvg />
    </button>
  );
};

const ArrowNext = () => {
  return (
    <button
      className={cx("arrow", "next", "splide__arrow splide__arrow--next")}
    >
      <ArrowSvg />
    </button>
  );
};

export const Arrows = () => {
  return (
    <div
      className={cx(
        "arrows",
        "splide__arrows",
        `${builder.classNamePrefix}__container`
      )}
    >
      <ArrowNext />
      <ArrowPrev />
    </div>
  );
};
