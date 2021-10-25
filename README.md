# Rancid Tomatillos
Mod3 + Rancid Tomatillos

<img width="600" alt="Screen Shot 2021-10-24 at 2 43 00 PM" src="https://user-images.githubusercontent.com/83723401/138612238-a833800b-e1d0-4bd8-92bb-5583387511e8.png">

## Abstract
Not sure what to watch tonight? Use Rancid Tomatillo to browse a library of movies. Get to know the overview, release date, and other fun movie info to help you decide what you'll watch next.

## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Install](#install)
  - [Illustrations](#illustrations)
  - [Code Architecture](#code-architecture)
  - [Contributors](#contributors)
	- [Wins](#wins)
	- [Challenges + Improvements](#challenges)
  - [Project Specs](#project-specs)

## Technologies
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  - React
  - Router
  - Cypress
  - Mocha
  - Javascript
  - API 
  - CSS
  - node
  - eslint
  - Atom/VSCode

## Install
Project deployed on GitHub pages [here]( https://reneeswick.github.io/rancidTomatillo/ ). 

## Illustrations
![Walkthrough of App](https://user-images.githubusercontent.com/83723401/138612564-84921686-4c67-402a-b4ce-1e1bf65b0c6a.gif)
  
## Code Architecture
``React Components``
- App
- CardContainer
- Card
- MovieDetails
- Error

``ApiCalls.js``
- Housing for network requests

``styles``
- Directory of CSS files

``./cypress/integration``
- Testing files

## Contributors
  - [Eric Sergeant](https://github.com/EricSergeant)
  - [Renee Swick-Ziller](https://github.com/reneeswick)

## Wins
``React, Router, & Cypress -- New Technologies``
  - This was our first time using ``React`` and ``Router``, so getting familiar with those environments for the first time was a definite win!
  - Additionaly, this was our first time testing in ``Cypress``. 
  - Using (and still learning) three new technologies was a joyful struggle.

## Challenges
``Error Handling``
- We created an Error component to handle errors as they may come (specifically in network requests). These were challenging to render as they behaved differently than expected in conjunction with ``Router`` and then again behaved differently when deployed to GHpages.

``Timeline``
- This project was created in a short week-and-a-half sprint. ``React``, ``Router``, and ``Cypress`` were all newly learned simultaneously in that same time-frame. As a result, this project, at times, served us as a sandbox of sorts for practicing these new skills. 

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)
