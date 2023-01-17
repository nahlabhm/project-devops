pipeline {
    agent any
 environment {     
    TOKEN= credentials('token_id')     
  }  

  stages {
	  stage('Docker login') { 
            steps {
                
                sh 'echo $TOKEN_PSW | docker login -u $TOKEN_USR --password-stdin'
              
             
            }
        }
	
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
  stage ('Cleaning up'){
steps{
sh 'docker rmi nahlabhm/project_devops'
echo ' Image app cleaned'
sh 'docker logout'

}
} 
        
    }
}
