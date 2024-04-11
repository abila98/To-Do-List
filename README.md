# Todo List Node.js Application

This is a simple Node.js application for managing todo lists. Users can add or delete items from their list on a webpage interface.

![image](https://github.com/abila98/ToDo-List-App/assets/41573378/66ff1122-c616-4009-b2a0-546aff040012)

## Getting Started

To run the TODO List Application locally, follow these steps:

## Prerequisites

Before you begin, ensure you have the following installed:

- Docker
  - Installation instructions: [Docker Documentation](https://docs.docker.com/get-docker/)
- Git
  - Installation instructions: [Git Downloads](https://git-scm.com/downloads)
- Github
  - A GitHub Personal Access Token is required for accessing GitHub Secrets in the workflow. Create one with the appropriate permissions and add it to your GitHub repository's secrets.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/abila98/ToDo-List-App.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ToDo-List-App
    ```

3. Build the Docker images:

    ```bash
    docker-compose build
    ```
   

### Usage

4. Run the Docker containers:

    ```bash
    docker-compose up -d
    ```

5. Access the TODO List Application in your web browser at http://localhost:3000

## Continuous Integration with GitHub Actions

The TODO List Application utilizes GitHub Actions to automate the Docker build and push process. Here's how it works:

- The GitHub workflow is triggered on a push to the main branch.
- Docker credentials are stored securely in GitHub Secrets and accessed during the Docker build and push process.
- The docker image is stored in github packages.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any bugs or feature requests.

## Credits

- All goes to ChatGPT.
  
## License

This project is licensed under the [MIT License](LICENSE).
