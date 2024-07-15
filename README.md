# CIS Skill Evaluation Test Frontend

CIS Skill Evaluation Test Frontend is a React-based web application that provides a user interface for managing authentication, subscription, and payment reporting functionalities.

## Features

- User Registration
- User Login
- Subscription Management with Stripe Integration
- Monthly Payment Reporting
- Invoice Download
- Account Activation and Deactivation with Email Notifications

## Technologies Used

- React
- Redux Toolkit
- React Hook Form
- Yup (for form validation)
- Tailwind CSS (for styling)
- React Router

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- Backend server (e.g., Laravel) running with API endpoints for authentication, subscription management, and payment reporting.

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/touhi13/cis-skill-evaluation-test-frontend.git
   ```
2. **Navigate to the project directory:**

    ```bash
    cd cis-skill-evaluation-test-frontend
    ```
3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Add environment variables:**
   Create a `.env` file in the root of the project and add the necessary environment variables. For example:

   ```env
   VITE_REACT_APP_API_URL=http://127.0.0.1:8000/
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.


## Contributing

Contributions are welcome! Please feel free to submit any issues or pull requests.

## License

This project is open-source and available under the [MIT License](LICENSE).


