export const admin_email = "09naresh3@gmail.com";

export const education = [
    {
        id: 1,
        school: "University Of California Davis",
        degree: "Master Of Science",
        department: "Computer Science",
        address: "Davis, California",
        timeline: "Sep 2022 - Apr 2024",
        gpa: "3.9",
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
        name:"Center for Mind and Brain",
        role:"Graduate Student Researcher",
        skills:"Signal Processing, Python, Machine Learning, Speech Anatomy",
        address:"Davis, California",
        timeline:"Apr 2022 - Present",
        website:"https://medium.com/@nareshkaushal/a280968d1ab",
        description:{
            "Silent Speech Interface":" Leading ongoing research at Center For Mind And Brain as Machine Learning Researcher to develop a non-invasive multimodal silent speech interface (SSI) for patients with Dysarthria",
            "":"Implemented a supervised model to generate Hu-BERT speech units by decoding sEMG signals using CNN-RNN and attention based transformer model achieving a WER of 35%",
            "Future Works":" Working to incorporate multimodal strategy combining sEMG signals, audio, and video (lipreading) to reduce the phoneme confusions and improve WER"
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
            "Gallery for better Visual Experience":" Spearheaded a web-development team of 5 to design an interactive gallery using Spring MVC framework with a new feature of point annotation and commenting, improving customer engagement by 45%",
            "Mobile Refresh Project": " Designed new APIs and optimized existing ones to revamp Wooqer mobile app (Android and iOS) resulting in 25% reduction in critical response times",
            "Debugging":" Resolved multiple product-related errors tracked in JIRA through close collaboration with the Customer Success and Quality Assurance teams"
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
            "Data quality assessment tool": "Designed a .NET console app in C# and MySQL to identify anomalies in financial data and assign quality scores, reducing prediction errors in financial planning models by 40%",
            "Debugging":"Collaborated with senior developers to debug code using NUnit framework, resolving 30+ pending issues on JIRA and documented code for future KT sessions"
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

export const activities = [
    {
        name: "Portfolio using React.js",
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
        name: "Relevant Research Retrieval: Comparative Analysis of Machine Learning Models on CORD-19 Dataset",
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
        name: "Genre Classification using LSTM",
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
        name: "Omdena real world AI Project",
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