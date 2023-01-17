pipeline {
    agent any
	tools{
		maven 'maven_4_0_0'
	}
     environment {
		DH_CRED=credentials('application')
	}
    stages {
	  
         stage('spring boot Code') { 
            steps {
              checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/nahlabhm/project-devops.git']]])
		     sh 'mvn clean install'
                 
            }
        }
          stage('Build') {
       steps {
        sh 'docker build -f nahlabhm/project_devops/font_angular -f ./Dockerfile .'
                echo 'Image built'
      }
    }
	    stage('Login') {
          steps {
                sh 'echo $DH_CRED_PSW | docker login -u $DH_CRED_USR --password-stdin'
	  }
	}
        
    }
}
