const getCroppedImageUrl = (
  url = "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
) => {
  const target = "media/";

  const index = url.indexOf(target) + target.length;
  const desiredUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);

  console.log(desiredUrl);
};

getCroppedImageUrl();
