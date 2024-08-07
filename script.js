const companies = {
    AVEVA: ['Predictive Maintenance', 'Process Optimization','Asset Management', 'Asset Performance Management', 'Operational Efficiency','Supply Chain Optimization','Advanced Analytics for Process Data','Digital Twin Technology'],
    SAP: ['Predictive Maintenance', 'Supply Chain Optimization', 'Asset Management', 'Operational Efficiency', 'AI-driven Business Insights'],
    BentleySystems: [ 'Predictive Maintenance', 'Asset Performance Management', 'Infrastructure Management', 'Construction Analytics', 'Operational Efficiency'],
    Aspen: ['Predictive Maintenance', 'Process Optimization', 'Asset Management','Asset Performance Management', 'Supply Chain Optimization', 'AI-driven Production Scheduling','Energy Management'],
     IBMMaximo: ['Asset Performance Management','Asset Management', 'Predictive Maintenance', 'AI-driven Maintenance Optimization', 'Operational Insights','Energy Management'],
   ABB: ['Predictive Maintenance', 'Process Automation', 'Energy Management', 'Asset Health Monitoring','Asset Management', 'Operational Efficiency', 'AI-driven Robotics','Supply Chain Optimization'],
   Yokogawa: ['Predictive Maintenance','Asset Performance Management', 'Energy Management', 'Process Optimization', 'Advanced Process Control', 'Energy Management', 'Operational Insights','Supply Chain Optimization'],
   HoneywellForge: ['Asset Management','Predictive Maintenance', 'Asset Performance Management', 'Energy Management', 'Process Optimization', 'Operational Insights','Digital Twin Technology','Infrastructure Management','Machine Health Monitoring', 'Operational Insights'],
   OproAI: ['Energy Management','Process Optimization','Predictive Maintenance', 'Process Optimization', 'Operational Insights', 'Asset Performance Management'],
    Nanoprecise: ['Predictive Maintenance', 'Machine Health Monitoring', 'Vibration Analysis', 'Acoustic Analysis', 'AI-driven Fault Detection','Energy Management'],
   Senseye: ['Predictive Maintenance', 'Asset Performance Management', 'Remaining Useful Life Prediction', 'Machine Health Monitoring', 'AI-driven Maintenance Recommendations'],
     Seeq: ['Advanced Analytics for Process Data', 'Energy Management','Predictive Maintenance', 'Process Optimization', 'Root Cause Analysis', 'Data Visualization', 'IIoT Integration'],
    ServiceNow: ['AI-driven IT Operations Management', 'Predictive Analytics', 'Incident Management', 'Workflow Automation', 'Asset Management', 'Customer Service Optimization','Digital Twin Technology','Supply Chain Optimization'],   
      Oracle: ['Predictive Maintenance', 'Supply Chain Optimization', 'AI-driven Business Insights', 'Operational Efficiency', 'Asset Management','Asset Health Monitoring'],
      C3AI: ['Enterprise AI Applications', 'Predictive Maintenance', 'Inventory Optimization', 'Energy Management', 'Supply Chain Optimization','Energy Management'],
    GEVernova: ['Predictive Maintenance', 'Asset Performance Management', 'Asset Management','Digital Twin Technology', 'Operational Efficiency', 'AI-driven Decision Support','Energy Management'],
      IMUBIT: ['Process Optimization', 'Predictive Maintenance', 'Operational Insights', 'Refinery Process Optimization'],
       SuresenseCloud: ['Asset Management','Asset Performance Management','Energy Management', 'Predictive Maintenance', 'Operational Insights', 'Process Optimization']
   };
   
