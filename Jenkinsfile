pipeline {
    agent any


  stages {
	
	    stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git'    
            }
        }
	  stage ('Build my-app') {
            steps {
                sh 'npm install '
                }
    }
    stage ('Test Unitaire') {
            steps {
                sh 'ls -la'
                
    }
}
   
        
    }
}
