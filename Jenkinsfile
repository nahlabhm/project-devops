pipeline {
    agent any

  stages {
	
	    stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git' 
            }
        }
	   stage('Example Username/Password') {
            environment {
                SERVICE_CREDS = credentials('id_tokens)
            }
            steps {
                sh 'echo "Service user is $SERVICE_CREDS_USR"'
                sh 'echo "Service password is $SERVICE_CREDS_PSW"'
                sh 'curl -u $SERVICE_CREDS https://myservice.example.com'
            }
        }
	   stage ('Build my-app') {
            steps {
                sh 'npm test'
                echo "Build react-client successfully"
                }
    }
	   
    stage ('Test Unitaire') {
            steps {
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

		stage('Push') {

			steps {
                 sh 'docker push nahlabhm/front_angular:latest'			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}
        
    }
}
