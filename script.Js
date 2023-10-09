<script>
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Collect and process form data
            const formData = new FormData(form);

            // Create an object to store the form data
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

            // Display the collected data (you can modify this part)
            console.log(formDataObject);
            alert('Form submitted successfully!');
        });
    });
</script>
</body>
</html>
