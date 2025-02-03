# CodePlus - Professional Website

## Created by
- Konrad Kuźniak


## Project Description
CodePlus is a modern, multi-section website designed to showcase services related to software development and testing. The main goal was to create an interactive, responsive platform that presents services in a user-friendly manner and enables contact with potential clients.

---

## Technologies Used

- **HTML5** – Semantic HTML structure optimized for SEO.
- **CSS3** – Modern and responsive design with hover effects and flexible layouts.
- **JavaScript** – Interactive features, such as:
  - Contact form with validation.
  - Sending data to Google Sheets via API.
  - Dynamic comments in the "News" section.
- **Google Apps Script** – Handles the contact form and stores data in Google Sheets.
- **Firebase Firestore** – Database for storing comments.
- **Netlify** – Hosting platform providing speed, security, and support for dynamic features.

---

## Database

1. **Google Sheets**  
   The contact form collects user data (name, email, message), which is saved to a Google Sheet using Google Apps Script.

2. **Firebase Firestore**  
   Firestore is used as the database for the comment system in the "News" section. The stored data includes:
   - `newsId` – Identifier of the article the comment is linked to.
   - `username` – Name of the user submitting the comment.
   - `comment` – Comment content.
   - `timestamp` – Timestamp of when the comment was added.

---

## Features

- **Responsive Design** – Automatically adjusts to various screen sizes (mobile, tablet, desktop).
- **Interactive Contact Form** – Sends user data to Google Sheets.
- **Thematic Sections**:
  - "About Me" – Information about the website creator.
  - "What I Do" – Presentation of services, e.g., software testing.
  - "Technologies and Frameworks" – Overview of tools used.
  - "News" – Allows users to add comments.
- **Comment System** – Users can add real-time comments, stored in Firebase Firestore and displayed under the relevant articles.
- **Aesthetic Logo** – Professionally optimized logo for visual identity.

---

## Development Ideas

- **IT Blog** – Expand the website with a blog section for knowledge sharing and content marketing.
- **Dynamic Portfolio** – A section with projects automatically fetched from the database.
- **Authentication System** – Simple login system for an admin to manage messages and comments.
- **CRM Integration** – Better management of contacts and potential clients.
- **Performance Optimization** – Implement lazy loading and image compression.
- **API Integrations** – Add features such as payment processing, newsletter subscriptions, and analytics.

---

## Project Links

- **Source Code:** [CodePlus on GitHub](https://github.com/Kuzniakers/CodePlus)  
- **Live Application:** [CodePlus on Netlify](https://codepluskonradkuzniak.netlify.app/news)

---

## Summary
CodePlus is a comprehensive example of a modern website solution. By combining technologies such as Google Sheets and Firebase with best development practices, we created a platform that meets both visual and functional user requirements. The website is ready for further expansion and can serve as a professional IT services portfolio.
