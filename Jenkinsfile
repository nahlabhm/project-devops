pipeline {
    agent any
     environment {
		App_CREDENTIALS=credentials('application')
	}
    stages {
      
         stage('spring boot Code') { 
            steps {
                git 'https://github.com/nahlabhm/project-devops.git'
                 
            }
        }
        stage(' project'){
            steps{
             sh 'cd project_devops'
                sh 'npm install package.json'
	    }
  }
        stage('Login') {
          steps {
		sh 'echo $App_CREDENTIALS_PSW | docker login -u $App_CREDENTIALS_USR --password-stdin'
	}
	}

        
    }
}
