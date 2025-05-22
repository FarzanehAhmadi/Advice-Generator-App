async function getData() {
  const url = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const dice = document.querySelector(".dice");

dice.addEventListener("click", getRandomAdvice);
getRandomAdvice();
function getRandomAdvice() {
  getData().then((data) => {
    if (data) {
      adviceId.innerHTML = `ADVICE #${data.slip.id}`;
      adviceText.innerHTML = `"${data.slip.advice}"`;
    }
  });
}
