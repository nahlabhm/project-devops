pipeline {
    agent any
     environment {     
    APP_SPRING= credentials('app_spring')     
  }
    stages {
        stage('Docker login') {
            steps {
                
                sh 'echo $APP_SPRING_PSW | docker login -u $APP_SPRING_USR --password-stdin'
            }
        }
         stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git'
            }
        }
          stage('angular Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git'
            }
        }
         stage('Build') {
       steps {
        sh 'docker build -f front_angular/Dockerfile -t nahlabhm/front_angular:latest .'
      }
    }
    }
}
