import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { useGalleryContext, GalleryProvider } from "./context";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const defaultList = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.png",
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
];

const Text = ({}) => {
  const { gallery, listToShow } = useGalleryContext();
  return (
    <div className={styles['text']}>
      <div className={styles['title-wrapper']}>

      </div>
    </div>
  )
};

const GalleryContainer = () => {
  const { gallery } = useGalleryContext();
  return <> </>;
};

export const Gallery = (props) => {
  const { gallery } = props;
  return (
    <>
      <GalleryProvider gallery={gallery}></GalleryProvider>
    </>
  );
};
