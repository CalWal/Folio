import React from "react";

const picStyle = {
  borderRadius: "8px",
  marginTop: "1em"
};

function Picture() {
  return (
    <img
      src="https://avatars2.githubusercontent.com/u/36588838?s=460&v=4"
      alt="Hi there!"
      style={picStyle}
    />
  );
}

export default Picture;
