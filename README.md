# Task Vault API
## About
Simple Node.js server that handles JWT authentication.  
## Requirements
```bash
bcrypt
dotenv
express
express-rate-limit
jsonwebtoken
pg
```
## Routes
Public Routes:
- POST /api/auth/register
- POST /api/auth/login
Protected Routes:
- GET /api/auth/user
