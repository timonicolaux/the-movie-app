import React from "react";
import ContentLoader from "react-content-loader";

const MovieCarouselLoaderDesktop = () => {
  return (
    <>
      <ContentLoader
        height={340}
        width="110%"
        backgroundColor="#d9d9d9"
        animate={true}
      >
        <rect x="0" width="160px" height="220px" rx="10" ry="10" />
        <rect x="0" y="240" width="160px" height="20px" rx="10" ry="10" />
        <rect x="0" y="270" width="100px" height="20px" rx="10" ry="10" />
        <rect x="200" width="160px" height="220px" rx="10" ry="10" />
        <rect x="200" y="240" width="160px" height="20px" rx="10" ry="10" />
        <rect x="200" y="270" width="100px" height="20px" rx="10" ry="10" />
        <rect x="400" width="160px" height="220px" rx="10" ry="10" />
        <rect x="400" y="240" width="160px" height="20px" rx="10" ry="10" />
        <rect x="400" y="270" width="100px" height="20px" rx="10" ry="10" />
        <rect x="600" width="160px" height="220px" rx="10" ry="10" />
        <rect x="600" y="240" width="160px" height="20px" rx="10" ry="10" />
        <rect x="600" y="270" width="100px" height="20px" rx="10" ry="10" />
        <rect x="800" width="160px" height="220px" rx="10" ry="10" />
        <rect x="800" y="240" width="160px" height="20px" rx="10" ry="10" />
        <rect x="800" y="270" width="100px" height="20px" rx="10" ry="10" />
        <rect x="1000" width="160px" height="220px" rx="10" ry="10" />
        <rect x="1000" y="240" width="160px" height="20px" rx="10" ry="10" />
        <rect x="1000" y="270" width="100px" height="20px" rx="10" ry="10" />
        <rect x="1200" width="160px" height="220px" rx="10" ry="10" />
        <rect x="1200" y="240" width="160px" height="20px" rx="10" ry="10" />
        <rect x="1200" y="270" width="100px" height="20px" rx="10" ry="10" />
        <rect x="1400" width="160px" height="220px" rx="10" ry="10" />
        <rect x="1400" y="240" width="160px" height="20px" rx="10" ry="10" />
        <rect x="1400" y="270" width="100px" height="20px" rx="10" ry="10" />
      </ContentLoader>
    </>
  );
};

export default MovieCarouselLoaderDesktop;
