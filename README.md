# CreativaGen

![FancyWM_3MPXAKDCjq](https://github.com/shouravrahman/creativagen/assets/73746355/dc03371f-a9a2-453c-86e5-8e4889103b44)

## Overview

**CreativaGen** is an AI-powered web application designed to streamline content creation for developers and tech professionals. It offers a suite of tools to generate high-quality, engaging content tailored for various use cases in the tech industry, all while leveraging a credit system for efficient resource management.

## Features

- **Content Generation**: CreativaGen can generate the following types of content:
  - **Developer Portfolio Post**: Create engaging social media posts that showcase development projects, technical skills, and problem-solving abilities.
  - **Problem-Solution Case Study**: Detail a technical challenge, the approach taken to solve it, and the outcome, making it relatable for potential clients.
  - **Developer Value Proposition**: Craft concise value propositions that highlight a developer's skills and unique offerings.
  - **Tech Insights and Trends Post**: Generate content that discusses the latest trends and insights in technology, aimed at establishing authority in the field.
  - **Case Study Post**: Present in-depth analyses of specific projects, detailing the challenges faced and solutions implemented.
  - **Service Showcase Ad**: Create advertisements that highlight specific services offered, emphasizing their benefits to potential clients.
  - **Client Success Story Ad**: Share success stories from past clients to build trust and credibility.
  - **Product Demo Ad**: Craft engaging ads that showcase products, demonstrating their features and benefits effectively.
  - **Limited-Time Offer Ad**: Generate urgent calls to action for promotions, encouraging potential customers to act quickly.
  - **Explainer Ad**: Create clear and concise explanations of services or products to educate potential clients.
  - **Free Resource Ad**: Promote free resources, such as eBooks or guides, to attract and engage the target audience.

- **Gemini API Integration**: Leverage the Gemini API for advanced content generation capabilities, enhancing the quality and relevance of generated content.

- **Analytics Page**: Monitor user engagement and content performance through a dedicated analytics page, providing insights into usage patterns and effectiveness.

- **Profile Management**: Users can manage their profiles, including personal information, preferences, and content history, ensuring a personalized experience.

- **Admin Routes**: Admin users have access to special routes for managing users, content, and system settings, providing control over the application.

- **Template Creation**: Users can create and save templates for frequently used content types, streamlining the content generation process.

- **Client Form Validation**: Utilizes [react-hook-form](https://react-hook-form.com/) for robust client form validation and handling.

- **Responsive Design**: Fully responsive design ensuring a seamless experience across all devices.

- **Tailwind CSS Integration**: Leveraging [Tailwind CSS](https://tailwindcss.com/) for a modern, customizable UI.

- **Animations and Effects**: Engaging animations and effects to enhance user interaction and overall experience.

- **Subscription Management**: Integrates with [Stripe](https://stripe.com/) to facilitate monthly subscription billing.

- **Free Tier with API Limits**: Users can access a free tier with usage limitations, allowing for trial and evaluation before upgrading.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18.x.x or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AntonioErdeljac/next13-ai-saas.git
   ```

2. Navigate to the project directory:
   ```bash
   cd next13-ai-saas
   ```

3. Install packages:
   ```bash
   npm install
   ```

### Setup Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
# Your app base URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database connection string
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.9lab2ld.mongodb.net/mydb?retryWrites=true&w=majority"

# Stripe API keys
STRIPE_API_KEY="your_stripe_api_key"
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"

# Gemini API key
GEMINI_API_KEY="your_gemini_api_key"

# Authentication secret
AUTH_SECRET="your_auth_secret"

# Email configuration
EMAIL_PASSWORD="your_email_password"
EMAIL_FROM="your_email@example.com"

# JWT secret for authentication
JWT_SECRET="your_jwt_secret"

# OAuth credentials for GitHub and Google
GITHUB_ID="your_github_id"
GITHUB_SECRET="your_github_secret"
GOOGLE_ID="your_google_id"
GOOGLE_SECRET="your_google_secret"
```

### Setup Prisma

To set up the MongoDB database, run the following command:

```bash
npx prisma db push
```

### Start the Application

Once everything is set up, you can start the development server:

```bash
npm run dev
```

## Available Commands

You can run the following commands using npm:

| Command | Description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

## Contact

For inquiries or feedback, feel free to reach out via shouravatwork@gmail.com.
