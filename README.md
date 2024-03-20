# Watches Website

This project is a simple website showcasing various watches. It includes a header with navigation, a product carousel, and a footer with social media links.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Open the index.html file in your web browser.

## Technologies Used

- HTML
- CSS
- JavaScript
- Splide.js (for the carousel)

## Features

- Responsive design
- Dynamic product carousel
- Keyboard navigation for the carousel

## File Structure

- `index.html`: Main HTML file for the website.
- `style.css`: Custom CSS file for styling.
- `app.js`: JavaScript file for dynamic functionality.
- `data.json`: JSON file containing product data.

## Pseudo code

1. Start HTML document:
- Define the document structure and initial settings.

2. Load external resources:
- Link to the Splide CSS and JavaScript files.
- Include a custom CSS file for styling.

3. Define the HTML structure:
- Create a container div to hold the entire webpage.
- Inside the container, include sections for header, product carousel, and footer.

4. Header Section:
- Include a logo and navigation menu.
- Add a sign-up button.

5. Product Carousel Section:
- Create a content div to display product details.
- Implement a Splide slider for the carousel, initially empty.

6. Footer Section:
- Include icons for social media links.

7. JavaScript Execution:
- When the DOM content is loaded:
    - Select necessary HTML elements such as content and container.
    - Fetch product data from a JSON file asynchronously.
    - Parse the JSON response into a JavaScript object.
    - Initialize a Splide slider with custom options.
    - Add an event listener for the 'move' event on the slider:
        - Retrieve the product data corresponding to the current slide index.
        - Update the content section with the product details.
        - Update the container background with the product's background color.
    - Mount the Splide slider to the document.

8. Keyboard Navigation:
- Add a keydown event listener to the document.
- If the left arrow key is pressed, move the slider to the previous slide.
- If the right arrow key is pressed, move the slider to the next slide.