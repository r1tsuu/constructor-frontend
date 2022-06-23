import classNames from "classnames";
import TextTransition, { presets } from "react-text-transition";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useState } from "react";

import { Arrows } from "./Arrows";
import { toStrNumberWithLeadingZeroes as toStrZeroes } from "../../utils";
import { builder } from "../../utils/constants";

import altSrc from "./assets/alt.webp";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const CaroucelProgress = ({ currentIndex, listLength }) => {
  return (
    <div className={styles["caroucel-progress"]}>
      <div>
        <TextTransition
          text={toStrZeroes(currentIndex + 1, 2)}
          springConfig={presets.default}
        />
        <span className={styles["caroucel-progress-line"]} />
        <TextTransition
          text={toStrZeroes(listLength, 2)}
          springConfig={presets.default}
        />
      </div>
    </div>
  );
};

const GalleryCaroucelItem = ({ isFirstVariant, photoSrc }) => {
  return (
    <SplideSlide>
      <div
        className={cx(
          `${builder.classNamePrefix}__image`,
          "caroucel-image",
          isFirstVariant && "second"
        )}
      >
        <img src={photoSrc} alt="slide" />
      </div>
    </SplideSlide>
  );
};

const GalleryCaroucelList = ({ list, variant }) => {
  const isFirstVariant = variant === "first";
  if (list)
    return (
      <>
        {list.map((photoSrc, index) => (
          <GalleryCaroucelItem
            photoSrc={photoSrc}
            isFirstVariant={isFirstVariant}
            key={index}
          />
        ))}
      </>
    );
  return (
    <>
      <GalleryCaroucelItem isFirstVariant={isFirstVariant} photoSrc={altSrc} />
      <GalleryCaroucelItem isFirstVariant={isFirstVariant} photoSrc={altSrc} />
      <GalleryCaroucelItem isFirstVariant={isFirstVariant} photoSrc={altSrc} />
    </>
  );
};

export const GalleryCaroucel = ({ list, variant }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = list.length ? list.length : 3;
  const isFirstVariant = variant === "first";

  const handleMove = (splide, newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Splide
        hasTrack={false}
        className={`${builder.classNamePrefix}__container__large`}
        options={{
          type: "loop",
          gap: isFirstVariant ? "20px" : "85px",
          focus: "center",
          arrowPath: "M0.855286 0.857422L6.56957 6.57171L0.855286 12.286",
          pagination: false,
          padding: isFirstVariant ? "312px" : "377px",
          // fixedHeight: isFirstVariant ? "678px" : "610px",
          breakpoints: {
            [builder.breakpoints.LAPTOP]: {
              gap: isFirstVariant ? "22px" : "75px",
              padding: isFirstVariant ? "180px" : "242px",
              // fixedHeight: isFirstVariant ? "556px" : "499px",
            },
            [builder.breakpoints.TAB]: {
              gap: "10px",
              padding: "30px",
              // fixedHeight: "370px",
            },
            [builder.breakpoints.MOBILE]: {
              padding: "20px",
              // fixedHeight: "175px",
            },
          },
        }}
        onMoved={handleMove}
      >
        <SplideTrack>
          <GalleryCaroucelList />
        </SplideTrack>
        <Arrows />
        <CaroucelProgress currentIndex={currentIndex} listLength={length} />
      </Splide>
    </>
  );
};
