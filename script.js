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

// array for store history
let historyDatas = [];
const historyContainer = document.getElementById("historyContainer");
// functionlity for call button
const callBtns = document.querySelectorAll(".callBtn");
const coin = document.getElementById("coin");
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function (e) {
    // coin count

    const totalCoin = parseInt(coin.innerText);
    const coinLeft = totalCoin - 20;
    if (coinLeft < 0) {
      alert(
        "You dont have enough coins for call. You need to have 20 coins atleast. "
      );
      return;
    }
    coin.innerText = coinLeft;
    // calling
    const serviceName =
      callBtn.parentElement.previousElementSibling.previousElementSibling
        .lastElementChild.innerText;
    const serviceTitle =
      callBtn.parentElement.previousElementSibling.previousElementSibling
        .firstElementChild.innerText;
    console.log(serviceTitle);
    const serviceNum =
      callBtn.parentElement.previousElementSibling.firstChild.nextSibling
        .innerText;
    alert(`Calling ${serviceName} ${serviceNum}`);
    // set data
    const data = {
      name: serviceTitle,
      number: serviceNum,
      date: new Date().toLocaleTimeString(),
    };
    historyDatas.push(data);

    // push data to history section
    historyContainer.innerText = "";
    for (const historyData of historyDatas) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
            class="flex justify-between items-center w-full h-auto bg-gray-100 px-3 py-2 mb-3 rounded-[10px]"
          >
            <div>
              <h3 class="text-black font-semibold">${historyData.name}</h3>
              <span class="text-gray-600">${historyData.number}</span>
            </div>
            <div>
              <p>${historyData.date}</p>
            </div>
          </div>
      `;
      historyContainer.appendChild(div);
    }
  });
}


// function for clear history button
const clearHistoryBtn = document.getElementById("clearBtn");
clearHistoryBtn.addEventListener("click", function () {
  historyContainer.innerText = "";
  historyDatas = [];
});

// functionlity for copy button
let copyCounter = 0;
const copyBtns = document.querySelectorAll(".copyBtn");
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    const copyElement = document.getElementById("copyCount");
    copyCounter++;
    copyElement.innerText = copyCounter;
    const copyText =
      copyBtn.parentElement.previousElementSibling.firstElementChild.innerText;
    // Use Clipboard API
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        alert("Number Copied: " + copyText); // success feedback
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
}
