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
                echo "Build react-client successfully"
                }
    }

    stage ('Test Unitaire') {
            steps {
		    
		    sh 'mvn install'
                sh 'ls -la'
                
    }
}
	    stage('Build') {
       steps {
        sh 'docker build -f front_angular/Dockerfile -t nahlabhm/front_angular:latest .'
      }
    }
        stage('Log into Dockerhub') {
            environment {
              DOCKERHUB_USER = 'nahlabhm'
              DOCKERHUB_PASSWORD = 'dckr_pat_9KeqWWmNnix0dzoNSdiS6Qhhx5c'
    }

          steps {
          sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
    }
    }
  
        
    }
}
