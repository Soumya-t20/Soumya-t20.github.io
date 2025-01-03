// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar color change on scroll
window.onscroll = function () {
    var navbar = document.querySelector("nav");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("bg-gray-700");
    } else {
        navbar.classList.remove("bg-gray-700");
    }
};

// Toggle menu
function toggleFunction() {
    var x = document.getElementById("navDemo");
    x.classList.toggle("w3-show");
}

const projects = [
    {
        id: 'ecommerce-site',
        title: 'Enhanced E-Commerce Site Experience',
        date: 'Aug 2021 - Apr 2022',
        institution: 'Honeywell Process Solutions',
        description: 'Enhanced the user experience and performance of an e-commerce site for Honeywell.',
        details: [
            'Implemented front-end improvements, optimizing the user interface with Angular and enhancing the overall user experience.',
            'Integrated APIs with the backend systems using Java Spring Boot to ensure seamless communication between the front-end and server.',
            'Worked closely with teams to ensure the site handled high traffic while ensuring optimal performance and reliability during peak loads.'
        ],
        skills: 'Angular, Java Spring Boot, REST APIs, E-Commerce, Front-End Development, Backend Integration'
    },
    
    {
        id: 'angular-ecommerce',
        title: 'Angular E-Commerce Web Application',
        date: 'May 2022 - Aug 2022',
        institution: 'Honeywell Building Technologies',
        description: 'Developed a responsive Angular-based e-commerce web application.',
        details: [
            'Built a dynamic e-commerce platform using Angular, providing users with a seamless shopping experience on both desktop and mobile devices.',
            'Integrated third-party APIs for payment gateways and product data management, ensuring secure and efficient transaction handling.',
            'Applied performance optimization techniques to ensure the application scaled well with high product inventories and increased user traffic.'
        ],
        skills: 'Angular, TypeScript, REST APIs, E-Commerce, Payment Integration, Front-End Development, Mobile-Responsive Design'
    },
    {
        id: 'nlp-bias-project',
        title: 'NLPositionality: Analyzing Biases in NLP Datasets and Models',
        date: 'Nov 2023 - Dec 2023',
        institution: 'George Mason University',
        description: 'Investigated design biases in NLP datasets and models related to social acceptability and hate speech/toxicity.',
        details: [
            'Led a project to analyze design biases in NLP datasets, focusing on social acceptability and hate speech/toxicity data. The project aimed to enhance the fairness and reliability of NLP models.',
            'Explored the impact of multilingual and augmented datasets by translating data into multiple languages and introducing noise, improving the robustness of the models.',
            'Conducted a thorough analysis of annotator labels, model predictions from multiple models like Perspective API, RoBERTa, and GPT-4, and compared annotator demographics to uncover linguistic biases.',
            'Utilized Jupyter notebooks to preprocess and analyze the datasets, making the code and methodology replicable for future research into biases in NLP.',
            'Provided insights into the ethical concerns of NLP models, emphasizing the need for balanced, unbiased training data to improve fairness in AI systems.'
        ],
        skills: 'Python, Jupyter, Natural Language Processing, Data Analysis, Multilingual Datasets, Bias Analysis, GPT-4, RoBERTa, Perspective API, Model Evaluation'
    },
    {
        id: 'cloud-survey',
        title: 'Cloud-Based Student Survey Platform',
        date: 'Jan 2024 - May 2024',
        institution: 'George Mason University',
        description: 'Scalable and high-performance AWS-based survey system ensuring optimal uptime and efficiency.',
        details: [
            'Architected a highly scalable and fault-tolerant AWS-based survey system, utilizing services like S3, EC2, CloudFront, and Route 53 to ensure 99.9% uptime and significantly optimize page load times, reducing latency by 40%.',
            'Developed a mobile-responsive survey form that supports over 10 different input types, improving mobile engagement by 35% and decreasing form abandonment rates by 25%. The user-friendly design and interface resulted in an increase in response rates.',
            'Integrated custom analytics to track survey responses and participant behaviors, leading to a 50% increase in survey completion rates. The analytics dashboard provided valuable insights from over 1,000 student responses, enabling more targeted decision-making for survey organizers.'
        ],
        skills: 'AWS (S3, EC2, CloudFront, Route 53), HTML, CSS, JavaScript, Cloud Architecture, Web Development, Analytics'
    },
    {
        id: 'full-stack-survey',
        title: 'Full-Stack Student Survey Application',
        date: 'Jan 2024 - May 2024',
        institution: 'George Mason University',
        description: 'A comprehensive full-stack web application using Angular and Spring Boot, optimized for performance and scalability.',
        details: [
            'Developed a robust full-stack web application using Angular for the frontend and Spring Boot for the backend, significantly reducing data retrieval times by 30% when processing over 10,000 survey records.',
            'Designed and implemented RESTful APIs that ensured 99.9% uptime, even under heavy traffic, handling over 500 concurrent users during peak survey periods without any performance degradation.',
            'Streamlined the deployment process by containerizing the application with Docker and setting up a continuous integration/continuous deployment (CI/CD) pipeline with Jenkins. This reduced release times by 60% and improved overall development efficiency.'
        ],
        skills: 'Angular, Spring Boot, RESTful APIs, JPA/Hibernate, MySQL, Docker, Kubernetes, Jenkins, CI/CD'
    },
    
    {
        id: 'Web-App',
        title: 'Full-Stack Web Application',
        date: 'Sep 2023 - Dec 2023',
        institution: 'George Mason University',
        description: 'Built a full-stack application using Angular and Spring Boot for seamless data processing and presentation.',
        details: [
            'Developed a comprehensive full-stack web application with Angular on the front-end and Spring Boot on the back-end, streamlining data management and visualization for users.',
            'Implemented a RESTful API architecture with JPA/Hibernate to manage database interactions, reducing data retrieval time by 30%.',
            'Enhanced system scalability by containerizing the application with Docker and integrating Kubernetes for orchestration, improving deployment efficiency.'
        ],
        skills: 'Angular, Spring Boot, RESTful APIs, JPA/Hibernate, MySQL, Docker, Kubernetes, CI/CD'
    },
    
];

function createProjectCard(project) {
    return `
        <div class="bg-gray-100 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl cursor-pointer" onclick="openModal('${project.id}')">
            <h3 class="text-2xl font-bold">${project.title}</h3>
            <p class="text-gray-600 mt-2">${project.date}</p>
            <p class="text-gray-700 mt-2">${project.description}</p>
        </div>
    `;
}

function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    projectGrid.innerHTML = projects.map(createProjectCard).join('');
}

function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalDetails = document.getElementById('modal-details');
    const modalSkills = document.getElementById('modal-skills');

    modalTitle.textContent = project.title;
    modalDate.textContent = `${project.date}${project.institution ? ' | ' + project.institution : ''}`;
    modalDetails.innerHTML = project.details.map(detail => `<li>${detail}</li>`).join('');
    modalSkills.innerHTML = `<strong>Skills:</strong> ${project.skills}`;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Render projects when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);

// Add event listener to close button
document.getElementById('modal-close').addEventListener('click', closeModal);

function initializeProjects() {
    console.log("Initializing projects...");
    renderProjects();
    
    // Add event listener to close button
    const closeButton = document.getElementById('modal-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    } else {
        console.error("Close button not found!");
    }
    
    console.log("Projects initialized successfully.");
}

