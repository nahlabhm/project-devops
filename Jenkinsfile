pipeline {
    agent any
     environment {
		DH_CRED = credentials('dh-cred')
	}
    stages {
	    
	 
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
                sh 'npm config ls -l'
                
    }
}
        
    }
}
