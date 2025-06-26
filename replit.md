# Design System Component Library

## Overview

This is a full-stack web application built with React and Express.js that serves as a design system component library showcase. The application features a comprehensive collection of UI components built with Radix UI primitives and styled with Tailwind CSS, following the shadcn/ui design system patterns.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Component Library**: Radix UI primitives with custom styling (shadcn/ui approach)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: PostgreSQL-based session store using connect-pg-simple
- **Development**: Hot module replacement via Vite middleware integration

### Monorepo Structure
- **Client**: React frontend application (`/client`)
- **Server**: Express.js backend API (`/server`)
- **Shared**: Common TypeScript definitions and database schema (`/shared`)

## Key Components

### Design System Components
- **UI Components**: Complete set of accessible components (Button, Input, Card, Dialog, etc.)
- **Layout Components**: Sidebar navigation, Header, and responsive grid systems
- **Showcase Components**: Interactive component previews with code examples
- **Design Tokens**: Comprehensive color palette, typography scale, and spacing system

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Session Management**: PostgreSQL-based session storage for authentication state

### Development Tools
- **Code Showcasing**: Interactive component previews with syntax highlighting
- **Copy-to-Clipboard**: Easy code snippet copying functionality
- **Search & Navigation**: Searchable component library with smooth scrolling
- **Mobile Responsive**: Adaptive design for all screen sizes

## Data Flow

1. **Component Discovery**: Users browse components via sidebar navigation with search functionality
2. **Component Interaction**: Interactive previews allow users to see components in action
3. **Code Access**: Toggle between preview and code views for implementation details
4. **Copy Functionality**: One-click code copying for rapid development

## External Dependencies

### UI & Styling
- **Radix UI**: Headless component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variant management

### Development & Build
- **Vite**: Build tool with HMR and optimized bundling
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundling for production

### Database & Backend
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL provider
- **Express Session**: Session management middleware

### State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with validation

## Deployment Strategy

### Development Environment
- **Replit Integration**: Configured for Replit development environment
- **Hot Reload**: Vite development server with Express.js middleware
- **Database**: PostgreSQL 16 module for local development

### Production Build
- **Frontend**: Vite production build with code splitting and optimization
- **Backend**: ESBuild bundling for Node.js deployment
- **Static Assets**: Served directly from Express.js in production
- **Autoscale Deployment**: Configured for Replit's autoscale deployment target

### Environment Configuration
- **Port Configuration**: Port 5000 for development, mapped to port 80 for external access
- **Database Connection**: Environment variable-based database configuration
- **Session Security**: Secure session configuration for production

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 26, 2025. Initial setup