document.getElementById('internshipForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form validation or submission handling
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you, ${name}! Your application has been submitted.`);
        this.reset(); // Reset form after submission
    } else {
        alert('Please fill out all required fields.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(".fields h2, .offer h2");
    
    // Check if headings exist before adding event listeners
    if (headings.length > 0) {
        headings.forEach(heading => {
            heading.addEventListener("click", () => {
                const nextElement = heading.nextElementSibling;
                if (nextElement) { // Ensure the next element exists
                    if (nextElement.style.display === "none" || !nextElement.style.display) {
                        nextElement.style.display = "block";
                    } else {
                        nextElement.style.display = "none";
                    }
                }
            });
        });
    }
});
