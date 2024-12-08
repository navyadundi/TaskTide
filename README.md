
# TaskTide

## Productivity and Time Management Website

TaskTide is directed towards students to help better manage their schedules and tasks in an organized way.

---

## Features

1. **To-Do List**: Keep track of your tasks and mark them as completed.
2. **Event Calendar**: View and manage your events and deadlines.
3. **Timer**: Stay focused with a built-in timer for study sessions.
4. **Note-Taking**: Jot down notes and important information efficiently.

---

## Tech Stack

- **Domain**: Web Development
- **Front End**: 
  - HTML
  - CSS
  - JavaScript
  - Bootstrap
  - (Creation of Web Pages)
- **Back End**:
  - Firebase
- **Version Control**: 
  - Git (GitHub)

---

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

1. **Node.js and npm**: Ensure that Node.js and npm are installed on your system.
   - [Download and install Node.js](https://nodejs.org/)
   - Verify installation:
     ```sh
     node -v
     npm -v
     ```

2. **Git**: Ensure that Git is installed on your system.
   - [Download and install Git](https://git-scm.com/)
   - Verify installation:
     ```sh
     git --version
     ```

### Cloning the Repository

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/navyadundi/TaskTide.git
   ```
2. Navigate to the project directory:
   ```sh
   cd TaskTide
   ```

### Setting Up Firebase

1. **Firebase Account**: Ensure you have a Firebase account and project set up.
   - [Firebase Console](https://console.firebase.google.com/)

2. **Configure Firebase**:
   - Go to your Firebase project settings and get the Firebase SDK snippet.
   - Create a `firebase-config.js` file in the root directory of your project and add your Firebase configuration:

     ```javascript
     // firebase-config.js
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };

     export default firebaseConfig;
     ```

3. **Install Firebase**:
   ```sh
   npm install firebase
   ```

### Installing Dependencies

1. Install the required dependencies for the project:
   ```sh
   npm install
   ```

### Running the Project

1. To start the project, run:
   ```sh
   npm start
   ```

   This will start the development server and open the project in your default web browser.

---

## Usage

- **To-Do List**: Navigate to the To-Do List section and add your tasks. Mark them as completed once done.
- **Event Calendar**: View and add events or deadlines to your calendar.
- **Timer**: Use the timer to stay focused during study sessions.
- **Note-Taking**: Jot down notes and important information in the Notes section.

---

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please create an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Contact

For any inquiries or feedback, please reach out to [Your Contact Information].

---

Happy Productivity! 🚀

