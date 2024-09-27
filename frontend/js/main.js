// -----------------------
// User Authentication Logic
// -----------------------

// Signup function to send data to backend
const signupForm = document.getElementById('signup-form');
signupForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const formData = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };

  try {
    const response = await fetch('https://donation-production.up.railway.app/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Check if the response is valid JSON
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Signup failed:', errorText);
      alert('Signup failed: ' + errorText); // Handle plain text error message
      return;
    }

    const result = await response.json();
    if (result.success) {
      alert('Signup successful');
      // Redirect to login page or dashboard
      window.location.href = 'login.html';
    } else {
      alert('Signup failed: ' + result.message);
    }
  } catch (error) {
    console.error('Error during signup:', error);
    alert('An error occurred during signup');
  }
});


// Login function to send data to backend
const loginForm = document.getElementById('login-form');
loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Ensure that both username and password are present
  if (!username || !password) {
    alert('Please fill in both username and password.');
    return;
  }

  const formData = { username, password };

  try {
    const response = await fetch('https://donation-production.up.railway.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Check if the response is valid JSON
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Login failed:', errorText);
      alert('Login failed: ' + errorText); // Handle plain text error message
      return;
    }

    const result = await response.json();
    if (result.success) {
      alert('Login successful');
      window.location.href = 'index.html'; // Redirect to dashboard or home page
    } else {
      alert('Login failed: ' + result.message);
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred during login');
  }
});


// Data for SDG 1 chart (Poverty Levels)
const sdg1Data = {
  labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'], // X-axis (Years)
  datasets: [{
      label: 'People in Poverty (millions)',
      data: [750, 720, 700, 680, 660, 640, 655, 575], // Y-axis data (Poverty levels)
      backgroundColor: 'rgba(255, 136, 91, 0.5)', // Transparent fill
      borderColor: '#FF885B', // Border color matching theme
      borderWidth: 2
  }]
};

// Data for SDG 2 chart (Hunger Levels)
const sdg2Data = {
  labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [{
      label: 'People Facing Hunger (millions)',
      data: [630, 640, 650, 670, 680, 690, 700, 600], // Y-axis data (Hunger levels)
      backgroundColor: 'rgba(22, 66, 60, 0.5)',
      borderColor: '#557C56',
      borderWidth: 2
  }]
};

// Configuration for SDG 1 chart
const sdg1Config = {
  type: 'line', // Use 'line' for time-series charts
  data: sdg1Data,
  options: {
      scales: {
          y: {
              beginAtZero: true // Start Y-axis at zero
          }
      },
      plugins: {
          title: {
              display: true,
              text: 'Poverty Levels Over Time'
          }
      }
  }
};

// Configuration for SDG 2 chart
const sdg2Config = {
  type: 'line',
  data: sdg2Data,
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      },
      plugins: {
          title: {
              display: true,
              text: 'Hunger Levels Over Time'
          }
      }
  }
};

// Render the charts
const sdg1Chart = new Chart(
  document.getElementById('sdg1Chart'),
  sdg1Config
);

const sdg2Chart = new Chart(
  document.getElementById('sdg2Chart'),
  sdg2Config
);