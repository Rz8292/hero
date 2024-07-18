# Apex Fitness

This repository contains the reusable components for the Apex Fitness website, including `index.html`, `index.css`, and `index.js`.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Customization](#customization)
- [License](#license)

## Introduction

Apex Fitness is a fitness website template that includes a hero section with navigation, a call-to-action button, and responsive design elements. The components are reusable and can be integrated into other projects easily.

## Usage

To use this component in your project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd <project-directory>
    ```

3. **Open `index.html` in your preferred browser to see the template in action.**

## File Structure

The project contains the following files:

- `index.html`: The main HTML file that includes the structure and content of the web page.
- `index.css`: The main CSS file that includes the styling for the web page.
- `index.js`: The main JavaScript file that includes interactive functionality for the web page.

### index.html

The `index.html` file includes:

- HTML5 doctype declaration.
- Head section with meta tags, title, and links to external resources (Google Fonts, CSS).
- Body section with the main container, hero section, navigation menu, and other content elements.
- Script tag to include the `index.js` file.

### index.css

The `index.css` file includes:

- Global styles for resetting margin, padding, and box-sizing.
- Styling for HTML and body elements, including background color.
- Styles for the hero section, navigation bar, buttons, and responsive design.

### index.js

The `index.js` file includes:

- JavaScript code to add interactive functionality to the web page.
- Initialization of any animations or event listeners.
- Functions to handle user interactions and dynamic content updates.

## Dependencies

This project uses the following external resources:

- [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono): The `JetBrains Mono` font is used for the website's typography.
- [GSAP](https://cdnjs.com/libraries/gsap): GreenSock Animation Platform (GSAP) is used for animations.

Include these resources in your project by adding the following lines to the head section of your HTML file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;800&display=swap" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
