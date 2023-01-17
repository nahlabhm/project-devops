pipeline {
    agent any
     environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}
    stages {
      
         stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git'
                 
            }
        }
        stage(' project'){
            steps{
               sh 'mvn clean install'
    }
  }
        stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

        
    }
}
