import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDakKl_idZX1nDBa9PfQuA9SrDqr3BKhfo",
    authDomain: "login-database-e9171.firebaseapp.com",
    projectId: "login-database-e9171",
    storageBucket: "login-database-e9171.appspot.com",
    messagingSenderId: "1065399755718",
    appId: "1:1065399755718:web:f2393632f70ef0048748c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();

// Profile image and settings modal elements
const profileImage = document.getElementById('profileImage');
const settingsForm = document.getElementById('settingsForm');
const profileDropdown = new bootstrap.Dropdown(document.getElementById('profileDropdown'));

// Handle profile image change
settingsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const profileName = document.getElementById('profileName').value;
    const profilePicture = document.getElementById('profilePicture').files[0];

    if (profilePicture) {
        const storageRef = storage.ref();
        const profilePicRef = storageRef.child(`profile_pictures/${auth.currentUser.uid}`);

        profilePicRef.put(profilePicture).then(() => {
            profilePicRef.getDownloadURL().then((url) => {
                auth.currentUser.updateProfile({
                    displayName: profileName,
                    photoURL: url
                }).then(() => {
                    profileImage.src = url;
                    alert('Profile updated successfully!');
                    document.getElementById('settingsModal').modal('hide');
                }).catch((error) => {
                    console.error('Error updating profile:', error);
                    alert('Failed to update profile. Please try again.');
                });
            });
        });
    } else {
        auth.currentUser.updateProfile({
            displayName: profileName
        }).then(() => {
            alert('Profile updated successfully!');
            document.getElementById('settingsModal').modal('hide');
        }).catch((error) => {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        });
    }
});

// Check if user is signed in
auth.onAuthStateChanged((user) => {
    if (user) {
        profileImage.src = user.photoURL || '/img/user.png';
    } else {
        window.location.href = 'login.html';
    }
});

// Sign out
document.getElementById('signOutOption').addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Error signing out:', error);
        alert('Failed to sign out. Please try again.');
    });
});