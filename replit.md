# BikeZone - Two-Wheeler Marketplace

## Overview

BikeZone is a comprehensive two-wheeler marketplace web application built with React. The platform serves as a marketplace for bikes, scooters, and electric vehicles, providing users with features to browse, compare, and purchase two-wheelers. The application caters to both buyers and dealers, offering a complete ecosystem for two-wheeler commerce including vehicle listings, comparison tools, finance calculators, showroom locators, and dealer management dashboards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a component-based React architecture with functional components and hooks:

- **Routing**: React Router DOM for client-side navigation with dedicated routes for different vehicle categories, user authentication, and specialized features
- **Styling**: Tailwind CSS for utility-first styling with custom theme extensions including primary/secondary color schemes and custom animations
- **Component Structure**: Organized into logical directories with reusable components for vehicle cards, layout elements, and specialized calculators
- **State Management**: Local React state management using useState and useEffect hooks for component-level state
- **UI/UX Design**: Responsive design with mobile-first approach, custom animations, and interactive elements

### Data Layer
Currently uses static JSON data structure for:

- **Vehicle Data**: Comprehensive vehicle information including specifications, pricing, images, and features
- **Category Management**: Organized data for bikes, scooters, and electric vehicles
- **User Management**: Basic user profile and authentication data structures
- **Dealer Information**: Showroom and dealer-specific data

### Key Features Architecture
- **Vehicle Comparison**: Side-by-side comparison system supporting up to 3 vehicles
- **Finance Tools**: EMI and fuel cost calculators with real-time calculations
- **Search and Filtering**: Advanced filtering system with price range, brand, fuel type, and sorting options
- **User Authentication**: Login and registration system with different user types (buyer/dealer)
- **Dealer Dashboard**: Separate interface for dealer inventory and sales management

### Page Structure
The application is organized into distinct page components:
- **Home**: Landing page with featured vehicles and category navigation
- **Listings**: Dynamic vehicle listing pages with filtering and search
- **Product Detail**: Comprehensive vehicle information pages
- **User Management**: Login, registration, and profile pages
- **Specialized Pages**: Compare, finance tools, showrooms, and upcoming launches

## External Dependencies

### Core Framework Dependencies
- **React 19.1.1**: Primary frontend framework for component-based UI development
- **React Router DOM 7.9.3**: Client-side routing and navigation management
- **React Scripts 5.0.1**: Build tooling and development server

### Styling and UI
- **Tailwind CSS 3.4.17**: Utility-first CSS framework for responsive design
- **PostCSS 8.5.6**: CSS processing and optimization
- **Autoprefixer 10.4.21**: Automatic vendor prefix addition for cross-browser compatibility
- **Lucide React 0.544.0**: Icon library for consistent iconography

### HTTP and Data
- **Axios 1.12.2**: HTTP client for potential API integration and data fetching

### Development Tools
- **TypeScript Types**: React and React DOM type definitions for enhanced development experience

### Potential Integration Points
The architecture supports future integration with:
- **Backend APIs**: RESTful services for vehicle data, user management, and dealer operations
- **Database Systems**: For persistent storage of vehicle listings, user profiles, and transaction data
- **Payment Gateways**: For handling vehicle purchases and dealer transactions
- **Map Services**: For showroom location and delivery tracking
- **Authentication Services**: For secure user and dealer authentication
- **Image Storage**: For vehicle image management and optimization