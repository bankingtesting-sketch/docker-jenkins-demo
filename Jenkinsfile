pipeline {

    agent any

    parameters {

        choice(
            name: 'ENV',
            choices: [
                'DEV',
                'QA',
                'STAGING',
                'PRODUCTION'
            ]
        )

    }

    stages {

        stage('Deploy') {

            steps {

                echo "Deploying to ${params.ENV}"

            }

        }

    }

}