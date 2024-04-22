// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, My name is",
    name: "Emmanuel Temitope",
    message: "As a passionate freelance software engineer, I specialize in crafting customized solutions that streamline business operations. With a keen eye for efficiency and a love for problem-solving, I thrive on helping businesses optimize their workflow through tailor-made software solutions.",
    basedLocation: "Lagos, Nigeria",
    resumeLink: "https://docs.google.com/document/d/1Sa_sK3RMusoezzgzxu8LkV16i2Jra2qd/edit?usp=sharing&ouid=113657039181859132688&rtpof=true&sd=true", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/tope.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/fashtope",
    linkedin: "https://www.linkedin.com/in/emmanuel-fasakin-67b601223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    medium: "https://medium.com/@mimaishel",
    stackoverflow: "",
    xtwitter: "https://twitter.com/kvnq_fash?t=_U5VwNYUTCCwb8wLiboy4A&s=08"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "I'm Emmanuel Temitope Fasakin and I'm a Fullstack web and mobile developer. I have a passion for coding in languages such as Python, JavaScrript, Dart and Java. I've worked with bootstrap and css to build beautiful responsive websites. I've also worked with Flutter to build mobile applications.",
        "Responsible, organized, problem solver, and independent thinker. Work well with my team of developers to build websites. Programming for 3+ years."
    ], // Separated items are paragraphs
    techStack: [
        "Html",
        "CSS",
        "JavaScript",
        "Vue.js",
        "Python",
        "Dart (Flutter)",
        "MySQL",
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Chief Technology Officer",
        company: {
            name: "Boltop Temmy Limited",
        },
        duration: "Aug 2019 - Present",
        bulletPoints: [
            "Started a website development company",
            "Build\'s web applications for client.",
            "Currently rebuilding and modernizing the university digital sign manager and system.",
            "Currently building an event management system for mobile devices"
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "MySQL",
            "JS",
            "Vue.js",
            "HTML",
            "Tailwind",
            "Firebase",
            "Dart",
            "Flutter"
        ]
    },
    {
        position: "Software Developer",
        company: {
            name: "Hardensoft International Limited",
        },
        duration: "Jan 2020 - Aug 2020",
        bulletPoints: [
            "Worked on a mobile application called NUMA",
            "Collaborate with the designers to optimize all designs before development",
            "Unit Testing"
        ],
        hashtags: [
            "Firebase",
            "Flutter",
            "Xamarin"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "OmniFood",
        yearCompleted: "2022",
        description: "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.",
        techStack: "Html, CSS, JavaScript",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/feifyKike/TrackYourSubsDemo/"
            },
            {
                label: "",
                type: "external",
                url: "https://omnifood-harkinola.netlify.app/"
            }
        ],
        imageLink: "images/omnifood.png",
        alignLeft: false
    },
    // {
    //     projectName: "Dynamic Portfolio Website",
    //     yearCompleted: "2021",
    //     description: "Developed a personal portfolio for a client website with Python backend using the Django web development framework. Incorporated HTML, CSS, and JavaScript to construct the frontend of the website.",
    //     techStack: "Django, Python, HTML, CSS, JS",
    //     links: [
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://maximshelepov.com"
    //         }
    //     ],
    //     imageLink: "images/portfolio_pic.png",
    //     alignLeft: true
    // },
    // {
    //     projectName: "Trivia Quiz",
    //     yearCompleted: "2020",
    //     description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
    //     techStack: "JS, HTML, CSS",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/feifyKike/JS-API-Quiz"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://codepen.io/Max_the_coder/pen/yLXZOYL" //https://codepen.io/Max_the_coder/pen/yLXZOYL
    //         }
    //     ],
    //     imageLink: "images/trivia_pic.png",
    //     alignLeft: true
    // },
    // {
    //     projectName: "Coronavirus Report",
    //     yearCompleted: "2020",
    //     description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
    //     techStack: "Python",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://youtu.be/gw5kb1QKVp0"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://github.com/feifyKike/Covid-Cases-Visual"
    //         }
    //     ],
    //     imageLink: "images/covid_pic.png",
    //     alignLeft: false
    // }
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently working as a freelancer, building world ",
            ""
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "temitope.fasakin.2222@gmail.com", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}