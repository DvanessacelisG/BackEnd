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
             withCredentials([[
            $class: 'AmazonWebServicesCredentialsBinding',
            credentialsId: 'jenkins',
            accessKeyVariable: 'AWS_ACCESS_KEY_ID',
            secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
        ]])
            sh "aws configure"
            sh "AWS_SECRET_ACCESS_KEY=/ufueK1jMMxcR3vEUNyqQa0VXUYNA6n0gi2EXiLT"
            sh "aws ecr get-login --region us-east-1"
            sh "docker tag 40db8d41ceb2 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            }
        
        
        }
    
    
    
    }
}        
