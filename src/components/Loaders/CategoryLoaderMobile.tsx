import React from "react";
import ContentLoader from "react-content-loader";

const CategoryLoaderMobile = () => {
  return (
    <>
      <ContentLoader
        height={288}
        width="110%"
        backgroundColor="#d9d9d9"
        animate={true}
      >
        <rect x="0" width="140px" height="200px" rx="10" ry="10" />
        <rect x="0" y="220" width="140px" height="20px" rx="10" ry="10" />
        <rect x="0" y="250" width="100px" height="20px" rx="10" ry="10" />
        <rect x="180" width="140px" height="200px" rx="10" ry="10" />
        <rect x="180" y="220" width="140px" height="20px" rx="10" ry="10" />
        <rect x="180" y="250" width="100px" height="20px" rx="10" ry="10" />
        <rect x="380" width="140px" height="200px" rx="10" ry="10" />
        <rect x="380" y="220" width="140px" height="20px" rx="10" ry="10" />
        <rect x="380" y="250" width="100px" height="20px" rx="10" ry="10" />
      </ContentLoader>
    </>
  );
};

export default CategoryLoaderMobile;
