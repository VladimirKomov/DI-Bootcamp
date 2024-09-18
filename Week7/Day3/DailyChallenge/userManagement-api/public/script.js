
function showForm(formName) {
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-form').classList.remove('active');

    if (formName === 'register') {
        document.getElementById('register-form').classList.add('active');
    } else if (formName === 'login') {
        document.getElementById('login-form').classList.add('active');
    }
}

document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        userName: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    const jsonReq = JSON.stringify(formData);
    console.log('Create user: ', jsonReq);
    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonReq
        });

        const result = await response.json();

        console.log(result);

        if (response.ok) {
            document.getElementById('message').innerText = 'Registration successful!';
            document.getElementById('message').classList.add('success-message');
        } else {
            document.getElementById('message').innerText = result.message;
            document.getElementById('message').classList.add('error-message');
        }
    } catch (error) {
        document.getElementById('message').innerText = 'An error occurred.';
        document.getElementById('message').classList.add('error-message');
    }
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        userName: document.getElementById('login_username').value,
        password: document.getElementById('login_password').value
    };

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        console.log('Login: ', result);

        if (response.ok) {
            document.getElementById('login_message').innerText = 'Login successful!';
            document.getElementById('login_message').classList.add('success-message');
        } else {
            document.getElementById('login_message').innerText = result.message;
            document.getElementById('login_message').classList.add('error-message');
        }
    } catch (error) {
        document.getElementById('login_message').innerText = 'An error occurred.';
        document.getElementById('login_message').classList.add('error-message');
    }
});


