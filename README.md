# Rate-Us

Certainly! Here's the documentation for the interactive rating system:

## Interactive Rating System Documentation

### Introduction
The interactive rating system is a web-based user interface that allows users to select a rating from 1 to 5 and provides a thank you message upon submission. It consists of HTML, CSS, and JavaScript code.

### HTML Structure
The HTML code defines the structure of the rating system. It consists of two main sections: box1 and box2, representing the initial rating interface and the thank you message interface, respectively.

### CSS Styling
The CSS code provides the styling and visual layout for the rating system. It defines various classes and properties to create an attractive and responsive design. Key CSS classes include:

.box1 : Defines the styling for the rating interface section.
.box2 : Defines the styling for the thank you message section.
.hidden : Applies the 'display: none' property to hide an element.

### JavaScript Functionality
The JavaScript code enhances the rating system by adding interactivity and functionality. It consists of the following key elements:

- Variable Declarations:
  display1 : Stores the reference to the box1 element.
  display2 : Stores the reference to the box2 element.
  submit : Stores the reference to the submit button element with the ID "sub".
  rates : Stores a collection of all elements with the class "nums" representing the rating buttons.
  rating : Stores the reference to the element with the ID "ratin" where the selected rating will be displayed.

### Usage
To use the interactive rating system, include the provided HTML, CSS, and JavaScript code in your web page. The rating interface will be displayed initially, allowing users to select their rating by clicking on the corresponding rating button. Upon submission, the thank you message section will appear, displaying the selected rating.

