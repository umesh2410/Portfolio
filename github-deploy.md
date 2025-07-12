# GitHub Pages Deployment Guide

Follow these steps to deploy your React portfolio to GitHub Pages:

## Step 1: Update package.json

1. Open `package.json`
2. Replace `YOUR_GITHUB_USERNAME` in the homepage URL with your actual GitHub username:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio",
   ```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `portfolio`
4. Make it public
5. Click "Create repository"

## Step 3: Initialize Git and Push to GitHub

Open Git Bash or Command Prompt in your project folder and run:

```bash
# Initialize Git repository
git init

# Add all files to Git
git add .

# Commit the files
git commit -m "Initial commit"

# Add the remote repository (replace YOUR_GITHUB_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

If you get an error about the branch name, try:

```bash
git push -u origin master
```

## Step 4: Deploy to GitHub Pages

Run:

```bash
npm run deploy
```

This will build your React app and publish it to GitHub Pages.

## Step 5: Configure GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Make sure the source is set to the "gh-pages" branch
5. Your site should now be published at `https://YOUR_GITHUB_USERNAME.github.io/portfolio`

## Troubleshooting

If you encounter any issues:

1. Make sure you've installed the gh-pages package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Check that your GitHub username is correctly set in package.json

3. If you get a 404 error, wait a few minutes as GitHub Pages may take some time to deploy

4. If you're still having issues, check the GitHub Pages section in your repository settings to make sure it's properly configured
