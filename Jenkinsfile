pipeline {

    agent any

    stages {

        stage('Build') {

            steps {

                echo 'Building'
            }

        }

        stage('Deploy') {

            when {

                branch 'main'

            }

            steps {

                echo 'Deploying Production'

            }

        }

    }

}