const featureInfo = {
    'Predictive Maintenance': 'The use of data analysis, machine learning, and sensors to predict when equipment failures might occur, allowing for maintenance to be performed just in time to prevent unplanned downtime.',
    
    'Process Optimization': 'Improving the efficiency and effectiveness of industrial or manufacturing processes by analyzing and adjusting variables to achieve better performance, reduce waste, and enhance productivity.',
    
    'Asset Management': 'The systematic process of developing, operating, maintaining, upgrading, and disposing of assets in the most cost-effective manner, including managing physical assets like machinery and infrastructure.',
    
    'Asset Performance Management': 'A strategy that uses data and analytics to monitor the condition and performance of physical assets, helping to optimize their operation and maintenance to extend their life and improve efficiency.',
    
    'Operational Efficiency': 'The ability to deliver products or services in the most cost-effective manner while maintaining quality, often achieved by streamlining processes, reducing waste, and improving resource utilization.',
    
    'Supply Chain Optimization': 'The process of making a supply chain as efficient and cost-effective as possible by optimizing logistics, inventory levels, and production schedules to meet customer demand with minimal resources.',
    
    'Advanced Analytics for Process Data': 'Using sophisticated analytical techniques, such as machine learning and statistical methods, to analyze process data, identify patterns, and make data-driven decisions to improve industrial processes.',
    
    'Digital Twin Technology': 'Creating a virtual model of a physical asset, system, or process that can be used to simulate, predict, and optimize its performance in real-time, helping to reduce risks and improve decision-making.',
    
    'Enterprise AI Applications': 'AI-driven software solutions designed to address specific business challenges across various domains such as finance, operations, and customer service, leveraging AI to automate and optimize tasks.',
    
    'Inventory Optimization': 'The use of data and analytics to manage inventory levels efficiently, balancing supply and demand to reduce costs while ensuring that products are available when needed.',
    
    'Energy Management': 'The process of monitoring, controlling, and conserving energy within an organization or system, often through the use of technology and data analytics to improve energy efficiency and reduce costs.',
    
    'Demand Forecasting': 'Predicting future customer demand using historical data, statistical analysis, and machine learning to help companies plan production, inventory, and supply chain activities more effectively.',
    
    'AI-driven Production Scheduling': 'The use of AI algorithms to optimize production schedules, ensuring that manufacturing processes run efficiently, resources are used effectively, and deadlines are met.',
    
    'AI-driven Maintenance Optimization': 'Leveraging AI to determine the most effective maintenance strategies, such as when and how to perform maintenance tasks to minimize downtime and extend equipment life.',
    
    'Operational Insights': 'The use of data analysis and visualization tools to gain a deeper understanding of operational performance, identify inefficiencies, and make informed decisions to improve business operations.',
    
    'AI-driven Decision Support': 'Using AI to assist in decision-making by analyzing data, identifying trends, and providing actionable insights to help businesses make informed choices more quickly and accurately.',
    
    'Process Automation': 'The use of technology to automate complex business processes, reducing the need for manual intervention and increasing efficiency, accuracy, and speed.',
    
    'Asset Health Monitoring': 'Tracking the condition of physical assets in real-time using sensors and analytics to detect potential issues before they lead to failures, enabling proactive maintenance and reducing downtime.',
    
    'AI-driven Robotics': 'The integration of AI into robotic systems to enhance their capabilities, allowing them to perform complex tasks autonomously and adapt to changing environments in industrial settings.',
    
    'Advanced Process Control': 'A set of technologies and techniques used to control industrial processes with greater precision, often involving the use of predictive models and real-time data to optimize performance.',
    
    'Root Cause Analysis': 'A method of problem-solving used to identify the underlying causes of defects or issues within a process, helping organizations address the root of problems rather than just their symptoms.',
    
    'Data Visualization': 'The graphical representation of data and information, using visual elements like charts, graphs, and maps to help people understand complex data and identify trends and patterns.',
    
    'IIoT Integration': 'The incorporation of Industrial Internet of Things (IIoT) technologies, which involve connecting industrial devices to the internet to collect and analyze data, improving efficiency and decision-making.',
    
    'AI-driven Business Insights': 'The use of AI to analyze business data and generate insights that can inform strategic decisions, helping companies understand market trends, customer behavior, and operational performance.',
    
    'Infrastructure Management': 'The management of essential physical and technological infrastructure assets, ensuring they are maintained, upgraded, and operated efficiently to support business operations.',
    
    'Construction Analytics': 'The use of data analytics to improve the planning, execution, and management of construction projects, helping to optimize resources, reduce costs, and ensure project success.',
    
    'Machine Health Monitoring': 'Tracking the condition of machinery using sensors and analytics to detect signs of wear, stress, or failure, enabling timely maintenance and avoiding unplanned downtime.',
    
    'Predictive Analytics': 'The use of historical data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes based on past data, commonly used in forecasting and risk management.',
    
    'Incident Management': 'The process of identifying, analyzing, and responding to incidents that disrupt normal operations, often through automated systems that help resolve issues quickly and minimize impact.',
    
    'Workflow Automation': 'The use of software to automate business processes, reducing the need for manual intervention and increasing efficiency by ensuring that tasks are completed in a consistent and timely manner.',
    
    'Customer Service Optimization': 'Improving customer service processes through the use of technology and analytics to enhance customer satisfaction, reduce response times, and streamline support operations.',
    
    'Asset Health Monitoring': 'Focuses on real-time monitoring of asset conditions to detect issues early and enable preventive maintenance.',
    
    'AI-driven IT Operations Management': 'The use of AI to optimize IT operations by automating routine tasks, predicting and preventing issues, and improving overall system performance and reliability.',
    
    'Remaining Useful Life Prediction': 'Estimating the remaining operational life of an asset based on its current condition and usage, enabling better maintenance planning and extending asset life.',

    'AI-driven Maintenance Recommendations': 'The use of AI to analyze asset data and provide actionable maintenance recommendations, helping organizations perform maintenance more effectively and avoid downtime.',
    
    'Refinery Process Optimization': 'The use of data and analytics to enhance the efficiency and output of refining processes, reducing costs and improving product quality in industries like oil and gas.',
    
    'AI-driven Fault Detection': 'The application of AI techniques to identify faults and anomalies in equipment or systems before they cause significant issues, enabling proactive maintenance and reducing downtime.',
    
    'Vibration Analysis': 'A technique used to detect mechanical faults in rotating equipment by analyzing vibration patterns, helping to identify issues like imbalances, misalignments, or bearing failures.',
    
    'Acoustic Analysis': 'The process of analyzing sound waves and vibrations to detect abnormalities in machinery or structures, often used in predictive maintenance to identify issues early.',
   
};

