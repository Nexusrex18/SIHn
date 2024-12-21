# Contributing to Krishi Seva

Thank you for your interest in contributing to **Krishi Seva**! We are excited to have you on board. By contributing to this project, you are helping to empower farmers and improve agricultural outcomes. This document will guide you through the process of contributing effectively to the project.

---

## How to Contribute

### 1. Fork the Repository
- Start by forking the [Krishi Seva repository](https://github.com/Nexusrex18/SIHn).
- Clone your forked repository to your local machine:
  ```bash
  git clone https://github.com/Nexusrex18/SIHn.git
  cd SIHn
  ```

### 2. Create a Branch
- Always create a new branch for your contributions:
  ```bash
  git checkout -b <branch-name>
  ```
- Use descriptive branch names (e.g., `fix-bug-123`, `add-feature-x`).

### 3. Make Changes
- Follow the coding standards and best practices for the tech stack:
  - **Frontend**: React.js with Tailwind CSS.
  - **Backend**: Node.js with Express.
  - **Database**: Firebase.
- Ensure any sensitive data (e.g., Firebase credentials) is handled through `.env.local` files.

#### Setting Up Environment Variables:
1. Create a `.env.local` file in the server directory and include Firebase configuration data:
   ```env
   FIREBASE_API_KEY=xxx
   FIREBASE_AUTH_DOMAIN=xxx
   FIREBASE_PROJECT_ID=xxx
   FIREBASE_STORAGE_BUCKET=xxx
   FIREBASE_MESSAGING_SENDER_ID=xxx
   FIREBASE_APP_ID=xxx
   ```
2. For client-side variables, duplicate them with the `VITE_` prefix:
   ```env
   VITE_FIREBASE_API_KEY=xxx
   VITE_FIREBASE_AUTH_DOMAIN=xxx
   VITE_FIREBASE_PROJECT_ID=xxx
   VITE_FIREBASE_STORAGE_BUCKET=xxx
   VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
   VITE_FIREBASE_APP_ID=xxx
   ```
3. Use the `dotenv` package for server-side configurations and `import.meta.env` for client-side Firebase usage.

### 4. Test Your Changes
- Ensure your changes are functional by running the project locally:
  ```bash
  npm install
  npm run dev
  ```
- Open [http://localhost:3000](http://localhost:3000) in your browser to test the frontend.
- Write unit tests if applicable.

### 5. Commit Changes
- Write clear, concise, and descriptive commit messages:
  ```bash
  git commit -m "Fix: Resolve issue with X functionality"
  ```
- Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit message guidelines.

### 6. Push and Create a Pull Request (PR)
- Push your branch to your forked repository:
  ```bash
  git push origin <branch-name>
  ```
- Go to the original repository and create a PR. Ensure your PR:
  - Clearly describes the problem and solution.
  - Includes screenshots (if applicable).
  - References relevant issues (e.g., `Fixes #123`).

---

## Code of Conduct
By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure all interactions are respectful and constructive.

---

## Contribution Guidelines

### Best Practices:
1. **Write Clean Code**:
   - Follow consistent naming conventions and indentation.
   - Avoid hardcoding values; use environment variables or configuration files.

2. **Document Your Work**:
   - Update README.md or relevant documentation for significant changes.

3. **Testing**:
   - Ensure your changes pass existing tests and add new tests for your features.

### Areas to Contribute:
- **Bug Fixes**: Help identify and fix bugs in the platform.
- **New Features**: Suggest and implement new functionalities to enhance user experience.
- **UI/UX Improvements**: Improve the design, responsiveness, or accessibility of the platform.
- **Documentation**: Update or expand documentation for better clarity and usability.

---

## Getting Help
If you encounter any issues or have questions, feel free to:
- Open an issue in the repository.
- Reach out to the maintainers via email or the [project link](https://sih-blue.vercel.app/).

---

Thank you for contributing to **Krishi Seva**! Together, we can create a platform that truly empowers farmers and revolutionizes agriculture.

