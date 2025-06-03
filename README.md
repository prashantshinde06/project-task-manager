# React + Redux Task Manager with Authentication

## Overview
This project is a User Task Dashboard built using React.js and classic Redux (without Redux Toolkit). It fetches user and task data from the public JSONPlaceholder API and allows users to view, filter, and manage tasks. Additionally, it includes a simple authentication system to demonstrate protected access to the dashboard.

## Features

### Display Tasks
- Show task title, completion status, and assigned user.

### Filtering
- Filter tasks by completion status (`all`, `completed`, `pending`) and assigned user.

### Task Management
- Toggle task completion status and delete tasks locally.

### Authentication
- Simple authentication flow with login and logout to protect the task dashboard.


### Bonus Features
- Search tasks by title  
- Pagination (10 tasks per page)  
- Add new tasks locally  
- Sort tasks by title or user

## Tech Stack
- React (functional components & hooks)  
- Redux (classic setup with `createStore`, `combineReducers`, `applyMiddleware`)  
- redux-thunk for async API calls  
- Axios / Fetch API for HTTP requests  
- JSONPlaceholder API for users and tasks data

## Authentication Flow
- Login screen prompts user to enter username and password (no backend authentication, simulated for demo).  
- Use the credentials below to log in:  
  - Username: `admin`  
  - Password: `pass1234`  
- Upon login, user is redirected to the task dashboard.  
- Logout option clears user session and redirects to login screen.  
- Access to task dashboard is restricted to authenticated users only.

## Available Scripts
- `npm run start` — Run app in development mode
