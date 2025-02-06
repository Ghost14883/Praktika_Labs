document.querySelector("form").addEventListener("submit", function(event) {
    let inputs = document.querySelectorAll("input[required]");
    let valid = true;

    inputs.forEach(input => {
        let errorMessage = input.nextElementSibling;
        if (!input.validity.valid) {
            errorMessage.style.display = "block";
            valid = false;
        } else {
            errorMessage.style.display = "none";
        }
    });

    if (!valid) event.preventDefault();
});
