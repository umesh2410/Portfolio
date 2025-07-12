# Umesh Makwana Portfolio

This is a personal portfolio website built with React.js, designed to be hosted on GitHub Pages.

## Features

- Responsive design
- Modern UI with animations
- Contact form
- Project showcase
- Skills and resume sections

## How to Deploy to GitHub Pages

### Prerequisites

- Node.js and npm installed
- GitHub account

### Steps to Deploy

1. **Install Dependencies**

```bash
npm install
```

2. **Update Homepage URL**

In `package.json`, update the homepage field with your GitHub username:

```json
"homepage": "https://yourusername.github.io/portfolio",
```

3. **Create a GitHub Repository**

Create a new repository named `portfolio` on GitHub.

4. **Initialize Git and Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

5. **Deploy to GitHub Pages**

```bash
npm run deploy
```

6. **Configure GitHub Pages**

- Go to your repository settings
- Scroll down to the GitHub Pages section
- Select the `gh-pages` branch as the source
- Save the changes

Your portfolio should now be live at `https://yourusername.github.io/portfolio`!

## Local Development

To run the project locally:

```bash
npm start
```

This will start the development server at `http://localhost:3000`.

## Customization

- Update personal information in the components
- Replace the profile image in the `public` folder
- Modify the projects in the `Projects.js` component
- Update skills and resume information

## Credits

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
