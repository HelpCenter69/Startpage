const config = window.startpageConfig;
const coverImgDisplay = document.getElementById("coverImg-display");
const userDisplay = document.getElementById("user-display");
const animations = document.querySelectorAll("#scanlines");
const faviconDisplay = document.getElementById("favicon-display");

document.title = config.title;
userDisplay.innerText = config.username;
coverImgDisplay.src = config.coverImage;
coverImgDisplay.style.opacity = config.coverImageOpacity;
coverImgDisplay.style.filter = `blur(${config.coverImageBlur}px)`;
faviconDisplay.href = config.favicon;

if (config.enableAnimation) animations.forEach((animation) => animation.classList.remove("hidden"));
else animations.forEach((animation) => animation.classList.add("hidden"));

const style = document.createElement("style");
style.id = "user-style-css";
style.innerText = config.userStyle;
document.head.appendChild(style);
