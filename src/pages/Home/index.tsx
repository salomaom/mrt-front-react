import { useEffect, useState } from "react";

import FilterBar from "@components/FilterBar";
import ImageGallery from "@components/ImageGallery";

import { Main, ActionsContainer, ActionsPlaceHolder } from "./styles";

function Home() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const gotImages = [];
    for (let index = 0; index < Array(6).length; index++) {
      gotImages.push(
        "https://placehold.co/600x400/001049/EFF0F6?text=MRT&font=roboto"
      );
    }
    setImages(gotImages);
  }, []);

  return (
    <>
      <FilterBar />
      <Main>
        <ImageGallery images={images} />
        <ActionsContainer>
          <ActionsPlaceHolder>AÇÕES</ActionsPlaceHolder>
        </ActionsContainer>
      </Main>
      <div>LIST</div>
    </>
  );
}

export default Home;
