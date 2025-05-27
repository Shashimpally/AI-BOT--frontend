
// Start the Jenkins pipeline
pipeline {

    // Set environment variable for production mode
    environment {
        NODE_ENV = 'production'
    }

    {

        // Step 1: Get the code from GitHub
        stage('Clone the code') {
            steps {
                // This pulls the code from your GitHub repo
              .....................
                git 'https://github.com/Shashimpally/AI-BOT--frontend'
            }
        }

        // Step 2: Install required packages
        stage('Install packages') {
            steps {
                // Run this command to install node_modules
                sh 'npm install'
            }
        }

        // Step 3: Build the app
        stage('Build the app') {
            steps {
                // This builds your project (creates build folder)
                sh 'npm run build'
            }
        }

        // Step 4: Deploy the app
        stage('Deploy the app') {
            steps {
                // This copies the build files to a live server folder
                // You can change /var/www/html/ to your real deploy location
                sh 'cp -r build/* /var/www/html/'
            }
        }
    }
}
