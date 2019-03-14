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
           sh "sudo usermod -aG docker jenkins"
            sh("eval \$(aws ecr get-login --region us-east-1 --no-include-email | sed 's|https://||')")
                
                sh "docker login -u AWS -p eyJwYXlsb2FkIjoiYmtFUmJIbmsxQVNjN2NCUlBxbkQ3aW90bnRRMVJiYVZiZElGMEh5b0dKT DROK29oaEdUeXl1eVZvaVNpRlNsbFF2RkFHVEtsVmwzcUNxQnZORHI1Z2kwUWpjVE82N2Z0aGNCS1p1d3c4U01RSnFRLzFWZnE4MGYwdUZyWFVYU2JPS2cxR05jZXdTeE JlZlVGeE9nYlpxeHltMk1EQmhYMXpsaHhHR2tSTTJOaVBoOFZIU3owcGV6VkpTcVltTDJyTFg1ODF3d3pYU2JOMGcyM0xQTUJYcUk1WTY0Rkx4WnI4Q3BEaG9UWGNucnE rZ05VQlEyZVBkTGJxdHN2dmNZbG9CZlJIQlVHZHJmcU10VVJpYXNQWDdrenNVbyt6UzA0dGV4VmFLVHQ0WnNjL3BFd0paQnZvTTlhU3JXZnRVRzR0VlNQYy9pZTdoNkxS WXpsSUp4ZDdtbjBmbjc0ODdNRThYK1lUSWt2c1JMbDZlcXlVNUlwUWh2azNycU9XbEs5bk53TGhUak4reHBxVHR1VTNCSDFERUVUMU9NU1RqZHl5NEM1RWE1a1FWQUszZ mFHM2ozaFBYa1IxWXh0SjBjeXhIMTczVHU2SW96b3NWcWMvdGx3WmRhYnc1NExSSUgvVEQ0eXNHc09RdmloZDFFenR5VThMRW11djBjalhTWitQdVdFSEIrNFptZThONE 8rOTh6R3Zkc0l1VFd5WVA3UWQ5VjY4V1BSODZCbW15UEtnQ2ppZjh6Q3FUcUlTZ0FNcHc3ZUJwWDRyaFB5cnZRVVViSWZ0YWtEVEdOblNsY1Q3aFFEcmZWbGs4NjZwbnZ lcXVFYUhhV3YwUGNYdUI3alQyemFlMmlsMzlydUxyam1wTG1lazJGN29Vakh0cXMxVEdGNERscEVDdCs5bXFwRnVka3UreHZ4RzVHOGhQSU9YZVdkSGlwaWU1NkhZNkFz WmtncWJxZ21OVzVCSGllY2NrSk5YRmVkUW5jUndqWDBxRzkydDROU205TE11VFZpc1l3cVlmZVZJZ0dOdFVwV1JZZXBoSjJaZnh3dTJFZHVreWhYRGNrdktyczdWWjBHQ Ug0ekxzdFFKclVoNU5RNm9FM3RVOGowd01jUEhiVnd1a2pxNDZMRCsxTy83UlZERTAyVFR6N0lrWXRlejIxQzh4aXhsR0prUkh4c3QvSzZudTMxWlpUQTgxM3pNSnJnL3 pjaDJOU0FtWVNSTFdDUmN0Rk1UQ21rQ1JydEI1U0lWdk5ONVZGWXVkNHdNS2w4ZVVlU2pMSkpnSDErTkMyeDV5WENvSTBMbHdRZVpIK2pLb1pBdFBJdjRMLy8zME9yOFR zVDI1MzNnZUFPYWZLa0kvMG92WU9Pd3VQcS9qbkNRUENlVWtUTWRXRkVpRVJka0haaGpERVhpMHAwRm9zNVY1ZEppWUFwaUxINlNZOG5obzFrSDhrSVYwMUwyelB2VjlW d3pTQlkiLCJkYXRha2V5IjoiQVFFQkFIaHdtMFlhSVNKZVJ0Sm01bjFHNnVxZWVrWHVvWFhQZTVVRmNlOVJxOC8xNHdBQUFINHdmQVlKS29aSWh2Y05BUWNHb0c4d2JRS UJBREJvQmdrcWhraUc5dzBCQndFd0hnWUpZSVpJQVdVREJBRXVNQkVFREVHRzhXbjg1eG5uUFJWWEVRSUJFSUE3NlJIdGYwaUdUa0NDdXhad3JrZS9XRnZCcFE5eTI3aE ZXSVh0VmRSTG9zZ3VKVkdUeDZlMmdBSWZOWEhLV21Yc3NxVVJRcmxIWmNkY3RZbz0iLCJ2ZXJzaW9uIjoiMiIsInR5cGUiOiJEQVRBX0tFWSIsImV4cGlyYXRpb24iOjE 1NTI1OTE5MDB9 https://905326150904.dkr.ecr.us-east-1.amazonaws.com"
            sh "docker tag back:latest 905326150904.dkr.ecr.us-east-1.amazonaws.com/backend"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/backend"
            }
        
        
        }
    
    
    
    }
}        
