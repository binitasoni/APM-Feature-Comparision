const companies = {
    AVEVA: ['Predictive Maintenance', 'Process Optimization', 'Asset Performance Management', 'Operational Efficiency'],
    C3AI: ['Enterprise AI Applications', 'Predictive Maintenance', 'Inventory Optimization', 'Energy Management', 'Fraud Detection', 'Demand Forecasting'],
    Aspen: ['Predictive Maintenance', 'Process Optimization', 'Asset Performance Management', 'Supply Chain Optimization', 'AI-driven Production Scheduling'],
    IBMMaximo: ['Asset Performance Management', 'Predictive Maintenance', 'IoT Data Integration', 'AI-driven Maintenance Optimization', 'Operational Insights'],
    GEVernova: ['Predictive Maintenance', 'Asset Performance Management', 'Digital Twin Technology', 'Operational Optimization', 'AI-driven Decision Support'],
    ABB: ['Predictive Maintenance', 'Process Automation', 'Energy Management', 'Asset Health Monitoring', 'Operational Efficiency', 'AI-driven Robotics'],
    Yokogawa: ['Predictive Maintenance', 'Process Optimization', 'Advanced Process Control', 'Energy Management', 'AI-driven Operational Insights'],
    Seeq: ['Advanced Analytics for Process Data', 'Predictive Maintenance', 'Process Optimization', 'Root Cause Analysis', 'Data Visualization', 'IIoT Integration'],
    SAP: ['Predictive Maintenance', 'Supply Chain Optimization', 'Asset Management', 'Demand Forecasting', 'Operational Efficiency', 'AI-driven Business Insights'],
    BentleySystems: ['Digital Twins', 'Predictive Maintenance', 'Asset Performance Management', 'Infrastructure Management', 'Construction Analytics', 'Operational Optimization'],
    HoneywellForge: ['Predictive Maintenance', 'Asset Performance Management', 'Energy Management', 'Process Optimization', 'AI-driven Operational Insights'],
    ServiceNow: ['AI-driven IT Operations Management', 'Predictive Analytics', 'Incident Management', 'Workflow Automation', 'Asset Management', 'Customer Service Optimization'],
    Oracle: ['Predictive Maintenance', 'Supply Chain Optimization', 'Demand Forecasting', 'AI-driven Business Insights', 'Operational Efficiency', 'Asset Management'],
    IMUBIT: ['Process Optimization', 'Predictive Maintenance', 'AI-driven Operational Insights', 'Refinery Process Optimization'],
    SuresenseCloud: ['Energy Management', 'Predictive Maintenance', 'AI-driven Operational Insights', 'Process Optimization'],
    OproAI: ['Predictive Maintenance', 'Process Optimization', 'AI-driven Operational Insights', 'Asset Performance Management'],
    Nanoprecise: ['Predictive Maintenance', 'Machine Health Monitoring', 'Vibration Analysis', 'Acoustic Analysis', 'AI-driven Fault Detection'],
    Senseye: ['Predictive Maintenance', 'Asset Performance Management', 'Remaining Useful Life Prediction', 'Automated Condition Monitoring', 'AI-driven Maintenance Recommendations']
};

const companyColors = {
    AVEVA: 'purple',
    C3AI: 'green',
    Aspen: 'blue',
    IBMMaximo: 'red',
    GEVernova: 'orange',
    ABB: 'pink',
    Yokogawa: 'yellow',
    Seeq: 'cyan',
    SAP: 'magenta',
    BentleySystems: 'lime',
    HoneywellForge: 'teal',
    ServiceNow: 'maroon',
    Oracle: 'navy',
    IMUBIT: 'olive',
    SuresenseCloud: 'aqua',
    OproAI: 'silver',
    Nanoprecise: 'coral',
    Senseye: 'gold'
};

let selectedCompanies = [];

function toggleCompanySelection(companyKey) {
    const index = selectedCompanies.indexOf(companyKey);
    if (index > -1) {
        selectedCompanies.splice(index, 1);
    } else {
        selectedCompanies.push(companyKey);
    }
    updateCompanyButtons();
    updateFeatureButtons();
}

function updateCompanyButtons() {
    for (let companyKey in companyColors) {
        const button = document.getElementById(companyKey);
        if (selectedCompanies.includes(companyKey)) {
            button.style.backgroundColor = companyColors[companyKey];
            button.classList.add('selected');
        } else {
            button.style.backgroundColor = '';
            button.classList.remove('selected');
        }
    }
}

function updateFeatureButtons() {
    const featureStatus = {};

    selectedCompanies.forEach(companyKey => {
        const features = companies[companyKey];
        features.forEach(feature => {
            if (!featureStatus[feature]) {
                featureStatus[feature] = [];
            }
            featureStatus[feature].push(companyColors[companyKey]);
        });
    });

    document.querySelectorAll('.feature-button').forEach(button => {
        const feature = button.textContent;
        const colors = featureStatus[feature] || [];
        if (colors.length === 0) {
            button.style.background = '';
        } else if (colors.length === 1) {
            button.style.background = colors[0];
        } else {
            const gradient = colors.map((color, index) => `${color} ${(index / colors.length) * 100}%`).join(', ');
            button.style.background = `linear-gradient(90deg, ${gradient})`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const featureBoxesContainer = document.getElementById('feature-boxes');
    const allFeatures = Array.from(new Set(Object.values(companies).flat()));

    allFeatures.forEach(feature => {
        const featureButton = document.createElement('button');
        featureButton.id = feature.split(' ').join('');
        featureButton.className = 'feature-button';
        featureButton.textContent = feature;
        featureBoxesContainer.appendChild(featureButton);
    });

    updateCompanyButtons();
    updateFeatureButtons();
});
