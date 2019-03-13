pipeline {
    agent any
    stages {         
        stage ('Build') {
            steps{
               // sh "docker rmi -f backend"
                //sh "docker build -t backend ."
    
            }          
        }
        stage ('push'){
            steps{
           
            sh("eval \$(aws ecr get-login --no-include-email | sed 's|https://||')")
            sh "docker tag 16805d895992 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            }
        
        
        }
    
    
    
    }
}        
