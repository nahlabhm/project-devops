pipeline {
    agent any
     environment {     
    JENKINS_ID= credentials('Jenkins_ID')     
  }
    stages {
        stage('Docker login') {
            steps {
                
                sh 'echo $JENKINS_ID_PSW | docker login -u $JENKINS_ID_USR --password-stdin'
            }
        }
         stage('spring boot Code') { {
            steps {
checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/nahlabhm/project-devops']]])                sh 'mvn clean install'
            }
        }
          stage('angular Code') { {
            steps {
checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/nahlabhm/project-devops']]])                sh 'build command'
            }
        }
       steps {
        sh 'docker build -f curriculum-front/Dockerfile -t fuze365/curriculum-front:latest .'
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
