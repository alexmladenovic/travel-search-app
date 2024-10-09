# Project Overview

## Project Structure
	•	api folder
            Contains all API calls and logic for retrieving data from external sources. It also handles some logic and error management.
	•	components
            Holds reusable UI components that are used across different pages. Some components are split into smaller, nested components to keep them modular and maintainable.
	•	config
            Stores environment variables for different environments such as local development and production. You can switch between environments using the NODE_ENV variable.
	•	hooks
            Contains custom hooks that are frequently used by components throughout the project.
	•	pages
            This folder contains the pages of our application. Each route (e.g., /home) has a corresponding page component (e.g., Home), which assembles various components to create the full page. It also includes PagesRoutes, an enum that defines all available routes.
	•	types
            Contains TypeScript definitions and types for the entities used across the project.
	•	App.tsx
            The main application component that handles routing between different pages.

## DevOps
We use GitHub Actions to deploy our code to S3. The process involves building the project and deploying it to an S3 bucket. Please note that SSL and CloudWatch are not set up in this specific case.

Live URL: [Travel Search App](http://travel-search-app.s3-website-us-east-1.amazonaws.com/)


## Some libraries used:
- @tanstack/react-query: A powerful library for managing server-state in React applications. It simplifies data fetching, caching, synchronization, and error handling.
- classnames: A utility that helps conditionally apply class names to React components.
- query-string: A library for parsing and stringifying URL query strings, useful when working with URL parameters.
- react-router-dom: A routing library for React that allows navigation between different pages in a single-page application (SPA).
- use-query-params: A hook to manage URL query parameters in React applications, making it easier to read and modify them.