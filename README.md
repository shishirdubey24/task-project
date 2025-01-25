# Student Management System with Firebase

## Overview

This project is a **Student Management System** that uses **Firebase Authentication** for user login and **Firestore** for managing student data. The system allows administrators or users to manage student information efficiently with a simple and user-friendly interface.

---

## Features

1. **Login System**:

   - Users can log in securely using Firebase Authentication.
   - Login validation to ensure proper access.

2. **Manage Students**:

   - Add new students with details such as name, age, grade, and contact information.
   - View a list of all registered students.
   - Edit and update student details.
   - Delete students if needed.

3. **Real-Time Data**:

   - Student data is stored in Firebase Firestore, allowing real-time updates.

4. **Responsive Design**:
   - The system is designed to work seamlessly on both desktop and mobile devices.

---

## Technologies Used

- **Frontend**: React.js (Vite for setup)
- **Backend**: Firebase (Authentication & Firestore)
- **Styling**: CSS
- **Deployment**: Firebase Hosting

---

## Installation

### Prerequisites

- Node.js installed on your computer.
- Firebase account set up.

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/student-management.git
   cd student-management
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Firebase**:

   - Create a project in [Firebase Console](https://console.firebase.google.com/).
   - Enable **Authentication** (Email/Password sign-in method).
   - Set up **Firestore Database** in test mode.
   - Copy your Firebase configuration keys.

4. **Configure Environment Variables**:

   - Create a `.env` file in the root directory.
   - Add the Firebase configuration:
     ```plaintext
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

5. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   Open your browser and go to `http://localhost:5173`.

6. **Deploy the Project (Optional)**:
   - Build the project:
     ```bash
     npm run build
     ```
   - Deploy using Firebase Hosting:
     ```bash
     firebase deploy
     ```

---

## Usage

1. **Login**:

   - Log in using the credentials provided or create a new account.

2. **Manage Students**:

   - Navigate to the "Students" page to add, edit, or delete student records.

3. **Logout**:
   - Click the "Logout" button to securely log out of the application.

---

## Folder Structure

```
student-management/
├── public/             # Static files
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Main pages (e.g., Login, Dashboard, Students)
│   ├── firebase.js     # Firebase configuration and initialization
│   ├── App.jsx         # Main application file
│   └── index.css       # Global styles
├── .env                # Environment variables
├── package.json        # Project dependencies
└── vite.config.js      # Vite configuration
```

---

## Future Improvements

- Add user roles (e.g., Admin, Teacher, Student).
- Implement search and filter functionality for students.
- Add profile pictures for students.
- Include additional authentication methods like Google Sign-In.

---

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

## Feedback

If you have any suggestions or feedback, feel free to reach out or create an issue in the repository. Happy coding!
