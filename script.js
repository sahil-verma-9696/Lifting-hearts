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