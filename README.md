# Aurevia Courier

## Documentation

### Technologies and versions

This project was developed using the following technologies:

- Node.js
- npm
- React
- JavaScript
- HTML
- CSS
- Google Sheets
- Google Apps Script

**Recommended versions:**
- Node.js 18 or later
- npm 9 or later

---

### How to run the project

Follow these steps to run the project locally:

1. Clone the repository:
```bash
git clone <REPOSITORY_URL>
```

2. Enter the project folder:
```bash
cd aurevia-courier
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open the project in your browser:
```bash
http://localhost:3000
```

---

### Relevant technical decisions

- The interface was divided into reusable React components to keep the project organized and easier to maintain.
- Static content such as services, FAQ, and coverage was separated into data files for cleaner structure.
- Styles were divided by sections and components to improve readability and future updates.
- The contact form includes field validation before submission.
- Contact requests are stored in Google Sheets through Google Apps Script.
- The project keeps a clean and luxury-style visual approach aligned with the Aurevia Courier brand.

---

### Project structure

```bash
aurevia-courier/
├── node_modules/
├── public/
│   ├── _redirects
│   ├── aurevia.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   │       └── hero-luxury.jpg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── FormularioContacto.jsx
│   │   ├── FormularioCotizacion.jsx
│   │   ├── Navbar.jsx
│   │   ├── SeccionCobertura.jsx
│   │   ├── SeccionComoFunciona.jsx
│   │   ├── SeccionContacto.jsx
│   │   ├── SeccionFAQ.jsx
│   │   ├── SeccionInicio.jsx
│   │   ├── SeccionServicios.jsx
│   │   └── SeccionSobreNosotros.jsx
│   ├── data/
│   │   ├── cobertura.js
│   │   ├── faq.js
│   │   └── servicios.js
│   ├── pages/
│   │   ├── Cotizador.jsx
│   │   └── Inicio.jsx
│   ├── styles/
│   │   ├── cotizador.css
│   │   ├── footer.css
│   │   ├── formularios.css
│   │   ├── globales.css
│   │   ├── inicio.css
│   │   ├── navbar.css
│   │   └── secciones.css
│   ├── utils/
│   │   └── cotizador.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

### Brief explanation of each file and folder

#### Root files

- **README.md:** contains the general documentation of the project.
- **package.json:** stores the project configuration, dependencies, and scripts.
- **package-lock.json:** keeps the exact installed versions of the dependencies.
- **.gitignore:** indicates which files or folders should not be uploaded to Git.
- **node_modules/:** contains all installed dependencies used by the project.

#### public/

- **public/:** contains static files that React loads directly.
- **_redirects:** file used to handle redirects in deployment environments.
- **aurevia.png:** main logo or icon used by the website.
- **index.html:** base HTML file where the React application is mounted.
- **manifest.json:** defines metadata for the web app, such as name, icons, and behavior on supported devices.
- **robots.txt:** gives instructions to search engine crawlers.

#### src/

- **src/:** contains the main source code of the application.

#### src/assets/

- **assets/:** stores visual resources used by the interface.
- **icons/:** folder reserved for icons used across the website.
- **images/:** stores image files used in the project.
- **hero-luxury.jpg:** main image used in the landing or hero section.

#### src/components/

- **components/:** contains reusable UI components used throughout the website.
- **Footer.jsx:** renders the footer with final information and support content.
- **FormularioContacto.jsx:** contact form component with validations and connection to Google Sheets.
- **FormularioCotizacion.jsx:** quotation form component for users interested in requesting pricing information.
- **Navbar.jsx:** top navigation bar for moving through the site.
- **SeccionCobertura.jsx:** section that presents the service coverage.
- **SeccionComoFunciona.jsx:** section that explains how the courier service works step by step.
- **SeccionContacto.jsx:** section that contains the contact area and displays the contact form.
- **SeccionFAQ.jsx:** section for frequently asked questions.
- **SeccionInicio.jsx:** hero or main introductory section shown at the beginning of the website.
- **SeccionServicios.jsx:** section that presents the main services offered by Aurevia Courier.
- **SeccionSobreNosotros.jsx:** section that explains the brand identity and introduces the business.

#### src/data/

- **data/:** stores static data separated from the visual components.
- **cobertura.js:** contains the data used in the coverage section.
- **faq.js:** contains the questions and answers shown in the FAQ section.
- **servicios.js:** contains the information displayed in the services section.

#### src/pages/

- **pages/:** contains page-level views of the application.
- **Cotizador.jsx:** page focused on the quotation view or quotation-related content.
- **Inicio.jsx:** main page that organizes and displays the website sections.

#### src/styles/

- **styles/:** stores the CSS files used to style the application.
- **cotizador.css:** styles for the quotation page or quotation form.
- **footer.css:** styles for the footer component.
- **formularios.css:** shared styles for the forms.
- **globales.css:** global styles such as typography, colors, spacing, and reusable rules.
- **inicio.css:** styles for the main landing section.
- **navbar.css:** styles for the navigation bar.
- **secciones.css:** shared styles used by the rest of the website sections.

#### src/utils/

- **utils/:** contains helper logic or reusable functions.
- **cotizador.js:** stores utility logic related to quotation calculations or quotation form behavior.

#### Main application files

- **App.js:** main component that defines the general structure of the React application.
- **index.css:** base CSS file loaded when the app starts.
- **index.js:** entry point that renders the React application into the DOM.

---

### Main files

- **App.js:** organizes the main structure of the application.
- **Inicio.jsx:** renders the main landing page sections.
- **Cotizador.jsx:** handles the quotation view.
- **FormularioContacto.jsx:** validates and sends contact data to Google Sheets.
- **FormularioCotizacion.jsx:** manages the quotation request form.
- **cotizador.js:** contains helper logic related to quotations.

---

### Website flow

The website follows a simple landing page flow:

1. **Home**
2. **About us**
3. **Services**
4. **How it works**
5. **Coverage**
6. **FAQ**
7. **Quotation and contact forms**
8. **Footer**

The website is designed so the user can learn about the brand, understand the service, and submit a request easily.

---

### Contact form integration

The contact form validates the following fields:

- Name
- Email
- Phone number
- Message

When the form is submitted, the data is sent from React to a Google Apps Script endpoint. Then, the script stores each submission in a Google Sheets document.
