# Practical 2 – State Management and Routing in React

**Student:** Khushi Undhad
**Enrollment No.:** 24CS101

This practical extends the Practical 1 portfolio (Header, About, Skills, Footer) with page routing using React Router and state management using the `useState` hook.

## Routes

| Path        | Component  | Description                                   |
|-------------|------------|-----------------------------------------------|
| `/`         | `Home`     | Portfolio home (Header, About, Skills, Footer) |
| `/projects` | `Projects` | Show / hide a list of projects                |
| `/contact`  | `Contact`  | Contact form with live preview                |
| `*`         | `NotFound` | 404 page with a link back to Home             |

## Features

- **React Router:** `BrowserRouter` in `main.jsx`, `Routes` and `Route` in `App.jsx`.
- **NavBar with NavLink:** switching pages does not reload the browser. The current page's link gets the `active` class and is highlighted.
- **Show / Hide Projects:** a `useState` boolean toggles the project list on the Projects page.
- **Controlled inputs:** on the Contact page, the name input shows "Hello, &lt;name&gt;" as you type, and the message textarea shows a live character count.
- **Dark / Light mode:** a `useState` toggle in the NavBar adds or removes the `dark` class on the root `<html>` element.
- **404 page:** any unknown URL shows the NotFound page.

## Folder Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Footer.jsx
│   └── NavBar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## How to Run

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

To create a production build:

```bash
npm run build
```
