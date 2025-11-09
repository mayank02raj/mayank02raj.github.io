# Mayank Raj - Personal Portfolio Website

A modern, professional portfolio website showcasing research publications, projects, and experience in cybersecurity and machine learning.

## 🌟 Features

- **🎨 Modern Design**: Professional color scheme with gradient accents (Blue, Pink, Cyan)
- **📱 Fully Responsive**: Mobile-first design that works perfectly on all devices
- **✨ Smooth Animations**: AOS (Animate On Scroll) library for elegant transitions
- **🔐 Cybersecurity Theme**: Animated network background with floating security badges
- **📊 Research-Focused**: Dedicated sections for publications with GitHub and paper links
- **🎓 Scholar Services**: Highlighted peer review contributions (IEEE MILCOM 2025)
- **⚡ Fast Loading**: Optimized assets and efficient animations
- **♿ Accessible**: WCAG compliant with keyboard navigation support
- **🔧 SEO Optimized**: Proper meta tags and semantic HTML
- **🎯 PhD Application Ready**: Specifically designed to impress admissions committees

## 🎨 Special Design Features

### Gradient Text Effects
- **"Hi, I'm"**: Cyan to Purple gradient (`.gradient-text-secondary`)
- **Your Name**: Blue to Pink gradient (`.gradient-text`)

### Floating Security Badges
Four animated badges positioned around profile picture:
- 🛡️ **Shield** (Top) - Network Security
- 🔒 **Lock** (Right) - Encryption
- 🧠 **Brain** (Bottom) - AI/ML Security
- 🔍 **Search** (Left) - Threat Detection

### Animated Background
- Network mesh with moving nodes and connections
- Cybersecurity-themed visualization
- Subtle and professional appearance

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file (1,070 lines)
├── assets/
│   ├── css/
│   │   └── style.css      # All styling (2,207 lines)
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   ├── img/
│   │   ├── profile.jpg    # Profile photo (replace with yours)
│   │   └── network-bg.png # Background image
│   └── cv.pdf             # CV/Resume (replace with yours)
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Local Development

**Option A: Direct Open**
Simply open `index.html` in your browser.

**Option B: Python Server (Recommended)**
```bash
# Navigate to portfolio directory
cd portfolio-website

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then visit: http://localhost:8000
```

**Option C: Node.js Server**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Visit: http://localhost:8080
```

**Option D: VS Code Live Server**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### 2. Customize Your Content

#### Essential Updates:
1. **Profile Image**: Replace `assets/img/profile.jpg` (recommended: 800x800px)
2. **CV/Resume**: Replace `assets/cv.pdf`
3. **Name**: Edit line 68 in `index.html`
4. **Email**: Search and replace `mraj1@umassd.edu` with your email
5. **Social Links**: Update URLs in `index.html` (lines 81-94)
6. **Content**: Update all sections with your information

#### Quick Global Updates:
Use Find & Replace (Ctrl+Shift+F in VS Code):
- `Mayank Raj` → `Your Name`
- `mraj1@umassd.edu` → `your-email@domain.com`
- `mayank02raj` → `your-github-username`
- `mraj11` → `your-linkedin-id`

### 3. Color Customization

Edit CSS variables in `assets/css/style.css` (lines 10-40):

```css
:root {
    /* Change these colors */
    --primary-color: #3b82f6;      /* Main accent color (blue) */
    --secondary-color: #ec4899;    /* Secondary accent (pink) */
    --accent-color: #06b6d4;       /* Tertiary accent (cyan) */
}
```

**Pre-made Color Palettes:**

**Academic Purple:**
```css
--primary-color: #8b5cf6;
--secondary-color: #ec4899;
--accent-color: #06b6d4;
```

**Tech Green:**
```css
--primary-color: #10b981;
--secondary-color: #3b82f6;
--accent-color: #06b6d4;
```

**Corporate Navy:**
```css
--primary-color: #1e40af;
--secondary-color: #7c3aed;
--accent-color: #0891b2;
```

## 🌐 Deployment Options

### Option A: GitHub Pages (Recommended)

1. **Create Repository**
   ```bash
   # Create repo named: your-username.github.io
   ```

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Settings → Pages → Set source to "main" branch
   - Live at: `https://your-username.github.io`

