export const admin_email = "09naresh3@gmail.com";

export const education = [
    {
        id: 1,
        school: "University Of California Davis",
        degree: "Master Of Science",
        department: "Computer Science",
        address: "Davis, California",
        timeline: "Sep 2022 - Jun 2024",
        gpa: "3.93",
        courses: ["Advanced Data Structures and Algorithms", "Software Development", "Machine learning and Discovery", "Advance Statistical Computing", "Computer And Information Security"],
        skills: "Machine Learning, Signal Processing, Python programming",
        achievements: ["Selected as part-time graduate student researcher under Prof. Lee Miller in Nueroscience department at Center for Mind and Brain"],
        links: ["https://www.ucdavis.edu/", "https://millerlab.faculty.ucdavis.edu/people/"],
        transcriptLink: "master_transcript.pdf",
        logo: "ucdavis_logo",
    },
    {
        id: 2,
        school: "Indian Institute Of Technology Goa",
        degree: "Bachelor Of Technology",
        address: "Goa, India",
        department: "Computer Science And Engineering",
        timeline: "Aug 2017 - May 2021",
        gpa: "9.17",
        courses: ["Data Structures", "Design and Analysis Of Algorithms", "Combinatorial Optimizations", "Operating System", "Computer Architecture", "Introduction To Programming", "Linear Algebra", "Differential Equations", "Multivariate Calculus", "Data Analytics", "Numerical Analysis", "Machine Learning", "Artifical Intelligence"],
        achievements: ["Institute Bronze medal for second rank in CSE 2017 Batch"],
        skills: "C++, Java, Python, HTML5, CSS, Machine Learning, Linear Algenra, Threading",
        extracurricular: {
            "Sectretary IEEE Student Branch": "Assisted in organizing and planning various technical and non-technical events, workshops, and seminars, enhancing the professional and technical skills of members which lead significant growth in mebership",
            "Coding Club Core Member": "Collaborated as an integral member of the core team in managing and directing the activities of the Student's Coding Club in the planning, organization, and execution of coding workshops, hackathons, and competitive coding events among several new and old IIT's, promoting a culture of innovation and technical excellence.",
            "Electronics and Robotics Club Core Member": "Led instructional workshops on Arduino programming, soldering techniques, breadboard use, and basic to advanced electronics principles, fostering practical, hands-on learning enabling students to integrate software and hardware effectively."
        },
        links: ["https://iitgoa.ac.in/"],
        transcriptLink: "bachelor_transcript.pdf",
        logo: "iitgoa_logo"
    }
];

