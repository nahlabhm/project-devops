pipeline {
    agent any
   environment {     
    DH_CRED= credentials('application')     
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
          tage ('Build my-app') {
            steps {
                sh 'cd project_devops'
                sh 'npm install package.json'
                echo "Build react-client successfully"
                }
    }
    stage ('Test Unitaire') {
            steps {
        sh 'ls -la'                
    }
}
        
    }
}
