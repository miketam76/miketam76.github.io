// Placeholder for project data

export const PROJECT_DATA = [

    {
        id: '1',
        title: 'The Forest Portfolio - Modern Angular Web App',
        date: 'December 2025',
        details: `
            <p><strong>Overview:</strong> A high-performance personal portfolio built with Angular 16, designed with a focus on immersive visuals and strict AODA compliance.</p>
            <p><strong>Technical Stack:</strong> Angular 16 (TypeScript), CSS Animations, Renderer2 API, HTML5 Semantic Elements.</p>
            <p><strong>Key Achievements:</strong>
                <ul>
                    <li><strong>Immersive UI:</strong> Engineered a custom falling leaf animation using Angular's Renderer2 for efficient DOM manipulation without sacrificing performance.</li>
                    <li><strong>Accessibility (AODA) Mastery:</strong> Implemented "Reduce Motion" safety triggers via CSS media queries and optimized color contrast ratios for low-vision users.</li>
                    <li><strong>Component Architecture:</strong> Built a modular, scalable structure using Standalone Components and centralized data management in TypeScript.</li>
                    <li><strong>Modern Navigation:</strong> Utilized CSS-only smooth scrolling and scroll-padding to ensure a seamless "ease-in-out" transition between site sections.</li>
                </ul>
            </p>
        `
    },

    {
        id: '2',
        title: 'FitForge - Fitness Design System',
        date: 'November - December 2025',
        details:`
        <p><strong>Overview:</strong> A comprehensive UX/UI project focused on creating a design system for a mobile fitness application from scratch using Figma.</p>
        <p><strong>Key Achievements:</strong>
            <ul>
                <li>Developed a full design system including typography scales, color palettes (accessible greens), and reusable components.</li>
                <li>Created high-fidelity interactive prototypes to simulate user workouts and progress tracking.</li>
                <li>Successfully migrated all project assets to a personal design folder for long-term portfolio use.</li>
            </ul>
        </p>
        `,
    },

    {
        id: '3',
        title: 'Pokédex API - Web & Mobile App',
        date: 'July - August, 2025',
        details: `
        <p><strong>Overview:</strong> An interactive, responsive application built as a final project at Algonquin College, consuming the public PokéAPI to render data dynamically.</p>
        <p><strong>Technical Stack:</strong> JavaScript (ES6+), CSS3, REST APIs, CapacitorJS, Docker, GitHub Actions.</p>
        <p><strong>Key Achievements:</strong>
            <ul>
                <li><strong>Cross-Platform Deployment:</strong> Leveraged CapacitorJS to port the web application to Android, ensuring a seamless experience across desktop and mobile devices.</li>
                <li><strong>Asynchronous Data Handling:</strong> Implemented the Fetch API and asynchronous programming to handle real-time data loading for Pokémon stats and images.</li>
                <li><strong>Modern DevOps Workflow:</strong> Engineered a CI/CD pipeline using GitHub Actions and Docker to automate builds, testing, and deployment.</li>
                <li><strong>Responsive Design:</strong> Created a custom CSS layout optimized for multiple screen sizes, from mobile to desktop.</li>
            </ul>
        </p>
    `
    },

    {
        id: '4',
        title: 'Ontario Housing Data Analysis Solution',
        date: 'June 2024',
        details: `
            <p><strong>Overview:</strong> An integrated Power Platform solution developed at Algonquin College to automate the collection, approval, and visualization of regional housing data.</p>
            <p><strong>Technical Stack:</strong> Microsoft Power Apps (Canvas), Power BI Service, Dataverse.</p>
            <p><strong>Key Achievements:</strong>
                <ul>
                    <li><strong>Dynamic Data Architecture:</strong> Built a Power Apps Canvas App utilizing Dataverse for secure, structured data collection and management.</li>
                    <li><strong>Semantic Model Engineering:</strong> Configured a Semantic Model in Power BI to monitor Dataverse tables for updates, ensuring the analytical report reflects real-time data changes.</li>
                    <li><strong>Interactive Visualization:</strong> Developed Power BI dashboards highlighting regional growth trends, performance metrics, and regional insights.</li>
                    <li><strong>Workflow Automation:</strong> Engineered Power Automate flows to refresh reports and handle approval cycles, reducing manual updates by 40%.</li>
                    <li><strong>AODA Compliance:</strong> Applied strict accessibility features, including optimized color contrast, screen reader support, and keyboard-only navigation.</li>
                </ul>
            </p>
        `
    },

    {
        id: '5',
        title: 'Waste Management App',
        date: 'May - August 2024',
        details: `
        <p><strong>Overview:</strong> A collaborative project acting as a technical consultant for an assigned client to modernize and stabilize a municipal waste management platform.</p>
        <p><strong>Technical Stack:</strong> Python (Flask), SQL (MySQL), Bootstrap, ZenHub (Agile Tracking).</p>
        <p><strong>Key Achievements:</strong>
            <ul>
                <li><strong>Stakeholder Management:</strong> Acted as Team Lead and Scrum Master, facilitating weekly demos and incorporating iterative feedback from the client into the development lifecycle.</li>
                <li><strong>Feature Modernization:</strong> Successfully implemented the client's high-priority requests, including editable waste categories and a custom statistical reporting engine.</li>
                <li><strong>Maintenance & Bug Squashing:</strong> Identified and resolved critical logic errors and UI inconsistencies within the existing codebase to improve overall stability.</li>
                <li><strong>Agile Delivery:</strong> Managed sprint planning and backlog tracking via ZenHub to ensure project milestones aligned with client expectations.</li>
            </ul>
        </p>
    `
    },

    {
        id: '6',
        title: 'Enterprise Java: Ontario Bridge Training Program',
        date: 'June - August 2024',
        details: `
        <p><strong>Overview:</strong> A full-stack Java Servlet application developed to process public JSON datasets and manage them within an Oracle database environment.</p>
        <p><strong>Technical Stack:</strong> Java (JSF/Servlets), Oracle Database, GSON API, Bootstrap (UI Upgrade), XHTML.</p>
        <p><strong>Key Achievements:</strong>
            <ul>
                <li><strong>Team Leadership:</strong> Led the project phases from design to deployment, managing timelines and organizing developer meetings to ensure consistent progress.</li>
                <li><strong>Data Transformation:</strong> Utilized the GSON API to build modular import programs that transform raw JSON data into validated Oracle database records.</li>
                <li><strong>Modernized Interface:</strong> Replaced legacy CSS with a Bootstrap-driven design to improve responsiveness and user experience across all form entries.</li>
                <li><strong>System Reliability:</strong> Presented a comprehensive technical report to stakeholders highlighting the system’s database efficiency and CRUD operation reliability.</li>
            </ul>
        </p>
    `
    },

    {
        id: '7',
        title: 'Flight Tracker - Native Android Utility',
        date: 'Fall 2025',
        details: `
            <p><strong>Overview:</strong> A native Android application developed at Algonquin College that retrieves and manages real-time flight departure data via the Flight Stack Tracker API.</p>
            <p><strong>Technical Stack:</strong> Java, Android SDK, SQLite, REST APIs, XML, Android Studio.</p>
            <p><strong>Key Achievements:</strong>
                <ul>
                    <li><strong>Offline Management:</strong> Integrated a local SQLite database to allow users to store and manage flight records for offline viewing.</li>
                    <li><strong>Asynchronous Processing:</strong> Utilized asynchronous API calls to fetch live flight status by airport code, ensuring a highly responsive user interface.</li>
                    <li><strong>Collaborative Development:</strong> Worked closely with a team to troubleshoot integration challenges and deliver project milestones on a strict schedule.</li>
                    <li><strong>Reliable Architecture:</strong> Applied modular design and structured testing to ensure system reliability, culminating in a successful live presentation on physical Android hardware.</li>
                </ul>
            </p>
        `
    },

    {
        id: '8',
        title: 'Enigma Encryption Engine',
        date: 'January 2023',
        details: `
        <p><strong>Overview:</strong> A desktop application built in Java that replicates the encryption logic of the World War II Enigma machine.</p>
        <p><strong>Technical Stack:</strong> Java, Swing (GUI), Object-Oriented Programming.</p>
        <p><strong>Key Achievements:</strong>
            <ul>
                <li>Implemented complex rotor-scrambling logic and plugboard configurations using pure Java.</li>
                <li>Designed a custom Swing interface to mimic the functionality of the original device.</li>
                <li>Applied rigorous testing to ensure character-mapping accuracy matched historical Enigma standards.</li>
            </ul>
        </p>
        `,
    },

]
