$(document).ready(function () {
    $("#submit-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2 // Change this to the desired minimum length
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            body: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 2 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            subject: {
                required: "Please enter a subject"
            },
            body: {
                required: "Please enter a message"
            }
        },
        submitHandler: function (form) {
            // The form is valid, you can proceed with form submission here if needed
            // For example, you can call a function to send the email here
           
             
    
            
        }
    });
});