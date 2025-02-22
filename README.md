# wustl.edu

This GitHub repository contains the source code for an interactive YouTube video quiz web application.
The application is designed to present questions to users while they watch a video, collect their responses, and store the data in a Firestore database.
Here's an overview of the key features and components of the project:
Certainly! Here's a description you can use when creating a GitHub repository for your HTML, CSS, and JavaScript code:

1. User ID Popup: The application starts with a user ID input popup to identify users.

2. Video Integration: The HTML file includes a YouTube video player embedded within a container.
   The video pauses at specific time intervals to display questions to the user.

3. Questions Display: When the video pauses, a question is displayed to the user with multiple-choice options.
   Users can select their answers and provide additional input.

4. Firebase Integration: User responses, including the user's ID, selected option, and additional
   input, are collected and stored in a Firestore database.

5. Responsive Design: The application is designed to be responsive, adapting to different screen sizes and orientations.

6. Evenly Distributed Pauses: The video's pause times are evenly distributed throughout the video's
   duration to engage users at specific points.

This repository contains the HTML, CSS, and JavaScript code required to create the interactive video quiz application.
It uses the YouTube Iframe API and Firebase JavaScript SDK for video integration and data storage.


## open a file:

opend folder + cmd on the directory bar + enter
code + 2 spaces + enter

## To deploy the app on firebase, run the following command in the terminal:

firebase deploy --only hosting
firebase login
firebase init hosting
firebase logout