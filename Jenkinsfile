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
