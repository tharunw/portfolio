// Centralized portfolio content. Replace placeholders when your details are ready.
window.PORTFOLIO = {
  name: "R Tharun Kumar",
  email: "", // Add your professional email address.
  github: "", // Add your GitHub profile URL.
  linkedin: "", // Add your LinkedIn profile URL.
  resumePath: "assets/resume/Tharun_Kumar_Resume.pdf", // Add your real PDF at this path.
  titles: ["Data Analyst", "Data Scientist", "Machine Learning Enthusiast", "Python Developer"],
  skills: [
    { category: "Programming", items: ["Python", "SQL", "C", "C++", "MATLAB"] },
    { category: "Data analysis & visualization", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "Power BI"] },
    { category: "Machine learning", items: ["Scikit-learn", "Regression", "Classification", "Random Forest", "LightGBM", "Model Evaluation", "Feature Engineering"] },
    { category: "Databases & tools", items: ["MySQL", "MySQL Workbench", "Git", "GitHub", "Jupyter Notebook", "Anaconda"] },
    { category: "Bioinformatics", items: ["BLAST", "Sequence Analysis", "Protein Feature Engineering", "pydeseq2", "gseapy"] }
  ],
  projects: [
    {
      id: "logistics", number: "01", title: "Delivery Logistics Performance Analysis", category: "Data Analytics",
      subtitle: "Predictive modelling · Operational analytics",
      description: "Analysed large-scale logistics delivery data to identify operational inefficiencies, delivery delays and factors affecting delivery performance. Developed predictive models to estimate delivery times.",
      dataset: ["144,867 records", "28 columns", "14,817 unique trips"],
      problem: "Understand where delivery delays occur, which operational factors influence them, and whether delivery time can be estimated from available trip information.",
      approach: ["Exploratory analysis across route type, source centre, source-to-destination routes, weekdays and time of day.", "Engineered logistics and time-based features.", "Built and evaluated Linear Regression and Random Forest models."],
      results: ["R² = 0.9854", "MAE = 28.97 minutes"],
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Power BI"],
      note: "Reported model metrics from the project work; validate the evaluation split and metric calculation before presenting them externally.",
      github: "", demo: ""
    },
    {
      id: "credit-risk", number: "02", title: "Credit Risk Prediction Model", category: "Machine Learning",
      subtitle: "Financial analytics · Probability of default",
      description: "Developed a credit risk prediction framework using Lending Club loan data to assess borrower default risk and evaluate lending decisions.",
      dataset: ["621K+ consumer loan records"],
      problem: "Estimate borrower default risk and examine how a probability threshold changes the trade-off between approval volume, risk and estimated profitability.",
      approach: ["Performed preprocessing and feature engineering.", "Addressed data leakage and vintage bias.", "Compared Weight of Evidence (WoE) + Logistic Regression with LightGBM.", "Evaluated probability-of-default decisions at a selected cutoff."],
      results: ["Logistic Regression AUC: 0.684", "LightGBM AUC: 0.695", "Approval rate: 81.7%", "Default rate: 14.9% → 11.7%", "Estimated additional profit: $24.177M"],
      note: "Approval, default and profit figures are model-based estimates at the selected cutoff, not realized lending outcomes.",
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "LightGBM"],
      github: "", demo: ""
    },
    {
      id: "dti", number: "03", title: "Drug–Target Interaction Prediction", category: "Bioinformatics",
      subtitle: "Machine learning · Computational biology",
      description: "Developed a machine learning pipeline to predict drug–target interaction activity by integrating molecular fingerprints and protein sequence-derived features.",
      dataset: ["18,745 observations", "680 input features", "256 Morgan fingerprint features", "24 original protein features", "400 dipeptide features"],
      problem: "Represent both chemical compounds and protein sequences numerically so that a regression model can estimate interaction activity.",
      approach: ["Generated molecular Morgan fingerprints.", "Extracted protein sequence-derived features and dipeptide composition.", "Integrated molecular and protein features into a modelling dataset.", "Trained and evaluated a baseline Random Forest regressor."],
      results: ["Baseline Random Forest MAE: 0.5375", "RMSE: 0.7258", "R²: 0.7049"],
      note: "Metrics shown are the recorded baseline random-split results.",
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "RDKit", "Bioinformatics"],
      github: "", demo: ""
    },
    {
      id: "smart-sales", number: "04", title: "Smart Sales Analytics", category: "Data Analytics",
      subtitle: "Business intelligence · E-commerce",
      description: "An e-commerce analytics project using the Brazilian Olist dataset to understand customer behaviour, order trends, payment patterns, customer reviews and delivery performance.",
      dataset: ["Olist Brazilian E-commerce Dataset", "Multiple related CSV files"],
      problem: "Bring together multiple e-commerce data tables to investigate sales, customers, payments, delivery and satisfaction.",
      approach: ["Explore and relate the dataset's multiple CSV tables.", "Analyse sales performance and order trends.", "Investigate customer behaviour, payment patterns, reviews and delivery performance."],
      results: ["Project in development — final results have not yet been reported."],
      note: "No final project metrics or business findings are claimed here.",
      tools: ["Python", "SQL", "Pandas", "Power BI"],
      github: "", demo: ""
    }
  ],
  academicProjects: [
    {
      id: "biomedical", number: "A1", title: "Biomedical Image Analysis Using Computational Models",
      subtitle: "Departmental project · Computational biomedical imaging",
      description: "Academic research work focused on computational approaches for biomedical image analysis, including deep learning-based image processing and analysis.",
      objective: "Study computational models for analysing biomedical images. Specific research objective and scope can be added from the final project report.",
      methodology: ["Research objective: to be added from the approved project material.", "Dataset information: to be added.", "Computational models and implementation details: to be added.", "Results and observations: to be added without assuming outcomes."],
      tools: ["Python", "CNN", "Biomedical image analysis"],
      note: "Details intentionally remain editable placeholders where the supplied project information does not specify them."
    },
    {
      id: "dna", number: "A2", title: "DNA Sequence Analysis",
      subtitle: "Academic / computational biology",
      description: "Developed a Python-based tool for analysing DNA sequences and extracting meaningful sequence-level information.",
      objective: "Process DNA sequences and calculate basic sequence statistics.",
      methodology: ["DNA sequence processing.", "Sequence composition analysis.", "GC content calculation.", "Basic sequence statistics."],
      tools: ["Python"], note: ""
    },
    {
      id: "secondary", number: "A3", title: "Secondary Structure Propensity Analysis",
      subtitle: "Academic / bioinformatics",
      description: "Analysed amino acid sequence properties using sliding-window propensity scoring to investigate protein secondary structure tendencies.",
      objective: "Explore local amino-acid sequence tendencies using a sliding-window approach.",
      methodology: ["Amino-acid propensity scoring.", "Sliding-window analysis.", "Sequence processing.", "Computational analysis."],
      tools: ["Python", "Bioinformatics"], note: ""
    }
  ],
  education: {
    institution: "Indian Institute of Technology Madras",
    degree: "Dual Degree (BS + MS)",
    specialization: "Biological Sciences",
    location: "Chennai, India",
    graduation: "Expected 2027"
  },
  certifications: [
    { title: "Python Certification", issuer: "Scaler", date: "Add issue date", credential: "", url: "" }
  ],
  achievements: [
    { year: "2017", title: "District-Level Science Exhibition — First Prize", detail: "Project: Resource Management and Food Security. Selected for the State-Level Exhibition." },
    { year: "IIT Madras", title: "Biotech Research Club", detail: "Leadership and coordination experience, including technical and collaborative student activities." }
  ]
};