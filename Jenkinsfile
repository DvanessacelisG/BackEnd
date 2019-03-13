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
            sh "AWS_ACCESS_KEY_ID=AKIAIKDSAAKTL3OHK6DA"
            sh "AWS_SECRET_ACCESS_KEY=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"
            sh "aws ecr get-login --region us-east-1"
            sh "docker tag 40db8d41ceb2 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            }
        
        
        }
    
    
    
    }
}        
