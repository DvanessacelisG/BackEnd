pipeline {
    agent any
    stages {         
        stage ('Build') {
            steps{
                sh "docker rmi -f backend"
                sh "docker build -t backend ."
    
            }          
        }
        stage ('push'){
            steps{
            sh "export AWS_ACCESS_KEY_ID=AKIAIJ5WXKP6CLUI2A2A"
            sh "export AWS_SECRET_ACCESS_KEY=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"
            sh "aws ecr get-login --no-include-email --region us-east-1"
            sh "docker tag 40db8d41ceb2 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            }
        
        
        }
    
    
    
    }
}        
