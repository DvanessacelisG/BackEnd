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
            sh "aws configure set aws_access_key_id AKIAIJ5WXKP6CLUI2A2A"
            sh "aws configure set aws_secret_access_key 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"
            sh "aws ecr get-login --no-include-email --region us-east-1"
            sh "docker login -u AWS -p eyJwYXlsb2FkIjoiYUJHYUFMNnRLTW41cWphMzNneXdFQ1o5SDJmUXpWRlBMZEo1QnVPa050cFVOMGdGSkl WbURlYmZXWlZ6UHpSdWdqT2lyY2tCQWpoUklEK2FzVzUvME1lUUg0bGx3UGFHZzZNblMyU3pQc1Y5aGMvcWlHRHdhMk9pUjZaKzc1Wk1zWkR3OU9lOG01SnE2aGN6dElQeHFCR25oSlNVLzY5 RHZHQ1VuZFdTTEhibUJjOUVpaVV5RkFjSTZOZFFiNytOa2FHWGlsN05OL1lLMXlrSVV0RTlhNjBvNTZnYXF1dTJJRlp4ZGdHcUNnNElhR0VMMHFSUHZmVllhU1FkVEJ4cnNHU0xuc1lmVXlUS XFYelhKTlI3WFBaWDNuVmJNQzQ4MW4wc0psS3JQV0hqRGQ4OHpzVTZ2NXcweEg0cFVMczN5MGNUS3pqeiswRHl5MHVFWkdxckVLcVpTay8zM1NzcG1vZElNZ09OQWZ5c3NObXRCaGJjbmpKRH BhM3pCaGY1NFJpa2diYXRaRFpaZ0lONTZwV0pROGZjdkowVVlpcUEwbCtkQnhrNk9lMUNtRkhjTmdHWllVQTkrZEtyaHFzbnFmV2o4aGFWNEJ5d3AzbFZybEY2YlpsYi84YVN6STBqR0ZyeVF LRDczcFNZV1d1djV1U2tMVHNFTnp5L3V3YkVuamJDdDhadlFrNTZVTStaWUNQNHQzQUNHbjRGZE9aM0I2bXUyYVNXaldNS29Ya1EzS09lT0tDUmdqaFZETCtFQmErU1QrakpUYXBzWmJGQVM1 K0ZqQUxPUEs4elBJOGhaQTZBRFJXUDE3Y0oxMVl2VHFHLzBGNUc2QkFKWXBOQTd5UWlMRGdza3BFWVNvOGNFcDYxZFQyK25XUWRZdlk1MUl5aFlsZkIyaUNtK2tDYlVhVnp5aG1BVkRRelM4O DBBdVVldUQ0YXVUMzVoa21KRHRWalZoYmxMZUlIZUdPUzV4OWQ3dlN6dkUxZWN2UlJ3T3hQRjJ0Y1lRMjRISFBRUHlFMjNkNWdkRHNvM0pHMDRiVm9SdjZpcnBDMUVnNEovRkpzWUEzNjAyeF pFR0lQR3NoSUxnaEV5RnhJZVJpNFpzMjNWZDY4Ui95dzlzQSszUEdIWDFWaDlRbzBIVkxqZzlvSnlRTnh5WlRadGIrL1FDZGR2cHMrb3JaK0F0QTc1TDdNc0RTTmZ5RnZITFh4MDRSSjAxRnB MTzdRek1nZFpqVjA2cGpLZEF5d0dpOTZyTTlNTkRIZE1GcDZTaFFzM2Yyd0x2TXkzRkE4VlpxMSttdmhKZUE2WVlURVNaa1ZLWUdJTUJQVXMxVlI5bmN2UTk0b3hZTzRGTjRheTgrRVN4UDVG OFBYRmR0VnJ3cjdscHo1OWhJeDluaHhjOFFvRHZsQnFzazJ0UW92MGhjdm9ZZU8wQ2RFYXAxRzRjNEhQMUhwRzJPR2tZSFlVV1g0UE9VS3doWW8iLCJkYXRha2V5IjoiQVFFQkFIaHdtMFlhS VNKZVJ0Sm01bjFHNnVxZWVrWHVvWFhQZTVVRmNlOVJxOC8xNHdBQUFINHdmQVlKS29aSWh2Y05BUWNHb0c4d2JRSUJBREJvQmdrcWhraUc5dzBCQndFd0hnWUpZSVpJQVdVREJBRXVNQkVFRE xETVVkcytzUnFVa0dLVmZRSUJFSUE3eGlpb0I1QWxNd2RzV2Faak1hTlA0dStQcThmU2hkS3BaelFKb3dUWmQ4czhYMmxPNUdCbE5jTXpjNktuU1RHbjM5R3VIb25HMWNNQjV1Zz0iLCJ2ZXJ zaW9uIjoiMiIsInR5cGUiOiJEQVRBX0tFWSIsImV4cGlyYXRpb24iOjE1NTI1MzIwMDV9 https://905326150904.dkr.ecr.us-east-1.amazonaws.com"
            sh "sudo docker tag 40db8d41ceb2 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            sh "docker push 905326150904.dkr.ecr.us-east-1.amazonaws.com/vane-ecsrepo-3"
            }
        
        
        }
    
    
    
    }
}        
