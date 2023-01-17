pipeline {
    agent any
     environment {
		DH_CRED=credentials('application')
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
                sh 'echo $DH_CRED_PSW | docker login -u $DH_CRED_USR --password-stdin'
	  }
	}
        
    }
}
