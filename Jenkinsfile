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
        choice(
            name: 'VERSION',
            choices: [
                '1.0.0',
                '1.1.0',
                '1.2.0'
            ]
        )
        choice(
            name:'AGENT',
            choices: [
                'agent1',
                'agent2',
                'agent3'
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