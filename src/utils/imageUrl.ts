const ImageUrl = (imageId?: string) => {
  if (!imageId || imageId === "") {
    return "이미지가 없습니다.";
  }
  return `https://image.tmdb.org/t/p/w500/${imageId}`;
};

export default ImageUrl;
