import { Gallery } from "../components";

const galleryProps = {
  title: "Titles",
  subTitle: "SubTitle",
  variant: "first",
  gallery: [
    {
      buttonName: "Слайдер1",
      list: [],
    },
    {
      buttonName: "Слайдер2",
      list: [],
    },
  ],
};
export const GalleryTest = () => {
  return (
    <>
      <Gallery {...galleryProps} /> /
    </>
  );
};
