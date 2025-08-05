# MachineryLine API Contracts & Backend Implementation Guide

## Overview
This document outlines the API contracts, data models, and integration strategy for converting the MachineryLine frontend from mock data to a fully functional backend.

## 1. API Contracts

### Base URL
All API endpoints are prefixed with `/api` to match Kubernetes ingress rules.

### Authentication Endpoints
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/profile
PUT /api/auth/profile
```

### Equipment & Listings Endpoints
```
GET /api/equipment                    # Get all equipment with filters
GET /api/equipment/:id               # Get specific equipment details
POST /api/equipment                  # Create new equipment listing
PUT /api/equipment/:id              # Update equipment listing
DELETE /api/equipment/:id           # Delete equipment listing
GET /api/equipment/featured         # Get featured equipment listings
GET /api/equipment/search           # Search equipment with query params
```

### Category Endpoints
```
GET /api/categories                 # Get all categories
GET /api/categories/:id             # Get category details
GET /api/categories/:id/equipment   # Get equipment by category
```

### Spare Parts Endpoints
```
GET /api/spare-parts                # Get all spare parts
GET /api/spare-parts/brands         # Get popular spare parts brands
GET /api/spare-parts/search         # Search spare parts
POST /api/spare-parts               # Create spare part listing
```

### Company Endpoints
```
GET /api/companies                  # Get all companies
GET /api/companies/:id              # Get company details
POST /api/companies                 # Register company
```

### Statistics & Analytics
```
GET /api/stats/overview             # Get site statistics (total ads, users, etc.)
GET /api/stats/categories           # Get equipment counts by category
```

## 2. Data Models

### Equipment Model
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  category: ObjectId (ref: Category),
  subcategory: String,
  brand: String,
  model: String,
  year: Number,
  hours: Number,
  price: Number,
  currency: String,
  location: {
    city: String,
    country: String,
    coordinates: [Number]
  },
  images: [String],
  specifications: Object,
  condition: String,
  seller: ObjectId (ref: User),
  company: ObjectId (ref: Company),
  featured: Boolean,
  status: String, // active, sold, inactive
  views: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Category Model
```javascript
{
  _id: ObjectId,
  name: String,
  slug: String,
  icon: String,
  description: String,
  parentCategory: ObjectId (ref: Category),
  equipmentCount: Number,
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### User Model
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  firstName: String,
  lastName: String,
  phone: String,
  country: String,
  city: String,
  company: ObjectId (ref: Company),
  role: String, // individual, dealer, admin
  verified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Company Model
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  website: String,
  email: String,
  phone: String,
  address: {
    street: String,
    city: String,
    country: String,
    postalCode: String
  },
  logo: String,
  verified: Boolean,
  yearsUsing: Number,
  rating: Number,
  reviewCount: Number,
  equipmentCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### SparePart Model
```javascript
{
  _id: ObjectId,
  name: String,
  partNumber: String,
  brand: String,
  compatibility: [String], // Compatible equipment models
  category: String,
  price: Number,
  currency: String,
  condition: String,
  images: [String],
  seller: ObjectId (ref: User),
  location: Object,
  inStock: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## 3. Mock Data Replacement Strategy

### Current Mock Data (from mockData.js):
- `siteStats` → Replace with dynamic stats from database
- `mainCategories` → Replace with Category collection
- `constructionEquipment`, `industrialEquipment`, `miningEquipment` → Replace with aggregated equipment counts
- `spareParts` → Replace with SparePart collection data
- `featuredListings` → Replace with Equipment collection (featured: true)
- `clientReviews` → Replace with Company reviews/testimonials
- `relatedProjects` → Keep as static data or move to configuration

### Frontend Integration Points:

#### 1. Homepage Data Loading
```javascript
// Replace in HomePage.jsx
useEffect(() => {
  // Load site statistics
  fetchSiteStats();
  // Load categories with counts
  fetchCategories();
  // Load featured equipment
  fetchFeaturedEquipment();
  // Load spare parts brands
  fetchSparePartsBrands();
}, []);
```

#### 2. Search Functionality
```javascript
// Replace in HeroSection.jsx and Header.jsx
const handleSearch = async (query, filters) => {
  const response = await api.get('/api/equipment/search', {
    params: { q: query, ...filters }
  });
  // Handle search results
};
```

#### 3. Category Navigation
```javascript
// Replace in CategoryPage.jsx
useEffect(() => {
  const { categoryId } = useParams();
  fetchCategoryEquipment(categoryId);
}, [categoryId]);
```

## 4. Backend Implementation Plan

### Phase 1: Core Models & Database Setup
- Set up MongoDB collections
- Create Mongoose models with validation
- Implement database connection and error handling

### Phase 2: Authentication System
- User registration/login with JWT
- Password hashing with bcrypt
- Authentication middleware
- User profile management

### Phase 3: Equipment Management
- CRUD operations for equipment listings
- Image upload handling
- Search and filtering functionality
- Category-based queries

### Phase 4: Statistics & Analytics
- Real-time statistics calculation
- Category equipment counts
- Site-wide metrics

### Phase 5: Advanced Features
- Spare parts management
- Company profiles
- Featured listings management
- User reviews system

## 5. API Response Formats

### Success Response
```javascript
{
  success: true,
  data: {}, // Response data
  message: "Optional success message"
}
```

### Error Response
```javascript
{
  success: false,
  error: {
    code: "ERROR_CODE",
    message: "Human readable message",
    details: {} // Optional additional details
  }
}
```

### Pagination Response
```javascript
{
  success: true,
  data: {
    items: [], // Array of items
    pagination: {
      page: 1,
      limit: 20,
      total: 150,
      pages: 8
    }
  }
}
```

## 6. Frontend Integration Strategy

### API Service Layer
Create centralized API service with axios interceptors for:
- Request/response logging
- Error handling
- Authentication token management
- Base URL configuration

### State Management
Use React hooks and context for:
- User authentication state
- Search filters state
- Equipment listings state
- Loading states

### Data Fetching Patterns
- Use useEffect for initial data loading
- Implement search debouncing
- Add loading indicators
- Handle error states gracefully

## 7. Testing Strategy

### Backend Testing
- Unit tests for models and utilities
- Integration tests for API endpoints
- Database operation testing
- Authentication flow testing

### Frontend Integration Testing
- API communication testing
- Data transformation testing
- Error handling verification
- User flow testing

## 8. Performance Considerations

### Database Optimization
- Proper indexing on search fields
- Aggregation pipelines for statistics
- Caching for frequently accessed data

### Frontend Optimization
- Lazy loading for images
- Pagination for large datasets
- Search result caching
- Optimistic UI updates

This comprehensive contract serves as the blueprint for seamless frontend-backend integration while maintaining the existing UI/UX experience.