# Live url
[Click me 👆 to go live](https://sahil-verma-9696.github.io/Lifting-hearts/)

# Heart Animation Feature

This script dynamically creates and animates heart images based on user interactions (mouse or touch) on the screen. It’s designed to add a fun and interactive visual effect.

---

## Key Features

1. **Dynamic Heart Creation**  
   Hearts are generated at the user's cursor or touch point.
2. **Random Sizing**  
   Each heart appears with a unique random size.

3. **Timed Removal**  
   Hearts disappear automatically after a specified duration for performance optimization.

---

## JavaScript Description

### **Initialization**

The heart animation functionality is initialized by attaching event listeners to the specified container.

| **Element** | **Event Listener** | **Handler Function**     |
| ----------- | ------------------ | ------------------------ |
| `page`      | `mousemove`        | `handleMouseOrTouchMove` |
| `page`      | `touchmove`        | `handleMouseOrTouchMove` |

---

### **Function Descriptions**

#### `initializeHeartAnimation()`

- **Purpose**: Sets up the heart animation feature.
- **Actions**:
  - Attaches event listeners for `mousemove` and `touchmove` to the container.
  - Calls `handleMouseOrTouchMove` on user interaction.

#### `handleMouseOrTouchMove(event)`

- **Purpose**: Handles mouse or touch movement to create heart elements dynamically.
- **Actions**:
  - Extracts the cursor or touch point coordinates.
  - Generates a new heart element with random size and positions it.
  - Appends the heart to the container.
  - Schedules removal of the heart after a fixed duration.

#### `createHeartElement(x, y)`

- **Purpose**: Creates a heart element with styling and appends it to the container.
- **Parameters**:
  - `x` - Horizontal position of the heart.
  - `y` - Vertical position of the heart.
- **Actions**:
  - Sets the heart’s position and size.
  - Appends the heart to the `page` container.

#### `removeHeartElement(element)`

- **Purpose**: Removes the heart element from the DOM after a delay.
- **Parameters**:
  - `element` - The heart element to remove.

---

### **Code Reference**

#### HTML Code:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta charset for proper encoding -->
    <meta charset="UTF-8">

    <!-- Meta tag for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Title of the page -->
    <title>Lifting hearts</title>

    <!-- Link to external stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Main container for the page -->
    <div class="page">
        <!-- Heart images will be dynamically added by JavaScript -->
    </div>
</body>

<!-- Link to external JavaScript file -->
<script src="script.js"></script>

</html>
```

#### CSS Code:

```CSS
/*
 * Global Styles
 * Resets default browser margins and paddings, and ensures consistent box-sizing.
 */
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Ensures consistent width and height calculations */
}

/*
 * HTML and Body Styles
 * Sets the full width and height for the main viewport.
 */
html,
body {
    width: 100%; /* Full viewport width */
    height: 100%; /* Full viewport height */
}

/*
 * Page Container
 * The main container for the heart animation, styled with a black background and relative positioning.
 */
.page {
    width: 100%; /* Full viewport width */
    height: 100%; /* Full viewport height */
    background-color: black; /* Background color for contrast */
    position: relative; /* Relative positioning to anchor child elements */
}

/*
 * Heart Image Styles
 * Styles for the dynamically generated heart elements.
 * Includes positioning, initial transformations, and animation properties.
 */
.page-img {
    width: 50px; /* Fixed width for hearts */
    position: absolute; /* Positioned absolutely relative to the .page container */
    transform: translateX(-50%) translateY(-100%) rotateZ(13deg); /* Initial transform for placement and slight rotation */
    animation-name: heart; /* Attach animation defined in @keyframes */
    animation-duration: 6s; /* Duration of the animation */
}

/*
 * Heart Animation
 * Defines the animation for heart elements, making them move upward and apply a color-changing effect.
 */
@keyframes heart {
    100% {
        transform: translateY(-5000%); /* Moves the heart far upward */
        filter: hue-rotate(720deg); /* Rotates colors for a vibrant effect */
    }
}

```

#### JavaScript Code:

```javascript
(() => {
  /**
   * Initializes the heart animation feature by attaching event listeners.
   */
  const initializeHeartAnimation = () => {
    const page = document.querySelector(".page");
    if (!page) {
      console.error("Container with class 'page' not found.");
      return;
    }

    // Attach event listeners for mouse and touch movements
    page.addEventListener("mousemove", handleMouseOrTouchMove);
    page.addEventListener("touchmove", handleMouseOrTouchMove);
  };

  /**
   * Handles mouse or touch movement events to generate hearts dynamically.
   * @param {MouseEvent | TouchEvent} event - The mouse or touch event.
   */
  const handleMouseOrTouchMove = (event) => {
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;

    const heart = createHeartElement(x, y);
    removeHeartElement(heart);
  };

  /**
   * Creates a heart element at the specified coordinates.
   * @param {number} x - Horizontal position of the heart.
   * @param {number} y - Vertical position of the heart.
   * @returns {HTMLElement} The created heart element.
   */
  const createHeartElement = (x, y) => {
    const heart = document.createElement("img");
    heart.src = "./heart.png"; // Path to heart image
    heart.classList.add("page-img");

    // Set heart position and size
    heart.style.position = "absolute";
    heart.style.top = `${y}px`;
    heart.style.left = `${x}px`;
    heart.style.width = `${Math.random() * 100}px`;

    // Append heart to the page container
    const page = document.querySelector(".page");
    page.appendChild(heart);

    return heart;
  };

  /**
   * Removes the specified heart element from the DOM after a delay.
   * @param {HTMLElement} element - The heart element to remove.
   */
  const removeHeartElement = (element) => {
    setTimeout(() => {
      element.remove();
    }, 3000); // Duration before removal (3 seconds)
  };

  // Initialize the animation feature
  initializeHeartAnimation();
})();
```

## Contribution

### Developed By

This HTML, CSS, and JavaScript file was modularized, documented, and optimized by **Sahil Verma** in collaboration with **ChatGPT**, gaining valuable experience and insights into industry standards to ensure clarity and maintainability for developers.
