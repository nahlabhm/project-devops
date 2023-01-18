pipeline {
    agent any

  stages {
	
	    stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git' 
            }
        }
	  
    stage ('Test Unitaire') {
            steps {
                sh 'ls -la'
                
    }
}
	    stage('Build') {
       steps {
        sh 'docker build -f front_angular/DockerFile -t nahlabhm/front_angular:latest .'
      }
    }
        
    }
}
