const membershipInfo = [
  {
    cost: 50,
    benefits: "You will be able to...",
    training: "Training will be provided for your team once...",
    advertising: "You will get spotlights position in our home page once...",
  },
  {
    cost: 60,
    benefits: "You will be able to...",
    training: "Training will be provided for your team once...",
    advertising: "You will get spotlights position in our home page once...",
  },
  {
    cost: 80,
    benefits: "You will be able to...",
    training: "Training will be provided for your team once...",
    advertising: "You will get spotlights position in our home page once...",
  },
  {
    cost: 100,
    benefits: "You will be able to...",
    training: "Training will be provided for your team once...",
    advertising: "You will get spotlights position in our home page once...",
  },
];

const buttons = document.querySelectorAll(".section2 div button");
const dialog = document.querySelector(".dialog");
const membershipTitles = document.querySelectorAll(".section2 div p");

function createDialogContent(index) {
  
  const member = membershipInfo[index];
  const title = membershipTitles[index].textContent;


  dialog.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Cost: </strong>${member.cost}</p>
        <p><strong>Benefits: </strong>${member.benefits}</p>
        <p><strong>Training: </strong>${member.training}</p>
        <p><strong>Advertising: </strong>${member.advertising}</p>
        <button class='close'>❌</button>
        `;

  closeBtn = dialog.querySelector(".close");
  closeBtn.addEventListener("click", () => dialog.close());
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    createDialogContent(index);
    dialog.showModal();
  });
});
