document.getElementById('permit-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents default form submission

    // Retrieve input values
    const projectName = document.getElementById('project-name').value;
    const location = document.getElementById('location').value;
    const workType = document.getElementById('work-type').value;
    const datetime = document.getElementById('datetime').value;
    const requestorName = document.getElementById('requestor-name').value;

    // Display confirmation message
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('confirmation').innerHTML = 
        `<h3>Application Submitted</h3>
         <p>Thank you, ${requestorName}, your application for "${projectName}" at "${location}" has been submitted.</p>`;
    
    // Optional: Clear form fields after submission
    this.reset();
});