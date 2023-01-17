pipeline {
    agent any
   environment {     
    DOCKERHUB_CREDENTIALS= credentials('appweb')     
  }  
  stages {
	    stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git'    
            }
        }
        stage('Docker login') { 
            steps {
                
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'              
             
            }
        
    
    stage ('Test Unitaire') {
            steps {
        sh 'ls -la'                
    }
}
        
    }
}
