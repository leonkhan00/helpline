// function for heart count
const heartIcons = document.querySelectorAll(".fa-heart");
let count = 0;
for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function (e) {
    const heartCount = document.getElementById("heartCount");
    count++;
    heartCount.innerText = count;
    heartIcon.classList.remove("fa-regular");
    heartIcon.classList.add("fa-solid");
    heartIcon.style.color = "red";
  });
}