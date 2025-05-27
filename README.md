# AI-BOT Frontend

This is a React-based frontend project for the AI-BOT application.  
It includes setup instructions for building and deploying the app using **Docker** and **Jenkins**.

---

## 🚀 Technologies Used

- React
- Node.js
- Docker
- Jenkins
- Nginx (for serving the build)

---

## 🐳 Docker Setup

This project includes a `Dockerfile` to build and run the React app using Docker.

### 🔧 Build the Docker Image

```bash
docker build -t ai-bot-frontend .
````

### ▶️ Run the Container

```bash
docker run -d -p 3000:80 ai-bot-frontend
```

* The app will be accessible at: **[http://localhost:3000](http://localhost:3000)**

---

## 🧰 Jenkins Setup

We use Jenkins to automate the build and deployment process.

### ✅ Jenkinsfile Includes:

1. **Cloning** the code from GitHub
2. **Installing** project dependencies
3. **Building** the React app
4. **Deploying** the built files to a web server directory (e.g. `/var/www/html`)

### 📝 Jenkinsfile

Make sure this file is in the root of your project:

```groovy
pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Clone the code') {
            steps {
                git 'https://github.com/Shashimpally/AI-BOT--frontend'
            }
        }

        stage('Install packages') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build the app') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy the app') {
            steps {
                sh 'cp -r build/* /var/www/html/'
            }
        }
    }
}


## 📌 Notes

* Update paths in the `Jenkinsfile` if your server uses a different deployment folder.
* You can modify the Dockerfile to use custom Nginx configs or environment variables if needed.
* Make sure Node.js, Docker, and Jenkins are installed and configured on your server or CI machine.

---


