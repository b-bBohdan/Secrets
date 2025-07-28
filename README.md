# 9.0-Secrets-Project

A Node.js web application with Session-Based Authentication that allows users to authenticate and submit secrets anonymously. This project uses Express, Passport.js, and PostgreSQL for authentication and data storage.

## 📚 Features

- Local authentication with username and password
- OAuth 2.0 login via Google
- Session management with `express-session`
- Password hashing with `bcrypt`
- PostgreSQL database integration
- EJS templating

## 📦 Dependencies

- [express](https://expressjs.com/)
- [ejs](https://ejs.co/)
- [dotenv](https://github.com/motdotla/dotenv)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [passport](http://www.passportjs.org/)
- [passport-local](https://www.npmjs.com/package/passport-local)
- [passport-google-oauth2](https://www.npmjs.com/package/passport-google-oauth2)
- [express-session](https://www.npmjs.com/package/express-session)
- [pg (node-postgres)](https://node-postgres.com/)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/9.0-secrets-project.git
cd 9.0-secrets-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup envinronmental variables

- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- SESSION_SECRET
- PG_USER
- PG_HOST
- PG_DATABASE
- PG_PASSWORD
- PG_PORT

### 4. Run the application

```bash
node updatedServer.js
```
