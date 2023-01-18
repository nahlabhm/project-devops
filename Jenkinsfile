pipeline {
    agent any
	environment {
		DOCKERHUB_CREDENTIALS=credentials('id_tokens')
	}

  stages {
	
	    stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git' 
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
  stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
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
