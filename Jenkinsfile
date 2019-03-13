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
            sh "export AWS_ACCESS_KEY_ID=AKIAIW4PPQF3E7M2ELZQ"
            sh "export AWS_SECRET_ACCESS_KEY=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"
            sh "\$(aws ecr get-login --region us-east-1)"
            sh "docker tag 40db8d41ceb2 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            }
        
        
        }
    
    
    
    }
}        
