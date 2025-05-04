// utils/getImgUrl.js

export const getImgUrl = (filename) => {
    if (!filename) return '';
    return `http://localhost:5000/uploads/${filename}`;
  };
  