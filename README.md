![Image](./preview.jpg)

# Frontend Mentor - Interactive Rating Component

[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-Interactive%20Rating%20Component-2ec866?style=flat-square&logo=frontendmentor)](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)

## Table of Contents

- [Frontend Mentor - Interactive Rating Component](#frontend-mentor---interactive-rating-component)
	- [Table of Contents](#table-of-contents)
	- [Overview](#overview)
		- [Live Demo](#live-demo)
	- [Frontend Mentor](#frontend-mentor)
		- [The Challenge](#the-challenge)
	- [Commentary](#commentary)
		- [Features](#features)
		- [Accessibilty and Semantic HTML](#accessibilty-and-semantic-html)
		- [BEM - Block Element Modifier](#bem---block-element-modifier)
		- [TypeScript, Vite and Bun](#typescript-vite-and-bun)
	- [Built Using](#built-using)
	- [Author](#author)
	- [License](#license)

## Overview

I'm back to studying programming and I've started with the good old HTML and CSS, now I'm relearning JavaScript and TypeScript. After finishing the course I'm tackling some [Frontend Mentor](https://www.frontendmentor.io) challenges to put into practice everything I've learned as I continue my studies. It's also a great way to keep improving - while not forgetting everything I've learned - as I continue to learn new things.

### Live Demo

- [Live Demo](https://cyber-layout-zen.netlify.app)

## Frontend Mentor

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

The challenges are pretty straight forward, you have to replicate the page or element as closely as possible as the initial image or Figma layout - when provided.

### The Challenge

- [Interactive Rating Component](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)

Use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the section depending on their device's screen size

Want some support on the challenge? [Join the Frontend Mentor community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

## Commentary

### Features

Since this is a pretty simple project, I've decided to add a bit of interactivity to it, so I can try new things and learn from it. The main feature is that when the user submits the form, the rating card will flip and show the thanks card, with the rating that the user selected.

I initially made the animation using a mix of `setTimeout` and `translateY` with precise timing so the animation would look smooth and natural. But with a bit of research and help from AI, I found out that there was a more complicated but more performant way to do this animation, so I gave it a try. To be honest, I don't completely understood all the inner workings, but it was an fun experiment and this is a modern way to do 3D animations, so I'm glad I learned it.

I also made in a way that when the user selects a rating, the numbers become filled with starts, which is a nice visual feedback for the user, and also makes it more clear which rating they have selected.

### Accessibilty and Semantic HTML

I've been focusing on learning more about accessibility and semantic HTML, so I can better understand how to structure my pages and make them more accessible to all users. By each project I'm learning a bit more and hopefully through practice it will become a bit more intuitive to me.

### BEM - Block Element Modifier

Since this is one of the most used CSS naming schemes, I've decided to learn it and apply it to my projects. I'm still getting used to it, I find it a bit verbose, and not as intuitive as I've would have liked, but I can see the benefits of it, even more for bigger projects.

### TypeScript, Vite and Bun

From this project on, I'm probably going to start using exclusively TypeScript. Philosophically speaking, I prefer TypeScript over the little mess that JavaScript can become, plus the extra autocompletion and type checking is a nice bonus. I'm also using Vite as my build tool, which is pretty fast and easy to use, and Bun as my package manager, which is also pretty fast and has a nice API.

## Built Using

- HTML
    - Semantic HTML
    - Accessibility
- CSS
    - Flexbox
    - Grid
    - BEM - Block Element Modifier
- Typescript
- Vite
- Bun

## Author

[@psudo-dev](https://github.com/psudo-dev)

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details
