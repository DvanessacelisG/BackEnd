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
                //sh "export AWS_ACCESS_KEY_ID=AKIAJQMP4Z7WN6KD3PEQ"
                //sh "export AWS_SECRET_ACCESS_KEY=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"
           sh("eval \$(aws ecr get-login --region us-east-1 --no-include-email | sed 's|https://||')")
                
                sh "docker tag back:latest 905326150904.dkr.ecr.us-east-1.amazonaws.com/backend"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/backend"
            }
        
        
        }
    
    
    
    }
}        
