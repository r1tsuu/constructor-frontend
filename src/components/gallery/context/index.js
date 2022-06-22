import { createContext, useContext, useState } from "react";

const GalleryContext = createContext();

export const GalleryProvider = ({ gallery, children, ...props }) => {
  const [listToShow, setListToShow] = useState(0);
  return (
    <GalleryContext.Provider
      value={{ gallery, listToShow, setListToShow, ...props }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  const { gallery, listToShow, setListToShow } = useContext(GalleryContext);

  return {
    gallery,
    listToShow,
    setListToShow,
  };
};
