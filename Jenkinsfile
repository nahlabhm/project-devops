pipeline {
    agent any
   environment {     
    APP= credentials('appweb')     
  }  
  stages {
	    stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git'    
            }
        }
        stage('Docker login') { 
            steps {
                
                sh 'echo $APP_PSW | docker login -u $APP_USR --password-stdin'
              
             
            }
        
       
          stage ('Build ') {
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
