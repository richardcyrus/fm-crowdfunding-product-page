# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
    - [Reference Images](#reference-images)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

To build out a crowdfunding product page and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Screenshot

- [Mobile](./design/screenshots/mobile-screenshot.jpg)
- [Desktop](./design/screenshots/desktop-screenshot.png)

#### Reference Images

- [Mobile](./design/reference/mobile-design.jpg)
- [Desktop](./design/reference/desktop-design.jpg)

### Links

- [Solution URL](https://github.com/richardcyrus/fm-crowdfunding-product-page)
- [Live Site URL](https://www.richardcyrus.com/fm-crowdfunding-product-page)

## My process

- I started with just the HTML and CSS.
- In the first version of adding the interactivity I used AlpineJS.
- I switched to Vue.js v2 so that I would have rendered HTML without the template directives.
- **NOTE: Because I started with AlpineJS and then switched to Vue.js I did not refactor the HTML into composable Vue components, I simply converted the script and template directives to use Vue.js. If I had started from the beginning with Vue.js then the structure would be very different.**

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue.js](https://vuejs.org/) - JS library

### What I learned

1. How to style the HTML5 progress element

```css
/* Most of these settings affect the progress element for Firefox and removes
 * the defaults (appearance: none) for other browsers.
 *
 * The background-color and border-radius style those parts of the
 * progress element in Firefox.
 *
 * The height and width affects all browsers once the defaults are disabled.
 */
.project__stats-funding-progress progress[value] {
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
  background-color: rgba(47, 47, 47, 0.05);
  border-radius: 0.5em;
  border: none;
  height: 0.75rem;
  width: 17.4375rem;
}

/* Style the progress value for Firefox. */
.project__stats-funding-progress progress[value]::-moz-progress-bar {
  background-color: #3cb3ab;
  border-radius: 0.5em;
  position: relative;
}

/* Style the progress value for Webkit/Blink. */
.project__stats-funding-progress progress[value]::-webkit-progress-value,
.project__stats-funding-progress progress::-webkit-progress-value {
  background-color: #3cb3ab;
  border-radius: 0.5em;
}

/* Style the progress bar for Webkit/Blink. */
.project__stats-funding-progress progress[value]::-webkit-progress-bar {
  background-color: rgba(47, 47, 47, 0.05);
  border-radius: 0.5em;
}
```

2. The gradient overlay for the mobile menu was adapted for AlpineJS from work I did on another project. The original work was learned in the [Wes Bos](https://wesbos.com) [JavaScript30](https://javascript30.com/) course.

### Useful resources

- [A Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [The HTML5 Progress Element](https://css-tricks.com/html5-progress-element/)
- [How to use and style progress element in HTML5](https://basicuse.net/articles/pl/textile/html_css/how_to_use_and_style_progress_element_in_html5)
- [Vue.js](https://vuejs.org/)
- [Responsive Menu Toggle with Alpine JS](https://austencam.com/posts/responsive-menu-toggle-with-alpine-js)
- [An accessible Alpine.js menu toggle](https://codewithhugo.com/alpinejs-a11y-menu/)
- [Custom Styling Form Inputs With Modern CSS Features](https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/)
- [CSS Button Styling Guide](https://moderncss.dev/css-button-styling-guide/)
- [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/)
- [Custom CSS Styles for Form Inputs and Textareas](https://moderncss.dev/custom-css-styles-for-form-inputs-and-textareas/)
- [VueJS Components using scrollIntoView()](https://stackoverflow.com/questions/44607108/vuejs-components-using-scrollintoview)

## Author

- Website - [www.richardcyrus.com](https://www.richardcyrus.com)
- Frontend Mentor - [@richarcyrus](https://www.frontendmentor.io/profile/richarcyrus)
- Twitter - [@techmanrc](https://www.twitter.com/techmanrc)
