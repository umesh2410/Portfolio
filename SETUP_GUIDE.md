# Setup Guide for Portfolio React Project

## Local Development Setup

### Step 1: Install Dependencies
1. Open Node.js Command Prompt (Start Menu > Node.js > Node.js Command Prompt)
2. Navigate to your project folder:
   ```
   cd C:\xampp\htdocs\PORTFOLIO\portfolio-react
   ```
3. Install the required dependencies:
   ```
   npm install react react-dom react-scripts sweetalert2 gh-pages
   ```
   
   Alternatively, you can double-click the `install-deps.bat` file in the project folder.

### Step 2: Start Development Server
1. In the Node.js Command Prompt, run:
   ```
   npm start
   ```
   
   Alternatively, you can double-click the `start-dev-server.bat` file in the project folder.

2. This will start the development server and automatically open your portfolio in a browser at http://localhost:3000

### Step 3: Make Changes
- Edit the files in the `src` folder to customize your portfolio
- The changes will automatically appear in the browser

## GitHub Pages Deployment

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository "portfolio"
4. Make it public
5. Click "Create repository"

### Step 2: Update package.json
1. Open `package.json` in a text editor
2. Update the "homepage" field with your GitHub username:
   ```
   "homepage": "https://yourusername.github.io/portfolio",
   ```

### Step 3: Initialize Git and Push to GitHub
1. Open Git Bash or Command Prompt in your project folder
2. Run the following commands:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

### Step 4: Deploy to GitHub Pages
1. In the Node.js Command Prompt, run:
   ```
   npm run deploy
   ```
   
   Alternatively, you can double-click the `deploy-to-github.bat` file in the project folder.

2. Go to your GitHub repository settings
3. Scroll down to the GitHub Pages section
4. Make sure the source is set to the "gh-pages" branch
5. Your portfolio should now be live at `https://yourusername.github.io/portfolio`

## Troubleshooting

### If npm commands don't work:
1. Make sure Node.js is properly installed
2. Try running the commands from the Node.js Command Prompt
3. Check if your system's execution policy allows running scripts:
   - Open PowerShell as Administrator
   - Run: `Set-ExecutionPolicy RemoteSigned`
   - Type 'Y' to confirm

### If deployment fails:
1. Make sure you've created the GitHub repository
2. Check that the "homepage" in package.json matches your GitHub username
3. Ensure you have proper permissions to push to the repository
