import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import baDashboardImage from './image/Review_Dashboard.png'
import predictionweb from './image/diabetes_prediction_web.png'
import demoVideo from './image/demo.mp4'
import smote from './image/smote.png'
import churn from './image/prediction_churn.png'


function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Sample data projects - replace with your own
  const projects = [
    {
      id: 1,
      title: "British Airway Review Dashboard",
      description: "Interactive dashboard analyzing British Airway's customer reviews.",
      type: "tableau",
      technologies: ["Tableau", "Data Visualization"],
      image: baDashboardImage,
      /*embedCode: `<div class='tableauPlaceholder' id='viz1742224580546' style='position: relative'><noscript><a href='#'><img alt='Review_Dashboard ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;GJ&#47;GJ3N2RCTR&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='https:&#47;&#47;haproxy-traffic-splitter&#47;views&#47;British_Airways_Review_Dashboard_17422118282010&#47;Review_Dashboard?:language=en-US&amp;:embed=true&amp;:sid=&amp;:redirect=auth' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;GJ&#47;GJ3N2RCTR&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`,
      */
      demoLink: "https://public.tableau.com/shared/GJ3N2RCTR?:display_count=n&:origin=viz_share_link",
      highlights: [
        "<b>Comprehensive Rating Analysis</b>: The dashboard tracks an overall rating of 4.2 for British Airways, with detailed breakdowns across six key metrics.",
        "<b>Geographic Segmentation</b>: The map visualization highlights rating variations by country, enabling identification of markets where British Airways performs best and others requiring service improvements.",
        "<b>Fleet Performance Insights</b>: Aircraft-Specific ratings revealing Boeing 747-400 achieved the highest satisfaction (4.7), while the A321 model scored the lowest (3.6), providing clear direction for fleet investment decisions.",
        "<b>Multiple Filtering Capabilities</b>: The dashboard allows stakeholders to filter by metrics, time period, traveler type, seat type, aircraft model, and continent, enabling multidimensional analysis."
      ]
    },
    {
      id: 2, 
      title: "Diabetes Prediction Tool",
      description: "Interactive Streamlit application that predicts diabetes risk based on patient health metrics, providing healthcare professionals with an easy-to-use diagnostic support tool.",
      technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      image: predictionweb,
      videoFile: demoVideo,
      githubLink: "https://github.com/yubapun/Diabetes-Prediction/blob/main/Notebook/Diabetes_Prediction_Model.ipynb",
      demoLink: "https://diabetes-prediction-2n2yjm42zkxa3ykfzjdkby.streamlit.app/", 
      highlights: [
        "Developed an <strong>interactive web application</strong> using Streamlit for predicting diabetes risk",
        "Tested various <strong>machine learning models</strong> and picked Neural Network that had a 80% accuracy rate [steps taken available under <strong>'view analysis'</strong>].",
        "Created <strong>data visualizations</strong> to help users understand key health indicators and their impact",
        "Built <strong>user-friendly interface</strong> allowing users to input patient metrics and receive instant predictions",
        "Performed comprehensive <strong>data analysis</strong> to identify the most predictive health factor [Glucose] for diabetes",
        "Below are three links <strong>'Watch Demo'</strong>, <strong>'View Analysis'</strong>and <strong>'Live Demo'</strong> containing video demo of the tool, analysis of diabetes data and link to the tool for personal testing respectively. "
      ]
    },
  
    {
      id: 3,
      title: "Customer Churn Predcition Utilizing SMOTE",
      description: "Analysed dataset and trained a model to predict customers churn rate",
      technologies: ["Python", "SMOTE", "Machine Learning", "Tree Models", "XGBoost", "LabelEncoder"],
      images: [
        smote,
        churn  
      ],
      githubLink: "https://github.com/yubapun/Customer_CHURN_Prediction/blob/main/Customer_Churn_Rate_Analysis.ipynb",
      highlights: [
        "In this project, I focused on utlizing the package Synthetic Minority Oversampling Technique (SMOTE).",
        "During EDA, noticed that the variable 'Total Charges' was in object format when it should be float data type. After some data preprocessing, it was revealed that 11 rows had 'missing' data.",
        "Converted all categorical data into numerical labels using LabelEncoder.",
        "From the different tree models, Random Forest performed slightly better than XGBoost."
      ]
    }
  ];

  // Your skills - customize with your own
  const skills = {
    technical: ["Python", "Machine Learning", "SQL", "Data Visualization", "Feature Engineering", 
      "Predictive Modelling", "Scikit-learn", "Tableau", "Requirement Elicitation", "Research", "SMOTE",
    "Data Analysis", "ChatGPT", "Prompt Engineering", "Natural Language Processing (NLP)", "HTML", "CSS"],
    datascience: [],
    softskills: ["Problem Solving", "Communication", "Project Management", "Stakeholder Management", "Team Collaboration"]
  };

  // Your profile information
  const profile = {
    name: "Yuba Raj Pun",
    title: "Research Assistant & Analytics Professional",
    bio: "I'm currently working as a Research Assistant at Saw Swee Hock School of Public Health - National Unversity of Singapore. I am passionate about turning complex data into actionable insights. With experience in machine learning, data analysis, and data visualization, I help organizations make data-driven decisions that drive business value.",
    experience: [
      {
        role: "Research Assistant",
        company: "National University of Singapore - Saw Swee Hock School of Public Health",
        period: "Dec 2023 - Present",
        description: [
        "Curated and managed structured data for exploratory analysis and predictive modelling, ensuring high data quality and consistency across datasets.",
          "Perform SQL-based data querying and manipulation to clean and structure large datasets.",
         "Prompt Engineering for Large Language Models (LLMs) to extract actionable insights from unstructured clinical notes.",
         "Conduct Data analysis to identify patterns, trends and key findings in research studies."

        ]
      },
      {
        role: "Machine Learning (Internship)",
        company: "Certis Technology",
        period: "May 2019 - Aug 2019",
        description: ["Tasked with training AI daily to increase the rate of true positive detections of prohibited objects.",
          "Ensured timely updates of client’s hardware systems are executed. "
        ]
      }
    ],
    education: [
      {
        degree: "BSc (Honours) Management and Digital Innovation",
        institution: "University of London - SIM-GE",
        year: "2020-2023",
        grade: "Upper Second-Class Honours"
      },
      {
        degree: "Diploma in Multimedia Infocomm Technology",
        institution: "Nanyang Polytechnic",
        year: "2017-2020"
      }
    ]
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero 
          profile={profile} 
          isActive={activeSection === 'hero'} 
          setActiveSection={setActiveSection} 
        />
        <Projects 
          projects={projects} 
          isActive={activeSection === 'projects'} 
          id="projects" 
        />
        <Skills 
          skills={skills} 
          isActive={activeSection === 'skills'} 
          id="skills" 
        />
        <About 
          profile={profile} 
          isActive={activeSection === 'about'} 
          id="about" 
        />
        <Contact 
          isActive={activeSection === 'contact'} 
          id="contact" 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;