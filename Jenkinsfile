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
            name:'RUN_TESTS',
            choices: [
                'YES',
                'NO'
            ]
        )
        choice(
            name: 'RUN_LINT',
            choices: [
                'YES',
                'NO'
            ]
        )

        choice(
            name:'RUN_SECURITY_SCAN',
            choices: [
                'YES',
                'NO'
            ]
        )

    }

    stages {

        stage('Build') {

            steps {

                echo "Building version ${params.VERSION} for ${params.ENV}"

            }

        }
        stage('Test') {

            steps {

                script {
                    if (params.RUN_TESTS == 'YES') {
                        echo "Running tests for ${params.ENV}"
                    } else {
                        echo "Skipping tests for ${params.ENV}"
                    }
                }

            }

        }
        stage('Lint') {
            
            steps {

                script {
                    if (params.RUN_LINT == 'YES') {
                        echo "Running lint for ${params.ENV}"
                    } else {
                        echo "Skipping lint for ${params.ENV}"
                    }
                }

            }

        }
        stage('Security Scan') {

            steps {

                script {
                    if (params.RUN_SECURITY_SCAN == 'YES') {
                        echo "Running security scan for ${params.ENV}"
                    } else {
                        echo "Skipping security scan for ${params.ENV}"
                    }
                }

            }

        }
        stage('Deploy') {

            steps {

                echo "Deploying to ${params.ENV}"

            }

        }

    }

}