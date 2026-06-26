
# File Sharing App

A full-stack file sharing application built using React, Spring Boot, JWT Authentication, and PostgreSQL.

## Features

- User Registration and Login
- JWT Authentication
- Secure File Upload
- View Uploaded Files
- Download Files
- Delete Files
- Supports PDF, JPG, PNG, and TXT files

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- PostgreSQL

## Project Structure

```
file-sharing-app/
│
├── frontend/
│   ├── React
│   └── Tailwind CSS
│
└── backend/
    ├── Spring Boot
    ├── PostgreSQL
    └── JWT Authentication
```

## How to Run

### Backend

```bash
mvn spring-boot:run
```

### Frontend

```bash
npm install
npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:8080
```

## Future Improvements

- File sharing via links
- Search files
- File preview
- Profile management
- Folder support
- Admin dashboard
