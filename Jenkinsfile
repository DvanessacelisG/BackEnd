pipeline {
    agent any
    stages {         
        stage ('Build') {
            steps{
                sh "docker rmi -f backend"
                sh "docker build -t backend ."
                
            }          
        }
    }
}        
