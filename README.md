# Professional Portfolio

This is a professional portfolio project built using HTML, CSS, and JavaScript. The portfolio showcases various projects and provides information about the developer.

## Project Structure

The project is organized into the following directories and files:

```
professional-portfolio
├── src
│   ├── index.html          # Main HTML file
│   ├── _partials           # Contains header and footer HTML
│   │   ├── header.html     # Header section with navigation
│   │   └── footer.html     # Footer section with copyright info
│   ├── styles              # Stylesheets for the portfolio
│   │   ├── main.css        # Main stylesheet
│   │   ├── variables.css    # CSS variables for theming
│   │   └── components      # Component-specific styles
│   │       ├── _buttons.css # Button styles
│   │       └── _layout.css  # Layout styles
│   ├── js                  # JavaScript files
│   │   ├── main.js         # Main JavaScript file
│   │   ├── router.js       # Routing for the portfolio
│   │   ├── components      # Component-specific scripts
│   │   │   ├── carousel.js  # Carousel component
│   │   │   └── modal.js     # Modal component
│   │   └── utils           # Utility functions
│   │       └── seo.js      # SEO utility functions
│   ├── data                # Data files
│   │   └── projects.json    # Project data in JSON format
│   └── content             # Content files
│       └── about.md        # Markdown content for the About section
├── public                  # Public files for deployment
│   ├── sitemap.xml         # Sitemap for search engines
│   └── robots.txt          # Robots.txt for search engine crawlers
├── package.json            # NPM configuration file
├── .gitignore              # Files to ignore in version control
├── manifest.json           # Web app metadata
├── README.md               # Project documentation
└── LICENSE                 # Licensing information
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd professional-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Open `src/index.html` in your browser to view the portfolio.

## Features

- Responsive design that works on various devices.
- Dynamic project loading from a JSON file.
- Interactive components such as a carousel and modal.
- SEO-friendly structure with meta tags and a sitemap.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.