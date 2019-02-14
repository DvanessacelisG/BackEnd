pipeline {
    agent any
    stages {         
        stage ('Build') {
              steps{
                  dir('/var/lib/jenkins/workspace/'){
                   // sh "zip -r movie-analyst-api.zip movie-analyst-api"
                  sh "tar -zcvf movie-analyst-api.tar.gz BackE_master"
                  }
              }
        }
    }
  }         
