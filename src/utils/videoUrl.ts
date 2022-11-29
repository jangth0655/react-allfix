export const videoUrl = (key?: string) => {
  if (!key || key === "") {
    return "동영상이 없습니다.";
  }
  return `https://www.youtube.com/embed/${key}`;
};
