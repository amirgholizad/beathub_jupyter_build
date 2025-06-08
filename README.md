# BeatHub JupyterLite

This repository contains the JupyterLite build embedded within the BeatHub platform — an open-source initiative focused on Econophysics, algorithmic trading, and market analytics using JavaScript and Python. The JupyterLite environment allows users to run Python notebooks directly in their browser without needing a server or local installation.

🌐 Visit the live JupyterLite interface:  
https://amirg.dev/beathub_jupyter_build/lab/index.html

---

## 🚀 Features

- ⚡ 100% client-side execution powered by Pyodide
- 📁 Preloaded with BeatHub-related Python notebooks and libraries
- 🔒 Runs securely in the browser sandbox
- 🧠 Ideal for testing strategies, visualizing data, or exploring BeatHub's indicators

---

## 🧱 Tech Stack

- JupyterLite
- Pyodide
- WebAssembly
- GitHub Pages for hosting

---

## 📦 Build Instructions

If you want to modify or rebuild this JupyterLite instance locally:

1. Clone the repo:

   ```bash
   git clone https://github.com/amirgholizad/beathub-jupyterlite.git
   cd beathub-jupyterlite
   ```

2. Install dependencies (requires Node.js):

   ```bash
   npm install
   ```

3. Build the JupyterLite site:

   ```bash
   npm run build
   ```

4. Serve locally:

   ```bash
   npm run serve
   ```

5. Deploy to GitHub Pages (optional):

   Make sure your GitHub Pages is configured to serve from the dist/ folder or configure your deployment script accordingly.

---

## 📝 Notebooks

BeatHub's JupyterLite comes preloaded (or is compatible with) notebooks demonstrating:

- Econophysics models
- Technical indicator visualizations
- Backtesting strategies
- News sentiment analysis with Python

You can drag and drop your own `.ipynb` files into the interface too!

---

## 🙌 Credits

- Built using the official JupyterLite project: https://github.com/jupyterlite/jupyterlite
- Part of the BeatHub ecosystem: https://beathub.dev
