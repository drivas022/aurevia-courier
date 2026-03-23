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

- **Component structure:** the interface is organized into reusable components to keep the code cleaner, more modular, and easier to maintain.
- **Frontend organization:** the project separates structure, styles, and logic as much as possible to improve readability and make future changes easier.
- **Routes:** the current structure allows the project to scale easily if new pages or sections are added later.
- **Visual focus:** the application is mainly focused on presenting a clean and luxury-style user interface for the courier website.
- **Scalability:** the structure makes it easier to add new sections, update the design, or connect the frontend to external services in the future.

---

### Project structure

```bash
aurevia-courier/
├── node_modules/
├── public/
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
│   ├── styles/
│   │   ├── cotizador.css
│   │   ├── footer.css
│   │   ├── formularios.css
│   │   ├── globales.css
│   │   ├── inicio.css
│   │   ├── navbar.css
│   │   └── secciones.css
│   ├── utils/
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
- **package.json:** defines the project configuration, dependencies, and available scripts.
- **package-lock.json:** stores the exact dependency versions installed in the project.
- **.gitignore:** specifies which files or folders Git should ignore.
- **node_modules/:** contains all installed project dependencies.

#### public/

- **public/:** stores static public files used by React before rendering the application.

#### src/

- **src/App.js:** main component that organizes the structure of the website.
- **src/index.js:** entry point that renders the React application.
- **src/index.css:** base styles loaded globally when the app starts.

#### src/assets/

- **src/assets/icons/:** stores icons used in different sections of the website.
- **src/assets/images/:** stores visual resources used by the interface.
- **src/assets/images/hero-luxury.jpg:** main image used in the hero or landing section.

#### src/components/

- **Footer.jsx:** footer of the page with final information and support content.
- **FormularioContacto.jsx:** component for the contact form.
- **FormularioCotizacion.jsx:** component for the quotation/request form.
- **Navbar.jsx:** top navigation bar of the website.
- **SeccionCobertura.jsx:** section that explains the delivery coverage or locations.
- **SeccionComoFunciona.jsx:** section that explains the step-by-step process of the service.
- **SeccionContacto.jsx:** section where the user can contact the business.
- **SeccionFAQ.jsx:** frequently asked questions section.
- **SeccionInicio.jsx:** main landing section presented when the user enters the website.
- **SeccionServicios.jsx:** section that shows the services offered by the courier.
- **SeccionSobreNosotros.jsx:** section that introduces the brand and explains who the business is.

#### src/data/

- **cobertura.js:** stores the data used in the coverage section.
- **faq.js:** stores the questions and answers shown in the FAQ section.
- **servicios.js:** stores the data related to the courier services.

#### src/pages/

- **src/pages/:** folder reserved for page-level views if the project grows or adds more routes later.

#### src/styles/

- **cotizador.css:** styles related to the quotation section or quotation form.
- **footer.css:** styles used in the footer component.
- **formularios.css:** styles shared by the forms.
- **globales.css:** global styles such as colors, fonts, spacing, and general rules.
- **inicio.css:** styles for the landing or main section.
- **navbar.css:** styles for the navigation bar.
- **secciones.css:** shared styles for the rest of the website sections.

#### src/utils/

- **src/utils/:** folder intended for helper functions or reusable logic.

---

### Website flow

The website follows a landing page flow designed to guide the user from the first impression of the brand to direct contact.

1. **Inicio:** the user enters the website and first sees the main presentation of Aurevia Courier, including the luxury image, the branding, and the service value.
2. **Sobre nosotros:** after the first impression, the page explains what the brand is, what it offers, and the type of service it specializes in.
3. **Servicios:** the user then sees the main services offered by the courier.
4. **Cómo funciona:** this section explains the process the client should follow to use the service.
5. **Cobertura:** the user can review where the service applies or how the delivery coverage works.
6. **FAQ:** this part answers common questions before the user decides to continue.
7. **Cotización y contacto:** after understanding the service, the user can fill out the quotation form or the contact form.
8. **Footer:** the page ends with closing information and extra support content.

In general, the flow of the website is designed so the user can **discover the brand**, **understand the service**, **resolve doubts**, and finally **request information or make contact**.