export const work_experiences = [
    {
        name: "Wayfair",
        role: "Software Engineer - Full Time",
        skills: "Python, GraphQl, PostgreSQL, TypeScript, Kibana, Kubernetes, Docker, Git, Datadog, Kafka, GCP",
        address: "Austin, Texas",
        timeline: "Jul 2024 - Mar 2025",
        website: "https://www.wayfair.com/",
        description: {
            "Exception management system": " Developed an automated exception engine using Python, GraphQL, PostgreSQL, TypeScript to eliminate shipment issues with potential financial risk across microservices slashing service tickets by 75% and enhancing operational efficiency.",
            "Automated Exceptions": " Designed a Yacc and Lex-based parser to evaluate complex business rules, enabling automatic assignment of critical flags and exceptions across 35+ workflows and ensuring proactive issue resolution.",
            "Track and Trace service ": " Enhanced tracking service using Python, Kafka and GCP capturing 90% shipment milestones in real time from API's and EDI services improving tracking accuracy by 15%",
            "Profit-Driven Feature Development":" Collaborated with the supply chain and retail tech team to engineer and deploy scalable features, utilizing Python, GraphQL, and TypeScript to streamline shipment lifecycle management. Our efforts enhanced operational efficiency and drove revenue growth tby 15%.",
            "AI-Driven Solutions":" Designed and developed an intelligent AI agent, using Python, TypeScript, graphQL and OpenAI API (LLMs), integrated with Wayfair's internal systems to automate basic CRUD operations, OCR on documents and streamline shipment tracking reducing manual workload."
        },
        logo: "wayfair"
    },
    {
        name:"University of California Davis",
        role:"Software Developer - Part Time",
        skills:"React.js, Node.js, Express.js, MongoDB, CSS, GitHub",
        address:"Davis, California",
        timeline:"Nov 2023 - Jun 2024",
        website:"https://github.com/KaushalNaresh/Indian_Davis_Community",
        description: {
            "Indian Community @ Davis (ICD) web platform":" Co-founded and leading the development of open source full-stack web application using React.js, MongoDB and Node.js aimed at enhancing academic and social experience of student community at UC Davis.",
            "Features": " Engineered the frontend UI/UX design for dashboard and roommate finder feature using React.js and CSS; currently developing an integrated event calendar and a personalized recommendation system",
            "API design":" Designed secure, efficient RESTful APIs with Node.js and Express.js for backend, ensuring compliance with industry security standards and optimizing data retrieval for minimal response times."
        },
        logo:"icd" 
    },
    {
        name:"Center for Mind and Brain (In collaboration with Accenture)",
        role:"Machine Learning Researcher - Part Time",
        skills:"Signal Processing, Python, Machine Learning, Speech Anatomy",
        address:"Davis, California",
        timeline:"Apr 2022 - June 2024",
        website:"https://medium.com/@nareshkaushal/a280968d1ab",
        description:{
            "Silent Speech Interface":" Led a cross-functional team in collaboration with Accenture to develop a machine learning model using CNN, attention, transformers and seq-to-seq techniques to generate speech in patients with speech disorders achieving 29% WER",
            "Managed the coordination":" of clinical trials involving laryngectomy patients, implementing python scripts for accurate recording and synchronization of sEMG signals, enhancing data integrity and trial efficiency",
        },
        logo:"cmb"
    },
    {
        name:"WOAS Technology Pvt. Ltd.",
        role:"Full Stack Developer - Full Time",
        skills:"Java, Spring Framework, JavaScript, CSS, MySQL, HTML",
        address:"Bangalore, India",
        timeline:"Jun 2021 – Apr 2022",
        website:"https://wooqer.com",
        description:{
            "Gallery for better Visual Experience":" Spearheaded the development of an interactive gallery, using Java, HTML and Spring MVC framework following Agile methodogies, that enabled users to pin feedback on images and send notifications; increasing customer engagement by 45%.",
            "API development": " Architected new RESTful APIs for microservices using Java and optimized web APIs to enhance performance, achieving a 25% reduction in critical response times. Documented all API functionalities comprehensively using Swagger",
            "Debugging and Documentation":" Managed end-to-end software development, using Jenkins for CI/CD pipelines, JIRA to resolve 100+ bugs, and JUnit for unit testing, enhancing product stability and customer service satisfaction."
        },
        logo:"wooqer"
    },
    {
        name:"Planful",
        role:"Software Developer Engineer - 1 Co-Op",
        skills:"C#, MySQL, Git, Object Oriented Programming",
        address:"Hyderabad, India",
        timeline:"June 2020 – Dec 2020",
        website:"https://planful.com",
        description:{
            "Data quality assessment tool ": " Developed a .NET console application in C# and integrated it with MySQL to automate anomaly detection in financial data, enhancing data accuracy and reducing prediction errors in financial planning models by 40%",
            "Debugging ":" Collaborated with senior developers on code review and debugging using the NUnit framework, resolving over 30 issues tracked in JIRA. Documented code in Confluence to streamline knowledge transfer"
        },
        logo:"planful"
    },
    // {
    //     name:"Planful (Host Analytics)",
    //     role:"Software Developer Engineer - 1 Intern",
    //     skills:"C#, MySQL, Git, Object Oriented Programming",
    //     address:"Telangana, India",
    //     timeline:"June 2020 – Dec 2020",
    //     website:"https://planful.com",
    //     description:{
    //         "Data quality assessment tool": "Contributed to the data analytics team by designing a tool that capture anomalies in financial data and assigns it a quality score which helps customers in making important conclusions and predictions.",
    //         "":"Able to detect sparse dataset, dataset with high fluctuations and with inconsistent values using this new tool.",
    //         "Debugging":"Contributed in debugging and testing the code to resolve pending issues on JIRA and documenting the code to help new joiners in their onboarding process."
    //     },
    //     logo:"planful"
    // },
    // {
    //     name:"Planful (Host Analytics)",
    //     role:"Software Developer Engineer - 1 Intern",
    //     skills:"C#, MySQL, Git, Object Oriented Programming",
    //     address:"Telangana, India",
    //     timeline:"June 2020 – Dec 2020",
    //     website:"https://planful.com",
    //     description:{
    //         "Data quality assessment tool": "Contributed to the data analytics team by designing a tool that capture anomalies in financial data and assigns it a quality score which helps customers in making important conclusions and predictions.",
    //         "":"Able to detect sparse dataset, dataset with high fluctuations and with inconsistent values using this new tool.",
    //         "Debugging":"Contributed in debugging and testing the code to resolve pending issues on JIRA and documenting the code to help new joiners in their onboarding process."
    //     },
    //     logo:"planful"
    // },
    // {
    //     name:"Planful (Host Analytics)",
    //     role:"Software Developer Engineer - 1 Intern",
    //     skills:"C#, MySQL, Git, Object Oriented Programming",
    //     address:"Telangana, India",
    //     timeline:"June 2020 – Dec 2020",
    //     website:"https://planful.com",
    //     description:{
    //         "Data quality assessment tool": "Contributed to the data analytics team by designing a tool that capture anomalies in financial data and assigns it a quality score which helps customers in making important conclusions and predictions.",
    //         "":"Able to detect sparse dataset, dataset with high fluctuations and with inconsistent values using this new tool.",
    //         "Debugging":"Contributed in debugging and testing the code to resolve pending issues on JIRA and documenting the code to help new joiners in their onboarding process."
    //     },
    //     logo:"planful"
    // },
    // {
    //     name:"Planful (Host Analytics)",
    //     role:"Software Developer Engineer - 1 Intern",
    //     skills:"C#, MySQL, Git, Object Oriented Programming",
    //     address:"Telangana, India",
    //     timeline:"June 2020 – Dec 2020",
    //     website:"https://planful.com",
    //     description:{
    //         "Data quality assessment tool": "Contributed to the data analytics team by designing a tool that capture anomalies in financial data and assigns it a quality score which helps customers in making important conclusions and predictions.",
    //         "":"Able to detect sparse dataset, dataset with high fluctuations and with inconsistent values using this new tool.",
    //         "Debugging":"Contributed in debugging and testing the code to resolve pending issues on JIRA and documenting the code to help new joiners in their onboarding process."
    //     },
    //     logo:"planful"
    // },
    // {
    //     name:"Planful (Host Analytics)",
    //     role:"Software Developer Engineer - 1 Intern",
    //     skills:"C#, MySQL, Git, Object Oriented Programming",
    //     address:"Telangana, India",
    //     timeline:"June 2020 – Dec 2020",
    //     website:"https://planful.com",
    //     description:{
    //         "Data quality assessment tool": "Contributed to the data analytics team by designing a tool that capture anomalies in financial data and assigns it a quality score which helps customers in making important conclusions and predictions.",
    //         "":"Able to detect sparse dataset, dataset with high fluctuations and with inconsistent values using this new tool.",
    //         "Debugging":"Contributed in debugging and testing the code to resolve pending issues on JIRA and documenting the code to help new joiners in their onboarding process."
    //     },
    //     logo:"planful"
    // },
    // {
    //     name:"Planful (Host Analytics)",
    //     role:"Software Developer Engineer - 1 Intern",
    //     skills:"C#, MySQL, Git, Object Oriented Programming",
    //     address:"Telangana, India",
    //     timeline:"June 2020 – Dec 2020",
    //     website:"https://planful.com",
    //     description:{
    //         "Data quality assessment tool": "Contributed to the data analytics team by designing a tool that capture anomalies in financial data and assigns it a quality score which helps customers in making important conclusions and predictions.",
    //         "":"Able to detect sparse dataset, dataset with high fluctuations and with inconsistent values using this new tool.",
    //         "Debugging":"Contributed in debugging and testing the code to resolve pending issues on JIRA and documenting the code to help new joiners in their onboarding process."
    //     },
    //     logo:"planful"
    // },
    
];

