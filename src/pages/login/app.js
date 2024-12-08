
document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('sign-in-btn');
    const signUpBtn = document.getElementById('sign-up-btn');
    const container = document.querySelector('.container');

    signUpBtn.addEventListener('click', () => {
        container.classList.add('sign-up-mode');
    });

    signInBtn.addEventListener('click', () => {
        container.classList.remove('sign-up-mode');
    });
});

function resetPassword() {
    const email = document.getElementById('forgot-email').value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Password reset email sent!');
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

function openForgotPasswordModal() {
    document.getElementById('forgot-password-modal').style.display = 'block';
}

function closeForgotPasswordModal() {
    document.getElementById('forgot-password-modal').style.display = 'none';
}