### Option B: Netlify
1. Drag and drop folder to [netlify.com](https://netlify.com)
2. Instant deployment!

### Option C: Vercel
1. Import from GitHub at [vercel.com](https://vercel.com)
2. One-click deploy

## 📝 Content Sections

1. **Home**: Hero with animated introduction
2. **About Me**: Background, research interests, statistics
3. **Research & Publications**: Papers with GitHub links
4. **Scholar Services**: IEEE MILCOM 2025 reviewer
5. **Experience**: Complete timeline
6. **Projects**: GitHub projects
7. **Skills**: Categorized technical skills
8. **Certifications**: Professional certifications
9. **Contact**: Contact info and PhD interests

## 🎯 For PhD Applications

### Highlights:
✅ DoD-funded research  
✅ Quantified results (93.97% accuracy, 1.2M+ dataset)  
✅ Clear research interests  
✅ Strong technical skills  
✅ Teaching experience  
✅ Publication links  
✅ Peer review service  

### Tips:
1. Keep publications updated
2. Add conference presentations
3. Ensure GitHub repos are public
4. Update CV regularly
5. Use metrics and results
6. Keep project descriptions clear

## 🛠️ Quick Customization

### Add New Publication
```html
<div class="publication-card" data-aos="fade-up">
    <div class="pub-header">
        <div class="pub-icon">
            <i class="fas fa-shield-alt"></i>
        </div>
        <div class="pub-meta">
            <span class="pub-status">Published</span>
            <span class="pub-venue">Conference Name</span>
        </div>
    </div>
    <h3 class="pub-title">Your Paper Title</h3>
    <p class="pub-authors">Author1, Author2</p>
    <p class="pub-description">Brief description...</p>
    <div class="pub-links">
        <a href="GITHUB-LINK" target="_blank" class="pub-link">
            <i class="fab fa-github"></i> Code
        </a>
    </div>
    <div class="pub-tags">
        <span class="tag">Tag1</span>
    </div>
</div>
```

### Change Fonts
1. Visit [Google Fonts](https://fonts.google.com/)
2. Copy import link
3. Replace line 13 in `style.css`
4. Update font-family

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not loading | Check file paths, clear cache |
| CSS not working | Verify file exists, check console |
| JS issues | Check console (F12) for errors |
| Mobile menu stuck | Verify element IDs match |
| GitHub Pages not updating | Clear cache, wait 2 minutes |

## 📊 Statistics

- **HTML**: 1,070 lines
- **CSS**: 2,207 lines  
- **JavaScript**: 500+ lines
- **Sections**: 9 main sections
- **Load Time**: <2 seconds

## 📋 Pre-Deployment Checklist

- [ ] Update name
- [ ] Update email (all occurrences)
- [ ] Update social media URLs
- [ ] Replace profile photo
- [ ] Replace CV
- [ ] Update about section
- [ ] Update publications
- [ ] Update experience
- [ ] Update projects
- [ ] Update skills
- [ ] Test all links
- [ ] Test on mobile

## 🚀 Quick Commands

```bash
# Local server
python -m http.server 8000

# Git setup
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR-REPO-URL
git push -u origin main

# Update
git add .
git commit -m "Update content"
git push
```

## 📞 Support

- Email: mraj1@umassd.edu
- GitHub: [@mayank02raj](https://github.com/mayank02raj)
- LinkedIn: [linkedin.com/in/mraj11](https://linkedin.com/in/mraj11)

## 🙏 Credits

- **Design**: Mayank Raj
- **Animations**: AOS Library
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

---

**Good luck with your PhD applications! 🎓**

Made with ❤️ for academic success

**Version**: 1.0 | **Last Updated**: November 9, 2025
