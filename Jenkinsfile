pipeline {
    agent any
     
    stages {
      
         stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git'
                  sh 'mvn clean install'
            }
        }
        stage('Angular project'){
            steps{
                git 'https://github.com/nahlabhm/project-devops.git'
        sh 'build command'
    }
  }

        
    }
}
