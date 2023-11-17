<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Extract form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $subject = $_POST['subject'];
  $industry = $_POST['industry'];
  $role = $_POST['role'];
  $department = $_POST['department'];
  $services = $_POST['services'];
  $budget = $_POST['budget'];
  $message = $_POST['message'];

  // Set recipient email address
  $to = "ilaiayraaja.mca@gmail.com";
  $customer_email = $email; // customer's email

  // Set email subject
  $subject = "New Contact Form Submission";

  // Construct the email message
  $message_body = "
  Name: $name\n
  Email: $email\n
  Phone: $phone\n
  Company/Website: $subject\n
  Industry: $industry\n
  Role: $role\n
  Department: $department\n
  Services: $services\n
  Budget: $budget\n
  Message:\n$message
  ";

  // Set additional headers
  $headers = "From: $email";

  // Send email to your email address
  mail($to, $subject, $message_body, $headers);

  // Send confirmation email to the customer
  $customer_subject = "Thank you for contacting us!";
  $customer_message = "Dear $name,\n\nThank you for contacting us! We have received your information and will get back to you soon.";

  mail($customer_email, $customer_subject, $customer_message, $headers);

  // Output success message
  echo "Form submitted successfully! We will contact you soon.";
} else {
  // Output error message for invalid request
  echo "Invalid request!";
}
?>
