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
                sh 'cd my-app'
                sh 'npm install package.json'
                echo "Build react-client successfully"
                }
    }
    stage ('Test Unitaire') {
            steps {
                sh 'npm config ls -l'
                
    }
}
   
        
    }
}
