// Function to search products
function searchProducts() {
    // Get the value from the search bar
    const query = document.getElementById('search-bar').value.toLowerCase();

    // Get all product elements
    const products = document.querySelectorAll('.product');

    let found = false; // Flag to check if any products are found

    // Loop through all products and hide or show them based on the search query
    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();

        if (productName.includes(query)) {
            fadeIn(product);
            found = true;
        } else {
            fadeOut(product);
        }
    });

    // Shake effect if no products are found
    if (!found && query !== "") {
        shakeSearchBar(); // Call shake effect
    }
}

// Function to fade in a product with zoom effect
function fadeIn(element) {
    element.style.display = 'block'; // Make sure it's visible
    let opacity = 0; // Initial opacity
    element.style.transform = 'scale(0.8) rotate(10deg)'; // Initial zoom and rotation effect

    // Gradually increase opacity and scale the product to make it zoom and rotate in
    const fadeInterval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1; // Increase opacity
            element.style.opacity = opacity;
        }

        if (opacity <= 1) {
            const scale = 0.8 + opacity * 0.2; // Smooth zooming effect
            const rotate = 10 * (1 - opacity); // Gradually remove rotation
            element.style.transform = `scale(${scale}) rotate(${rotate}deg)`; // Apply the transformation
        }

        if (opacity >= 1) {
            clearInterval(fadeInterval); // Stop the interval when fully visible
        }
    }, 30);
}

// Function to fade out a product with a smooth shrinking effect
function fadeOut(element) {
    let opacity = 1; // Initial opacity
    element.style.transform = 'scale(1) rotate(0deg)'; // Start with no zoom or rotation

    // Gradually decrease opacity and shrink the product while rotating
    const fadeInterval = setInterval(() => {
        if (opacity > 0) {
            opacity -= 0.1; // Decrease opacity
            element.style.opacity = opacity;
        }

        if (opacity > 0) {
            const scale = 1 - (1 - opacity) * 0.2; // Shrinking effect
            const rotate = (1 - opacity) * 10; // Adding rotation as it fades out
            element.style.transform = `scale(${scale}) rotate(${rotate}deg)`; // Apply the shrinking and rotating
        } else {
            clearInterval(fadeInterval); // Stop the interval when fully transparent
            element.style.display = 'none'; // Hide the element when fully invisible
        }
    }, 30);
}

// Function to add shake effect to search bar when no results are found
function shakeSearchBar() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.add('shake'); // Add shake class

    // Remove the shake effect after animation ends
    setTimeout(() => {
        searchBar.classList.remove('shake');
    }, 1000);
}
