pipeline {
    agent any
    stages {         
        stage ('Build') {
              steps{
                  dir('/var/lib/jenkins/workspace'){
                   // sh "zip -r movie-analyst-api.zip movie-analyst-api"
                  sh "tar -zcvf movie-analyst-api.tar.gz BackEnd_master"
                  }
              }
        }
        
        stage ('Deploy Back') {
              steps{
                  dir('/var/lib/jenkins/workspace'){
                  
            sshPublisher(publishers: [sshPublisherDesc(configName: 'ubuntu@12.0.3.250', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'ls' , execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-api.tar')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
            }          
        } 
    }
  }         
