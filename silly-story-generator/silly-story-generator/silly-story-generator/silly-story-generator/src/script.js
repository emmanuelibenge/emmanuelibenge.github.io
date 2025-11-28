// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Simple silly story generator


function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in disbelief as :insertz:. Bob saw the whole thing, and he felt :emotion:.';

const insertX = ['Willy the Goblin', 'Big Daddy', 'Santa Claus'];
const insertY = ['the soup kitchen', 'the haunted house', 'the mall'];
const insertZ = ['a giant banana fell from the sky', 'a marching band danced', 'the ground turned to jelly'];
const emotions = ['surprised', 'delighted', 'confused'];

function generateStory() {
  let newStory = storyText;
  newStory = newStory.replace(':insertx:', randomValueFromArray(insertX));
  newStory = newStory.replace(':inserty:', randomValueFromArray(insertY));
  newStory = newStory.replace(':insertz:', randomValueFromArray(insertZ));
  newStory = newStory.replace(':emotion:', randomValueFromArray(emotions));

  const name = customName.value.trim();
  if (name.length > 0) {
    newStory = newStory.replace('Bob', name);
  }

  story.textContent = newStory;
}

randomize.addEventListener('click', generateStory);


function returnRandomStoryString() {
  // It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}