export const teaching_experiences = [
    {
        course_name: 'Data Visualization PSC12Y',
        timeline: "Apr 2024 - Jun 2024",
        description: "As a Teaching Assistant for Data Visualization under Prof. Azra Jahanitabesh during the Spring quarter, I instructed students in data visualization techniques using MS Excel, helped them in interpreting various graph types, and introduced key concepts in inferential and descriptive statistics. Additionally, I supported the professor with grading, led lab sessions, and held office hours to assist students with coursework and projects.",
        logo: 'PSC12Y',
        link: 'https://catalog.ucdavis.edu/courses-subject-code/psc/'
    },
    {
        course_name: 'General Psychology PSC001',
        timeline: "Jan 2024 - Mar 2024",
        description: "In my role as a Teaching Assistant for General Psychology (PSC001) under Prof. Kelly Michael King, I managed online office hours, graded exams, and collaborated with the professor in various administrative tasks, including designing exam papers.",
        logo: 'PSC001',
        link: 'https://catalog.ucdavis.edu/courses-subject-code/psc/'
    },
    {
        course_name: 'General Chemistry CHE2B',
        timeline: "Jan 2023 - Mar 2023",
        description: "As a Teaching Assistant for UC Davis's General Chemistry (CHE2B) under Prof. Whitney Duim, I led discussions and labs, graded exams, and supported students during office hours, significantly boosting class performance and earning nominations for the Best TA Award.",
        logo: 'CHE2B',
        link: 'https://catalog.ucdavis.edu/courses-subject-code/che/'
    }
]

