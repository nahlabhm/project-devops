pipeline {
    agent any
     environment {     
    APP_WEB= credentials('app_web')     
  }
    stages {
        stage('Docker login') {
            steps {
                sh 'echo $APP_WEB_PSW | docker login -u $APP_WEB_USR --password-stdin'
            }
        }
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
