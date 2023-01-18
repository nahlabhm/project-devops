pipeline {
    agent any
  environment {     
    DH_CRED= credentials('dh')     
  }  

  stages {
	stage('Docker login') { 
            steps {
                
                sh 'echo $DH_CRED_PSW | docker login -u $DH_CRED_USR --password-stdin'
              
             
            }
        }
  }
}
