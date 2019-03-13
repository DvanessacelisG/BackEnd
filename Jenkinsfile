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
            sh "export AWS_ACCESS_KEY_ID=AKIAICA5PKQR75P2DH7A"
            sh "export AWS_SECRET_ACCESS_KEY=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"
            sh "\$(aws ecr get-login --region us-east-1)"
            sh "docker tag 40db8d41ceb2 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            }
        
        
        }
    
    
    
    }
}        
