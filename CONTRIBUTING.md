# Contributing to Medifit

First off, thank you for considering contributing to Medifit! 🎉

It's people like you that make Medifit such a great tool for the community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inspiring community for all.

### Our Standards

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

---

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**When submitting a bug report, include:**
- A clear and descriptive title
- Detailed steps to reproduce the problem
- Expected behavior vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

**When suggesting an enhancement, include:**
- A clear and descriptive title
- Detailed description of the proposed functionality
- Why this enhancement would be useful
- Possible implementation approach

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good-first-issue` - Good for newcomers
- `help-wanted` - Extra attention needed

---

## 💻 Development Process

### Setting Up Development Environment

1. **Fork the repository**
```bash
git clone https://github.com/your-username/medifit.git
cd medifit
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a branch**
```bash
git checkout -b feature/your-feature-name
```

4. **Make your changes**
```bash
# Start development server
npm run dev
```

5. **Test your changes**
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📝 Style Guidelines

### JavaScript Style Guide

- Use **traditional function syntax** (no arrow functions)
- Follow ESLint rules configured in the project
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

**Example:**
```javascript
// ✅ Good
function calculateTotal(items) {
  return items.reduce(function(total, item) {
    return total + item.price * item.quantity
  }, 0)
}

// ❌ Avoid arrow functions
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}
```

### React Component Guidelines

- Use functional components with hooks
- Follow the existing component structure
- Use proper prop validation
- Keep components reusable and modular
- Add proper error boundaries

**Example:**
```javascript
// ✅ Good component structure
import React, { useState, useContext } from 'react'

export function MyComponent({ title, items }) {
  const [isOpen, setIsOpen] = useState(false)
  
  function handleClick() {
    setIsOpen(!isOpen)
  }
  
  return (
    <div>
      <h2>{title}</h2>
      {/* Component JSX */}
    </div>
  )
}
```

### CSS/Tailwind Guidelines

- Use Tailwind utility classes
- Follow mobile-first approach
- Keep consistent spacing
- Use theme colors from config

```jsx
// ✅ Good Tailwind usage
<button className="px-4 py-2 bg-[#D3744A] hover:bg-[#B86539] text-white rounded-lg transition-colors">
  Click Me
</button>
```

---

## 📋 Commit Messages

### Format

```
<type>: <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
# Good commit messages
feat: add product filtering by price range
fix: resolve cart quantity update bug
docs: update installation instructions
style: format code according to ESLint rules
refactor: extract cart logic into custom hook

# Bad commit messages
update
fixed bug
changes
wip
```

---

## 🔄 Pull Request Process

### Before Submitting

1. **Update your fork**
```bash
git fetch upstream
git merge upstream/main
```

2. **Test thoroughly**
```bash
npm run build
npm run preview
```

3. **Run linter**
```bash
npm run lint
```

4. **Update documentation** if needed

### Submitting a Pull Request

1. **Push to your fork**
```bash
git push origin feature/your-feature-name
```

2. **Create Pull Request**
   - Use a clear and descriptive title
   - Reference related issues
   - Include screenshots for UI changes
   - Describe what you changed and why

3. **PR Template**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Tested locally
- [ ] Documentation updated
- [ ] No console errors
```

### Review Process

- At least one maintainer will review your PR
- Address any requested changes
- Once approved, your PR will be merged

---

## 🧪 Testing Guidelines

### Manual Testing

Before submitting, test:
- All features work as expected
- No console errors
- Responsive on mobile, tablet, desktop
- All links work
- Forms validate properly
- Cart and wishlist persist

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Router Docs](https://reactrouter.com/)

---

## ❓ Questions?

Feel free to reach out:

- 📧 Email: kareemmohamedali330@gmail.com
- 💼 LinkedIn: [Kareem Shalan](https://www.linkedin.com/in/kareem-shalan/)
- 🌐 Live Demo: [medifit-three.vercel.app](https://medifit-three.vercel.app/)

---

## 🎉 Thank You!

Your contributions make Medifit better for everyone. Thank you for taking the time to contribute! 🙏

---

**Happy Coding! 🚀**

