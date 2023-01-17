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

stage('Push') {
steps {
sh 'docker push nahlabhm/front_angular:latest'
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
