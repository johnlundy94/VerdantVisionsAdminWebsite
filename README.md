# Verdant Visions Admin

## Description

Verdant Visions Admin is an SAAS addon to the client-facing site, Verdant Visions Landscaping. This admin dashboard allows admins to manage and communicate with clients who submit quotes via the Verdant Visions Landscaping website. The system facilitates real-time communication and efficient quote management through a combination of React, Material UI, and AWS services.

## Features

- **Real-Time Quote Management**: Receive and manage quote submissions in real-time.
- **Messaging System**: Communicate directly with clients via email through the integrated messaging system.
- **Live Communication**: Utilizes WebSocket connections to provide live updates and seamless interaction between admin and clients.

## Technologies Used

### Frontend

- React
- Material UI
- Axios
- Express

### Backend

- AWS Lambda
- AWS DynamoDB
- AWS API Gateway
- SendGrid API
- Mailjet API
- WebSocket

## Installation Instructions

To run the project locally:

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Navigate to the project directory
   ```bash
   cd landscape-admin
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Usage

Welcome to the Verdant Visions Admin Dashboard! This site is an SAAS addon to the client-facing site Verdant Visions Landscaping. To correctly use this application, you must fill out the quote request submission form on the "Quote" page of the client website. You must have access to the email used when filling out this form. This admin dashboard uses that address in the messaging system to facilitate communication between your email (the client email) and the admin's messaging system.

Feel free to use the app to check out the live communication. This app is a proof of concept for my first dive into SAAS functionality, and additional features will be added over time.

## API Documentation

### SendGrid API

SendGrid is used to parse incoming emails and integrate them into the admin messaging system.

### SendGrid API

Mailjet API

## License

This project is licensed under the MIT License.

## Links

- Client Website: [Verdant Visions Landscaping]()
- GitHub Repo: [GitHub Repo](https://github.com/johnlundy94/landscape-admin)

## Contact Information

For any inquiries, please contact John Lundy at [fullstacklundy@gmail.com].

## Acknowledgments

- React: For providing the framework to build a sleek UI.
- Material UI: For offering a comprehensive suite of UI components.
- AWS: For powering the backend infrastructure.
- SendGrid: For email parsing and integration.
- Mailjet: For email sending capabilities.
