// Function index
function userForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    const output = `
        <p>Full Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}, ${city}, ${province}</p>
        <p>Membership: ${membership}</p>
    `;

    document.getElementById('output').innerHTML = output;
}

// Function excel
function myExcelFuns() {
    const numberStr = document.getElementById('numbers').value.trim();
    if (!numberStr) {
        alert('Please enter some numbers separated by spaces.');
        return;
    }

    const numberArr = numberStr.split(' ').filter(num => num).map(Number);
    let result;

    if (document.getElementById('sum').checked) {
        result = numberArr.reduce((a, b) => a + b, 0);
    } else if (document.getElementById('avg').checked) {
        result = numberArr.reduce((a, b) => a + b, 0) / numberArr.length;
    } else if (document.getElementById('max').checked) {

        // "..." it is an operator
        result = Math.max(...numberArr);
    } else {
        result = Math.min(...numberArr);
    }

    document.getElementById('calcResult').innerText = result;
}



//function for click on calculate and send
//its for security "document.add..."
document.addEventListener('DOMContentLoaded', function () 
{
    const sendButton = document.getElementById('sendButton');
    if (sendButton) {
        sendButton.addEventListener('click', userForm);
    }

    const calculateButton = document.getElementById('calculateButton');
    if (calculateButton) {
        calculateButton.addEventListener('click', myExcelFuns);
    }
}
);
