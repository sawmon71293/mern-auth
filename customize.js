document.addEventListener('DOMContentLoaded', async function () {
    const cartItems = []
    try {
        const response = await fetch("https://api.checkoutchamp.com/product/query/?loginId=testapi&password=abc123");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

       cartItems = await response.json();  // Change to .json() if API returns JSON

    } catch (error) {
        console.error("Error fetching data:", error);
    }
    // Function to check for recurring products
    function checkForRecurringProduct(cartItems) {
        return cartItems.some(item => item.fulfillmentCycleType === 'RECURRING');
    }

    // Show or hide checkbox based on recurring products
    const checkboxContainer = document.getElementById('i2bfyo');
    if (checkboxContainer) {
    checkboxContainer.style.display = checkForRecurringProduct(cartItems) ? 'block' : 'none';
    }
    
  });
  