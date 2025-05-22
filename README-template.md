# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![image](https://github.com/user-attachments/assets/5145069a-4673-4288-ba4d-b3c8cca1c84c)


### Links

<!-- - Solution URL: [Frontend Mentor Solution Page](https://www.frontendmentor.io/solutions/advice-generator-app-using-js-and-css-flexbox-grid-ABC123) Replace with your actual solution URL -->
- Live Site URL: [[https://advice-generator-app-dusky.vercel.app](https://farzanehahmadi.github.io/Advice-Generator-App/)]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript (DOM manipulation)
- Mobile-first workflow

### What I learned

- How to fetch data from an external API using `fetch` and `async/await`
- How to manipulate the DOM dynamically to update content
- How to use `box-shadow` and `transform` to add smooth hover effects
- Debugging issues with media queries and layout responsiveness

```js
// Fetching advice from the API
async function getData() {
  const url = "https://api.adviceslip.com/advice";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
