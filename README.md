# Fatima Portfolio — GitHub Website

This folder is already a complete website.

## Files
- `index.html` → structure of the website
- `style.css` → design, typography, spacing, colors, animations
- `script.js` → projects, custom cursor, scroll effects
- `assets/images/` → put your project images here

## The easiest things to edit

### 1. Change project text
Open `script.js`.

Near the top you will see:

```js
const projects = [
  {
    number: "01",
    title: "Science, Made Visual",
    category: "SCIENTIFIC VISUALIZATION / EDITORIAL",
    year: "2026",
    image: "",
    link: "#"
  }
];
```

Change only the text inside the quotation marks.

### 2. Add a project image
Put the image inside:

`assets/images/`

For example:

`assets/images/science-project.jpg`

Then in `script.js`, change:

```js
image: "",
```

to:

```js
image: "assets/images/science-project.jpg",
```

### 3. Change your email
Open `index.html`.

Find:

`mailto:hello@example.com`

Replace it with your email.

### 4. Change website colors
Open `style.css`.

At the very top you will see:

```css
--paper: #efeee9;
--ink: #11110f;
--lime: #d6ff39;
--accent: #5367ff;
```

You can change those hex codes without touching anything else.

---

# Publish it on GitHub Pages — beginner steps

1. Go to https://github.com
2. Create/sign in to your GitHub account.
3. Click the `+` button in the top-right.
4. Click **New repository**.
5. Repository name: `portfolio`
6. Select **Public**.
7. Click **Create repository**.
8. Choose **uploading an existing file**.
9. Upload EVERYTHING inside this folder.
10. Click **Commit changes**.
11. Open the repository's **Settings**.
12. Open **Pages** in the left sidebar.
13. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
14. Click **Save**.

GitHub will create a link similar to:

`https://YOURUSERNAME.github.io/portfolio/`

It can take a minute or two to appear.

## Important
Do not delete:
- index.html
- style.css
- script.js

Those three files run the website.
