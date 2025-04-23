# To-Do App

## Project Description
This is a simple To-Do application built using Node.js and Express. It allows users to add tasks, view task details, and manage their to-do list. The app is designed to demonstrate basic CRUD operations, CI/CD pipelines, and Infrastructure as Code (IaC) principles.

## Tools and Technologies Used
- **Backend**: Node.js, Express
- **Frontend**: HTML, JavaScript
- **Testing**: Jest, Supertest
- **CI/CD**: GitHub Actions
- **IaC**: Ansible

## CI/CD Explanation
The project uses GitHub Actions for Continuous Integration (CI). The workflow is defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml). It includes the following steps:
1. Checkout the repository.
2. Set up Node.js environment.
3. Install dependencies.
4. Run tests using Jest.

### Key Features:
- Automatically runs tests on every push to the `dev` branch.
- Ensures code quality and functionality before merging changes.

## Infrastructure as Code (IaC) Explanation
The project uses Ansible to configure the local development environment. The playbook is defined in [`ansible-local-env/playbooks/setup.yml`](ansible-local-env/playbooks/setup.yml). It:
1. Configures the local environment.
2. Sets up roles and permissions.
3. Automates repetitive setup tasks.

### Key Files:
- [`ansible.cfg`](ansible-local-env/ansible.cfg): Configuration for Ansible.
- [`setup.yml`](ansible-local-env/playbooks/setup.yml): Playbook to configure the environment.

