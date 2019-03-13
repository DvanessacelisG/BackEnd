pipeline {
    agent any
    stages {         
        stage ('Build') {
             docker.build('demo') 
        }
          
      stage 'Docker push' {
  docker.withRegistry('https://905326150904.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:vane-ecsrepo-3') {
    docker.image('demo').push('latest')
       }
   }
}
