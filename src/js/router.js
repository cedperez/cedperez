// This file manages the routing for the portfolio, allowing for navigation between different sections without full page reloads.

document.addEventListener('DOMContentLoaded', () => {
    const routes = {
        '/': 'home',
        '/about': 'about',
        '/projects': 'projects',
        '/contact': 'contact'
    };

    const loadPage = async (route) => {
        const content = document.getElementById('content');
        content.innerHTML = ''; // Clear existing content

        switch (route) {
            case 'home':
                content.innerHTML = '<h1>Welcome to My Portfolio</h1>';
                break;
            case 'about':
                const aboutContent = await fetch('/content/about.md').then(res => res.text());
                content.innerHTML = marked(aboutContent); // Assuming marked.js is used for markdown
                break;
            case 'projects':
                const projectsData = await fetch('/data/projects.json').then(res => res.json());
                content.innerHTML = projectsData.map(project => `<div>${project.title}</div>`).join('');
                break;
            case 'contact':
                content.innerHTML = '<h1>Contact Me</h1>';
                break;
            default:
                content.innerHTML = '<h1>404 - Page Not Found</h1>';
        }
    };

    const navigateTo = (route) => {
        history.pushState({}, route, window.location.origin + route);
        loadPage(routes[route]);
    };

    window.onpopstate = () => {
        loadPage(routes[window.location.pathname]);
    };

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const route = e.target.getAttribute('href');
            navigateTo(route);
        });
    });

    loadPage(routes[window.location.pathname]);
});