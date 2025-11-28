const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "Purple and white pansies", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaohs tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
]

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/"

for (const image of images) {
  const newImg = document.createElement("img")
  newImg.src = baseURL + image.filename
  newImg.alt = image.alt
  newImg.tabIndex = "0"
  thumbBar.appendChild(newImg)
}
