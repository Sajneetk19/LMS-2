import React from 'react';
import './Feedback.css'; // Import your CSS file if you have any styles

function FeedbackForm() {
    const handleSubmit = (event) => {
        // Handle form submission here
        event.preventDefault();
        const formData = new FormData(event.target);
        // Do something with the form data, like send it to a server
        // For example:
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data); // Just for demonstration, you can replace this with your submission logic
    };

    return (
        <div>
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstname" placeholder="Enter name here" />
                </label>
                <br />
                <br />
                <label>
                    Second Name:
                    <input type="text" name="secondname" placeholder="Enter surname here" />
                </label>
                <br />
                <br />
                <label>
                    {/* It's important that both of these radio buttons have the same name so they behave as one component (i.e. Only one can be selected at a time) */}
                    <input type="radio" name="gender" value="male" /> Male
                </label>
                <br />
                <label>
                    <input type="radio" name="gender" value="female" /> Female
                </label>
                <br />
                <br />
                {/* This uses the new HTML "email" input type which will automatically validate the email address when the submit button is clicked */}
                <label>
                    Email:
                    <input type="email" name="mail" placeholder="e-mail address" />
                </label>
                <br />
                <br />
                <label>
                    Comment:
                    <textarea rows="6" cols="50" name="commentfield"></textarea>
                </label>
                <br />
                <br />
                {/* 
                <select name="countychooser">
                    <option value="cork">Cork</option>
                    <option value="dublin">Dublin</option>
                    <option value="galway">Galway</option>
                    <option value="kerry">Kerry</option>
                </select>
                */}
                <br />
                <br />
                <input type="submit" value="Send Feedback" />
                <input type="reset" value="Reset" />
            </form>
        </div>
    );
}

export default FeedbackForm;
