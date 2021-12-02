import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
const SliderStyle = styled.div`
  .image-gallery {
    width: 500px;
  }

  .image-gallery-slide-wrapper {
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    margin-bottom: 50px;
    padding: 55px 0;
    background-color: rgba(3, 58, 141, 0.05);
  }
  .image-gallery-thumbnail-image,
  .image-gallery-thumbnail {
    border-radius: 5px;
    margin: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  .image-gallery-content .image-gallery-slide .image-gallery-image {
    max-height: none;
  }

  .image-gallery-thumbnail + .image-gallery-thumbnail {
    border: none;
  }
  @media screen and (max-width: 560px) {
    .image-gallery {
      width: 300px;
    }
    .image-gallery-slide-wrapper {
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 25px 0;
    }
  }
`;
const Slider = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];

  return (
    <SliderStyle>
      <ImageGallery items={images} showNav={false} showPlayButton={false} />
    </SliderStyle>
  );
};

export default Slider;