const companyColors = {
    AVEVA: 'purple',

    SAP: '#1a759f',
    BentleySystems: '#00509d',
    Aspen: '#0096c7',
    IBMMaximo: '#00b4d8',
    ABB: '#48cae4',
    Yokogawa: '#90e0ef',
    HoneywellForge: '#ade8f4',
    OproAI: '#caf0f8',
    Nanoprecise: '#aed9e0',
    Senseye: '#b8f2e6',

    
    Seeq: '#f4d35e',

    ServiceNow: '#723d46',
    Oracle: '#472d30',

    C3AI: '#a3b18a',
    GEVernova: '#588157',
    IMUBIT: '#3a5a40',
    SuresenseCloud: '#344e41'
};


let selectedCompanies = [];


function togglePopup() {
    const popup = document.getElementById('infoPopup');
    popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'block' : 'none';

    if (popup.style.display === 'block') {
        const legendContainer = document.getElementById('companyLegend');
        legendContainer.innerHTML = '';
        for (const [company, color] of Object.entries(companyColors)) {
            const legendItem = document.createElement('div');
            legendItem.classList.add('legend-item');

            const colorBox = document.createElement('div');
            colorBox.classList.add('legend-color');
            colorBox.style.backgroundColor = color;

            const companyName = document.createElement('span');
            companyName.textContent = company;

            legendItem.appendChild(colorBox);
            legendItem.appendChild(companyName);
            legendContainer.appendChild(legendItem);
        }
    }
}

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

    // Create a single tooltip element that will be reused
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip); // Append it to the body, not to the button

    allFeatures.forEach(feature => {
        const featureButton = document.createElement('button');
        featureButton.id = feature.split(' ').join('');
        featureButton.className = 'feature-button';
        featureButton.textContent = feature;

        // Event listeners for hover effect
        featureButton.addEventListener('mouseenter', (event) => {
            tooltip.textContent = featureInfo[feature] || 'No information available';
            const rect = event.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX + (rect.width / 2)}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        featureButton.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });

        featureBoxesContainer.appendChild(featureButton);
    });

    updateCompanyButtons();
    updateFeatureButtons();
});
