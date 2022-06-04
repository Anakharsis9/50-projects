const feed = document.querySelector(".feed");

function updateFeed() {
  const URL = "https://picsum.photos/300?random=";
  const imgCount = 15;
  let i = 1;

  while (i <= imgCount) feed.append(createImageBlock(URL + i++));
}

function createImageBlock(imgSrc) {
  const imgBlock = document.createElement("div");
  imgBlock.className = "img-block";

  const img = document.createElement("img");
  img.src = imgSrc;

  imgBlock.append(img);

  return imgBlock;
}

updateFeed();
