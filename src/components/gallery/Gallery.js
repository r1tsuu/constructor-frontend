import classNames from "classnames/bind";
import { useState } from "react";
import { builder } from "../../utils/constants";

import { fields } from "./constants";
import { GalleryCaroucel } from "./GalleryCaroucel";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Tab = ({ label, galleryIndex, isActive, setCurrentIndex }) => {
  const handleClick = () => setCurrentIndex(galleryIndex);

  return (
    <button
      onClick={handleClick}
      style={
        isActive
          ? { ...fields.buttonActive.defaultStyles }
          : { ...fields.button.defaultStyles }
      }
    >
      <span>{label}</span>
    </button>
  );
};

const Tabs = ({ gallery, currentIndex, setCurrentIndex }) => {
  return (
    <div className={styles.tabs}>
      {gallery.map((item, index) => {
        const { buttonName } = item;
        return (
          <Tab
            key={index}
            label={buttonName}
            galleryIndex={index}
            isActive={currentIndex === index}
            setCurrentIndex={setCurrentIndex}
          />
        );
      })}
    </div>
  );
};

const Text = ({ title, subTitle }) => {
  return (
    <div className={styles.text}>
      <h3
        className={styles.subTitle}
        dangerouslySetInnerHTML={{
          __html: subTitle || fields.subTitle.defaultValue,
        }}
        placeholder={fields.subTitle.placeholder}
        style={{ ...fields.subTitle.defaultStyles }}
      />
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: title || fields.title.defaultValue,
        }}
        placeholder={fields.title.placeholder}
        style={{ ...fields.title.defaultStyles }}
      />
    </div>
  );
};

const GalleryTop = ({
  gallery,
  variant,
  currentIndex,
  setCurrentIndex,
  title,
  subTitle,
}) => {
  const isFirstVariant = variant === "first";
  const showTabs = gallery.length > 1;
  return (
    <div
      className={cx(
        `${builder.classNamePrefix}__container`,
        styles["gallery-top"],
        !isFirstVariant && styles.second
      )}
    >
      <Text title={title} subTitle={subTitle} />
      {showTabs && (
        <Tabs
          gallery={gallery}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
};

export const Gallery = ({ gallery, title, subTitle, variant, ...props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { list } = gallery[currentIndex];
  return (
    <div className={cx("gallery", `${builder.classNamePrefix}`)}>
      <GalleryTop
        gallery={gallery}
        variant={variant}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        title={title}
        subTitle={subTitle}
      />
      <GalleryCaroucel variant={variant} list={list} />
    </div>
  );
};
