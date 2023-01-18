pipeline {
    agent any

  stages {
	
	    stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git' 
            }
        }
	   stage('Example Username/Password') {
            environment {
                SERVICE_CREDS = credentials('id_tokens)
            }
            steps {
                sh 'echo "Service user is $SERVICE_CREDS_USR"'
                sh 'echo "Service password is $SERVICE_CREDS_PSW"'
                sh 'curl -u $SERVICE_CREDS https://myservice.example.com'
            }
        }
	   
    stage ('Test Unitaire') {
            steps {
                sh 'ls -la'
                
    }
}
	    stage('Build') {
       steps {
        sh 'docker build -f front_angular/Dockerfile -t nahlabhm/front_angular:latest .'
      }
    }
        
    }
}
