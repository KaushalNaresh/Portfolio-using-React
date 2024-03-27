export const admin_email = "09naresh3@gmail.com";

export const education = [
    {
        id: 1,
        school: "University Of California Davis",
        degree: "Master Of Science",
        department: "Computer Science",
        address: "Davis, California",
        timeline: "Sep 2022 - Apr 2024",
        gpa: "3.92",
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
        name:"Indian Student Association @ UC Davis",
        role:"Software Engineer (Part-time)",
        skills:"React.js, Node.js, Express.js, MongoDB, CSS, GitHub",
        address:"Davis, California",
        timeline:"Nov 2023 – Present",
        website:"https://github.com/KaushalNaresh/Indian_Davis_Community",
        description:{
            "Indian Community @ Davis (ICD) web platform":" Co-founded and leading the development of full-stack web application using React.js, MongoDB and Node.js aimed at enhancing academic and social experience of Indian student community at UC Davis.",
            "Features": " Implemented features like housing/roommate finder with dynamic matching algorithm; and currently working on event calendar and tailored recommendations.",
            "API design":" Designed secure and efficient RESTful APIs on the backend using Node.js capable of fetching huge amount of data with minimal response time"
        },
        logo:"icd" 
    },
    {
        name:"Center for Mind and Brain",
        role:"Graduate Student Researcher",
        skills:"Signal Processing, Python, Machine Learning, Speech Anatomy",
        address:"Davis, California",
        timeline:"Apr 2022 - Present",
        website:"https://medium.com/@nareshkaushal/a280968d1ab",
        description:{
            "Silent Speech Interface":" Leading ongoing research at Center For Mind And Brain as Machine Learning Researcher to develop a non-invasive multimodal silent speech interface (SSI) for patients with Dysarthria",
            "Methodology and Achievements":" Engineered an advanced supervised learning model that synthesizes speech by integrating sEMG and visual cues, employing a novel combination of CNN-RNN and attention-based Seq-to-Seq architectures, achieving a 35% WER",
            "Future Works ":" Working to incorporate multimodal strategy combining sEMG signals, audio, and video (lipreading) to reduce the phoneme confusions and improve WER"
        },
        logo:"cmb"
    },
    {
        name:"WOAS Technology Pvt. Ltd.",
        role:"Associate Product Engineer",
        skills:"Java, Spring Framework, JavaScript, CSS, MySQL, HTML",
        address:"Bangalore, India",
        timeline:"Jun 2021 – Apr 2022",
        website:"https://wooqer.com",
        description:{
            "Gallery for better Visual Experience":" Spearheaded a Scrum team in the development of an interactive gallery, leveraging Java and Spring MVC framework, which resulted in a 25% increase in user engagement and significantly improved the user interface’s responsiveness and interactivity.",
            "Mobile Refresh Project": " Enhanced API development by designing and optimizing RESTful services, improving system efficiency by 30% and streamlining data retrieval processes.",
            "Debugging":" Effectively resolved over 100+ product-related issues tracked in JIRA, leading to a 40% reduction in customer complaints and contributing to the product’s overall stability and reliability"
        },
        logo:"wooqer"
    },
    {
        name:"Planful",
        role:"Software Developer Engineer - 1 Intern",
        skills:"C#, MySQL, Git, Object Oriented Programming",
        address:"Hyderabad, India",
        timeline:"June 2020 – Dec 2020",
        website:"https://planful.com",
        description:{
            "Data quality assessment tool ": " Developed a .NET console application in C# and integrated it with MySQL to automate anomaly detection in financial data, enhancing data accuracy and reducing prediction errors in financial planning models by 40%",
            "Debugging ":" Collaborated with senior developers to debug code using NUnit framework, resolving 30+ pending issues on JIRA and documented code for future KT sessions"
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
        description: "In Progress....",
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
        name: 'French 021 (Intermediate Level - B1)',
        logo: 'FRE021'
    },
    {
        name: 'French 003 (Basic Level - A2)',
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