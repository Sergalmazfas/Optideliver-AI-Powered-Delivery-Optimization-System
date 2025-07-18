# OptiDeliver - AI-Powered Delivery Optimization System

This project is a comprehensive solution for optimizing last-mile delivery operations. It consists of three main components: a Sender Interface, a Postman (delivery driver) application, and a Route Optimization Dashboard. The system leverages AI to predict optimal delivery routes and time slots, improving efficiency and customer satisfaction.

This project was originally created for the Smart India Hackathon and has been adapted for a US (Miami) context.

## Table of Contents
- [Features](#features)
- [System Architecture](#system-architecture)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The **OptiDeliver** is a comprehensive solution designed to optimize the delivery routes, track deliveries, and provide an interface for senders to manage their shipments. The system consists of three main components:

- **Sender Interface**: A web application for senders to create and manage delivery orders.
- **Postman App**: An application for delivery personnel to view and update delivery statuses.
- **Route Optimization Dashboard**: A dashboard for optimizing delivery routes and tracking delivery metrics.

## Project Structure

```markdown
├── Dataset.csv
├── Finale OptiDeliver_Infinitely Innovative_SIH-2024_final.pptx
├── Postman-app/
│   └── project/
│       ├── .bolt/
│       ├── .env
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── index.html
│       └── src/
├── prediction.ipynb
├── Route-optimization-dashboard/
│   └── route/
│       └── project/
│           ├── .bolt/
│           ├── .env
│           ├── .gitignore
│           ├── index.html
│           └── src/
├── Sender-interface/
│   ├── .bolt/
│   ├── .env
│   ├── .gitignore
│   ├── dashboard.js
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── public/
│   ├── src/
│   ├── styles.css
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── Survey Responses.xlsx
```

## Components

### Sender Interface

Located in [`Sender-interface`](Sender-interface), this React application allows senders to:

- Create new delivery orders.
- Manage and track existing orders.
- Receive notifications about delivery statuses.

#### Features

- User authentication and authorization.
- Order creation with recipient details and delivery preferences.
- Real-time tracking of deliveries.

### Postman App

Found in [`Postman-app/project`](Postman-app/project), this application enables delivery personnel to:

- View assigned deliveries.
- Update delivery statuses (e.g., pending, in-progress, completed).
- View optimized delivery routes on a map.

#### Features

- Interactive map display using Leaflet and React Leaflet.
- Delivery metrics calculation (e.g., completed deliveries, distance covered).
- Real-time updates and notifications.

### Route Optimization Dashboard

Located in [`Route-optimization-dashboard/route/project`](Route-optimization-dashboard/route/project), this dashboard provides:

- Visualization of delivery routes.
- Optimization algorithms to calculate the most efficient delivery order.
- Tracking of delivery progress and statuses.

#### Features

- Map visualization with markers for delivery points.
- Route optimization using custom utilities.
- Integration with delivery tracking data.

## Key Features

- **Predictive Analytics for Delivery Times:** Utilizes historical data to forecast the optimal time slots for successful deliveries, reducing the rate of failed attempts.
- **Dynamic Time Slot Selection:** Allows recipients to choose or modify their preferred delivery time slots via an interactive web interface.
- **Real-Time SMS Notifications:** Keeps customers informed with instant alerts for scheduling confirmations and delivery updates.
- **Optimized Routing for Postmen:** Provides delivery agents with the most efficient routes, considering traffic, weather, and delivery density.
- **Centralized Dashboard for Senders:** Enables senders to monitor delivery statuses, manage orders, and view performance metrics.
- **Scalable and Secure Backend:** Built with Node.js, Express, and MongoDB, ensuring robustness and data integrity.

## System Architecture

The system comprises three core components:

1.  **Sender Interface (`/Sender-interface`)**: A web application for senders to create, manage, and track shipments. It features a dashboard for visualizing delivery analytics and order statuses.
2.  **Postman App (`/Postman-app`)**: A mobile-friendly web app for delivery agents. It displays optimized routes, delivery schedules, and allows for status updates on the go.
3.  **Route Optimization Dashboard (`/Route-optimization-dashboard`)**: A tool for logistics managers to oversee the entire delivery network, analyze route efficiency, and make data-driven decisions.

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Leaflet.js
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **AI/ML**: Python, Pandas, Scikit-learn (for the prediction model in `prediction.ipynb`)
- **Real-time Notifications**: Twilio API for SMS
- **Deployment**: Docker, Google Cloud Run

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm and npx
- Python 3.x
- Docker
- Access to a MongoDB instance
- Twilio account for SMS notifications
- Google Maps API Key

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/Optideliver-AI-Powered-Delivery-Optimization-System.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Optideliver-AI-Powered-Delivery-Optimization-System
    ```
3.  **Install dependencies for each service:**

    -   **Sender Interface**:
        ```sh
        cd Sender-interface
        npm install
        ```
    -   **Postman App**:
        ```sh
        cd ../Postman-app/project
        npm install
        ```
    -   **Route Optimization Dashboard**:
        ```sh
        cd ../../Route-optimization-dashboard/route/project
        npm install
        ```

## Usage

Each component can be run locally for development. Ensure you have a `.env` file in the `Sender-interface` directory with the necessary environment variables (see [Configuration](#configuration)).

-   **Start the backend server (from `/Sender-interface`):**
    ```sh
    npm run server
    ```
-   **Start the frontend development server (from `/Sender-interface`):**
    ```sh
    npm run dev
    ```

Follow similar `npm run dev` commands for the other two frontend applications.

## Deployment

### Local Development using Docker Compose

To run the entire system locally using Docker, ensure you have Docker and Docker Compose installed.

1.  **Create a `.env` file in the project root:**
    ```
    VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
    ```
2.  **Build and run the services:**
    ```sh
    docker-compose up --build
    ```

The services will be available at:
-   **Sender Interface**: `http://localhost:3000`
-   **Postman App**: `http://localhost:3001`
-   **Dashboard**: `http://localhost:3002`

### Automated Deployment to Google Cloud Run with Cloud Build

This project is configured for automated deployments to Google Cloud Run using a `cloudbuild.yaml` file. This setup will automatically build and deploy the services when changes are pushed to the `main` branch.

**Prerequisites:**
- A Google Cloud Platform (GCP) project with billing enabled.
- The `gcloud` CLI installed and authenticated.
- A GitHub repository for your project.
- The following APIs enabled in your GCP project: Cloud Build, Cloud Run, Artifact Registry, and Secret Manager.

**Setup Steps:**

1.  **Connect your GitHub Repository to Cloud Build:**
    - Go to the Cloud Build Triggers page in the GCP Console.
    - Click "Create trigger".
    - Select GitHub as your source.
    - Authenticate and select your repository.
    - For the trigger settings:
        - **Name:** A descriptive name (e.g., "deploy-main").
        - **Event:** Push to a branch.
        - **Branch:** `main`.
        - **Configuration:** Cloud Build configuration file (`cloudbuild.yaml`).
        - **Location:** `cloudbuild.yaml` (at the root of the repository).

2.  **Create Secrets in Secret Manager:**
    Before deploying, you must create secrets in Secret Manager for your sensitive data. The names of the secrets should match the names used in the `cloudbuild.yaml` file.
    - `MONGODB_URI`
    - `VITE_GOOGLE_MAPS_API_KEY`
    - `TWILIO_ACCOUNT_SID`
    - `TWILIO_AUTH_TOKEN`
    - `TWILIO_PHONE_NUMBER`

3.  **Grant Permissions:**
    The Cloud Build service account will need permissions to deploy to Cloud Run and access secrets. Grant the following roles to your Cloud Build service account (`your-project-number@cloudbuild.gserviceaccount.com`):
    - `Cloud Run Admin`
    - `Secret Manager Secret Accessor`

4.  **Push to `main`:**
    Once the trigger is set up, any push to the `main` branch will automatically trigger a new build and deployment for all three services.

## Configuration

The `Sender-interface` backend requires the following environment variables in a `.env` file:
```