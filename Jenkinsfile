pipeline {
    agent any
    stages {         
        stage ('Build') {
            steps{
                sh "docker rmi -f back"
                sh "docker build -t back ."
                sh "echo hola"
            }          
        }
        stage ('push'){
            steps{
                
                sh "echo $(aws ecr get-authorization-token --region eu-central-1 --output text --query 'authorizationData[].authorizationToken' | base64 -d | cut -d: -f2) | docker login -u AWS https://123456.dkr.ecr.eu-central-1.amazonaws.com --password-stdin"
        
           //sh("eval \$(aws ecr get-login --region us-east-1 --no-include-email | sed 's|https://||')")
                
                sh "docker tag back:latest 905326150904.dkr.ecr.us-east-1.amazonaws.com/backend"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/backend"
            }
        
        
        }
    
    
    
    }
}        
