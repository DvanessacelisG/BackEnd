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
                  sh 'ls'
                  sshPublisher(publishers: [sshPublisherDesc(configName: 'ubuntu@12.0.3.250', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'tar zxvf movie-analyst-api.tar.gz && rsync -rpa BackEnd_master' , execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-api.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
            }          
        } 
                stage('Start service'){
            steps{
                           
                sh 'ssh ubuntu@12.0.3.250 "pm2 restart server"'
                
            }
        }
    }
  }         
