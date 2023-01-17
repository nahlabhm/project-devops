pipeline {
    agent any
	 environment {     
    DH_CRED= credentials('appweb')     
  }  

  stages {
	  stage('Docker login') { 
            steps {
                
                sh 'echo $DH_CRED_PSW | docker login -u $DH_CRED_USR --password-stdin'
              
             
            }
        }
	    stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git'    
            }
        }
   
        
    }
}
