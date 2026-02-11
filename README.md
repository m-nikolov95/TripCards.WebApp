# Software Engineer I Candidate Project — “Trip Card Explorer”

Build a small React web app that displays a list of “trip cards” fetched from a mock JSON API.

# Features & Scope

1. Data fetching & state
    ○ Fetch data from a local data.json file (provided) that returns an array of
    objects with fields:
    { id, name, image, short_description, long_description,
    rating }
    ○ Display all items in a responsive grid of cards.
    ○ Handle loading and error states gracefully.

2. Card component
    ○ Each card should show the image, name, rating (stars or numeric), and a short
    description.
    ○ Add a “More Info” button that opens a modal with full details.

3. Search & filter
    ○ Provide a search input to filter trips by name.
    ○ Add a simple “Sort by Rating” toggle.

4. Styling & structure
    ○ Use CSS (SASS)
    ○ Focus on readable, maintainable component structure and modern, clean layout

## Table of Contents
- [How to Run the App](#how-to-run-the-app)
- [Design Decisions](#design-decisions)
- [Trade-offs](#trade-offs)

---

## How to Run the App

### Prerequisites
- **Node.js** (v16 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository

2.Install dependencies:
    npm install

3. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Design Decisions

#### 1. **React with TypeScript**
- Chose **TypeScript** for type safety, and better code maintainability

#### 2. **Context API for Global State**
- Implemented light weight **React Context** for managing global state (loading spinner)

#### 3. **Custom Hooks Pattern**
- Created useErrorHandler hook for error handling logic
- Assures reusability and separation of concerns
- Allows multiple components to share error handling

#### 4. **Functional Components with Hooks**
- Used useState, useEffect, useContext for state management and side effects

#### 5. **Component Structure**
- Organized components by feature and shared utilities:
  - trips-component: Display trips
  - trip-card-component: Individual trip display
  - shared: Reusable components (ContextProvider, Modal, LoadingSpinner, ErrorAlert)
- CSS files stored with their components

#### 6. **Mock API Service**
- Implemented MockApiService to simulate API calls

#### 7. **Portal-based Modals**
- Used createPortal for modal rendering

#### 8. **Filtering**
- Search and sort functionality managed locally in TripsComponent
- Maintains initial data for filtering operations

---

## Trade-offs

### 1. Context API vs. Redux/Zustand
**Decision:** Context API

**Pros:**
- Built into React, light, simple, no additional dependencies
- Sufficient for current use case (loading spinner state)

**Cons:**
- Not ideal for more complex state management
- Can cause unnecessary re-renders if not structured carefully

**Consideration:** For a larger application with more complex state, a more refined state management library is required (Redux, Zustand)

---

### 2. Local State vs. Centralized State for Trips Data
**Decision:** Local state in TripsComponent

**Pros:**
- Simpler implementation
- No overhead of global state management
- Data is only needed in one component

**Cons:**
- Cannot share trip data with other components easily
- Would need refactoring if data becomes globally required

**Consideration:** Current scope justifies local state, but future features may require migration to global state.

---

### 4. CSS vs. Bootstrap & MUI
**Decision:** Plain CSS files co-located with components

**Pros:**
- No additional dependencies
- No performance cost
- Smaller bundle size
- Easy to debug

**Cons:**
- Manual styling
- Nothing out of the box and ready to use
- Takes more time and effort

---

### 7. Separate Error Component vs. Native Browser Alerts
**Decision:** Custom ErrorAlertComponent

**Pros:**
- Consistent UI/UX across the application
- Customizable styling and behavior
- Non-blocking user experience
- Dismissible errors

**Cons:**
- Additional component to maintain
- More complex than simple alerts

---

## Future Enhancements

Potential improvements to consider:
- Add Error Boundary for rendering errors
- Add pagination for large datasets
- Implement real API integration
- Add unit tests
- Implement more filtering options

---

## Technology Stack

- **React** 19.2.4
- **TypeScript** 4.9.5

---

## Project Structure

```
src/
├── components/
│   ├── shared/           # Reusable UI components
│   ├── trip-card-component/
│   └── trips-component/
├── context/              # React Context definitions
├── data/                 # Mock data
├── hooks/                # Custom hooks
├── models/               # Models
├── props/                # Props
├── services/             # API services
└── state/                # State
```

---