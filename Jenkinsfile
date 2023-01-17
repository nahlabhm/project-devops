pipeline {
    agent any
     environment {
		App_CREDENTIALS=credentials('application')
	}
    stages {
	  
         stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git'
                 
            }
        }
	     stage('Log') {
      steps {
        sh 'ls -la'
      }
    }
          stage('Build') {
       steps {
        sh 'docker build -f front_angular/Dockerfile -t nahlabhm/front_angular:latest .'
      }
    }
	    stage('Login') {
          steps {
		sh 'echo $App_CREDENTIALS_PSW | docker login -u $App_CREDENTIALS_USR --password-stdin'
	}
	}
        
    }
}