export const languages = [
    {
        name: 'French - B1 Intermediate Level',
        logo: 'FRE021',
    },
    {
        name: 'French - A2 Elementary Level',
        logo: 'FRE01'
    },
    {
        name: 'English',
        logo: 'ENG'
    },
    {
        name: 'Punjabi',
        logo: 'PUN'
    },
    {
        name: 'Hindi',
        logo: 'HIN'
    }
]

export const activities = [
    // {
    //     name: "Indian Community at Davis",
    //     timeline: "Dec 2023 - Present",
    //     skills: "React.js, MongoDB, Express, Node.js, CSS",
    //     description:{
    //         "Spearheaded":" the creation of a MERN stack-based web application for UC Davis' Indian student community, focusing on cultural integration, sharing recources and community events",
    //         "Implementing":" AI-driven content curation like finding compatible roommate, housing options and sending real-time updates, catering to the dynamic needs of the student community and fostering a connected campus experience.",
    //     },
    //     logo:"Icd",
    //     link:"https://github.com/KaushalNaresh/Indian_Davis_Community"
    // },
    {
        name: "Personal Portfolio",
        timeline: "Dec 2022 - Present",
        skills: "Java Script, React.js, Firebase, CSS",
        description:{
            "Designed":" a personal portfolio web application with a Netflix-inspired UI/UX, utilizing React.js and CSS demonstrating skills in modern web technologies and user-centric design",
            "Link": " https://resume-c79a2.web.app",
            
        },
        logo:"Netflix",
        link:"https://github.com/KaushalNaresh/naresh-kumar-kaushal-resume"
    },
    {
        name: "Relevant Research Retrieval: Comparative Analysis of Natural Language Processing Models on CORD-19 Dataset",
        timeline: "Mar 2023 - May 2023",
        skills: "Python, Natural Language Processing, Machine Learning",
        description: {
            "Implemented":" Latent Dirichlet Allocation (LDA) model to retrieve relevant research articles based on a query from huge CORD-19 dataset.",
            "Conducted": " preprocessing tasks on the dataset to prepare it for analysis, including text cleaning, tokenization, and vectorization.",
            "Observed": " that while LDA effectively uncovered latent topics based on word co-occurrences, the models leveraging GloVe embeddings outperformed LDA by leveraging semantic meaning and contextual significance of words."
        },
        logo: "Covid",
        link: "https://github.com/KaushalNaresh/COVID-19-Open-Research-Dataset-Challenge-CORD-19-"
    },
    {
        name: "Music Genre Classification using LSTM",
        timeline: "Oct 2022 - Dec 2022",
        skills: "Python, signal processing, LSTM, Keras, CNN",
        description: {
            "Implemented":" an LSTM-based model utilizing MFCCs and ZCR to extract deep features from famous music audio GTZAN dataset for genre classification.",
            "Compared": " results with 1D CNN, 2D CNN, KNN and SVM where LSTM outperforms all these algorithms because of its ability to remember past information of the cells.",
            "Achieved": " a testing accuracy of around 82% with LSTM layer on top of KNN and SVM which is almost 120% increase when KNN or SVM were used alone."
        },
        logo:"Genre",
        link:"https://github.com/KaushalNaresh/Genre_Classification_Of_Songs/tree/LSTM"
    },
    {
        name: "Improving driver voice assistant to reduce road accidents",
        timeline: "Nov 2021 - Jan 2022",
        skills: "Python, Keras, Audio Processing, Deep Learning",
        description:{
            "Collaborated":" on a project to improve driver voice assistance technology using ML to help reduce road accidents.",
            "Spearheaded the pre-processing team" : " to develop a model for speech enhancement using U-Net or Convolutional-Autoencoders with skip connections.",
            "Integrated" : " a language model to enhance intelligibility, resulting in a word error rate reduction to 33%, and feeding the improved output to a RASA-based chatbot."
        },
        logo:"Omdena",
        link:"https://github.com/KaushalNaresh/Speech_enhancement_using_convolutional_autoencoders"
    },
    {
        name: "Feature Selection using deep learning in bioinformatics (Btech Thesis)",
        timeline:"Jan 2021 - May 2021",
        skills: "Python, Keras, Deep Learning",
        description:{
            "Developed a supervised model": " for classifying High Dimension Low Sample Size (HDLSS) cancer data using mRNA-Seq gene expression values of patients with different molecular subtypes",
            "Integrated various techniques": " like boosting, greedy feature selection, PCA, and Deep Neural Networks (DNN) to overcome the challenges of high variance and overfitting in HDLSS data",
            "Accuracy": " 90%"
        },
        logo:"Btech",
        link:"https://github.com/KaushalNaresh/Genomics"
    },
    {
        name: "US Politics: A Data-Driven Analysis of Sentiment, Demography and Media in US poltics",
        timeline:"Jan 2024 - Mar 2024",
        skills: "Python, Selenium, JavaScript, Web Scraping, API",
        description:{
            "Conducted Comprehensive Sentiment Analysis": " Spearheaded a detailed sentiment analysis leveraging Reddit comments from all 50 states on critical national issues, including the economy, healthcare, and political policies. Integrated U.S. Census Bureau demographic data for a nuanced regression analysis, illuminating the complex interplay between public sentiment and demographic variables.",
            "Advanced Media Bias and Framing Exploration": " Investigated media influence on public opinion by analyzing language patterns and framing within news articles from diverse political spectrums. Employed innovative data acquisition techniques, including web scraping and sentiment analysis tools, to assess media portrayal of divisive topics and its impact on societal discourse.",
            "Developed Interactive Data Visualizations": " Designed and implemented interactive Dash applications to visualize the correlation between public sentiment on national issues and demographic factors, and to explore media's role in shaping public opinion. Utilized advanced data visualization techniques to present complex data sets clearly and engagingly, facilitating deeper insights into the dynamics of American political discourse."
        },
        logo:"USPolitics",
        link:"https://github.com/KaushalNaresh/US_Politics"
    }
    // {
    //     name: "Genre Classification using LSTM",
    //     timeline: "Oct 2022 - Dec 2022",
    //     skills: "Python, signal processing, LSTM, Keras, CNN",
    //     description: {
    //         "Implemented":" the research paper published on IEEE:https://ieeexplore.ieee.org/document/9449177",
    //         "Compared": " results with 1D CNN, 2D CNN, KNN and SVM where LSTM outperforms all these algorithms.",
    //         "Accuracy": " Achieved an accuracy of around 88-90% with LSTM layer on top of KNN and SVM which is almost 120% increase when KNN or SVM were used alone."
    //     },
    //     logo:"Genre",
    //     link:"https://github.com/KaushalNaresh/Genre_Classification_Of_Songs/tree/LSTM"
    // },
    // {
    //     name: "Genre Classification using LSTM",
    //     timeline: "Oct 2022 - Dec 2022",
    //     skills: "Python, signal processing, LSTM, Keras, CNN",
    //     description: {
    //         "Implemented":" the research paper published on IEEE:https://ieeexplore.ieee.org/document/9449177",
    //         "Compared": " results with 1D CNN, 2D CNN, KNN and SVM where LSTM outperforms all these algorithms.",
    //         "Accuracy": " Achieved an accuracy of around 88-90% with LSTM layer on top of KNN and SVM which is almost 120% increase when KNN or SVM were used alone."
    //     },
    //     logo:"Genre",
    //     link:"https://github.com/KaushalNaresh/Genre_Classification_Of_Songs/tree/LSTM"
    // },
    // {
    //     name: "Genre Classification using LSTM",
    //     timeline: "Oct 2022 - Dec 2022",
    //     skills: "Python, signal processing, LSTM, Keras, CNN",
    //     description: {
    //         "Implemented":" the research paper published on IEEE:https://ieeexplore.ieee.org/document/9449177",
    //         "Compared": " results with 1D CNN, 2D CNN, KNN and SVM where LSTM outperforms all these algorithms.",
    //         "Accuracy": " Achieved an accuracy of around 88-90% with LSTM layer on top of KNN and SVM which is almost 120% increase when KNN or SVM were used alone."
    //     },
    //     logo:"Genre",
    //     link:"https://github.com/KaushalNaresh/Genre_Classification_Of_Songs/tree/LSTM"
    // },
    // {
    //     name: "Genre Classification using LSTM",
    //     timeline: "Oct 2022 - Dec 2022",
    //     skills: "Python, signal processing, LSTM, Keras, CNN",
    //     description: {
    //         "Implemented":" the research paper published on IEEE:https://ieeexplore.ieee.org/document/9449177",
    //         "Compared": " results with 1D CNN, 2D CNN, KNN and SVM where LSTM outperforms all these algorithms.",
    //         "Accuracy": " Achieved an accuracy of around 88-90% with LSTM layer on top of KNN and SVM which is almost 120% increase when KNN or SVM were used alone."
    //     },
    //     logo:"Genre",
    //     link:"https://github.com/KaushalNaresh/Genre_Classification_Of_Songs/tree/LSTM"
    // },
    // {
    //     name: "Genre Classification using LSTM",
    //     timeline: "Oct 2022 - Dec 2022",
    //     skills: "Python, signal processing, LSTM, Keras, CNN",
    //     description: {
    //         "Implemented":" the research paper published on IEEE:https://ieeexplore.ieee.org/document/9449177",
    //         "Compared": " results with 1D CNN, 2D CNN, KNN and SVM where LSTM outperforms all these algorithms.",
    //         "Accuracy": " Achieved an accuracy of around 88-90% with LSTM layer on top of KNN and SVM which is almost 120% increase when KNN or SVM were used alone."
    //     },
    //     logo:"Genre",
    //     link:"https://github.com/KaushalNaresh/Genre_Classification_Of_Songs/tree/LSTM"
    // },
    // {
    //     name: "Genre Classification using LSTM",
    //     timeline: "Oct 2022 - Dec 2022",
    //     skills: "Python, signal processing, LSTM, Keras, CNN",
    //     description: {
    //         "Implemented":" the research paper published on IEEE:https://ieeexplore.ieee.org/document/9449177",
    //         "Compared": " results with 1D CNN, 2D CNN, KNN and SVM where LSTM outperforms all these algorithms.",
    //         "Accuracy": " Achieved an accuracy of around 88-90% with LSTM layer on top of KNN and SVM which is almost 120% increase when KNN or SVM were used alone."
    //     },
    //     logo:"Genre",
    //     link:"https://github.com/KaushalNaresh/Genre_Classification_Of_Songs/tree/LSTM"
    // },
    // {
    //     name: "Genre Classification using LSTM",
    //     timeline: "Oct 2022 - Dec 2022",
    //     skills: "Python, signal processing, LSTM, Keras, CNN",
    //     description: {
    //         "Implemented":" the research paper published on IEEE:https://ieeexplore.ieee.org/document/9449177",
    //         "Compared": " results with 1D CNN, 2D CNN, KNN and SVM where LSTM outperforms all these algorithms.",
    //         "Accuracy": " Achieved an accuracy of around 88-90% with LSTM layer on top of KNN and SVM which is almost 120% increase when KNN or SVM were used alone."
    //     },
    //     logo:"Genre",
    //     link:"https://github.com/KaushalNaresh/Genre_Classification_Of_Songs/tree/LSTM"
    // },{
    //     name: "Genre Classification using LSTM",
    //     timeline: "Oct 2022 - Dec 2022",
    //     skills: "Python, signal processing, LSTM, Keras, CNN",
    //     description: {
    //         "Implemented":" the research paper published on IEEE:https://ieeexplore.ieee.org/document/9449177",
    //         "Compared": " results with 1D CNN, 2D CNN, KNN and SVM where LSTM outperforms all these algorithms.",
    //         "Accuracy": " Achieved an accuracy of around 88-90% with LSTM layer on top of KNN and SVM which is almost 120% increase when KNN or SVM were used alone."
    //     },
    //     logo:"Genre",
    //     link:"https://github.com/KaushalNaresh/Genre_Classification_Of_Songs/tree/LSTM"
    // }
];