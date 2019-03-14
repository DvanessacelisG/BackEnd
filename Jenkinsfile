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
                
sh "export _DOCKER_REPO="$(aws ecr get-authorization-token --output text  --query 'authorizationData[].proxyEndpoint')""
sh "aws ecr get-login --no-include-email --region us-east-1 | awk '{print $6}' | docker login -u AWS --password-stdin $_DOCKER_REPO""       
           //sh("eval \$(aws ecr get-login --region us-east-1 --no-include-email | sed 's|https://||')")
                
                sh "docker tag back:latest 905326150904.dkr.ecr.us-east-1.amazonaws.com/backend"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/backend"
            }
        
        
        }
    
    
    
    }
}        
