# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

**Authors:**
- Xubin Wang, Hong Kong Baptist University, Hong Kong, Hong Kong
- Zhiqing Tang, Beijing Normal University, Beijing, China
- Jianxiong Guo, Beijing Normal University, Beijing, China
- Tianhui Meng, Beijing Normal-Hong Kong Baptist University, Zhuhai, Guangdong, China
- Chenhao Wang, Beijing Normal University, Beijing, China
- Tian Wang, Beijing Normal University, Beijing, China

**Published in:** ACM Computing Surveys, Volume 57, Issue 9 (September 2025)
**DOI:** 10.1145/3724420
**EISSN:** 1557-7341
**Total Citations:** 50
**Total Downloads:** 4872
**Published Date:** 04 April 2025
**Online Availability Date:** 17 March 2025
**Accepted Date:** 07 March 2025
**Revised Date:** 07 December 2024
**Received Date:** 23 July 2023

## Abstract
This survey provides a comprehensive overview of on-device AI models, focusing on their architecture, deployment strategies, and performance metrics. The increasing demand for edge intelligence necessitates a thorough understanding of the capabilities and limitations of these models in various applications.

## 1. Introduction
The advent of edge computing has transformed the landscape of artificial intelligence (AI) by enabling data processing closer to the source. This paper aims to explore the various on-device AI models that empower edge intelligence, highlighting their significance in real-time applications.

## 2. Background
### 2.1 Edge Computing
Edge computing refers to the practice of processing data near the source of data generation rather than relying on a centralized data center. This approach reduces latency and bandwidth usage, making it ideal for applications requiring real-time processing.

### 2.2 On-Device AI Models
On-device AI models are designed to run directly on hardware devices, such as smartphones, IoT devices, and edge servers. These models must be optimized for performance and efficiency due to the limited computational resources available on these devices.

## 3. Methodology
This survey employs a systematic review methodology to analyze existing literature on on-device AI models. The review focuses on model architectures, training techniques, and deployment strategies.

## 4. Key Findings
### 4.1 Model Architectures
Various architectures have been proposed for on-device AI, including:
- Convolutional Neural Networks (CNNs)
- Recurrent Neural Networks (RNNs)
- Transformer-based models

### 4.2 Deployment Strategies
Deployment strategies vary based on the application and device capabilities. Common strategies include:
- Model quantization
- Pruning
- Knowledge distillation

### 4.3 Performance Metrics
Performance metrics for evaluating on-device AI models include:
- Inference time
- Model size
- Energy consumption

## 5. Applications
On-device AI models have been successfully applied in various domains, including:
- Healthcare
- Smart homes
- Autonomous vehicles

## 6. Challenges and Future Directions
Despite the advancements in on-device AI, several challenges remain, such as:
- Limited computational resources
- Data privacy concerns
- Model generalization across different devices

Future research should focus on developing more efficient algorithms and enhancing model robustness to address these challenges.

## 7. Conclusion
On-device AI models play a crucial role in empowering edge intelligence. This survey highlights the importance of optimizing these models for performance and efficiency to meet the growing demands of real-time applications.

## Acknowledgments
The authors would like to thank Beijing Normal University and Hong Kong Baptist University for their support in this research.

## References
[The reference list would be included here, formatted according to the appropriate citation style.]

----

This document is an open-access publication supported by Beijing Normal University, Beijing Normal-Hong Kong Baptist University, and Hong Kong Baptist University. For further details, please visit the ACM Digital Library.



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

**XUBIN WANG**, Hong Kong Baptist University, Hong Kong, Hong Kong, Beijing Normal Hong Kong Baptist University, Zhuhai, China, and Beijing Normal University, Zhuhai, China
**ZHIQING TANG**, Beijing Normal University, Zhuhai, China
**JIANXIONG GUO**, Beijing Normal University, Zhuhai, China and Beijing Normal Hong Kong Baptist University, Zhuhai, China
**TIANHUI MENG**, Beijing Normal Hong Kong Baptist University, Zhuhai, China
**CHENHAO WANG**, Beijing Normal University, Zhuhai, China and Beijing Normal Hong Kong Baptist University, Zhuhai, China
**TIAN WANG**, Beijing Normal University, Zhuhai, China
**WEIJIA JIA**, Beijing Normal University, Zhuhai, China and Beijing Normal Hong Kong Baptist University, Zhuhai, China

The rapid advancement of artificial intelligence (AI) technologies has led to an increasing deployment of AI models on edge and terminal devices, driven by the proliferation of the Internet of Things (IoT) and the need for real-time data processing. This survey comprehensively explores the current state, technical challenges, and future trends of on-device AI models. We define on-device AI models as those designed to perform local data processing and inference, emphasizing their characteristics such as real-time performance, resource constraints, and enhanced data privacy.

The survey is structured around key themes, including the fundamental concepts of AI models, application scenarios across various domains, and technical challenges faced in edge environments. We also discuss optimization and implementation strategies, such as data preprocessing, model compression, and hardware acceleration, which are essential for effective deployment. Furthermore, we examine the impact of emerging technologies, including edge computing and foundation models, on the evolution of on-device AI models. By providing a structured overview of the challenges, solutions, and future directions, this survey aims to facilitate further research and application of on-device AI, ultimately contributing to the advancement of intelligent systems in everyday life.

## CCS Concepts
- General and reference → Surveys and overviews
- Computing methodologies → Artificial intelligence; Machine learning

## Authors’ Contact Information
- **Xubin Wang**: Hong Kong Baptist University, Hong Kong, Hong Kong and Beijing Normal Hong Kong Baptist University, Zhuhai, Guangdong, China; e-mail: wangxubin@ieee.org
- **Zhiqing Tang**: Beijing Normal University, Zhuhai, Guangdong, China; e-mail: zhiqing-tang@bnu.edu.cn
- **Jianxiong Guo**: Beijing Normal University, Zhuhai, Guangdong, China and Beijing Normal Hong Kong Baptist University, Zhuhai, Guangdong, China; e-mail: jianxiongguo@bnu.edu.cn
- **Tianhui Meng**: Beijing Normal Hong Kong Baptist University, Zhuhai, Guangdong, China; e-mail: tmeng@bnu.edu.cn
- **Chenhao Wang**: Beijing Normal University, Zhuhai, Guangdong, China and Beijing Normal Hong Kong Baptist University, Zhuhai, Guangdong, China; e-mail: chenhwang@bnu.edu.cn
- **Tian Wang**: Beijing Normal University, Zhuhai, Guangdong, China; e-mail: tian-wang@bnu.edu.cn
- **Weijia Jia (Corresponding author)**: Beijing Normal University, Zhuhai, Guangdong, China and Beijing Normal Hong Kong Baptist University, Zhuhai, Guangdong, China; e-mail: jiawj@bnu.edu.cn

Permission to make digital or hard copies of all or part of this work for personal or classroom use is granted without fee provided that copies are not made or distributed for profit or commercial advantage and that copies bear this notice and the full citation on the first page. Copyrights for components of this work owned by others than the author(s) must be honored. Abstracting with credit is permitted. To copy otherwise, or republish, to post on servers or to redistribute to lists, requires prior specific permission and/or a fee. Request permissions from permissions@acm.org.
© 2025 Copyright held by the owner/author(s). Publication rights licensed to ACM.
ACM 0360-0300/2025/04-ART228
https://doi.org/10.1145/3724420

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

**Xubin Wang, Zhiqing Tang, Jianxiong Guo, Tianhui Meng, Chenhao Wang, Tian Wang, and Weijia Jia**
**ACM Reference Format:**
Xubin Wang, Zhiqing Tang, Jianxiong Guo, Tianhui Meng, Chenhao Wang, Tian Wang, and Weijia Jia. 2025. Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models. ACM Comput. Surv. 57, 9, Article 228 (April 2025), 39 pages. https://doi.org/10.1145/3724420

## 1. Introduction

In the past decade, the rapid development of artificial intelligence (AI) technology has led to the widespread application of AI models across various fields [8]. From AlphaGo to ChatGPT, these breakthrough advancements demonstrate the immense potential of AI in different domains [135]. However, despite significant achievements, deploying AI applications in real-world settings remains challenging due to factors such as high computational demands, scalability, and privacy concerns [249]. In this context, large language models like GPT-3, which boasts 175 billion parameters and requires approximately 800 GB of storage [15], demonstrate remarkable capabilities. Nevertheless, their substantial size poses limitations for deployment on devices.

Traditionally, AI models have relied on powerful cloud computing resources for training and inference [43]. However, with the proliferation of the Internet of Things (IoT), edge computing, and mobile devices, an increasing number of AI models are being deployed on-device [36, 176]. This shift not only enhances the real-time processing and efficiency of data handling but also reduces reliance on network bandwidth and strengthens data privacy protection [53]. Specifically, Gartner projects that by 2025, approximately 75% of all enterprise-generated data will be produced outside traditional data centers [53]. Transmitting and processing this data in centralized cloud systems introduces significant system and latency overhead, along with substantial bandwidth requirements [37]. This also underscores the importance of deploying AI models on-device.

Edge intelligence enhances the concept of localized data processing by deploying AI algorithms directly on edge devices, thereby reducing reliance on cloud infrastructure [256]. This approach not only facilitates faster data processing but also addresses important privacy and security concerns, as sensitive data remains within the local environment [111]. On-device AI models find application in various scenarios, such as smartphones, smart home systems, autonomous vehicles, and medical devices [37]. However, the effective implementation of AI models on edge devices poses significant challenges. The reliance of these models on large parameter counts and powerful processing capabilities necessitates the development of innovative strategies for model compression, optimization, and adaptation to specific operational environments [36]. Addressing these challenges is crucial for maximizing the potential of edge intelligence in real-world applications.

While implementing efficient on-device AI models holds promise, it necessitates performance tradeoffs, as optimizing models for constrained environments often involves sacrificing model accuracy or scalability to maintain functionality [17]. Thus, in light of these constraints, there is a growing imperative to design AI models that are both computationally efficient and adaptable to edge environments [143]. These advances would facilitate the broader application of AI in fields such as Industry 4.0, where real-time, automated data processing is critical for monitoring, risk detection, and optimizing factory operations [9]. The successful implementation of such applications has driven the proliferation and intelligence of smart devices, transforming people’s lifestyles and work patterns [37]. Therefore, in-depth research into the characteristics, applications, and challenges of on-device AI models is of significant importance for advancing the development and application of AI technology.

----

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## 1.1 Definition of On-device AI Models

On-device AI models refer to AI models that are designed, trained, and deployed on edge or terminal devices. These models can perform data processing and inference locally without the need to transmit data to the cloud for processing [38, 225]. On-device AI models typically possess the following characteristics:

- **Real-time Performance**: They can quickly respond to user requests, making them suitable for applications that require immediate feedback [9].
- **Resource Constraints**: They are limited in computational power, storage, and energy consumption, necessitating optimization to fit the hardware environment of the device [17].
- **Data Privacy**: By processing data locally, they reduce the risks associated with data transmission, thereby enhancing user privacy protection [256].

## 1.2 Research Questions and Structure Overview of the Survey

This review aims to comprehensively explore the current state, technical challenges, and future development trends of on-device AI models. Specifically, our focus is to provide an academic response to the following research questions (RQs):

- **RQ1**: What are the applications of on-device AI models in daily life?
- **RQ2**: What are the main technical challenges for deploying on-device AI models?
- **RQ3**: What are the most effective optimization and implementation methods for enhancing the performance of on-device AI models?
- **RQ4**: What are the future trends of on-device AI models?

Through a review and analysis of relevant literature, this article provides researchers and engineers with a clear perspective to help them understand the key issues and solutions related to on-device AI models. The structure of the review is as follows:

- **Section 2** introduces the fundamental concepts of on-device AI models and explains how they work.
- **Section 3** explores the application scenarios of on-device AI models, covering areas such as smartphones, IoT devices, and edge computing (RQ1).
- **Section 4** analyzes the technical challenges faced by on-device AI models, such as computational resource limitations, energy management, and data privacy issues (RQ2).
- **Section 5** discusses optimization and implementation methods for on-device AI models, including data optimization, model compression, and hardware acceleration techniques (RQ3).
- **Section 6** looks ahead to future development trends, exploring the impact of emerging technologies on on-device AI models (RQ4).
- **Section 7** summarizes the main findings of the review and provides suggestions for future research.

The diagram in Figure 1 shows the overall framework and methodology employed in this survey.

## 1.3 Contributions of This Survey

This survey makes several key contributions to the field of on-device AI models:

1. **Comprehensive Overview**: It provides a thorough examination of the current landscape of on-device AI models, synthesizing existing research and identifying gaps in the literature.
2. **Identification of Challenges**: The survey highlights the critical technical challenges faced by on-device AI models, including resource constraints, energy efficiency, and privacy concerns, thereby guiding future research efforts.
3. **Optimization Strategies**: It discusses various optimization techniques and implementation methods that can enhance the performance of on-device AI models, offering practical insights for researchers and practitioners.

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# On-Device AI: A Comprehensive Survey

## X. Wang et al.

### Fundamental Concepts

#### 1. Understanding On-Device AI (§ 2)
- **Edge Devices (§ 2.1.1)**
- **AI Models (§ 2.1.2)**
- **On-Device AI &#x26; Cloud-Based AI (§ 2.1.3)**

#### 2. How It Works? (§ 2.2)
- **Data Preprocessing (§ 2.2.1)**
- **Model Development (§ 2.2.2)**
- **System Integration (§ 2.2.3)**

### Applications of On-Device AI (§ 3)
- **Smartphones and Mobile Devices (§ 3.1)**
- **IoT Devices (§ 3.2)**
- Smart Homes
- Environmental Monitoring
- Industrial Automation
- Smart Agriculture
- **Edge Computing (§ 3.3)**
- Real-Time Data Processing
- Intelligent Traffic Management
- Smart Manufacturing
- AR and VR
- **Transportation (§ 3.4)**
- Autonomous Driving and Environmental Perception
- Path Planning
- Decision Making
- Vehicle-to-Everything
- **Medical Devices and Health Monitoring (§ 3.5)**
- Disease Diagnosis
- Personalized Treatment
- Remote Monitoring
- Drug Development

### Technical Challenges of AI Models on Device (§ 4)
- **Limited Computational Resources (§ 4.1)**
- Processing Power (§ 4.1.1)
- Model Complexity (§ 4.1.2)
- Optimization Algorithms (§ 4.1.3)
- **Storage and Memory Limitations (§ 4.2)**
- Storage Space (§ 4.2.1)
- Memory Usage (§ 4.2.2)
- Data Management (§ 4.2.3)
- **Energy Consumption Management (§ 4.3)**
- Battery Life (§ 4.3.1)
- Dynamic Energy Management (§ 4.3.2)
- Hardware Optimization (§ 4.3.3)
- **Communication Limitations (§ 4.4)**
- Data Preprocessing (§ 4.4.1)
- Edge Caching (§ 4.4.2)
- On-Device Computation (§ 4.4.3)
- **Data Privacy and Security (§ 4.5)**
- Data Protection (§ 4.5.1)
- Compliance (§ 4.5.2)
- Security Attacks (§ 4.5.3)
- **Model Transferability and Adaptability (§ 4.6)**
- Cross-Device Migration (§ 4.6.1)
- Environmental Adaptability (§ 4.6.2)
- Continuous Learning (§ 4.6.3)

### Optimization &#x26; Implementation of AI Models on Devices (§ 5)
- **Data Optimization (§ 5.1)**
- Data Filtering (§ 5.1.1)
- Feature Extraction (§ 5.1.2)
- Data Aggregation (§ 5.1.3)
- Data Quantization (§ 5.1.4)
- Edge Computing Frameworks (§ 5.1.5)
- **Model Optimization (§ 5.2)**
- Traditional Machine Learning Methods (§ 5.2.1)
- Parameter Sharing (§ 5.2.2)
- Pruning (§ 5.2.3)
- Model Quantization (§ 5.2.4)
- Knowledge Distillation (§ 5.2.5)
- Low-rank Factorization (§ 5.2.6)
- Hardware-aware Neural Architecture Search (§ 5.2.7)
- Energy-efficient Model Design (§ 5.2.8)
- **System Optimization (§ 5.3)**
- Software Optimization (§ 5.3.1)
- Hardware Optimization (§ 5.3.2)

### Impact of Emerging Technologies (§ 6.1)
- **5G and Beyond (§ 6.1.1)**
- **Edge Computing (§ 6.1.2)**
- **Foundation Models (§ 6.1.3)**

### Future Development Trends of AI Models (§ 6)
- **Adaptability &#x26; Intelligence (§ 6.2)**
- Adaptive Learning (§ 6.2.1)
- Intelligent Decision-Making (§ 6.2.2)
- Data Management (§ 6.2.3)
- **Sustainability and Green Computing (§ 6.3)**
- Energy Efficient Optimization (§ 6.3.1)
- Resource Sharing &#x26; Circular Utilization (§ 6.3.2)
- Environmental Monitoring &#x26; Management (§ 6.3.3)
- **Ethics and Social Impact (§ 6.4)**
- Data Privacy &#x26; Security (§ 6.4.1)
- Fairness and Bias (§ 6.4.2)
- Social Impact (§ 6.4.3)

### Conclusion
This survey outlines potential future research directions and emerging technologies that could influence the development of on-device AI models, encouraging innovation in this rapidly evolving field. By addressing the real-world applications and implications of on-device AI models, this survey serves as a valuable resource for industry professionals looking to implement AI solutions in edge environments.

### 1.4 Related Surveys and Their Scope
Previous research has made significant contributions across diverse facets of on-device AI. Surveys by Shi et al. [172] and Dai et al. [34] have focused on efficient communication and computation.

----

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## Table 1. List of Edge Devices and Their Features [44]

| Device                          | Key Features                                           | Use Cases                             |
|---------------------------------|-------------------------------------------------------|---------------------------------------|
| NVIDIA Jetson Xavier NX        | 6-core ARM CPU, 384-core GPU, 21 TOPS AI performance | Robotics, computer vision             |
| Google Coral Dev Board         | Edge TPU, 4 TOPS, low power consumption (2–4 W)      | Image recognition, object detection   |
| Raspberry Pi 4                  | Quad-core ARM CPU, up to 8 GB RAM, dual 4K HDMI output | IoT applications, home automation     |
| AWS DeepLens                   | Intel Atom processor, integrated HD camera            | Real-time computer vision             |
| Intel NUC                      | Compact form factor, supports up to i7 processors     | Digital signage, industrial automation |
| Microsoft Azure Stack Edge     | Hybrid solution with GPU options                       | AI inferencing, video analytics       |
| HPE Edgeline EL300            | Rugged design, Intel Xeon/Core processors              | Industrial applications                |
| Lenovo ThinkEdge SE50          | Intel Core i5/i7, rugged design                        | Smart cities, retail applications      |
| Dell EMC PowerEdge XE2420      | Dual Xeon processors, ruggedized chassis               | Edge computing in harsh environments   |
| Advantech MIC-770              | Modular design, high-performance computing capabilities | Industrial edge applications           |

The exploration of offloading in edge systems is crucial for optimizing the performance of on-device AI models. Various studies, such as those by Zhang and Letaief [240], have investigated the application of mobile edge AI in vehicular networks, while Park et al. [153] provided an overview of wireless network intelligence that supports on-device AI functionalities. Recent investigations, including those by Deng et al. [37], have emphasized the dual roles of AI on edge devices and the support of edge functionalities, primarily focusing on frameworks and infrastructural requirements for deploying models closer to data sources (Xu et al. [224]; Murshed et al. [143]). Additionally, Xu et al. [225] introduced a survey about on-device language models, while Dhar et al. [38] provided a comprehensive overview of on-device machine learning (ML) from an algorithms and learning theory perspective.

However, while these surveys lay essential groundwork, few offer an integrated perspective on deploying efficient on-device AI models specifically tailored to the constraints of edge environments. This gap underscores the necessity for a comprehensive review that not only summarizes advancements in on-device AI but also delves into the triad of optimization strategies for data, model, and system design (Zhou et al. [256]; Cai et al. [17]). By addressing these challenges and exploring the potential of on-device AI models, this survey aims to contribute to the ongoing discourse in the field and facilitate the development of innovative solutions that can leverage the advantages of edge computing and IoT technologies.

## 2 Understanding On-device AI Models

### 2.1 Fundamental Concepts of On-device AI Models

#### 2.1.1 Edge Devices
Edge devices encompass a wide range of hardware, from high-performance edge servers capable of executing complex computational tasks to resource-constrained IoT sensors designed for specific applications [174]. This category includes diverse devices such as smartphones, drones, autonomous vehicles, industrial robots, and smart home technologies, all of which are equipped to run AI models locally, facilitating real-time data processing [37]. The concept of edge computing, which emphasizes bringing services closer to the user, has its roots in the idea of cloudlets, as discussed by Satyanarayanan et al. [169]. Prominent hardware manufacturers, including NVIDIA and Intel, provide substantial support for the deployment of ML models on these edge devices, thereby enhancing their functionality for applications that demand low latency and high efficiency. For instance, NVIDIA’s Jetson platform is widely recognized for its exceptional processing capabilities and is extensively utilized in edge AI applications [138]. Similarly, Intel’s technologies enable seamless integration with IoT systems, promoting efficient data handling and analysis at the network’s edge [26].

Table 1 presents a selection of edge devices along with their key features and typical use cases, illustrating the diversity and applicability of these technologies in various domains [44].

----

ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.



# AI Models and Their Deployment: A Comparative Analysis

## X. Wang et al.

### Table 2. Types of AI Models

| Type                  | Description                                           | Examples                               |
|-----------------------|-------------------------------------------------------|----------------------------------------|
| ML                    | Data-driven learning and prediction                   | Supervised, Unsupervised, Semi-supervised |
| Deep Learning         | Multi-layer neural networks for pattern recognition    | CNNs, RNNs                             |
| Reinforcement Learning | Trial-and-error learning through environment interaction| Game AI, Robotics                      |
| Transfer Learning     | Applying knowledge from one domain to another         | Fine-tuning pre-trained models         |

### Table 3. Comparison of On-device AI Models and Cloud-based AI Models

| Aspect               | On-device AI Models                               | Cloud-based AI Models                     |
|----------------------|--------------------------------------------------|------------------------------------------|
| Computational        | Limited by device capabilities; requires optimization | Utilizes powerful cloud resources; supports complex models |
| Latency              | Lower latency; suitable for real-time applications | Higher latency; not ideal for time-sensitive scenarios |
| Data Privacy         | Enhanced privacy; local data processing reduces breach risks | Higher security risks; data transmitted to the cloud |
| Scalability          | Limited scalability; constrained by hardware capabilities | Good scalability; resources can be adjusted dynamically |
| Maintenance          | Complex updates and maintenance in large deployments | Centralized management simplifies updates and maintenance |

### 2.1.2 AI Models

At the core of on-device AI are AI models, which comprise algorithms specifically designed to interpret data and make decisions based on the information processed at the edge [235]. These models can vary significantly in complexity, ranging from simple rule-based systems to sophisticated ML algorithms. By deploying AI models on edge devices, organizations can facilitate intelligent automation, predictive maintenance, and personalized user experiences, all while ensuring the maintenance of data privacy and security [38, 225].

The landscape of AI models has evolved considerably in recent years, particularly with the advent of foundation model technologies. This has resulted in the development of increasingly substantial models, such as Gemma 2B [195] and Llama 3.2 1B, which are specifically designed for deployment on edge devices [225]. AI models can be categorized into several types, each with distinct characteristics and applications. Table 2 summarizes these categories, providing a brief description and examples for each type.

### 2.1.3 Comparison of On-device AI Models and Cloud-based AI Models

The comparison between on-device AI models and cloud-based AI models highlights several critical aspects that influence their deployment and effectiveness (see Table 3). On-device AI models are constrained by the computational resources available on the device, necessitating optimization to function efficiently; however, they offer lower latency, making them suitable for real-time applications [235].

In contrast, cloud-based AI models leverage powerful cloud infrastructure, enabling the support of complex models but often resulting in higher latency, which can be detrimental in time-sensitive scenarios [225]. Data privacy is another significant consideration, as on-device models enhance privacy by processing data locally, thereby reducing the risks of data breaches, while cloud-based models face higher security risks due to the transmission of data to external servers [195].

Scalability also differs markedly; on-device models have limited scalability due to hardware constraints, whereas cloud-based models can dynamically adjust resources to accommodate varying demands [174]. Finally, maintenance presents a contrasting challenge: on-device models require complex updates and maintenance, particularly in large deployments, while cloud-based models benefit from centralized management, simplifying the update and maintenance processes [37].

----

ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## 2.2 How On-device AI Works

The process of implementing on-device AI involves a comprehensive pipeline that encompasses data processing, model development, and system integration, as illustrated in Figure 2. This figure provides an overview of the key components and workflow involved in deploying AI models at the edge device, highlighting the interplay between data, model, and system optimization.

### 2.2.1 Data Preprocessing

The first step in the on-device AI pipeline is data collection, which involves gathering raw data from various sources [238]. This data requires extensive preprocessing to ensure quality and relevance. Techniques such as data filtering address inconsistencies and errors, resulting in a refined dataset known as cleaned data [137]. Feature extraction reduces dimensionality, producing a streamlined dataset that retains essential information while minimizing redundancy [170]. Data aggregation synthesizes information from multiple sources to enhance coherence, and data quantization lowers the precision of data representation, facilitating efficient processing on edge devices [99, 102].

### 2.2.2 Model Development

Once the data has been optimized, the next phase is model development [37]. This begins with model training, where algorithms learn from the cleaned and augmented data. The model design process involves selecting appropriate architectures and hyperparameters to achieve optimal performance [255]. After the initial training, model compression techniques are utilized to create a compact model that maintains accuracy while reducing computational requirements [17]. This compact model is crucial for deployment in edge environments, where resources are often limited.

### 2.2.3 System Integration

The final stage in the on-device AI pipeline is system integration, which encompasses both software and hardware optimization [224]. Software optimization focuses on refining the code and algorithms to enhance performance and efficiency [143]. Concurrently, hardware optimization ensures that the underlying infrastructure is capable of supporting the computational demands of the model [37]. Once these optimizations are complete, the model is deployed to edge devices, enabling real-time processing and decision-making in a variety of applications [252].

## 3 Applications of On-device AI Models

The applications of on-device AI models are diverse and span various domains, including smartphones, IoT devices, edge computing, autonomous driving, and healthcare. This section provides an overview of these applications, highlighting their significance and impact.

### 3.1 Smartphones and Mobile Devices

Smartphones and mobile devices represent one of the most prevalent areas for the application of on-device AI models. With advancements in computational power and AI technology, smartphones can execute complex AI tasks locally. Key applications include:

- **Image and Video Processing**: On-device AI enables real-time image recognition, enhancement, and video analysis, improving user experiences in photography and video streaming.
- **Natural Language Processing**: Voice assistants and chatbots leverage on-device AI for speech recognition and language understanding, providing faster and more accurate responses.
- **Health Monitoring**: Mobile health applications utilize on-device AI to analyze user data, offering personalized health insights and recommendations.

----

*Note: The above content maintains the logical flow and structure of the original document while ensuring that tables, mathematical formulas, and other technical elements are preserved.*



# Applications of AI in Modern Technologies

## 3.1 Smartphones
Smartphones have integrated various AI applications that enhance user experience and functionality. Key applications include:

- **Voice Assistants**: Devices like Apple’s Siri, Google Assistant, and Amazon’s Alexa utilize Natural Language Processing (NLP) to understand and respond to user voice commands, thereby enhancing user interaction and accessibility [45, 129].

- **Image Recognition**: Camera applications on smartphones employ AI models for facial recognition, scene identification, and image enhancement, significantly improving photography quality [141, 237].

- **Personalized Recommendations**: By analyzing user behavior and preferences, smartphones can provide tailored app recommendations and content suggestions, thereby enhancing user engagement [168].

- **Health Monitoring**: Some smartphones are equipped with sensors that monitor health metrics such as heart rate and step count. AI models analyze this data to provide feedback and insights on user health [5].

## 3.2 IoT Devices
IoT devices connect via the internet to collect and exchange data, with AI models applied in various ways:

- **Smart Homes**: Devices like smart bulbs, thermostats, and security cameras use AI models for automation and intelligent decision-making. For instance, smart thermostats can automatically adjust temperatures based on user habits, enhancing energy efficiency and comfort [253].

- **Environmental Monitoring**: IoT sensors can monitor environmental data (e.g., temperature, humidity, air quality) in real time. AI models analyze this data to provide suggestions for environmental improvements, contributing to sustainability efforts [65].

- **Industrial Automation**: In industrial IoT settings, AI models predict equipment failures, optimize production processes, and enhance efficiency while reducing maintenance costs, thereby improving overall operational reliability [97].

- **Smart Agriculture**: By collecting soil and climate data through sensors, AI models assist farmers in optimizing irrigation and fertilization practices to improve crop yields, promoting sustainable agricultural practices [132].

## 3.3 Edge Computing
Edge computing shifts data processing closer to the source to reduce latency and bandwidth demands. The application of AI models on edge devices includes:

- **Real-time Data Processing**: Running AI models on edge devices enables rapid analysis of real-time data for applications such as facial recognition and behavior analysis in video surveillance, enhancing security measures [208].

- **Intelligent Traffic Management**: Edge devices can analyze traffic flow data in real time to optimize traffic signal control and reduce congestion, improving urban mobility [104].

- **Smart Manufacturing**: Edge devices on production lines can monitor equipment status in real time using AI models for predictive maintenance scheduling, thereby minimizing downtime and enhancing productivity [31].

- **Augmented Reality (AR) and Virtual Reality (VR)**: Edge computing supports real-time rendering and interaction for AR and VR applications, enhancing user experience and engagement in various sectors, including gaming and training [177].

## 3.4 Autonomous Driving and Intelligent Transportation Systems
Autonomous driving technology relies heavily on robust AI models to process data from sensors such as cameras, radar, and LiDAR. Key applications include:

*To be continued...*

----

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## 3. Applications of AI Models

### 3.4 Autonomous Vehicles
AI models play a crucial role in the development and operation of autonomous vehicles, enhancing their capabilities in various aspects:

- **Environmental Perception**: AI models analyze sensor data to identify surrounding objects (e.g., pedestrians, vehicles, traffic signs), ensuring safe driving and navigation [247].
- **Path Planning**: By analyzing traffic conditions and map data in real time, AI models can plan optimal driving routes for autonomous vehicles, improving travel efficiency [93, 104].
- **Decision-making**: In complex traffic environments, AI models assist autonomous systems in making quick decisions regarding lane changes, acceleration, or deceleration, enhancing safety [55, 104].
- **Vehicle-to-everything (V2X)**: Through communication with other vehicles and infrastructure, AI models optimize traffic flow and enhance road safety, contributing to smarter transportation systems [104, 142].

### 3.5 Medical Devices and Health Monitoring
The application of AI models in medical devices and health monitoring is rapidly growing:

- **Disease Diagnosis**: AI models analyze medical images (e.g., X-rays, CT scans, MRIs) to assist doctors in diagnosing diseases with improved accuracy and efficiency, facilitating timely interventions [197].
- **Personalized Treatment**: By analyzing patient health data and genetic information, AI models help physicians develop personalized treatment plans tailored to individual needs, enhancing patient outcomes [113].
- **Remote Monitoring**: Wearable devices (e.g., smartwatches) use AI models to monitor health indicators (e.g., heart rate, blood pressure) in real time while providing health recommendations, promoting proactive health management [201].
- **Drug Development**: In drug discovery processes, AI models screen potential drug molecules to accelerate the identification and development of new medications, streamlining the research and development pipeline [139].

## 4. Technical Challenges of AI Models on Devices

### 4.1 Limited Computational Resources
AI models deployed on devices often operate in resource-constrained environments, such as smartphones, IoT devices, and edge computing nodes. These devices typically possess limited computational capabilities, which presents several challenges:

#### 4.1.1 Processing Power
Many AI models, particularly deep learning models, require substantial computational resources for both training and inference [15]. The limited performance of CPUs and GPUs in these devices may not suffice to meet the real-time processing demands of complex models [104]. To address this challenge, optimizing algorithms to enhance computational efficiency is crucial. Techniques such as model pruning, quantization, and the use of specialized hardware accelerators can help improve processing capabilities without requiring significant increases in power consumption or hardware costs [17].

#### 4.1.2 Model Complexity
Complex models generally demand more computational resources, resulting in increased latency during execution on edge devices, which can adversely affect user experience. Therefore, reducing model complexity while maintaining performance is a vital area of research [253]. Approaches such as designing lightweight models—like the MobileNets series [73, 74, 167]—and employing neural architecture search (NAS) techniques [22, 146] can help mitigate these issues by creating efficient models that are better suited for deployment on devices with limited resources.

----

ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.



# Optimization Algorithms for Edge AI

## 4.1.3 Optimization Algorithms
To align with the computational capabilities of edge devices, researchers must develop efficient algorithms and model compression techniques. Approaches such as pruning [79], quantization [48], and knowledge distillation [242] are essential for reducing computational burdens without significantly compromising accuracy.

- **Pruning** involves removing less important weights or neurons from a model to streamline its architecture.
- **Quantization** reduces the precision of the numbers used in computations (e.g., converting floating-point weights to integers), which decreases memory usage and speeds up inference times.
- **Knowledge Distillation** allows a smaller model to learn from a larger model’s outputs, effectively transferring knowledge while maintaining performance.

Additionally, leveraging parameter sharing [151, 217] and other optimization strategies can further enhance the efficiency of AI models on these constrained devices.

## 4.2 Storage and Memory Limitations
The storage and memory resources of edge devices are often limited, presenting significant challenges for the deployment and operation of AI models.

### 4.2.1 Storage Space
Many AI models, particularly state-of-the-art deep learning models, require substantial storage space to accommodate model parameters and intermediate results [15]. For instance, these models can demand hundreds of megabytes to over a gigabyte of storage, which often exceeds the capacity of many edge devices [15]. Therefore, effectively storing and managing models on devices with limited storage becomes a critical issue [112].

To address this challenge, model compression techniques such as pruning and quantization can significantly reduce the storage requirements of AI models [17]. Pruning involves removing less important weights or neurons from the model, while quantization reduces the precision of the weights and activations (e.g., converting floating-point numbers to integers), both of which help enable deployment on resource-constrained devices [79, 251].

### 4.2.2 Memory Usage
Memory limitations on edge devices may hinder the ability to load all necessary data during inference, adversely affecting performance and response speed [158]. Developing memory optimization techniques is essential to reduce memory usage and enhance operational efficiency [197].

Techniques such as model distillation can be employed to create smaller, more efficient models that require less memory [17]. Additionally, incremental learning allows models to dynamically update by learning from new data without needing to store large amounts of historical data, thus retaining only the most recent information [120]. This approach not only conserves memory but also ensures that the model remains relevant and adaptive to changing user needs.

### 4.2.3 Data Management
In multiuser environments, effectively managing and allocating storage resources to prevent data conflicts and contention poses another challenge [97]. One potential solution is to distribute data and models across multiple edge devices, allowing them to leverage collective storage capacity and alleviate the limitations of individual devices [121].

This distributed approach can enhance resilience and scalability while improving overall system performance. Additionally, edge caching technology can be utilized to cache frequently accessed data and models between edge devices and the cloud [223]. This strategy reduces storage demands and communication costs by enabling edge devices to store commonly used data locally, minimizing the need for constant cloud access [164]. By implementing these strategies, organizations can optimize resource utilization while maintaining high performance in AI applications.

## 4.3 Energy Consumption Management
Energy consumption is a critical consideration for the operation of AI models on devices, particularly in mobile and IoT environments.

----

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models               228:11

4.3.1         Battery Life. Many edge devices rely on battery power, and the high energy demands
of AI models can lead to rapid battery depletion, adversely affecting user experience. Conse-
quently, reducing the energy consumption of these models to extend battery life is an important
research direction [234]. One effective approach to address this challenge is the development of
energy-efficient algorithms, such as PhiNets [152], which are specifically designed to minimize
computational requirements and operate efficiently on devices with limited energy resources.
      These algorithms can help ensure that AI applications remain functional for longer periods
without frequent recharging, thereby enhancing user satisfaction and device usability [258].
4.3.2             Dynamic Energy Management. To balance performance and energy use, devices must
dynamically adjust their energy consumption strategies in response to varying workloads and
environmental conditions [127]. Researchers are focusing on developing intelligent energy
management algorithms, including AI-based controllers, to optimize energy usage in edge devices
[185]. These dynamic management systems can monitor real-time performance metrics and
adjust processing power accordingly, allowing devices to conserve energy during low-demand
periods while ramping up performance when needed. This adaptability not only improves battery
life but also ensures that applications run smoothly under varying conditions [258].
4.3.3  Hardware Optimization. Designing dedicated hardware accelerators, such as Tensor Pro-
cessing Units (TPUs) and Field-Programmable Gate Arrays (FPGAs), can significantly en-
hance the computational efficiency of AI models while reducing energy consumption [184, 219].
  These specialized hardware solutions are optimized for specific types of computations commonly
used in AI tasks, allowing for faster processing with lower power requirements compared to
general-purpose processors. Additionally, advancements in energy-efficient hardware designs aim
to minimize overall power usage while improving performance metrics [140, 149]. Furthermore,
adopting hardware–software co-design approaches can optimize both components for energy ef-
ficiency, leading to enhanced overall system performance [83].

4.4  Communication Bandwidth Limitations
Edge devices typically face significant communication bandwidth limitations compared to servers,
making it challenging to transfer large volumes of data between the edge and the cloud. This
restricted connectivity poses obstacles for transmitting the substantial data required by many AI
models [172]. To address these challenges and minimize communication costs, several strategies
can be employed.
4.4.1   Data Preprocessing. One effective approach to reducing data transmission is through data
preprocessing algorithms. These algorithms can filter and compress data, ensuring that only rele-
    vant information is transmitted during communication [209]. By minimizing the amount of data
that needs to be sent, these preprocessing techniques help alleviate bandwidth constraints and
enhance overall communication efficiency. For instance, techniques such as feature selection and
dimensionality reduction can significantly decrease the volume of data while preserving essential
information, thus optimizing the transmission process [173].
4.4.2     Edge Caching. Edge caching technology is another valuable strategy that allows for the
storage of frequently accessed data and models directly on edge devices [223]. By reducing the
frequency of communication with the cloud, edge caching minimizes the amount of data transmit-
ted [67]. This approach enables edge devices to quickly access locally stored information, thereby
decreasing the need for cloud access and improving response times. Implementing intelligent
caching strategies, such as adaptive caching based on usage patterns or predictive algorithms that
anticipate future requests, can further enhance the effectiveness of edge caching solutions [1].

                ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.



# On-device Computation and Data Privacy in Edge AI

## 4.4.3 On-device Computation
On-device computation is a technique that facilitates real-time responses at the edge [62]. By performing computations directly on the edge device, only relevant data needs to be transmitted to the cloud, which reduces communication costs and enables faster response times [24]. This method not only conserves bandwidth but also enhances the efficiency of data processing by allowing immediate analysis and action based on local data inputs [63]. Additionally, offloading less critical tasks to the cloud when necessary can help balance computational loads while maintaining responsiveness [41].

## 4.5 Data Privacy and Security
When processing sensitive data on devices, data privacy and security present significant challenges.

### 4.5.1 Data Protection
AI models deployed on edge devices frequently handle personal data, including health information and location data, making the security of this information during processing and storage paramount to preventing data breaches [254]. To enhance data protection in these contexts, several techniques have been proposed, such as data anonymization, trusted execution environments (TEEs), homomorphic encryption, and secure multiparty computation.

- **Data Anonymization**: This involves removing or obfuscating personally identifiable information from datasets, ensuring individuals cannot be easily identified, which is crucial for compliance with privacy regulations [222].

- **Trusted Execution Environments (TEEs)**: TEEs create a secure area within a processor that allows sensitive data to be processed in isolation, safeguarding it from unauthorized access even if the main operating system is compromised [98].

- **Homomorphic Encryption**: This enables computations to be performed on encrypted data without the need for decryption, thereby preserving confidentiality during processing [163].

- **Secure Multiparty Computation**: This allows multiple parties to collaboratively compute a function over their inputs while keeping those inputs private, thus facilitating secure collaborative processing [204].

### 4.5.2 Compliance
As data privacy regulations, such as the General Data Protection Regulation (GDPR), become increasingly stringent, AI models on edge devices must comply with relevant laws to ensure the lawful use and protection of user data [113]. Compliance is essential for maintaining user trust and avoiding legal repercussions. Organizations must implement robust data governance frameworks that include regular audits, user consent management, and transparent data handling practices to adhere to these regulations effectively [2].

### 4.5.3 Security Attacks
Edge devices are susceptible to a range of security threats, including malware and network attacks, prompting researchers to actively develop security mechanisms to safeguard these devices and the sensitive data they process [62]. One promising approach is federated learning, which enables AI models to be trained across a distributed network of edge devices while maintaining data privacy and security [105, 178]. By keeping the training data localized on each device and only sharing model updates, federated learning significantly reduces the risk of exposing sensitive information during the training process [59]. Additionally, hybrid approaches, such as StarFL, integrate multiple strategies to tackle the unique challenges of edge computing, particularly in urban environments with high communication demands [76]. These hybrid models can dynamically adapt to varying conditions, ensuring robust security while optimizing performance.

## 4.6 Model Transferability and Adaptability
The transferability and adaptability of AI models on edge devices are crucial for ensuring effective operation across diverse environments.

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## 4.6 Challenges in Edge AI Deployment

### 4.6.1 Cross-device Migration
AI models must be capable of running on various types of devices, including migrating from high-performance servers to resource-constrained mobile devices. Achieving efficient migration while maintaining performance and accuracy presents a significant challenge [104]. This involves effective model management and scheduling, which can be divided into model placement, migration, and elastic scaling [192, 193].

During model placement, the first challenge is to design effective feature extraction methods that can capture relevant features from the edge environment and user tasks, given the heterogeneity of AI model requests [190]. Additionally, the complex relationships between user tasks and models, including task dependencies, deadline restrictions, and bandwidth limitations, must be considered for optimal model placement [117, 118]. Furthermore, addressing latency requirements for edge AI deployment necessitates scheduling that leverages the dependency relationships between the model’s layers to minimize cold start times [57, 191].

### 4.6.2 Environmental Adaptability
Environmental adaptability is crucial for maintaining the performance and reliability of AI models deployed on edge devices [54]. As the operating environment changes, AI models must adjust their processing and inference strategies to ensure consistent functionality. For instance, an AI model used in a smart camera must effectively recognize objects under varying light conditions, necessitating dynamic adjustments to its algorithms to maintain accuracy and responsiveness [218].

Furthermore, temperature fluctuations can significantly affect the hardware performance of edge devices, requiring AI models that can compensate for these changes to avoid overheating or underperformance [58]. Additionally, fluctuating network conditions can impact data transmission rates; thus, AI models should be designed to function effectively with limited or intermittent connectivity [108]. This level of adaptability not only enhances the user experience but also ensures that edge devices can operate reliably in real-world scenarios where environmental conditions are unpredictable [54].

### 4.6.3 Continuous Learning
AI models on edge devices must possess the capability for continuous learning and updating during use to adapt to changing user needs and behavior patterns [37]. This requires models to have online learning and adaptive capabilities, enabling them to refine their performance based on real-time data and user interactions.

Additionally, due to user mobility, models may need to be migrated to appropriate edge nodes to ensure optimal Quality of Service (QoS) [116]. This migration process must consider the storage structure of the AI model and the limited computing resources available in edge environments [11]. Finally, to address scenarios involving sudden surges in AI model requests, effective elastic scaling strategies must be implemented. This includes accurately predicting resource utilization rates across different edge nodes and designing innovative scaling strategies that cater to the geographic distribution of users [194].

## 5 Optimization and Implementation of AI Models on Devices

### 5.1 Data Optimization Techniques
In machine learning (ML), the principle of "garbage in, garbage out" underscores the importance of high-quality data inputs for achieving reliable results [66]. This concept has been particularly influential in the development of large language models, where enhancements in the scale and quality of training data significantly improve model performance [238].

For effective deployment of models on edge devices, data preprocessing becomes essential [10]. This section introduces data optimization techniques commonly employed in on-device AI to ensure efficient and high-quality processing. As shown in Figure 3, these methods include data filtering, feature extraction, data aggregation, and data quantization [215], each offering specific applications and benefits tailored for on-device AI.

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# Data Optimization Operations for On-Device AI

## Overview

In the context of on-device AI, various data optimization operations are crucial for enhancing the quality of data collected for AI models. These operations include data filtering, feature extraction, data aggregation, data quantization, and the implementation of edge computing frameworks. Figure 3 illustrates these processes, which collectively contribute to improving the performance and efficiency of models, especially in resource-constrained environments.

## Summary of Techniques

A summary of these techniques and their advantages is provided in Table 4 in the Appendix, highlighting their role in enhancing the performance and efficiency of models operating in resource-constrained environments.

### 5.1 Data Filtering

Data filtering is essential for maintaining data quality by eliminating irrelevant or noisy data prior to further analysis [161]. In IoT networks, where numerous smart sensors generate vast quantities of data, the prevalence of errors and inconsistencies necessitates robust filtering techniques [182]. Active label cleaning, for instance, focuses on identifying and prioritizing visibly mislabeled data, thereby enhancing the accuracy of datasets [12]. Ensemble methods also play a significant role in effectively managing varying noise levels across datasets, ensuring that the integrity of the data is preserved during processing [137]. However, many filtering methods can be computationally intensive, which poses challenges in resource-constrained environments typical of many IoT applications [209].

### 5.2 Feature Extraction

Feature extraction is a critical technique aimed at reducing data dimensionality, particularly important in high-dimensional contexts such as image processing [200]. By selecting a relevant subset of features, this technique retains only the essential information necessary for analysis, which minimizes model complexity and improves interpretability [200]. For example, feature selection has been shown to enhance resource efficiency in applications such as melanoma detection [40] and anomaly detection [181]. Nevertheless, there is a risk that feature extraction may oversimplify complex datasets if significant features are overlooked, potentially leading to loss of critical information [33].

### 5.3 Data Aggregation

Data aggregation involves synthesizing information from multiple sources to minimize redundancy and enhance coherence, which is particularly beneficial in IoT networks with interconnected devices [102, 236]. Techniques like federated learning enable data privacy while facilitating the combination of data from distributed sources, thus providing efficient solutions for processing large datasets [125]. However, while aggregation can improve data coherence, it may also introduce latency issues if the methods employed are overly complex or centralized [144].

### 5.4 Data Quantization

Data quantization refers to the process of reducing the precision of data representation, commonly applied in scenarios that require efficient processing of sensor data on edge devices [252]. By lowering floating-point precision, quantization significantly reduces memory usage and enhances processing speed [99]. However, careful selection of quantization levels is crucial to maintain model accuracy. For instance, sparse projection methods have demonstrated practical applications of quantization in edge environments, such as facial recognition systems [21].

----

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## 5.1.5 Edge Computing Frameworks
Edge computing frameworks like AWS Greengrass and Azure IoT Edge facilitate the processing of data closer to its source, thereby reducing the need for extensive data transfer and minimizing latency in real-time applications [157]. An example includes an adaptive region-of-interest-based image compression scheme that enables rapid target detection within IoT setups [60]. Despite their advantages, these frameworks can impose substantial maintenance demands on smaller systems, which may struggle with the complexity involved [162].

## 5.2 Model Optimization Techniques
To effectively deploy AI models on edge devices, which often have stringent computational, memory, and power constraints, a variety of model optimization techniques have been developed [225]. These approaches aim to reduce the size and complexity of AI models while preserving their performance levels. Key techniques (as shown in Figure 4) include parameter sharing, pruning, model quantization, knowledge distillation, low-rank factorization, hardware-aware neural architecture search, and energy-efficient model design [17]. A notable example of integrating multiple optimization strategies is Deep Compression, which synergistically combines pruning, quantization, and Huffman coding to achieve substantial reductions in the size of deep neural networks (DNNs) [64]. Table 5 in the Appendix summarizes these techniques, detailing their descriptions, benefits, and limitations in the context of on-device AI.

### 5.2.1 Traditional ML Compression Methods
Before introducing the methods of DNNs, this section will first discuss traditional ML compression methods. Notable approaches include Q8KNN, which offers an 8-bit KNN quantization method for edge computing in smart lighting systems, demonstrating significant improvements in accuracy and compression ratio [160]; Stochastic Neighbor Compression, which effectively compresses datasets for k-nearest neighbor classification while enhancing robustness and speed [90]; and ProtoNN, a compressed and accurate kNN algorithm designed for resource-scarce devices, achieving excellent prediction accuracy with minimal storage and computational requirements [61]. Additionally, an efficient implementation of SVMs on low-power, low-cost 8-bit microcontrollers has been developed, enabling the deployment of smart sensors and sensor networks for intelligent data analysis, along with a new model selection algorithm tailored to fit hardware resource constraints [14]. Moreover, the ResOT model...

![Figure 4: An overview of model optimization operations.](#)

**Figure 4**: An overview of model optimization operations. Model compression involves using various techniques, such as pruning, model quantization, and knowledge distillation, to reduce the size of the model and obtain a compact model that requires fewer resources while maintaining high accuracy. Model design involves creating lightweight models through manual and automated techniques, including architecture selection, parameter tuning, and regularization.

**Table 5**: Summary of model optimization techniques, including descriptions, benefits, and limitations in the context of on-device AI.

*Note: The details of Table 5 and the ResOT model are provided in the Appendix.*

----

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



# Resource-Efficient Techniques for On-Device AI

## 5.2.2 Parameter Sharing

Parameter sharing is a highly effective model compression technique that plays a crucial role in the development of on-device AI models [17]. By reusing weights across multiple layers, this method significantly reduces the computational and memory demands of neural networks, enabling efficient deployment on devices with limited resources without incurring substantial losses in accuracy [143]. Parameter sharing has been successfully applied across various architectures, including CNNs and RNNs, where it minimizes redundancy and optimizes memory usage—an essential requirement for on-device AI applications [151, 217].

For instance, Wu et al. proposed a k-means clustering approach to group weights in CNNs, allowing convolutional layers to share weights through learned cluster centers. This method effectively balances model compression with energy efficiency, making it particularly suitable for on-device applications [217]. Similarly, Obukhov et al. introduced T-Basis, a technique that utilizes Tensor Rings for weight compression, achieving high compression rates that are ideal for devices with limited computational power [151]. Such strategies are instrumental in on-device AI, where computational savings directly enhance device performance and prolong battery life.

However, despite its advantages, parameter sharing does present specific challenges and limitations in the context of on-device AI. While it is effective for many architectures, it may lead to decreased model interpretability and accuracy, especially if the shared parameters fail to capture task-specific nuances [175]. Additionally, the process of determining optimal shared parameters across heterogeneous operators can be computationally intensive. Techniques such as soft weight-sharing [199] and hybrid neural architecture search [231] have been developed to address these challenges, striving to balance compression with model performance through fine-grained weight sharing and architecture customization.

Nonetheless, certain on-device applications, including speech recognition and recommendation systems, have successfully leveraged parameter-sharing methods to achieve efficient, high-performance models with favorable tradeoffs in accuracy and resource utilization [183, 205]. As the demand for efficient on-device AI continues to grow, parameter sharing will remain a vital technique for optimizing model performance while accommodating the constraints of edge devices.

## 5.2.3 Pruning

Model pruning is a vital technique for optimizing DNNs specifically for on-device AI applications, as it effectively reduces computational demands and memory usage, making models more suitable for resource-constrained edge devices [147]. By systematically removing redundant parameters or entire layers, pruning techniques decrease model complexity, enabling faster inference and lower memory consumption while often maintaining competitive accuracy [25].

Various pruning methods have been developed to enhance DNNs for on-device AI, where efficiency and generalization are critical. For instance, Xu et al. introduced DiReCtX, which integrates real-time pruning and accuracy tuning strategies to achieve faster model reconfiguration, improved computational performance, and significant energy savings [226]. Additionally, DropNet iteratively prunes nodes or filters based on average post-activation values, achieving up to a 90% reduction in network complexity without compromising accuracy [186]. Structural pruning techniques further enhance the efficiency of DNNs by focusing on the architecture of the network itself, allowing for more targeted reductions in complexity.

In summary, both parameter sharing and pruning are essential strategies for optimizing deep neural networks for on-device AI applications. These techniques not only improve the efficiency of models but also ensure that they remain effective in real-world scenarios where computational resources are limited. As the field of on-device AI continues to evolve, ongoing research and development in these areas will be crucial for meeting the growing demands for intelligent, resource-efficient applications.

----

**References:**
- [17] Author et al. (Year). Title. Journal.
- [143] Author et al. (Year). Title. Journal.
- [151] Author et al. (Year). Title. Journal.
- [217] Author et al. (Year). Title. Journal.
- [175] Author et al. (Year). Title. Journal.
- [199] Author et al. (Year). Title. Journal.
- [231] Author et al. (Year). Title. Journal.
- [183] Author et al. (Year). Title. Journal.
- [205] Author et al. (Year). Title. Journal.
- [147] Author et al. (Year). Title. Journal.
- [25] Author et al. (Year). Title. Journal.
- [226] Author et al. (Year). Title. Journal.
- [186] Author et al. (Year). Title. Journal.



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## 5.2.3 Pruning Techniques

Recent advancements in pruning strategies have demonstrated how deep neural networks (DNNs) can be optimized for efficient operation on edge devices without compromising their core functionality. For instance, the discrete channel optimization technique developed by Gao et al. yields compact models with strong discriminative power by optimizing channel-wise gates under resource constraints [50].

Dynamic pruning, which involves the removal of unimportant parameters or neurons during the training process, has also proven to be highly effective for on-device AI applications [212]. A notable example is the Binarized Neural Networks (BNNs) introduced by Geng et al., who developed O3BNN-R, utilizing dynamic pruning to reduce model size and energy consumption on edge devices [51]. Similarly, Li et al. created FuPruner, which optimizes both parametric and nonparametric operators to accelerate neural network inference through aggressive filter pruning, achieving significant computational savings on resource-limited platforms [96].

Post-training pruning techniques have shown promise as well. Kwon et al. achieved substantial reductions in computational load and inference latency for Transformers while preserving accuracy [91]. The effectiveness of pruning is further enhanced when combined with other compression techniques. For example, Lin et al.’s HRank utilizes low-rank feature maps for filter pruning, significantly reducing floating-point operations (FLOPs) and model size [107]. Tung and Mori’s CLIP-Q integrates pruning with weight quantization, compressing models within a single learning framework for resource-efficient deployment [198]. These innovations underscore the importance of pruning and hybrid compression methods in enabling the deployment of high-performance neural networks on edge devices with constrained resources, ultimately facilitating more efficient on-device AI solutions.

## 5.2.4 Model Quantization

Quantization has emerged as a critical technique for optimizing neural networks specifically for on-device AI models, significantly enhancing computational efficiency, reducing memory and storage demands, and lowering power consumption [248]. By decreasing the precision of model parameters and activations, quantization achieves substantial reductions in model size while minimizing accuracy degradation—an essential benefit for on-device AI applications [52].

Recent advancements in quantization techniques have further improved their applicability to on-device scenarios. For instance, Fu et al. introduced FracTrain, which employs progressive fractional quantization and dynamic fractional quantization methods to reduce training costs and latency without sacrificing performance [48]. Similarly, Tambe et al. developed edgeBERT, which utilizes adaptive attention, selective pruning, and floating-point quantization to effectively address memory and computation constraints on edge devices, striking a balance between performance and resource utilization [184].

Techniques such as Parametric Non-uniform Mixed Precision Quantization have enabled data-free quantization, allowing models to be compressed without retraining—an advantageous approach for deployment on devices with limited computational capabilities [27]. For ensemble models, Cui et al. proposed a bit-sharing scheme that allows models to share less significant bits of parameters, optimizing memory usage while preserving accuracy [32]. These innovations reflect the growing trend of applying quantization to deploy efficient and lightweight DNNs on edge devices.

Research in quantization has also expanded to accommodate specialized neural network architectures and hardware platforms. For example, quantization frameworks tailored for Capsule Networks have been developed to address their high computational demands, achieving up to a 6.2x reduction in memory usage with minimal accuracy loss [128]. In the realm of spiking neural networks, FSpiNN incorporates fixed-point quantization to optimize memory and energy consumption for unsupervised learning on edge devices [159].

Hardware-aware quantization has gained significant traction, with systems like Zhou et al.’s Octo utilizing INT8 quantization to enhance cross-platform training efficiency on AI chips [251]. Additionally, Wang et al.’s HAQ framework applies hardware-aware quantization to select layer-specific precision levels, achieving latency and energy efficiency improvements.

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# Knowledge Distillation and Low-rank Factorization in Edge AI

## 5.2.5 Knowledge Distillation

Knowledge distillation is a pivotal model compression technique that enhances the deployment of Deep Neural Networks (DNNs) on resource-constrained edge devices by transferring knowledge from a large, complex teacher model to a smaller, more efficient student model [17]. Originally introduced by Hinton et al. [70], knowledge distillation operates by converting the teacher model’s output into a softened probability distribution, which the student model learns to replicate. This approach has become foundational in enabling complex DNNs to maintain high accuracy while functioning on limited hardware [17].

A variety of knowledge distillation strategies have been developed to optimize models specifically for edge applications. For instance, Zhang et al. introduced a self-distillation framework that compresses knowledge within Convolutional Neural Networks (CNNs), achieving accuracy gains alongside scalable inference capabilities [242]. DynaBERT, proposed by Hou et al., dynamically adjusts the width and depth of BERT models to align with the resource constraints of various edge devices, utilizing knowledge distillation to train subnetworks that perform comparably to the full model [72]. Additionally, dynamic knowledge distillation methods, such as the Dynamic Knowledge Distillation framework by Zhang et al., implement adaptive features to manage sample-specific complexity, enabling deployment on devices with restricted computational power, such as satellites and Unmanned Aerial Vehicles (UAVs) [245].

Recent advancements in knowledge distillation have expanded its application to specific architectures and use cases in edge environments. For example, Hao et al. introduced CDFKD-MFS, which combines multiple pretrained models into a compact student model without requiring access to the original dataset, facilitating lightweight deployment in data-restricted settings [68]. Ni et al. developed cross-modal Vision-to-sensor knowledge distillation for human activity recognition, which compresses multimodal sensor data into a student model that approximates the performance of a high-complexity model while reducing computational requirements [145]. In privacy-sensitive contexts, pFedSD, a federated learning model, employs self-distillation to personalize model training for individual clients, effectively adapting to diverse edge devices and user data [85].

To further enhance model efficiency, knowledge distillation is often combined with other compression techniques. For instance, Xia et al. applied knowledge distillation alongside self-supervised learning in an ultra-compact recommender system, achieving significant memory savings and improved inference accuracy [220]. These innovations highlight knowledge distillation’s versatility and effectiveness in adapting complex DNNs to the constraints of edge devices, achieving an optimal balance between computational cost, memory usage, and task performance. As the demand for efficient on-device AI solutions continues to grow, knowledge distillation will remain a crucial strategy for enabling high-performance models in resource-limited environments.

## 5.2.6 Low-rank Factorization

Low-rank factorization is a powerful technique for reducing the memory and computational requirements of DNNs, making it particularly well-suited for deployment on resource-limited edge devices [95]. By approximating weight matrices with lower-dimensional matrices, low-rank factorization captures the most significant information while minimizing redundancy [229].

One notable approach is Singular Value Decomposition (SVD) training, developed by Yang et al. [228], which integrates sparsity-inducing regularizers on singular values to achieve low-rank DNNs during training without the need for singular value decomposition at every step. This method effectively reduces computational load compared to prior factorization and pruning techniques while maintaining accuracy [228].

Another innovative model is MicroNet, introduced by Li et al. [103], which is optimized for edge devices through Micro-factorized convolution. This approach further enhances the efficiency of DNNs, making them more suitable for deployment in environments with limited computational resources.

----

**References:**
- [17] Knowledge distillation foundational paper.
- [70] Hinton et al. on knowledge distillation.
- [72] DynaBERT framework.
- [94] RaQu framework by Li et al.
- [95] Overview of low-rank factorization.
- [103] MicroNet by Li et al.
- [145] Cross-modal knowledge distillation by Ni et al.
- [220] Self-supervised learning in recommender systems.
- [228] SVD training by Yang et al.
- [242] Self-distillation framework by Zhang et al.
- [245] Dynamic Knowledge Distillation framework by Zhang et al.
- [68] CDFKD-MFS by Hao et al.
- [85] pFedSD federated learning model.



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## 5.2.7 Hardware-aware Neural Architecture Search

Neural Architecture Search (NAS) has emerged as a crucial technique for designing neural networks tailored for edge device deployment, where constraints such as energy efficiency, low latency, and limited computational capacity are critical [123]. The rapid expansion of the Internet of Things (IoT) and AI of Things (AIoT) has created a demand for smart, low-power, and efficient devices. To meet this need, NAS employs sophisticated optimization strategies—including evolutionary algorithms, reinforcement learning, and gradient-based methods—to navigate vast architecture spaces, discovering models that excel within stringent resource limitations [28].

Recent advancements in NAS have underscored the importance of multi-objective optimization, where accuracy is balanced with key metrics like latency, memory usage, and energy consumption [122]. Comparative data from various NAS frameworks highlight the trade-offs between performance and resource efficiency. For instance, MobileNetV2 achieves 72.0% accuracy with 300 million multiply-accumulate operations (MACs) and a mobile latency of 66 ms, incurring a training cost of just 150 GPU hours [167]. In contrast, NASNet-A, an early NAS model, delivers slightly higher accuracy at 74.0% but at the expense of increased computational demand—564 million MACs—and a staggering 48,000 GPU hours, leading to significant carbon emissions and training expenses [260]. Notable strides have been made with newer NAS approaches, such as DARTS and FBNet-C, which offer competitive accuracy with considerably lower training costs and environmental impact, demonstrating progress in the field [109, 216].

NAS research is increasingly focusing on hardware-aware optimization, aiming to adapt neural architectures to the specific constraints of edge devices. Techniques like ProxylessNAS exemplify this trend, balancing latency and computational needs to achieve 74.6% accuracy with just 320 million MACs and only 200 GPU hours of search cost [18]. MobileNetV3-Large, influenced by NAS principles, reaches 75.2% accuracy with reduced complexity, making it suitable for real-time edge applications [73]. Frameworks like Once-For-All (OFA) demonstrate scalability, achieving high accuracy with minimal MACs and low latency, underscoring NAS’s potential to standardize efficient models across diverse platforms [16].

In federated learning, where privacy and data distribution challenges are prominent, NAS methods like Federated Direct NAS (FDNAS) and Cluster Federated Direct NAS (CFDNAS) show promise, effectively handling data heterogeneity and edge-specific requirements [239]. Collectively, these studies highlight the importance of adapting NAS to the specific challenges of edge environments, enabling the development of neural architectures that are efficient, resilient, and well-suited for real-world on-device AI deployments.

## 5.2.8 Energy-efficient Model Design

The design of compact neural network architectures has garnered significant attention, especially as edge devices in IoT and AIoT applications demand efficient models capable of real-time processing under stringent resource constraints [259]. Lightweight networks are specifically engineered to reduce computational demands and minimize parameter counts, making them ideal for edge platforms where power and memory are limited [17]. These models leverage strategies such as depthwise and widthwise separable convolutions, channel and network pruning, and convolutional grouping to enhance computational efficiency and reduce memory footprint without significantly sacrificing accuracy [255].

----

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



# Lightweight Deep Learning Models for Edge Devices

## 5.2 Lightweight Model Architectures

Among the most prominent lightweight models, the MobileNets series has demonstrated high performance on mobile and embedded devices by employing depth-separable convolutions that decrease computation while maintaining accuracy. For instance, MobileNetV1 achieves a 70.6% top-1 accuracy on the ImageNet dataset with only 569 million Multiply-Accumulate Operations (MACs), a significant reduction compared to traditional networks [74]. MobileNetV2 improves upon this by introducing inverted residuals and linear bottlenecks, achieving 72.0% top-1 accuracy with just 300 million MACs, demonstrating a substantial increase in efficiency for mobile applications [167]. MobileNetV3 further optimizes this design, achieving a 75.2% top-1 accuracy with around 219 million MACs, specifically targeting edge scenarios with strict latency constraints [73].

Recent advancements in lightweight architecture design continue to push the boundaries of computational efficiency and accuracy. The ShuffleNet series, developed by MegVII, employs channel shuffling within grouped convolutions to optimize information flow, reducing computational costs significantly. ShuffleNetV2, for instance, achieves 72.6% top-1 accuracy on ImageNet while only requiring 299 million MACs, making it particularly effective for real-time applications on edge devices with limited processing power [126, 243]. Similarly, SqueezeNet introduces the Fire module, which compresses input channels and then expands them with fewer parameters, resulting in a model that is 50 times smaller than AlexNet while retaining comparable accuracy [81].

The EfficientNet series employs a compound scaling technique that simultaneously adjusts network width, depth, and resolution, achieving state-of-the-art accuracy while reducing parameter counts. EfficientNet-B0, for instance, achieves a top-1 accuracy of 77.3% with 5.3 billion MACs [187]. In comparison, the optimized EfficientNetV2 reaches an impressive 79.8% accuracy on the same dataset with 20% fewer parameters [188]. These models have been benchmarked on devices such as the Jetson Xavier NX and Coral Dev Board, demonstrating significant reductions in latency and energy consumption compared to traditional CNNs [100].

Additionally, attention-based lightweight architectures like MobileViT combine the strengths of CNNs and transformers to enhance global feature representation. MobileViT strikes a balance between computational efficiency and accuracy, achieving over 78% top-1 accuracy on ImageNet with approximately 320 million MACs [131]. These advancements have enabled edge devices to perform real-time inference tasks, including object detection and classification. Furthermore, Table 6 in the Appendix presents a comprehensive overview of lightweight models evaluated for accuracy and inference time across various mobile devices using PyTorch Mobile [119]. These models have been tested on edge platforms such as the Galaxy S10e, Honor V20, Vivo X27, Vivo Nex, and Oppo R17, highlighting their adaptability to resource-constrained environments.

## 5.3 System Optimization Techniques

As the demand for real-time performance and resource-efficient deep learning models continues to rise, optimizing systems for on-device AI deployment has become a critical area of research. Successfully deploying deep learning models on edge devices necessitates a combination of software- and hardware-based approaches to enhance computational efficiency [17]. This section offers a comprehensive overview of frameworks for lightweight model training and inference from a software perspective, as well as hardware-based methods designed to accelerate model performance. Figure 5 in the Appendix illustrates the various system optimization approaches, highlighting how software and hardware optimizations work in tandem to improve computational efficiency for on-device AI models. This integrated strategy is essential for ensuring that deep learning applications can operate effectively within the constraints of edge environments [223].

### 5.3.1 Software Optimization

In on-device AI, software optimization is essential for managing and deploying lightweight models in resource-constrained environments [223]. This section...

*Note: The continuation of this section would typically include specific software optimization techniques, frameworks, and methodologies relevant to lightweight model deployment.*



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## Software Optimization Approaches

Software optimization approaches for on-device AI can be categorized into two main areas:

1. **On-device AI Learning Frameworks**: These frameworks facilitate model training and deployment on mobile and edge devices.
2. **On-device AI Inference Frameworks**: These frameworks support efficient model inference across different hardware platforms.

### On-device AI Learning Frameworks

On-device AI learning frameworks are specifically designed to enable the training, optimization, and deployment of deep learning models on edge devices. Popular frameworks such as TensorFlow and PyTorch have introduced optimized versions tailored for mobile applications—namely TensorFlow Lite and PyTorch Mobile. These frameworks streamline the lifecycle management of deep learning models, from training to deployment, while addressing the limitations of edge devices, including restricted computing power, memory constraints, and energy efficiency requirements.

A key aspect of lifecycle management in these frameworks is model conversion, which transforms complex models into lightweight versions suitable for edge deployment. For instance, TensorFlow Lite provides tools to convert standard TensorFlow models through techniques like quantization and pruning, effectively reducing model size and computational costs. The conversion process typically involves exporting a trained TensorFlow model to the TensorFlow Lite Converter, which applies optimizations such as quantization to minimize resource requirements. Similarly, PyTorch Mobile enables developers to convert PyTorch models into optimized mobile versions using the TorchScript Intermediate Representation (IR), which simplifies model structures and enhances execution efficiency on mobile platforms.

These conversion tools not only optimize the models but also facilitate deployment on edge devices, ensuring that computationally demanding models can operate efficiently within the limited resources available. Key features of TensorFlow Lite and PyTorch Mobile are highlighted in Table 7 in the Appendix, showcasing how each framework supports efficient model deployment in mobile and edge environments.

### On-device AI Inference Frameworks

On-device AI inference frameworks are specialized software environments designed to enable the efficient deployment and execution of pretrained models on various edge devices. Unlike learning frameworks, which manage the entire lifecycle from training to deployment, inference frameworks focus solely on executing models in a computationally efficient manner. Frameworks such as NCNN, OpenVINO, and ONNX Runtime are tailored for edge applications, providing optimized implementations that reduce memory and power consumption while supporting a range of hardware platforms, including IoT devices, mobile phones, and edge servers.

These frameworks integrate performance optimizations specific to common architectures and operations, such as quantization and low-precision computation, to facilitate high-speed, low-latency model inference on devices with limited computational resources. For example, ONNX Runtime offers significant speedups for inference and training across diverse platforms, while OpenVINO optimizes deep learning models for Intel hardware, incorporating functions like FP16 and INT8 quantization to enhance throughput. NCNN, developed by Tencent, emphasizes minimal memory usage and compatibility with ARM processors, making it particularly suitable for mobile deployments. Other frameworks, such as Arm NN and MNN, are similarly designed for cross-platform deployment, supporting a variety of model types and hardware backends. Table 8 in the Appendix summarizes the key attributes, supported hardware, advantages, and limitations of various on-device AI inference frameworks.

Recent advancements in on-device AI have led to the development of numerous lightweight neural network architectures and frameworks, particularly for CNNs. For instance, SparkNet, introduced by Xia et al., reduces model parameters and computational requirements for CNNs, achieving high efficiency in resource-constrained environments. Memsqueezer, developed by Wang et al., utilizes on-chip memory architectures to optimize CNN inference, resulting in a 2x performance improvement and an 80% reduction in energy consumption. Other frameworks continue to emerge, further enhancing the capabilities of on-device AI.

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# Hardware and Software Optimization for Edge AI

## 5.3.1 Software Optimization

Recent advancements in software optimization techniques have significantly enhanced the efficiency of deep learning models, particularly for Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs). Notable frameworks such as Pipe-it [206] and SCA [246] have implemented strategies like kernel parallelization and secure computation, respectively, to improve CNN inference throughput while ensuring model integrity. These approaches have demonstrated substantial improvements in speed, latency, and energy consumption across various hardware configurations.

For RNNs and other neural network architectures, compression and pruning techniques have been pivotal in facilitating efficient deployment on edge devices. Gao et al. [49] introduced EdgeDRNN, which utilizes temporal sparsity to enhance power efficiency and reduce latency for RNN inference, making it suitable for real-time applications. Compression-based methods, such as those proposed by Srivastava et al. [179] and Wen et al. [214], employ variational bottleneck and structured pruning techniques, respectively, to significantly decrease the model size and memory footprint of RNNs while maintaining performance. Zhang et al. [241] proposed DirNet, an adaptive compression method that dynamically adjusts sparsity in RNNs, enabling deployment on resource-constrained edge devices without compromising accuracy. Additional developments in edge-optimized deep neural networks, such as Hidet [39] and edgeEye [110], have further expanded the capabilities and efficiency of AI inference on mobile platforms, facilitating real-time video analytics and other demanding applications in constrained environments.

## 5.3.2 Hardware Optimization

Hardware optimization methods enhance computational efficiency for on-device AI models by leveraging specialized hardware accelerators and low-power chips [17]. These methods encompass compression algorithms, memory-efficient architectures, and domain-specific hardware, enabling high-performance AI processing on devices with limited power budgets [174]. Various approaches to hardware acceleration include the use of specialized processors such as CPUs, GPUs, FPGAs, ASICs, and NPUs, or the implementation of custom hardware designs tailored for specific AI models [36, 155]. Each of these hardware options offers unique advantages [46]:

- **CPUs** are versatile and provide stable computing performance.
- **GPUs** offer high parallelism and flexibility.
- **FPGAs** allow for customizability and low power consumption.
- **ASICs** achieve high efficiency through hardware optimization.
- **NPUs** are specifically designed for deep learning tasks.

Table 9 in the Appendix provides an overview of common hardware accelerators for edge AI, detailing their basic information, examples, advantages, and limitations.

In recent years, the development of on-device AI models has gained significant traction, particularly in edge AI applications where resource constraints and power efficiency are critical. CPU-based accelerators have emerged as a viable solution due to their broad applicability and stable performance. For instance, Nori et al. [148] introduced REDUCT, a DNN inference framework that optimizes data-parallel processing on multicore CPUs, bypassing traditional CPU resources. This approach resulted in a 2.3x increase in convolution performance per watt, demonstrating substantial gains in both raw performance and power efficiency for on-device AI tasks. Similarly, Jia et al. [84] developed NCPU, a neural CPU architecture that integrates a binary neural network accelerator with a RISC-V CPU pipeline. NCPU’s support for local data storage minimizes costly data transfers between cores, leading to significant area reduction and energy savings compared to conventional architectures. These advancements illustrate the potential of CPUs to effectively meet the demands of on-device AI by maximizing resource utilization while minimizing power consumption.

GPUs are also widely utilized for accelerating deep learning tasks on edge devices, thanks to their parallel processing capabilities. Capodieci et al. [19] showcased a real-time scheduling prototype for NVIDIA GPUs, incorporating preemptive scheduling and bandwidth isolation techniques that enhance performance for repeated tasks in deep learning applications. This capability is crucial for on-device AI models that require efficient resource management. FPGAs present another effective approach to deep learning acceleration on edge devices. Xia et al. [219] introduced an FPGA-based architecture optimized for SparkNet, achieving high performance and energy efficiency through a fully pipelined CNN accelerator. Choudhury et al. [30] further proposed an FPGA-based solution that enhances the efficiency of deep learning models on edge devices.

----

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## 6 Future Development Trends

### 6.1 Impact of Emerging Technologies

The rapid advancement of emerging technologies is poised to significantly influence the application and performance of AI models deployed on various devices. Key technologies such as 5G, edge computing, and foundation models will play critical roles in shaping the future landscape of AI.

#### 6.1.1 5G and Beyond

The rollout of more advanced networks like 5G, characterized by high bandwidth and low latency, is set to enhance the real-time processing capabilities of AI models on devices [92]. With this connectivity, devices can access cloud resources more swiftly, facilitating seamless data exchange and model updates [177]. This improvement will lead to enhanced responsiveness in intelligent applications, enabling scenarios such as real-time video processing and instant feedback in smart devices. Moreover, more advanced communication technology will support the development of edge computing by allowing data processing to occur closer to the data source [114]. This proximity reduces latency and enhances data security, as edge devices can analyze data in real time [250]. Applications such as smart transportation systems, smart cities, and industrial automation stand to benefit from these advancements, resulting in more efficient operations and improved user experiences [106].

#### 6.1.2 Edge Computing

Edge computing is pivotal for enabling AI models to process data closer to its source, thereby reducing reliance on centralized cloud computing [169]. By executing AI models on edge devices, organizations can achieve faster decision-making and responses, which are essential for applications requiring real-time feedback, such as autonomous driving and smart surveillance systems [37]. Additionally, edge computing alleviates bandwidth requirements by minimizing the amount of data that needs to be transmitted to the cloud, thus optimizing network usage and reducing operational costs.

### 6.2 Hardware Optimization Techniques

The optimization of hardware for on-device AI is crucial for enhancing performance and energy efficiency. Recent advancements in Field Programmable Gate Arrays (FPGAs) and Application-Specific Integrated Circuits (ASICs) have shown promising results in this domain.

FPGAs have been utilized to create overlays optimized for Convolutional Neural Networks (CNNs), exploiting parallelism to maximize throughput based on available compute and memory resources. For instance, Yu et al. [232] developed a lightweight FPGA overlay processor for CNNs, achieving 5.5x better latency and 3.0x higher power efficiency than the NVIDIA Jetson TX2. These developments highlight how FPGAs can be tailored to optimize deep learning performance for on-device AI applications, providing customizable and scalable acceleration.

ASICs are increasingly favored for on-device AI due to their hardware-level optimization and energy efficiency. For example, Tambe et al. [184] designed edgeBERT, an ASIC-based architecture for multi-task Natural Language Processing (NLP) inference, which employs an entropy-based early exit mechanism to achieve energy savings of up to 7x compared to conventional inference methods. Roohi et al. [165] introduced ApGAN, leveraging a binarized weight approach and a hardware-configurable addition scheme for Generative Adversarial Networks (GANs), resulting in energy efficiency improvements of up to 28.6x. Neural Processing Units (NPUs), specialized ASICs designed for neural network processing, also play a crucial role in on-device AI by offering high efficiency and low power usage. Kouris et al. [88] presented Fluid Batching, a novel NPU architecture that enhances utilization and improves latency. Other architectures, such as BitSystolic [230] and PL-NPU [210], provide significant power efficiency and speed improvements for Deep Neural Network (DNN) inference through mixed-precision arithmetic and dataflow optimization techniques, respectively. Some solutions combine different processors, such as FPGA + GPU [29] and CPU + GPU [221], to balance performance and efficiency by leveraging the strengths of each processor.

Overall, ASICs and NPUs, with their low power consumption and optimized structures, represent highly effective solutions for accelerating on-device AI models, particularly in power-constrained environments. Specifically, Table 10 in the Appendix summarizes the hardware, models, strategies, and performance metrics of these hardware optimization techniques, highlighting their relevance to the advancement of on-device AI.



# Future Directions in AI Model Development

## 6.1 Edge Computing and Foundation Models

### 6.1.1 Data Transmission Reduction
Minimizing the amount of data transmitted to the cloud is a critical aspect of edge computing [172]. This reduction not only lowers data transmission costs but also enhances data privacy protection by keeping sensitive information local [256].

### 6.1.2 Foundation Models
Foundation models represent a significant leap in AI technology due to their ability to be pretrained on extensive datasets and subsequently fine-tuned for specific tasks [227]. These versatile models serve as a robust base for various applications, enabling faster development and deployment of AI solutions across multiple domains [233]. Their adaptability allows them to be effectively utilized in edge computing environments, where they can be tailored to meet local application needs while leveraging the extensive knowledge encoded during their pretraining phase [225]. This capability enhances both the efficiency and performance of AI models deployed on edge devices, making them more responsive to user demands and environmental changes [42].

## 6.2 Adaptability and Intelligence of AI Models
Future AI models are expected to exhibit greater adaptability and intelligence to meet evolving environmental conditions and user requirements.

### 6.2.1 Adaptive Learning
AI models will increasingly incorporate adaptive capabilities that allow them to dynamically adjust based on real-time data inputs and user feedback [207]. This adaptability is crucial for maintaining high performance across diverse environments and conditions [80]. For instance, smart home devices can automatically modify their settings according to users’ habits, thereby providing personalized services that enhance user satisfaction [35]. Such adaptive learning mechanisms not only improve user experience but also optimize the functionality of devices in varying contexts, ensuring that they remain relevant and effective as conditions change [115].

### 6.2.2 Intelligent Decision-making
Future AI models will be designed to make more complex decisions by integrating multiple data sources along with contextual information [37]. This integration will facilitate more accurate predictions and recommendations, allowing AI systems to function more intelligently in real-world applications [256]. By leveraging techniques from reinforcement learning and deep learning, these models will be capable of autonomously learning from their environments and optimizing their performance over time [189]. This capability to process complex datasets and derive meaningful insights will significantly elevate the overall intelligence of AI systems, making them more effective in tasks ranging from autonomous navigation to personalized healthcare solutions [69, 87].

## 6.3 Sustainability and Green Computing of AI Models on Devices
With a growing emphasis on environmental protection and sustainable development, the sustainability and green computing aspects of AI models deployed on devices are becoming increasingly important.

### 6.3.1 Energy Efficiency Optimization
Future AI models will prioritize energy efficiency by minimizing energy consumption through optimized algorithms and hardware design [259]. The adoption of low-power hardware, combined with efficient computational methods, will significantly contribute to achieving green computing objectives [127]. For instance, techniques such as model pruning, quantization, and knowledge distillation can reduce the computational load of AI models, allowing them to operate effectively on devices with limited power resources [223]. Furthermore, the integration of energy-efficient architectures such as neuromorphic computing can lead to substantial reductions in power consumption while maintaining high performance levels [37].

----

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## 6.3.2 Resource Sharing and Circular Utilization
AI models operating on devices will promote resource sharing and circular utilization practices that minimize resource waste [101]. Collaborative cloud–edge computing architectures allow devices to dynamically access cloud resources as needed, optimizing overall resource utilization efficiency [43]. This approach not only enhances the computational capabilities of edge devices but also reduces the environmental impact associated with overprovisioning resources [244]. By enabling devices to share processing tasks with cloud resources during peak loads or when additional capacity is required, organizations can achieve a more sustainable operational model that aligns with circular economy principles [56].

## 6.3.3 Environmental Monitoring and Management
AI models will play a crucial role in environmental monitoring and management by analyzing environmental data to support sustainable development goals [13]. For example, AI systems can process data from various sensors to monitor air quality, water usage, and energy consumption in real time [77]. This capability enables organizations to identify inefficiencies and implement corrective actions promptly, thereby reducing carbon emissions and optimizing resource management practices [124]. Moreover, AI-driven predictive analytics can forecast environmental changes, helping policymakers make informed decisions that contribute to sustainability efforts [127].

## 6.4 Ethics and Social Impact
As AI technology becomes more pervasive, addressing ethical considerations and social impacts will be critical issues that cannot be overlooked.

### 6.4.1 Data Privacy and Security
When processing user data on devices, safeguarding user privacy and ensuring data security remain significant challenges [4]. Future AI models must comply with stringent data protection regulations, such as the GDPR, to ensure the safety of user information [133]. Developing transparent algorithms alongside clear data usage policies is essential for enhancing user trust in AI technologies. This transparency can be achieved through explainable AI frameworks, which allow users to understand how their data is being used and how decisions are made by AI systems [78]. Additionally, implementing robust encryption methods and secure data storage practices will further protect sensitive information from unauthorized access and breaches [163].

### 6.4.2 Fairness and Bias
AI models may inadvertently introduce biases derived from training datasets, leading to unfair decision-making outcomes [166]. This bias can manifest in various forms, such as racial, gender, or socioeconomic biases, which can perpetuate inequality in critical areas like hiring practices, law enforcement, and loan approvals [130]. Future research should focus on identifying and eliminating biases within these models to ensure fairness in AI technologies. Techniques such as bias detection algorithms and fairness-aware machine learning can help mitigate these issues [171]. Establishing evaluation standards alongside regulatory mechanisms is necessary for ensuring transparency and interpretability within AI systems [130]. Furthermore, involving diverse stakeholders in the development process can help identify potential biases early on and promote equitable outcomes [23].

### 6.4.3 Social Impact
The widespread adoption of AI technology is expected to have profound effects on employment dynamics, educational structures, and social frameworks [47]. As automation increases, certain job categories may diminish while new roles emerge that require advanced skills in technology management and AI oversight [75]. Attention must be directed toward understanding how AI influences labor markets while promoting human–machine collaboration aimed at enhancing human skills [86]. Upskilling initiatives and educational programs will be essential in preparing the workforce for the changes brought about by AI integration. Policymakers must...

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# X. Wang et al.

## 7 Conclusion

### 7.1 Main Findings of the Survey
This survey investigates the fundamental concepts, application scenarios, technical challenges, and optimization and implementation methods associated with AI models deployed on devices. The key findings are summarized as follows:

- **Diverse Application Scenarios**: AI models on devices exhibit extensive application potential across a multitude of domains, including smartphones, IoT devices, edge computing, autonomous driving, and medical devices. This versatility significantly contributes to the proliferation and advancement of intelligent technologies [75, 111].

- **Technical Challenges**: Despite the considerable advantages offered by AI models on devices, several challenges persist. These include limitations in computational resources, constraints related to storage and memory, energy management issues, and concerns regarding data privacy and security, alongside challenges related to model transferability and adaptability [9, 17, 256].

- **Advancements in Optimization Technologies**: The performance of AI models on devices has been markedly improved through the application of various optimization techniques, such as model compression, pruning, hardware acceleration, quantization, low-precision computing, and methodologies like transfer learning and federated learning. These advancements enable efficient operation within resource-constrained environments [17, 174].

- **Future Development Trends**: The emergence of new technologies is poised to further propel the development of AI models on devices, enhancing their adaptive and intelligent capabilities. Concurrently, sustainability and ethical considerations are expected to gain prominence as critical focal points in this evolving landscape [38, 225].

### 7.2 Recommendations for Future Research
Building on the insights gleaned from this survey, it is essential to identify key areas for future research that can further advance the field of AI models on devices. The following recommendations aim to address existing challenges, enhance the effectiveness of AI implementations, and ensure that these technologies are developed responsibly and sustainably:

- **Research on Optimization Algorithms**: There is a pressing need to continue exploring efficient model compression and pruning techniques aimed at further reducing the computational and storage demands of AI models on devices, all while preserving accuracy and performance [17, 143].

- **Co-design of Hardware and Software**: Future investigations should focus on optimizing the integration of AI models with emerging hardware technologies, such as FPGAs and TPUs, to achieve enhanced computational efficiency and improved energy management [37, 83, 256].

- **Data Privacy and Security**: It is essential to develop more robust data protection mechanisms and privacy-preserving algorithms to ensure the security and compliance of sensitive data processing on devices [4, 75, 256].

- **Fairness and Explainability**: Strengthening research efforts focused on the fairness and explainability of AI models is crucial to prevent the introduction of biases in decision-making processes, thereby enhancing user trust in AI technologies [20, 78].

**ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.**



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## 7.3 Potential Impacts and Prospects of AI Models on Devices

The widespread integration of AI models into various devices is expected to bring about significant transformations across multiple dimensions, including societal, economic, and technological realms. As these intelligent systems become increasingly embedded in everyday life, their influence will extend beyond mere convenience, fundamentally reshaping how individuals interact with technology and each other. The following points outline the anticipated impacts and future prospects of AI models on devices:

- **Improving Quality of Life**: Through innovations in smart homes, health monitoring, and personalized services, AI models on devices are set to significantly enhance individuals’ quality of life, facilitating more convenient and efficient lifestyles [63, 121].

- **Driving Industrial Transformation**: In sectors such as manufacturing, transportation, and healthcare, the deployment of AI models on devices will catalyze the intelligent transformation of industries, leading to improved productivity and service quality, and ultimately fostering economic growth [9, 161].

- **Promoting Sustainable Development**: By optimizing resource utilization and enhancing environmental monitoring, AI models on devices will play a pivotal role in achieving sustainable development goals, addressing pressing global challenges such as climate change and resource scarcity [127, 258].

- **Triggering Social Change**: The proliferation of AI technologies is expected to reshape labor markets, foster human–machine collaboration, and enhance human skills and capabilities. However, this transformation will also necessitate careful consideration of potential social inequalities and ethical issues that may arise as a result of these advancements [9, 75].

The development prospects of AI models on devices are vast and promising. Through continuous technological innovation and research, AI models on devices will bring transformative changes across various industries, advancing the process of societal intelligence. Future research and practice should focus on the sustainability and ethical implications of technology to ensure the healthy development of AI technologies for the benefit of all humanity.

## Acknowledgments

This work was supported in part by the Chinese National Research Fund (NSFC) under Grant 62272050 and Grant 62302048; in part by the Guangdong Key Lab of AI and Multi-modal Data Processing, United International College (UIC), Zhuhai under 2023-2024 Grants sponsored by Guangdong Provincial Department of Education; in part by the Institute of Artificial Intelligence and Future Networks (BNU-Zhuhai) and Engineering Center of AI and Future Education, Guangdong Provincial Department of Science and Technology, China; Zhuhai Science-Tech Innovation Bureau under Grant No. 2320004002772, and in part by the Interdisciplinary Intelligence SuperComputer Center of Beijing Normal University (Zhuhai).

## References

[1] Rafat Aghazadeh, Ali Shahidinejad, and Mostafa Ghobaei-Arani. 2023. Proactive content caching in edge computing environment: A review. *Software: Practice and Experience* 53, 3 (2023), 811–855.

[2] Mohammad Al-Rubaie and J. Morris Chang. 2019. Privacy-preserving machine learning: Threats and solutions. *IEEE Security &#x26; Privacy* 17, 2 (2019), 49–58.

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# References

[3] Alibaba. 2018. MNN is a blazing fast, lightweight deep learning framework. GitHub Repository. https://github.com/alibaba/MNN

[4] Abdulmalik Alwarafy, Khaled A. Al-Thelaya, Mohamed Abdallah, Jens Schneider, and Mounir Hamdi. 2020. A survey on security and privacy issues in edge-computing-assisted internet of things. *IEEE Internet of Things Journal* 8, 6 (2020), 4004–4022.

[5] Chioma Virginia Anikwe, Henry Friday Nweke, Anayo Chukwu Ikegwu, Chukwunonso Adolphus Egwuonwu, Fergus Uchenna Onu, Uzoma Rita Alo, and Ying Wah Teh. 2022. Mobile and wearable sensors for data-driven health monitoring system: State-of-the-art and future prospect. *Expert Systems with Applications* 202 (2022), 117362.

[6] Arm. 2018. Arm NN ML software. GitHub Repository. https://github.com/ARM-software/armnn

[7] Jokubas Ausra, Micah Madrid, Rose T. Yin, Jessica Hanna, Suzanne Arnott, Jaclyn A. Brennan, Roberto Peralta, David Clausen, Jakob A. Bakall, Igor R. Efimov, and others. 2022. Wireless, fully implantable cardiac stimulation and recording with on-device computation for closed-loop pacing and defibrillation. *Science Advances* 8, 43 (2022), eabq7469.

[8] Emna Baccour, Naram Mhaisen, Alaa Awad Abdellatif, Aiman Erbad, Amr Mohamed, Mounir Hamdi, and Mohsen Guizani. 2022. Pervasive AI for IoT applications: A survey on resource-efficient distributed artificial intelligence. *IEEE Communications Surveys &#x26; Tutorials* 24, 4 (2022), 2366–2418.

[9] Chunguang Bai, Patrick Dallasega, Guido Orzes, and Joseph Sarkis. 2020. Industry 4.0 technologies assessment: A sustainability perspective. *International Journal of Production Economics* 229 (2020), 107776.

[10] Mohammed Djameleddine Belgoumri, Mohamed Reda Bouadjenek, Sunil Aryal, and Hakim Hacid. 2024. Data quality in edge machine learning: A state-of-the-art survey. arXiv preprint arXiv:2406.02600 (2024).

[11] Thad Benjaponpitak, Meatasit Karakate, and Kunwadee Sripanidkulchai. 2020. Enabling live migration of containerized applications across clouds. In *Proceedings of 2020 IEEE Conference on Computer Communications (INFOCOM’20)*. IEEE, 2529–2538.

[12] Mélanie Bernhardt, Daniel C. Castro, Ryutaro Tanno, Anton Schwaighofer, Kerem C. Tezcan, Miguel Monteiro, Shruthi Bannur, Matthew P. Lungren, Aditya Nori, Ben Glocker, and others. 2022. Active label cleaning for improved dataset quality under resource constraints. *Nature Communications* 13, 1 (2022), 1161.

[13] Simon Elias Bibri, John Krogstie, Amin Kaboli, and Alexandre Alah. 2024. Smarter eco-cities and their leading-edge artificial intelligence of things solutions for environmental sustainability: A comprehensive systematic review. *Environmental Science and Ecotechnology* 19 (2024), 100330.

[14] Andrea Boni, Fernando Pianegiani, and Dario Petri. 2007. Low-power and low-cost implementation of SVMs for smart sensors. *IEEE Transactions on Instrumentation and Measurement* 56, 1 (2007), 39–44.

[15] Tom Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared D. Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, and Amanda Askell, and others. 2020. Language models are few-shot learners. *Advances in Neural Information Processing Systems* 33 (2020), 1877–1901.

[16] Han Cai, Chuang Gan, Tianzhe Wang, Zhekai Zhang, and Song Han. 2019. Once-for-all: Train one network and specialize it for efficient deployment. arXiv preprint arXiv:1908.09791 (2019).

[17] Han Cai, Ji Lin, Yujun Lin, Zhijian Liu, Haotian Tang, Hanrui Wang, Ligeng Zhu, and Song Han. 2022. Enable deep learning on mobile devices: Methods, systems, and applications. *ACM Transactions on Design Automation of Electronic Systems (TODAES)* 27, 3 (2022), 1–50.

[18] Han Cai, Ligeng Zhu, and Song Han. 2018. Proxylessnas: Direct neural architecture search on target task and hardware. arXiv preprint arXiv:1812.00332 (2018).

[19] Nicola Capodieci, Roberto Cavicchioli, Marko Bertogna, and Aingara Paramakuru. 2018. Deadline-based scheduling for GPU with preemption support. In *2018 IEEE Real-time Systems Symposium (RTSS’18)*. IEEE, 119–130.

[20] B. Chander, C. John, L. Warrier, and K. Gopalakrishnan. 2025. Toward trustworthy artificial intelligence (TAI) in the context of explainability and robustness. *ACM Computing Surveys* 57, 6 (2025), 1–49.

[21] Dong Chen, Xudong Cao, Fang Wen, and Jian Sun. 2013. Blessing of dimensionality: High-dimensional feature and its efficient compression for face verification. In *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition*. 3025–3032.

[22] Hanlin Chen, Li’an Zhuo, Baochang Zhang, Xiawu Zheng, Jianzhuang Liu, Rongrong Ji, David Doermann, and Guodong Guo. 2021. Binarized neural architecture search for efficient object recognition. *International Journal of Computer Vision* 129 (2021), 501–516.

[23] Richard J. Chen, Judy J. Wang, Drew F. K. Williamson, Tiffany Y. Chen, Jana Lipkova, Ming Y. Lu, Sharifa Sahai, and Faisal Mahmood. 2023. Algorithmic fairness in artificial intelligence for medicine and healthcare. *Nature Biomedical Engineering* 7, 6 (2023), 719–742.

[24] Wei-Hao Chen, Chunmeng Dou, Kai-Xiang Li, Wei-Yu Lin, Pin-Yi Li, Jian-Hao Huang, Jing-Hong Wang, Wei-Chen Wei, Cheng-Xin Xue, Yen-Cheng Chiu, and others. 2019. CMOS-integrated memristive non-volatile computing-in-memory for AI edge processors. *Nature Electronics* 2, 9 (2019), 420–428.

ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## References

[25] H. Cheng, M. Zhang, and J. Q. Shi. 2024. A survey on deep neural network pruning: taxonomy, comparison, analysis, and recommendations. *IEEE Transactions on Pattern Analysis &#x26; Machine Intelligence* 1 (2024), 1–20.

[26] Pau-Chen Cheng, Wojciech Ozga, Enriquillo Valdez, Salman Ahmed, Zhongshu Gu, Hani Jamjoom, Hubertus Franke, and James Bottomley. 2024. Intel TDX demystified: A top-down approach. *Computing Surveys* 56, 9 (2024), 1–33.

[27] Vladimir Chikin and Mikhail Antiukh. 2022. Data-free network compression via parametric non-uniform mixed precision quantization. In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition*. 450–459.

[28] Krishna Teja Chitty-Venkata and Arun K. Somani. 2022. Neural architecture search survey: A hardware perspective. *Computing Surveys* 55, 4 (2022), 1–36.

[29] Hyungmin Cho, Jeesoo Lee, and Jaejin Lee. 2021. FARNN: FPGA-GPU hybrid acceleration platform for recurrent neural networks. *IEEE Transactions on Parallel and Distributed Systems* 33, 7 (2021), 1725–1738.

[30] Ziaul Choudhury, Shashwat Shrivastava, Lavanya Ramapantulu, and Suresh Purini. 2022. An FPGA overlay for CNN inference with fine-grained flexible parallelism. *ACM Transactions on Architecture and Code Optimization (TACO)* 19, 3 (2022), 1–26.

[31] Y. Chu, D. Feng, Z. Liu, L. Zhang, Z. Zhao, Z. Wang, and X. G. Xia. 2022. A fine-grained attention model for high accuracy operational robot guidance. *IEEE Internet of Things Journal* 10, 2 (2022), 1066–1081.

[32] Yufei Cui, Shangyu Wu, Qiao Li, Antoni B. Chan, Tei-Wei Kuo, and Xue Chun Jason. 2022. Bits-ensemble: Toward light-weight robust deep ensemble by bits-sharing. *IEEE Transactions on Computer-aided Design of Integrated Circuits and Systems* 41, 11 (2022), 4397–4408.

[33] John P. Cunningham and Zoubin Ghahramani. 2015. Linear dimensionality reduction: Survey, insights, and generalizations. *Journal of Machine Learning Research* 16, 1 (2015), 2859–2900.

[34] Yueyue Dai, Ke Zhang, Sabita Maharjan, and Yan Zhang. 2020. Edge intelligence for energy-efficient computation offloading and resource allocation in 5G beyond. *IEEE Transactions on Vehicular Technology* 69, 10 (2020), 12175–12186.

[35] H. J. Damsgaard, A. Grenier, D. Katare, Z. Taufique, S. Shakibhamedan, T. Troccoli, and J. Nurmi. 2024. Adaptive approximate computing in Edge AI and IoT applications. *Journal of Systems Architecture* 150 (2024), 103114.

[36] Lei Deng, Guoqi Li, Song Han, Luping Shi, and Yuan Xie. 2020. Model compression and hardware acceleration for neural networks: A comprehensive survey. *Proceedings of the IEEE* 108, 4 (2020), 485–532.

[37] Shuiguang Deng, Hailiang Zhao, Weijia Fang, Jianwei Yin, Schahram Dustdar, and Albert Y. Zomaya. 2020. Edge intelligence: The confluence of edge computing and artificial intelligence. *IEEE Internet of Things Journal* 7, 8 (2020), 7457–7469.

[38] Sauptik Dhar, Junyao Guo, Jiayi Liu, Samarth Tripathi, Unmesh Kurup, and Mohak Shah. 2021. A survey of on-device machine learning: An algorithms and learning theory perspective. *ACM Transactions on Internet of Things* 2, 3 (2021), 1–49.

[39] Yaoyao Ding, Cody Hao Yu, Bojian Zheng, Yizhi Liu, Yida Wang, and Gennady Pekhimenko. 2023. Hidet: Task-mapping programming paradigm for deep learning tensor programs. In *Proceedings of the 28th ACM International Conference on Architectural Support for Programming Languages and Operating Systems, Volume 2*. 370–384.

[40] Thanh-Toan Do, Tuan Hoang, Victor Pomponiu, Yiren Zhou, Zhao Chen, Ngai-Man Cheung, Dawn Koh, Aaron Tan, and Tan, Suat-Hoon. 2018. Accessible melanoma detection using smartphones and mobile image analysis. *IEEE Transactions on Multimedia* 20, 10 (2018), 2849–2864.

[41] S. Dong, J. Tang, K. Abbas, R. Hou, J. Kamruzzaman, L. Rutkowski, and R. Buyya. 2024. Task offloading strategies for mobile edge computing: A survey. *Computer Networks* 254 (2024), 110791.

[42] Jun Du, Tianyi Lin, Chunxiao Jiang, Qianqian Yang, C. Faouzi Bader, and Zhu Han. 2024. Distributed foundation models for multi-modal learning in 6G wireless networks. *IEEE Wireless Communications* 31, 3 (2024), 20–30.

[43] Sijing Duan, Dan Wang, Ju Ren, Feng Lyu, Ye Zhang, Huaqing Wu, and Xuemin Shen. 2022. Distributed artificial intelligence empowered by end-edge-cloud computing: A survey. *IEEE Communications Surveys &#x26; Tutorials* 25, 1 (2022), 591–624.

[44] Extrapolate. 2024. 10 Best edge computing devices for edge AI applications. https://www.extrapolate.com/blog/top-10-edge-computing-devices-2024

[45] Huan Feng, Kassem Fawaz, and Kang G. Shin. 2017. Continuous authentication for voice assistants. In *Proceedings of the 23rd Annual International Conference on Mobile Computing and Networking*. 343–355.

[46] Jeremy Fowers, Kalin Ovtcharov, Michael Papamichael, Todd Massengill, Ming Liu, Daniel Lo, Shlomi Alkalay, Michael Haselman, Logan Adams, Mahdi Ghandi, and others. 2018. A configurable cloud-scale DNN processor for real-time AI. In *2018 ACM/IEEE 45th Annual International Symposium on Computer Architecture (ISCA’18)*. IEEE, 1–14.

[47] Morgan R. Frank, David Autor, James E. Bessen, Erik Brynjolfsson, Manuel Cebrian, David J. Deming, Maryann Feldman, Matthew Groh, José Lobo, Esteban Moro, and others. 2019. Toward understanding the impact of artificial intelligence on labor. *Proceedings of the National Academy of Sciences* 116, 14 (2019), 6531–6539.

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# References

[48] Yonggan Fu, Haoran You, Yang Zhao, Yue Wang, Chaojian Li, Kailash Gopalakrishnan, Zhangyang Wang, and Yingyan Lin. 2020. Fractrain: Fractionally squeezing bit savings both temporally and spatially for efficient DNN training. *Advances in Neural Information Processing Systems* 33 (2020), 12127–12139.

[49] Chang Gao, Antonio Rios-Navarro, Xi Chen, Shih-Chii Liu, and Tobi Delbruck. 2020. EdgeDRNN: Recurrent neural network accelerator for edge inference. *IEEE Journal on Emerging and Selected Topics in Circuits and Systems* 10, 4 (2020), 419–432.

[50] Shangqian Gao, Feihu Huang, Jian Pei, and Heng Huang. 2020. Discrete model compression with resource constraint for deep neural networks. In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition*. 1899–1908.

[51] Tong Geng, Ang Li, Tianqi Wang, Chunshu Wu, et al. 2020. O3BNN-R: An out-of-order architecture for high-performance and regularized BNN inference. *IEEE Transactions on Parallel and Distributed Systems* 32, 1 (2020), 199–213.

[52] Amir Gholami, Sehoon Kim, Zhen Dong, Zhewei Yao, Michael W. Mahoney, and Kurt Keutzer. 2022. A survey of quantization methods for efficient neural network inference. In *Low-power Computer Vision*. Chapman and Hall/CRC, 291–326.

[53] Bob Gill and Santhosh Rao. 2017. Technology insight: Edge computing in support of the Internet of Things. Gartner Research. Retrieved July 11, 2024 from https://www.gartner.com/en/documents/3759476.

[54] Fateneh Golpayegani, Nanxi Chen, Nima Afraz, Eric Gyamfi, et al. 2024. Adaptation in edge computing: A review on design principles and research challenges. *ACM Transactions on Autonomous and Adaptive Systems* 19, 3 (2024), 1–43.

[55] Taiyuan Gong, Li Zhu, F. Richard Yu, and Tao Tang. 2023. Edge intelligence in intelligent transportation systems: A survey. *IEEE Transactions on Intelligent Transportation Systems* 24, 9 (2023), 8919–8944.

[56] H. Gu, L. Zhao, Z. Han, G. Zheng, and S. Song. 2023. AI-enhanced cloud-edge-terminal collaborative network: Survey, applications, and future directions. *IEEE Communications Surveys &#x26; Tutorials* 26, 2 (2023), 1322–1385.

[57] Lin Gu, Deze Zeng, Jie Hu, Hai Jin, Song Guo, and Albert Y. Zomaya. 2021. Exploring layered container structure for cost efficient microservice deployment. In *IEEE Conference on Computer Communications (IEEE INFOCOM’21)*. IEEE, 1–9.

[58] Miguel A. Guillén, Antonio Llanes, Baldomero Imbernón, et al. 2021. Performance evaluation of edge-computing platforms for the prediction of low temperatures in agriculture using deep learning. *Journal of Supercomputing* 77 (2021), 818–840.

[59] Jialin Guo, Jie Wu, Anfeng Liu, and Neal N. Xiong. 2021. LightFed: An efficient and secure federated edge learning system on model splitting. *IEEE Transactions on Parallel and Distributed Systems* 33, 11 (2021), 2701–2713.

[60] Yundi Guo, Beiji Zou, Ju Ren, Qingqing Liu, Deyu Zhang, and Yaoxue Zhang. 2019. Distributed and efficient object detection via interactions among devices, edge, and cloud. *IEEE Transactions on Multimedia* 21, 11 (2019), 2903–2915.

[61] Chirag Gupta, Arun Sai Suggala, Ankit Goyal, Harsha Vardhan Simhadri, Bhargavi Paranjape, et al. 2017. Protonn: Compressed and accurate KNN for resource-scarce devices. In *International Conference on Machine Learning*. PMLR, 1331–1340.

[62] MyungJoo Ham, Jijoong Moon, Geunsik Lim, et al. 2021. NNStreamer: Efficient and agile development of on-device AI systems. In *2021 IEEE/ACM 43rd International Conference on Software Engineering: Software Engineering in Practice (ICSE-SEIP’21)*. IEEE, 198–207.

[63] MyungJoo Ham, Sangjung Woo, Jaeyun Jung, Wook Song, et al. 2022. Toward among-device AI from on-device AI with stream pipelines. In *Proceedings of the 44th International Conference on Software Engineering: Software Engineering in Practice*. 285–294.

[64] Song Han, Huizi Mao, and William J. Dally. 2016. Deep compression: Compressing deep neural networks with pruning, trained quantization and Huffman coding. In *International Conference on Learning Representations (ICLR’16)*.

[65] Tao Han, Khan Muhammad, Tanveer Hussain, Jaime Lloret, and Sung Wook Baik. 2020. An efficient deep learning framework for intelligent energy management in IoT networks. *IEEE Internet of Things Journal* 8, 5 (2020), 3170–3179.

[66] Brooks Hanson, Shelley Stall, Joel Cutcher-Gershenfeld, Kristina Vrouwenvelder, Christopher Wirz, Yuhan Rao, and Ge Peng. 2023. Garbage in, garbage out: Mitigating risks and maximizing benefits of AI in research. *Nature* 623, 7985 (2023), 28–31.

[67] Yixue Hao, Yiming Miao, Long Hu, M. Shamim Hossain, Ghulam Muhammad, and Syed Umar Amin. 2019. Smart-edge-CoCaCo: AI-enabled smart edge with joint computation, caching, and communication in heterogeneous IoT. *IEEE Network* 33, 2 (2019), 58–64.

[68] Zhiwei Hao, Yong Luo, Zhi Wang, Han Hu, and Jianping An. 2022. CDFKD-MFS: Collaborative data-free knowledge distillation via multi-level feature sharing. *IEEE Transactions on Multimedia* 24 (2022), 4262–4274.

----

ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## References

[69] Vahideh Hayyolalam, Moayad Aloqaily, Öznur Özkasap, and Mohsen Guizani. 2021. Edge intelligence for empowering IoT-based healthcare systems. *IEEE Wireless Communications* 28, 3 (2021), 6–14.

[70] Geoffrey Hinton, Oriol Vinyals, and Jeff Dean. 2015. Distilling the knowledge in a neural network. *arXiv preprint* (2015).

[71] Fred Hohman, Mary Beth Kery, et al. 2024. Model compression in practice: Lessons learned from practitioners creating on-device machine learning experiences. In *Proceedings of the CHI Conference on Human Factors in Computing Systems*. 1–18.

[72] Lu Hou, Zhiqi Huang, Lifeng Shang, Xin Jiang, Xiao Chen, and Qun Liu. 2020. DynaBERT: Dynamic BERT with adaptive width and depth. *Advances in Neural Information Processing Systems* 33 (2020), 9782–9793.

[73] Andrew Howard, Mark Sandler, Grace Chu, Liang-Chieh Chen, Bo Chen, Mingxing Tan, Weijun Wang, Yukun Zhu, et al. 2019. Searching for MobileNetV3. In *Proceedings of the IEEE/CVF International Conference on Computer Vision*. 1314–1324.

[74] Andrew G. Howard, Menglong Zhu, Bo Chen, Dmitry Kalenichenko, Weijun Wang, Tobias Weyand, Marco Andreetto, and Hartwig Adam. 2017. MobileNets: Efficient convolutional neural networks for mobile vision applications. *arXiv preprint* arXiv:1704.04861 (2017).

[75] Haochen Hua, Yutong Li, Tonghe Wang, Nanqing Dong, Wei Li, and Junwei Cao. 2023. Edge computing with artificial intelligence: A machine learning perspective. *Computing Surveys* 55, 9 (2023), 1–35.

[76] Anbu Huang, Yang Liu, Tianjian Chen, Yongkai Zhou, Quan Sun, Hongfeng Chai, and Qiang Yang. 2021. StarFL: Hybrid federated learning architecture for smart urban computing. *ACM Transactions on Intelligent Systems and Technology (TIST)* 12, 4 (2021), 1–23.

[77] Chun-Hsian Huang, Wen-Tung Chen, Yi-Chun Chang, and Kuan-Ting Wu. 2024. An edge and trustworthy AI UAV system with self-adaptivity and hyperspectral imaging for air quality monitoring. *IEEE Internet of Things Journal* 11, 20 (2024), 32572–32584.

[78] Kai Huang and Wei Gao. 2022. Real-time neural network inference on extremely weak devices: Agile offloading with explainable AI. In *Proceedings of the 28th Annual International Conference on Mobile Computing and Networking*. 200–213.

[79] Yakun Huang, Xiuquan Qiao, Jian Tang, Pei Ren, et al. 2020. DeepAdapter: A collaborative deep learning framework for the mobile web using context-aware network pruning. In *IEEE Conference on Computer Communications (IEEE INFOCOM’20)*. IEEE, 834–843.

[80] Yakun Huang, Xiuquan Qiao, Jian Tang, Pei Ren, Ling Liu, Calton Pu, and Junliang Chen. 2021. An integrated cloud-edge-device adaptive deep learning service for cross-platform web. *IEEE Transactions on Mobile Computing* 22, 4 (2021), 1950–1967.

[81] Forrest N. Iandola, Song Han, Matthew W. Moskewicz, Khalid Ashraf, William J. Dally, and Kurt Keutzer. 2016. SqueezeNet: AlexNet-level accuracy with 50x fewer parameters and &#x3C; 0.5 MB model size. *arXiv preprint* arXiv:1602.07360 (2016).

[82] Intel. 2018. OpenVINO Toolkit repository. GitHub Repository (2018). https://github.com/openvinotoolkit/openvino

[83] Nitthilan Kannappan Jayakodi, Janardhan Rao Doppa, and Partha Pratim Pande. 2021. A general hardware and software co-design framework for energy-efficient edge AI. In *2021 IEEE/ACM International Conference on Computer Aided Design (ICCAD’21)*. IEEE, 1–7.

[84] Tianyu Jia, Yuhao Ju, et al. 2020. NCPU: An embedded neural CPU architecture on resource-constrained low power devices for real-time end-to-end performance. In *2020 53rd Annual IEEE/ACM International Symposium on Microarchitecture (MICRO’20)*. IEEE, 1097–1109.

[85] Hai Jin, Dongshan Bai, Dezhong Yao, Yutong Dai, Lin Gu, Chen Yu, and Lichao Sun. 2022. Personalized edge intelligence via federated self-knowledge distillation. *IEEE Transactions on Parallel and Distributed Systems* 34, 2 (2022), 567–580.

[86] Keren J. Kanarik, Wojciech T. Osowiecki, Yu Lu, Dipongkar Talukder, Niklas Roschewsky, Sae Na Park, Mattan Kamon, et al. 2023. Human–machine collaboration for improving semiconductor process development. *Nature* 616, 7958 (2023), 707–711.

[87] D. Katare, D. Perino, J. Nurmi, M. Warnier, M. Janssen, and A. Y. Ding. 2023. A survey on approximate edge AI for energy efficient autonomous driving services. *IEEE Communications Surveys &#x26; Tutorials* 25, 4 (2023), 2714–2754.

[88] Alexandros Kouris, Stylianos I. Venieris, Stefanos Laskaridis, and Nicholas D. Lane. 2022. Fluid batching: Exit-aware preemptive serving of early-exit neural networks on edge NPUs. *arXiv preprint* arXiv:2209.13443 (2022).

[89] Bo-Han Kung, Po-Yuan Hu, Chiu-Chang Huang, Cheng-Che Lee, et al. 2020. An efficient ECG classification system using resource-saving architecture and random forest. *IEEE Journal of Biomedical and Health Informatics* 25, 6 (2020), 1904–1914.

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# References

[90] Matt Kusner, Stephen Tyree, Kilian Weinberger, and Kunal Agrawal. 2014. Stochastic neighbor compression. In International Conference on Machine Learning. PMLR, 622–630.

[91] W. Kwon, S. Kim, M. W. Mahoney, J. Hassoun, K. Keutzer, and A. Gholami. 2022. A fast post-training pruning framework for transformers. Advances in Neural Information Processing Systems 35 (2022), 24101–24116.

[92] Khaled B. Letaief, Yuanming Shi, Jianmin Lu, and Jianhua Lu. 2021. Edge artificial intelligence for 6G: Vision, enabling technologies, and applications. IEEE Journal on Selected Areas in Communications 40, 1 (2021), 5–36.

[93] Bai Li, Yakun Ouyang, Li Li, and Youmin Zhang. 2022. Autonomous driving on curvy roads without reliance on Frenet frame: A Cartesian-based trajectory planning method. IEEE Transactions on Intelligent Transportation Systems 23, 9 (2022), 15729–15741.

[94] Bing Li, Songyun Qu, and Ying Wang. 2021. An automated quantization framework for high-utilization RRAM-based PIM. IEEE Transactions on Computer-aided Design of Integrated Circuits and Systems 41, 3 (2021), 583–596.

[95] Baoting Li, Danqing Zhang, Pengfei Zhao, et al. 2024. DQ-STP: An efficient sparse on-device training processor based on low-rank decomposition and quantization for DNN. IEEE Transactions on Circuits and Systems I: Regular Papers 71, 4 (2024), 1665–1678.

[96] Guangli Li, Xiu Ma, Xueying Wang, Lei Liu, et al. 2020. Fusion-catalyzed pruning for optimizing deep learning on intelligent edge devices. IEEE Transactions on Computer-aided Design of Integrated Circuits and Systems 39, 11 (2020), 3614–3626.

[97] Liangzhi Li, Kaoru Ota, and Mianxiong Dong. 2018. Deep learning for smart industry: Efficient manufacture inspection system with fog computing. IEEE Transactions on Industrial Informatics 14, 10 (2018), 4665–4673.

[98] Qiushi Li, Ju Ren, Xinglin Pan, et al. 2022. ENIGMA: Low-latency and privacy-preserving edge inference on heterogeneous neural network accelerators. In 2022 IEEE 42nd International Conference on Distributed Computing Systems (ICDCS’22). IEEE, 458–469.

[99] Tao Li, Yitao Ma, and Tetsuo Endoh. 2022. From algorithm to module: Adaptive and energy-efficient quantization method for edge artificial intelligence in IoT society. IEEE Transactions on Industrial Informatics 19, 8 (2022), 8953–8964.

[100] Tan Li, Hong Wang, Dongxu Pan, Jiasheng Tan, Junxu Hou, Lingjie Kong, and Jingbo Liu. 2024. A machine vision approach with temporal fusion strategy for concrete vibration quality monitoring. Applied Soft Computing 160 (2024), 111684.

[101] X. Li and S. Bi. 2024. Optimal AI model splitting and resource allocation for device-edge co-inference in multi-user wireless sensing systems. IEEE Transactions on Wireless Communications 23, 9_Part_1 (2024), 11094–11108.

[102] Xiong Li, Shanpeng Liu, Fan Wu, Saru Kumari, and Joel J. P. C. Rodrigues. 2018. Privacy preserving data aggregation scheme for mobile edge computing assisted IoT applications. IEEE Internet of Things Journal 6, 3 (2018), 4755–4763.

[103] Yunsheng Li, Yinpeng Chen, Xiyang Dai, Dongdong Chen, Mengchen Liu, Lu Yuan, Zicheng Liu, Lei Zhang, and Nuno Vasconcelos. 2020. MicroNet: Towards image recognition with extremely low FLOPs. arXiv preprint arXiv:2011.12289 (2020).

[104] Siyuan Liang, Hao Wu, Li Zhen, et al. 2022. Edge YOLO: Real-time intelligent object detection system based on edge-cloud cooperation in autonomous vehicles. IEEE Transactions on Intelligent Transportation Systems 23, 12 (2022), 25345–25360.

[105] Wei Yang Bryan Lim, Jer Shyuan Ng, Zehui Xiong, Jiangming Jin, et al. 2021. Decentralized edge intelligence: A dynamic resource allocation framework for hierarchical federated learning. IEEE Transactions on Parallel and Distributed Systems 33, 3 (2021), 536–550.

[106] Chuan Lin, Guangjie Han, Jinfang Jiang, et al. 2023. Underwater pollution tracking based on software-defined multi-tier edge computing in 6G-based underwater wireless networks. IEEE Journal on Selected Areas in Communications 41, 2 (2023), 491–503.

[107] Mingbao Lin, Rongrong Ji, Yan Wang, Yichen Zhang, Baochang Zhang, Yonghong Tian, and Ling Shao. 2020. Hrank: Filter pruning using high-rank feature map. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 1529–1538.

[108] Zehong Lin, Suzhi Bi, and Ying-Jun Angela Zhang. 2021. Optimizing AI service placement and resource allocation in mobile edge intelligence systems. IEEE Transactions on Wireless Communications 20, 11 (2021), 7257–7271.

[109] Hanxiao Liu, Karen Simonyan, and Yiming Yang. 2018. Darts: Differentiable architecture search. arXiv preprint arXiv:1806.09055 (2018).

[110] Peng Liu, Bozhao Qi, and Suman Banerjee. 2018. EdgeEye: An edge service framework for real-time intelligent video analytics. In Proceedings of the 1st International Workshop on Edge Systems, Analytics and Networking. 1–6.

[111] Shaoshan Liu, Liangkai Liu, Jie Tang, Bo Yu, Yifan Wang, and Weisong Shi. 2019. Edge computing for autonomous driving: Opportunities and challenges. Proceedings of the IEEE 107, 8 (2019), 1697–1716.

[112] Xiaochen Liu, Yurong Jiang, Puneet Jain, and Kyu-Han Kim. 2018. TAR: Enabling fine-grained targeted advertising in retail stores. In Proceedings of the 16th Annual International Conference on Mobile Systems, Applications, and Services. 323–336.

ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## References

[113] Yang Liu, Zhuo Ma, Ximeng Liu, Siqi Ma, and Kui Ren. 2019. Privacy-preserving object detection for medical images with faster R-CNN. *IEEE Transactions on Information Forensics and Security* 17 (2019), 69–84.

[114] Yaqiong Liu, Mugen Peng, Guochu Shou, Yudong Chen, and Siyu Chen. 2020. Toward edge intelligence: Multiaccess edge computing for 5G and Internet of Things. *IEEE Internet of Things Journal* 7, 8 (2020), 6722–6747.

[115] Yinghan Long, Indranil Chakraborty, et al. 2021. Complexity-aware adaptive training and inference for edge-cloud distributed AI systems. In *2021 IEEE 41st International Conference on Distributed Computing Systems (ICDCS’21)*. IEEE, 573–583.

[116] J. Lou, Z. Tang, and W. Jia. 2022. Energy-efficient joint task assignment and migration in data centers: A deep reinforcement learning approach. *IEEE Transactions on Network and Service Management* 20, 2 (2022), 961–973.

[117] J. Lou, Z. Tang, W. Jia, W. Zhao, and J. Li. 2023. Startup-aware dependent task scheduling with bandwidth constraints in edge computing. *IEEE Transactions on Mobile Computing* 23, 2 (2023), 1586–1600.

[118] J. Lou, Z. Tang, S. Zhang, W. Jia, W. Zhao, and J. Li. 2022. Cost-effective scheduling for dependent tasks with tight deadline constraints in mobile edge computing. *IEEE Transactions on Mobile Computing* 22, 10 (2022), 5829–5845.

[119] Chunjie Luo, Xiwen He, Jianfeng Zhan, Lei Wang, Wanling Gao, and Jiahui Dai. 2020. Comparison and benchmarking of AI models and frameworks on mobile devices. *arXiv preprint arXiv:2005.05085* (2020).

[120] Yandong Luo and Shimeng Yu. 2021. AILC: Accelerate on-chip incremental learning with compute-in-memory technology. *IEEE Transactions on Computers* 70, 8 (2021), 1225–1238.

[121] Zhihan Lv, Liang Qiao, and Sahil Verma. 2021. AI-enabled IoT-edge data analytics for connected living. *ACM Transactions on Internet Technology* 21, 4 (2021), 1–20.

[122] B. Lyu, S. Wen, K. Shi, and T. Huang. 2021. Multiobjective reinforcement learning-based neural architecture search for efficient portrait parsing. *IEEE Transactions on Cybernetics* 53, 2 (2021), 1158–1169.

[123] Bo Lyu, Hang Yuan, Longfei Lu, and Yunye Zhang. 2021. Resource-constrained neural architecture search on edge devices. *IEEE Transactions on Network Science and Engineering* 9, 1 (2021), 134–142.

[124] Huirong Ma, Zhi Zhou, Xiaoxi Zhang, and Xu Chen. 2023. Toward carbon-neutral edge computing: Greening edge AI by harnessing spot and future carbon markets. *IEEE Internet of Things Journal* 10, 18 (2023), 16637–16649.

[125] Lichuan Ma, Qingqi Pei, Lu Zhou, Haojin Zhu, Licheng Wang, and Yusheng Ji. 2020. Federated data cleaning: Collaborative and privacy-preserving data cleaning for edge intelligence. *IEEE Internet of Things Journal* 8, 8 (2020), 6757–6770.

[126] Ningning Ma, Xiangyu Zhang, Hai-Tao Zheng, and Jian Sun. 2018. Shufflenet v2: Practical guidelines for efficient CNN architecture design. In *Proceedings of the European Conference on Computer Vision (ECCV’18)*. 116–131.

[127] Y. Mao, X. Yu, K. Huang, Y. J. A. Zhang, and J. Zhang. 2024. Green Edge AI: A contemporary survey. *Proceedings of the IEEE* 112, 7 (2024), 880–911.

[128] Alberto Marchisio, Beatrice Bussolino, Alessio Colucci, Maurizio Martina, Guido Masera, and Muhammad Shafique. 2020. Q-capsnets: A specialized framework for quantizing capsule networks. In *2020 57th ACM/IEEE Design Automation Conference (DAC’20)*. IEEE, 1–6.

[129] Sven Mayer, Gierad Laput, and Chris Harrison. 2020. Enhancing mobile voice assistants with Worldgaze. In *Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems*. 1–10.

[130] Ninareh Mehrabi, Fred Morstatter, Nripsuta Saxena, Kristina Lerman, and Aram Galstyan. 2021. A survey on bias and fairness in machine learning. *ACM Computing Surveys (CSUR)* 54, 6 (2021), 1–35.

[131] S. Mehta and M. Rastegari. 2022. MobileViT: Light-weight, general-purpose, and mobile-friendly vision transformer. In *International Conference on Learning Representations*. Retrieved from https://openreview.net/forum?id=vh-0sUt8HlG

[132] Alexander Menshchikov, Dmitrii Shadrin, Viktor Prutyanov, Daniil Lopatkin, Sergey Sosnin, et al. 2021. Real-time detection of hogweed: UAV platform empowered by deep learning. *IEEE Transactions on Computers* 70, 8 (2021), 1175–1188.

[133] Christian Meurisch and Max Mühlhäuser. 2021. Data protection in AI services: A survey. *ACM Computing Surveys (CSUR)* 54, 2 (2021), 1–38.

[134] Fengchun Miao, Wayne Holmes, Ronghuai Huang, et al. 2021. AI and Education: A Guidance for Policymakers. *Unesco Publishing*.

[135] Qinghai Miao, Wenbo Zheng, Yisheng Lv, Min Huang, Wenwen Ding, and Fei-Yue Wang. 2023. DAO to HANOI via DeSci: AI paradigm shifts from AlphaGo to ChatGPT. *IEEE/CAA Journal of Automatica Sinica* 10, 4 (2023), 877–897.

[136] Microsoft. 2019. ONNX runtime: Cross-platform, high performance ML inferencing and training accelerator. GitHub Repository (2019). https://github.com/microsoft/onnxruntime

[137] R. Mishra, A. Gupta, and H. P. Gupta. 2021. Locomotion mode recognition using sensory data with noisy labels: A deep learning approach. *IEEE Transactions on Mobile Computing* 22, 6 (2021), 3460–3471.

[138] Sparsh Mittal. 2019. A survey on optimized implementation of deep learning models on the Nvidia Jetson platform. *Journal of Systems Architecture* 97 (2019), 428–442.

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# References

[139] Marissa Mock, Suzanne Edavettal, Christopher Langmead, and Alan Russell. 2023. AI can help to speed up drug discovery–but only if we give it the right data. *Nature* 621, 7979 (2023), 467–470.

[140] Alejandro Moran, Christiam F. Frasser, Miquel Roca, and Josep L. Rossello. 2019. Energy-efficient pattern recognition hardware with elementary cellular automata. *IEEE Transactions on Computers* 69, 3 (2019), 392–401.

[141] Chamin Morikawa, Michihiro Kobayashi, Masaki Satoh, Yasuhiro Kuroda, Teppei Inomata, Hitoshi Matsuo, Takeshi Miura, and Masaki Hilaga. 2021. Image and video processing on mobile devices: A survey. *Visual Computer* 37, 12 (2021), 2931–2949.

[142] F. Mou, J. Lou, Z. Tang, Y. Wu, W. Jia, Y. Zhang, and W. Zhao. 2025. Adaptive digital twin migration in vehicular edge computing and networks. *IEEE Transactions on Vehicular Technology* 74, 3 (2025), 4839–4854. https://doi.org/10.1109/TVT.2024.3492349

[143] M. G. Sarwar Murshed, Christopher Murphy, Daqing Hou, Nazar Khan, Ganesh Ananthanarayanan, and Faraz Hussain. 2021. Machine learning at the network edge: A survey. *ACM Computing Surveys (CSUR)* 54, 8 (2021), 1–37.

[144] Yasser Nabil, Hesham ElSawy, Suhail Al-Dharrab, Hassan Mostafa, and Hussein Attia. 2022. Data aggregation in regular large-scale IoT networks: Granularity, reliability, and delay tradeoffs. *IEEE Internet of Things Journal* 9, 18 (2022), 17767–17784.

[145] Jianyuan Ni, Raunak Sarbajna, Yang Liu, et al. 2022. Cross-modal knowledge distillation for vision-to-sensor action recognition. In *2022 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP’22)*. IEEE, 4448–4452.

[146] Xuefei Ning, Guangjun Ge, Wenshuo Li, Zhenhua Zhu, Yin Zheng, Xiaoming Chen, et al. 2021. FTT-NAS: Discovering fault-tolerant convolutional neural architecture. *ACM Transactions on Design Automation of Electronic Systems (TODAES)* 26, 6 (2021), 1–24.

[147] Wei Niu, Xiaolong Ma, Sheng Lin, Shihao Wang, Xuehai Qian, Xue Lin, Yanzhi Wang, and Bin Ren. 2020. PatDNN: Achieving real-time DNN execution on mobile devices with pattern-based weight pruning. In *Proceedings of the 25th International Conference on Architectural Support for Programming Languages and Operating Systems*. 907–922.

[148] Anant V. Nori, Rahul Bera, et al. 2021. Reduct: Keep it close, keep it cool!: Efficient scaling of DNN inference on multi-core CPUs with near-cache compute. In *2021 ACM/IEEE 48th Annual International Symposium on Computer Architecture (ISCA’21)*. IEEE, 167–180.

[149] Jose Nunez-Yanez and Neil Howard. 2021. Energy-efficient neural networks with near-threshold processors and hardware accelerators. *Journal of Systems Architecture* 116 (2021), 102062.

[150] NVIDIA. 2017. NVIDIA® TensorRT™, an SDK for high-performance deep learning inference. GitHub Repository (2017). https://github.com/NVIDIA/TensorRT

[151] Anton Obukhov, Maxim Rakhuba, Stamatios Georgoulis, Menelaos Kanakis, Dengxin Dai, and Luc Van Gool. 2020. T-basis: A compact representation for neural networks. In *International Conference on Machine Learning*. PMLR, 7392–7404.

[152] Francesco Paissan, Alberto Ancilotto, and Elisabetta Farella. 2022. PhiNets: A scalable backbone for low-power AI at the edge. *ACM Transactions on Embedded Computing Systems* 21, 5 (2022), 1–18.

[153] Jihong Park, Sumudu Samarakoon, Mehdi Bennis, and Mérouane Debbah. 2019. Wireless network intelligence at the edge. *Proceedings of the IEEE* 107, 11 (2019), 2204–2239.

[154] A. Paszke, S. Gross, F. Massa, A. Lerer, J. Bradbury, G. Chanan, T. Killeen, Z. Lin, N. Gimelshein, L. Antiga, A. Desmaison, A. Köpf, E. Yang, Z. DeVito, M. Raison, A. Tejani, S. Chilamkurthy, B. Steiner, L. Fang, J. Bai, and S. Chintala. 2019. PyTorch: an imperative style, high-performance deep learning library. In *Proceedings of the 33rd International Conference on Neural Information Processing Systems*. Curran Associates Inc. Red Hook, NY, USA, 1–12.

[155] Biagio Peccerillo, Mirco Mannino, et al. 2022. A survey on hardware accelerators: Taxonomy, trends, challenges, and perspectives. *Journal of Systems Architecture* 129 (2022), 102561.

[156] Giacomo Pedretti, Catherine E. Graves, Sergey Serebryakov, Ruibin Mao, Xia Sheng, Martin Foltin, Can Li, and John Paul Strachan. 2021. Tree-based machine learning performed in-memory with memristive analog CAM. *Nature Communications* 12, 1 (2021), 5806.

[157] István Pelle, János Czentye, János Dóka, and Balázs Sonkoly. 2020. Dynamic latency control of serverless applications operated on AWS Lambda and Greengrass. In *Proceedings of the SIGCOMM’20 Poster and Demo Sessions*. 33–34.

[158] Flavio Ponzina, Marco Rios, Alexandre Levisse, Giovanni Ansaloni, and David Atienza. 2023. Overflow-free compute memories for edge AI acceleration. *ACM Transactions on Embedded Computing Systems* 22, 5s (2023), 1–23.

[159] Rachmad Vidya Wicaksana Putra, et al. 2020. Fspinn: An optimization framework for memory-efficient and energy-efficient spiking neural networks. *IEEE Transactions on Computer-aided Design of Integrated Circuits and Systems* 39, 11 (2020), 3601–3613.

[160] Aji Gautama Putrada, Maman Abdurohman, Doan Perdana, and Hilal Hudan Nuha. 2023. Q8KNN: A novel 8-bit KNN quantization method for edge computing in smart lighting systems with NodeMCU. In *Intelligent Systems Conference*. Springer, 598–615.

ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## References

[161] Tie Qiu, Jiancheng Chi, Xiaobo Zhou, Zhaolong Ning, Mohammed Atiquzzaman, and Dapeng Oliver Wu. 2020. Edge computing in industrial internet of things: Architecture, advances and challenges. *IEEE Communications Surveys &#x26; Tutorials* 22, 4 (2020), 2462–2488.

[162] Md. Abdur Rahman and M. Shamim Hossain. 2021. An internet-of-medical-things-enabled edge computing framework for tackling COVID-19. *IEEE Internet of Things Journal* 8, 21 (2021), 15847–15854.

[163] Mohammad Saidur Rahman, Ibrahim Khalil, et al. 2020. Towards privacy preserving AI based composition framework in edge networks using fully homomorphic encryption. *Engineering Applications of Artificial Intelligence* 94 (2020), 103737.

[164] Qiqi Ren, Omid Abbasi, Gunes Karabulut Kurt, Halim Yanikomeroglu, and Jian Chen. 2022. Caching and computation offloading in high altitude platform station (HAPS) assisted intelligent transportation systems. *IEEE Transactions on Wireless Communications* 21, 11 (2022), 9010–9024.

[165] Arman Roohi, Shadi Sheikhfaal, Shaahin Angizi, Deliang Fan, and Ronald F. DeMara. 2019. ApGAN: Approximate GAN for robust low energy learning from imprecise components. *IEEE Transactions on Computers* 69, 3 (2019), 349–360.

[166] Drew Roselli, Jeanna Matthews, and Nisha Talagala. 2019. Managing bias in AI. In *Companion Proceedings of the 2019 World Wide Web Conference*. 539–544.

[167] Mark Sandler, Andrew Howard, Menglong Zhu, Andrey Zhmoginov, and Liang-Chieh Chen. 2018. Mobilenetv2: Inverted residuals and linear bottlenecks. In *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition*. 4510–4520.

[168] Iqbal H. Sarker, Mohammed Moshiul Hoque, Md. Kafil Uddin, and Tawfeeq Alsanoosy. 2021. Mobile data science and intelligent apps: Concepts, AI-based modeling and research directions. *Mobile Networks and Applications* 26, 1 (2021), 285–303.

[169] Mahadev Satyanarayanan, Paramvir Bahl, Ramón Caceres, and Nigel Davies. 2009. The case for VM-based cloudlets in mobile computing. *IEEE Pervasive Computing* 8, 4 (2009), 14–23.

[170] Jiawei Shao and Jun Zhang. 2020. Bottlenet++: An end-to-end approach for feature compression in device-edge co-inference systems. In *2020 IEEE International Conference on Communications Workshops (ICC Workshops’20)*. IEEE, 1–6.

[171] Yi Sheng, Junhuan Yang, Yawen Wu, Kevin Mao, Yiyu Shi, Jingtong Hu, Weiwen Jiang, and Lei Yang. 2022. The larger the fairer? Small neural networks can achieve fairness for edge devices. In *Proceedings of the 59th ACM/IEEE Design Automation Conference*. 163–168.

[172] Yuanming Shi, Kai Yang, Tao Jiang, Jun Zhang, and Khaled B. Letaief. 2020. Communication-efficient edge AI: Algorithms and systems. *IEEE Communications Surveys &#x26; Tutorials* 22, 4 (2020), 2167–2191.

[173] You Shi, Changyan Yi, Bing Chen, Chenze Yang, Kun Zhu, and Jun Cai. 2022. Joint online optimization of data sampling rate and preprocessing mode for edge–cloud collaboration-enabled industrial IoT. *IEEE Internet of Things Journal* 9, 17 (2022), 16402–16417.

[174] Md. Maruf Hossain Shuvo, Syed Kamrul Islam, Jianlin Cheng, and Bashir I. Morshed. 2022. Efficient acceleration of deep learning inference on resource-constrained edge devices: A review. *Proceedings of the IEEE* 111, 1 (2022), 42–91.

[175] V. Sindhwani, T. N. Sainath, and S. Kumar. 2015. Structured transforms for small-footprint deep learning. In *Proceedings of the 29th International Conference on Neural Information Processing Systems-Volume 2*. 3088–3096.

[176] Tuomo Sipola, Janne Alatalo, Tero Kokkonen, and Mika Rantonen. 2022. Artificial intelligence in the IoT era: A review of edge AI hardware and software. In *2022 31st Conference of Open Innovations Association (FRUCT’22)*. IEEE, 320–331.

[177] Yushan Siriwardhana, Pawani Porambage, Madhusanka Liyanage, and Mika Ylianttila. 2021. A survey on mobile augmented reality with 5G mobile edge computing: Architectures, applications, and technical aspects. *IEEE Communications Surveys &#x26; Tutorials* 23, 2 (2021), 1160–1192.

[178] Mengkai Song, Zhibo Wang, Zhifei Zhang, Yang Song, Qian Wang, Ju Ren, and Hairong Qi. 2020. Analyzing user-level privacy attack against federated learning. *IEEE Journal on Selected Areas in Communications* 38, 10 (2020), 2430–2444.

[179] Ayush Srivastava, Oshin Dutta, Jigyasa Gupta, Sumeet Agarwal, and Prathosh AP. 2021. A variational information bottleneck based method to compress sequential networks for human action recognition. In *Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision*. 2745–2754.

[180] Y. Sui, M. Yin, Y. Gong, and B. Yuan. 2024. Co-exploring structured sparsification and low-rank tensor decomposition for compact DNNs. *IEEE Transactions on Neural Networks and Learning Systems*. 1–13. https://doi.org/10.1109/TNNLS.2024.3408099

[181] Douglas H. Summerville, Kenneth M. Zach, and Yu Chen. 2015. Ultra-lightweight deep packet anomaly detection for Internet of Things devices. In *2015 IEEE 34th International Performance Computing and Communications Conference (IPCCC’15)*. IEEE, 1–8.

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# References

[182] Danfeng Sun, Jia Wu, Jian Yang, and Huifeng Wu. 2021. Intelligent data collaboration in heterogeneous-device IoT platforms. ACM Transactions on Sensor Networks (TOSN) 17, 3 (2021), 1–17.

[183] Yang Sun, Fajie Yuan, Min Yang, Guoao Wei, Zhou Zhao, and Duo Liu. 2020. A generic network compression framework for sequential recommender systems. In Proceedings of the 43rd International ACM SIGIR Conference on Research and Development in Information Retrieval. 1299–1308.

[184] Thierry Tambe, Coleman Hooper, Lillian Pentecost, Tianyu Jia, En-Yu Yang, Marco Donato, Victor Sanh, Paul Whatmough, Alexander M. Rush, David Brooks, and others. 2021. EdgeBERT: Sentence-level energy optimizations for latency-aware multi-task NLP inference. In 54th Annual IEEE/ACM International Symposium on Microarchitecture (MICRO-54). 830–844.

[185] T. Tambe, E. Y. Yang, G. G. Ko, Y. Chai, C. Hooper, M. Donato, and G. Y. Wei. 2022. A 16-nm SoC for noise-robust speech and NLP edge AI inference with Bayesian sound source separation and attention-based DNNs. IEEE Journal of Solid-State Circuits 58, 2 (2022), 569–581.

[186] Chong Min John Tan and Mehul Motani. 2020. Dropnet: Reducing neural network complexity via iterative pruning. In International Conference on Machine Learning. PMLR, 9356–9366.

[187] Mingxing Tan and Quoc Le. 2019. Efficientnet: Rethinking model scaling for convolutional neural networks. In International Conference on Machine Learning. PMLR, 6105–6114.

[188] Mingxing Tan and Quoc Le. 2021. EfficientNetV2: Smaller models and faster training. In International Conference on Machine Learning. PMLR, 10096–10106.

[189] Qinqin Tang, Renchao Xie, Fei Richard Yu, Tianjiao Chen, Ran Zhang, Tao Huang, and Yunjie Liu. 2022. Collective deep reinforcement learning for intelligence sharing in the internet of intelligence-empowered edge computing. IEEE Transactions on Mobile Computing 22, 11 (2022), 6327–6342.

[190] Zhiqing Tang, Weijia Jia, Xiaojie Zhou, Wenmian Yang, and Yongjian You. 2020. Representation and reinforcement learning for task scheduling in edge computing. IEEE Transactions on Big Data 8, 3 (2020), 795–808.

[191] Z. Tang, J. Lou, and W. Jia. 2022. Layer dependency-aware learning scheduling algorithms for containers in mobile edge computing. IEEE Transactions on Mobile Computing 22, 6 (2022), 3444–3459.

[192] Z. Tang, F. Mou, J. Lou, W. Jia, Y. Wu, and W. Zhao. 2023. Multi-user layer-aware online container migration in edge-assisted vehicular networks. IEEE/ACM Transactions on Networking 32, 2 (2023), 1807–1822.

[193] Z. Tang, F. Mou, J. Lou, W. Jia, Y. Wu, and W. Zhao. 2024. Joint resource overbooking and container scheduling in edge computing. IEEE Transactions on Mobile Computing 23, 12 (2024), 10903–10917.

[194] Z. Tang, F. Zhang, X. Zhou, W. Jia, and W. Zhao. 2022. Pricing model for dynamic resource overbooking in edge computing. IEEE Transactions on Cloud Computing 11, 2 (2022), 1970–1984.

[195] Gemma Team, Morgane Riviere, Shreya Pathak, Pier Giuseppe Sessa, Cassidy Hardin, Surya Bhupatiraju, Léonard Hussenot, Thomas Mesnard, Bobak Shahriari, Alexandre Ramé, and others. 2024. Gemma 2: Improving open language models at a practical size. arXiv preprint arXiv:2408.00118 (2024).

[196] Tencent. 2017. NCNN is a high-performance neural network inference framework optimized for the mobile platform. GitHub Repository (2017). https://github.com/Tencent/ncnn

[197] Shreshth Tuli, Nipam Basumatary, Sukhpal Singh Gill, Mohsen Kahani, Rajesh Chand Arya, Gurpreet Singh Wander, and Rajkumar Buyya. 2020. HealthFog: An ensemble deep learning based smart healthcare system for automatic diagnosis of heart diseases in integrated IoT and fog computing environments. Future Generation Computer Systems 104 (2020), 187–200.

[198] Frederick Tung and Greg Mori. 2018. Clip-Q: Deep network compression learning by in-parallel pruning-quantization. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 7873–7882.

[199] K. Ullrich, E. Meeds, and M. Welling. 2017. Soft Weight-sharing for neural network compression. In International Conference on Learning Representations.

[200] Laurens Van Der Maaten, Eric Postma, Jaap Van den Herik, and others. 2009. Dimensionality reduction: A comparative. Journal of Machine Learning Research 10, 66-71 (2009), 13.

[201] Laura Verde, Nadia Brancati, Giuseppe De Pietro, Maria Frucci, and Giovanna Sannino. 2021. A deep learning approach for voice disorder detection for smart connected living environments. ACM Transactions on Internet Technology (TOIT) 22, 1 (2021), 1–16.

[202] Gaurav Verma, Yashi Gupta, Abid M. Malik, and Barbara Chapman. 2021. Performance evaluation of deep learning compilers for edge inference. In 2021 IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW’21). IEEE, 858–865.

[203] Kuan Wang, Zhijian Liu, Yujun Lin, Ji Lin, and Song Han. 2019. HAQ: Hardware-aware automated quantization with mixed precision. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 8612–8620.

[204] Ke Wang, Ship Peng Xu, Chien-Ming Chen, SK Hafizul Islam, Mohammad Mehedi Hassan, Claudio Savaglio, Pasquale Pace, and Gianluca Aloi. 2021. A trusted consensus scheme for collaborative learning in the edge AI computing domain. IEEE Network 35, 1 (2021), 204–210.

ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## References

[205] Rui Wang, Zhihua Wei, Haoran Duan, Shouling Ji, Yang Long, and Zhen Hong. 2022. EfficientTDNN: Efficient architecture search for speaker recognition. *IEEE/ACM Transactions on Audio, Speech, and Language Processing* 30 (2022), 2267–2279.

[206] Siqi Wang, Gayathri Anantanarayanan, Yifan Zeng, Neeraj Goel, Anuj Pathania, and Tulika Mitra. 2019. High-throughput CNN inference on embedded ARM big.LITTLE multicore processors. *IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems* 39, 10 (2019), 2254–2267.

[207] Shiqiang Wang, Tiffany Tuor, Theodoros Salonidis, Kin K. Leung, Christian Makaya, Ting He, and Kevin Chan. 2018. When edge meets learning: Adaptive control for resource-constrained distributed machine learning. In *IEEE Conference on Computer Communications (IEEE INFOCOM’18)*. IEEE, 63–71.

[208] Shibo Wang, Shusen Yang, and Cong Zhao. 2020. SurveilEdge: Real-time video query based on collaborative cloud-edge deep learning. In *IEEE Conference on Computer Communications (IEEE INFOCOM’20)*. IEEE, 2519–2528.

[209] Tian Wang, Haoxiong Ke, Xi Zheng, Kun Wang, Arun Kumar Sangaiah, and Anfeng Liu. 2019. Big data cleaning based on mobile edge computing in industrial sensor-cloud. *IEEE Transactions on Industrial Informatics* 16, 2 (2019), 1321–1329.

[210] Yang Wang, Dazheng Deng, Leibo Liu, Shaojun Wei, and Shouyi Yin. 2022. PL-NPU: An energy-efficient edge-device DNN training processor with posit-based logarithm-domain computing. *IEEE Transactions on Circuits and Systems I: Regular Papers* 69, 10 (2022), 4042–4055.

[211] Ying Wang, Huawei Li, and Xiaowei Li. 2016. Re-architecting the on-chip memory sub-system of machine-learning accelerator for embedded devices. In *2016 IEEE/ACM International Conference on Computer-Aided Design (ICCAD’16)*. IEEE, 1–6.

[212] Yang Wang, Yubin Qin, Leibo Liu, and Shouyi Yin. 2022. SWPU: A 126.04 TFLOPS/W edge-device sparse DNN training processor with dynamic sub-structured weight pruning. *IEEE Transactions on Circuits and Systems I: Regular Papers* 69, 10 (2022), 4014–4027.

[213] Pete Warden and Daniel Situnayake. 2019. *TinyML: Machine Learning with TensorFlow Lite on Arduino and Ultra-low-power Microcontrollers*. O’Reilly Media.

[214] Liangjian Wen, Xuanyang Zhang, Haoli Bai, and Zenglin Xu. 2020. Structured pruning of recurrent neural networks through neuron selection. *Neural Networks* 123 (2020), 134–141.

[215] Steven Euijong Whang, Yuji Roh, Hwanjun Song, and Jae-Gil Lee. 2023. Data collection and quality challenges in deep learning: A data-centric AI perspective. *VLDB Journal* 32, 4 (2023), 791–813.

[216] Bichen Wu, Xiaoliang Dai, Peizhao Zhang, Yanghan Wang, Fei Sun, Yiming Wu, Yuandong Tian, Peter Vajda, Yangqing Jia, and Kurt Keutzer. 2019. FFNet: Hardware-aware efficient ConvNet design via differentiable neural architecture search. In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition*. 10734–10742.

[217] Junru Wu, Yue Wang, Zhenyu Wu, Zhangyang Wang, Ashok Veeraraghavan, and Yingyan Lin. 2018. Deep k-means: Re-training and parameter sharing with harder cluster assignments for compressing deep convolutions. In *International Conference on Machine Learning*. PMLR, 5363–5372.

[218] Yirui Wu, Haifeng Guo, Chinmay Chakraborty, Mohammad R. Khosravi, Stefano Berretti, and Shaohua Wan. 2022. Edge computing driven low-light image dynamic enhancement for object detection. *IEEE Transactions on Network Science and Engineering* 10, 5 (2022), 3086–3098.

[219] Ming Xia, Zunkai Huang, Li Tian, Hui Wang, Victor Chang, Yongxin Zhu, and Songlin Feng. 2021. SparkNoC: An energy-efficiency FPGA-based accelerator using optimized lightweight CNN for edge computing. *Journal of Systems Architecture* 115 (2021), 101991.

[220] Xin Xia, Hongzhi Yin, Junliang Yu, Qinyong Wang, Guandong Xu, and Quoc Viet Hung Nguyen. 2022. On-device next-item recommendation with self-supervised knowledge distillation. In *Proceedings of the 45th International ACM SIGIR Conference on Research and Development in Information Retrieval*. 546–555.

[221] Yecheng Xiang and Hyoseung Kim. 2019. Pipelined data-parallel CPU/GPU scheduling for multi-DNN real-time inference. In *2019 IEEE Real-Time Systems Symposium (RTSS’19)*. IEEE, 392–405.

[222] Jinbo Xiong, Mingfeng Zhao, Md. Zakirul Alam Bhuiyan, Lei Chen, and Youliang Tian. 2019. An AI-enabled three-party game framework for guaranteed data privacy in mobile edge crowdsensing of IoT. *IEEE Transactions on Industrial Informatics* 17, 2 (2019), 922–933.

[223] Dianlei Xu, Tong Li, Yong Li, Xiang Su, Sasu Tarkoma, Tao Jiang, Jon Crowcroft, and Pan Hui. 2020. Edge intelligence: Architectures, challenges, and applications. *arXiv preprint arXiv:2003.12172* (2020).

[224] Dianlei Xu, Tong Li, Yong Li, Xiang Su, Sasu Tarkoma, Tao Jiang, Jon Crowcroft, and Pan Hui. 2021. Edge intelligence: Empowering intelligence to the edge of network. *Proceedings of the IEEE* 109, 11 (2021), 1778–1837.

[225] Jiajun Xu, Zhiyuan Li, Wei Chen, Qun Wang, Xin Gao, Qi Cai, and Ziyuan Ling. 2024. On-device language models: A comprehensive review. *arXiv preprint arXiv:2409.00088* (2024).

----

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*



# References

[226] Zirui Xu, Fuxun Yu, Zhuwei Qin, Chenchen Liu, and Xiang Chen. 2020. Directx: Dynamic resource-aware CNN reconfiguration framework for real-time mobile applications. *IEEE Transactions on Computer-aided Design of Integrated Circuits and Systems* 40, 2 (2020), 246–259.

[227] Bufang Yang, Lixing He, Neiwen Ling, Zhenyu Yan, Guoliang Xing, Xian Shuai, Xiaozhe Ren, and Xin Jiang. 2023. EdgeFM: Leveraging foundation model for open-set learning on the edge. In *Proceedings of the 21st ACM Conference on Embedded Networked Sensor Systems*. 111–124.

[228] Huanrui Yang, Minxue Tang, Wei Wen, Feng Yan, Daniel Hu, Ang Li, Hai Li, and Yiran Chen. 2020. Learning low-rank deep neural networks via singular vector orthogonality regularization and singular value sparsification. In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops*. 678–679.

[229] Honghong Yang, Jinming Wen, Xiaojun Wu, Li He, and Shahid Mumtaz. 2019. An efficient edge artificial intelligence multipedestrian tracking method with rank constraint. *IEEE Transactions on Industrial Informatics* 15, 7 (2019), 4178–4188.

[230] Qing Yang and Hai Li. 2020. BitSystolic: A 26.7 TOPS/W 2b~ 8b NPU with configurable data flows for edge devices. *IEEE Transactions on Circuits and Systems I: Regular Papers* 68, 3 (2020), 1134–1145.

[231] Haoran You, Baopu Li, Shi Huihong, Yonggan Fu, and Yingyan Lin. 2022. ShiftAddNAS: Hardware-inspired search for more accurate and efficient neural networks. In *International Conference on Machine Learning*. PMLR, 25566–25580.

[232] Yunxuan Yu, Tiandong Zhao, Kun Wang, and Lei He. 2020. Light-OPU: An FPGA-based overlay processor for lightweight convolutional neural networks. In *Proceedings of the 2020 ACM/SIGDA International Symposium on Field-programmable Gate Arrays*. 122–132.

[233] Jinliang Yuan, Chen Yang, Dongqi Cai, Shihe Wang, Xin Yuan, Zeling Zhang, Xiang Li, Dingge Zhang, Hanzi Mei, Xianqing Jia, and others. 2024. Mobile foundation model as firmware. In *Proceedings of the 30th Annual International Conference on Mobile Computing and Networking*. 279–295.

[234] Muhammad Zawish, Nouman Ashraf, Rafay Iqbal Ansari, and Steven Davy. 2022. Energy-aware AI-driven framework for edge-computing-based IoT applications. *IEEE Internet of Things Journal* 10, 6 (2022), 5013–5023.

[235] Liekang Zeng, Shengyuan Ye, Xu Chen, and Yang Yang. 2024. Implementation of big AI models for wireless networks with collaborative edge computing. *IEEE Wireless Communications* 31, 3 (2024), 50–58.

[236] Peng Zeng, Bofeng Pan, Kim-Kwang Raymond Choo, and Hong Liu. 2020. MMDA: Multidimensional and multidirectional data aggregation for edge computing-enhanced IoT. *Journal of Systems Architecture* 106 (2020), 101713.

[237] Xiao Zeng, Kai Cao, and Mi Zhang. 2017. MobileDeepPill: A small-footprint mobile deep learning system for recognizing unconstrained pill images. In *Proceedings of the 15th Annual International Conference on Mobile Systems, Applications, and Services*. 56–67.

[238] Daochen Zha, Zaid Pervaiz Bhat, Kwei-Herng Lai, Fan Yang, Zhimeng Jiang, Shaochen Zhong, and Xia Hu. 2023. Data-centric artificial intelligence: A survey. *arXiv preprint arXiv:2303.10158* (2023).

[239] Chunhui Zhang, Xiaoming Yuan, Qianyun Zhang, Guangxu Zhu, Lei Cheng, and Ning Zhang. 2022. Toward tailored models on private AIoT devices: Federated direct neural architecture search. *IEEE Internet of Things Journal* 9, 18 (2022), 17309–17322.

[240] Jun Zhang and Khaled B. Letaief. 2019. Mobile edge intelligence and computing for the internet of vehicles. *Proceedings of the IEEE* 108, 2 (2019), 246–261.

[241] Jie Zhang, Xiaolong Wang, Dawei Li, and Yalin Wang. 2018. Dynamically hierarchy revolution: Dirnet for compressing recurrent neural network on mobile devices. In *Proceedings of the 27th International Joint Conference on Artificial Intelligence*. 3089–3096.

[242] Linfeng Zhang, Jiebo Song, Anni Gao, Jingwei Chen, Chenglong Bao, and Kaisheng Ma. 2019. Be your own teacher: Improve the performance of convolutional neural networks via self distillation. In *Proceedings of the IEEE/CVF International Conference on Computer Vision*. 3713–3722.

[243] Xiangyu Zhang, Xinyu Zhou, Mengxiao Lin, and Jian Sun. 2018. Shufflenet: An extremely efficient convolutional neural network for mobile devices. In *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition*. 6848–6856.

[244] Yongmin Zhang, Xiaolong Lan, Ju Ren, and Lin Cai. 2020. Efficient computing resource sharing for mobile edge-cloud computing networks. *IEEE/ACM Transactions on Networking* 28, 3 (2020), 1227–1240.

[245] Yidan Zhang, Zhiyuan Yan, Xian Sun, Wenhui Diao, Kun Fu, and Lei Wang. 2021. Learning efficient and accurate detectors with dynamic knowledge distillation in remote sensing imagery. *IEEE Transactions on Geoscience and Remote Sensing* 60 (2021), 1–19.

[246] Lei Zhao, Youtao Zhang, and Jun Yang. 2020. SCA: A secure CNN accelerator for both training and inference. In *2020 57th ACM/IEEE Design Automation Conference (DAC’20)*. IEEE, 1–6.

[247] Pu Zhao, Wei Niu, Geng Yuan, Yuxuan Cai, Hsin-Hsuan Sung, Shaoshan Liu, Sijia Liu, Xipeng Shen, Bin Ren, Yanzhi Wang, and others. 2021. Brief industry paper: Towards real-time 3D object detection for autonomous vehicles with pruning search. In *2021 IEEE 27th Real-time and Embedded Technology and Applications Symposium (RTAS’21)*. IEEE, 425–428.

ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.



# Empowering Edge Intelligence: A Comprehensive Survey on On-Device AI Models

## Abstract
The rapid advancement of artificial intelligence (AI) has led to the emergence of edge intelligence, where AI models are deployed directly on devices at the edge of the network. This survey provides a comprehensive overview of on-device AI models, focusing on their architecture, optimization techniques, applications, and the challenges faced in their deployment. We categorize existing research into several key areas, including model compression, hardware acceleration, and privacy-preserving techniques. Furthermore, we discuss future research directions and the potential impact of edge intelligence on various industries.

## 1. Introduction
The proliferation of Internet of Things (IoT) devices has created a demand for intelligent systems that can process data locally, reducing latency and bandwidth usage. On-device AI models enable real-time decision-making and enhance user privacy by minimizing data transmission to the cloud. This paper aims to survey the current state of on-device AI models, highlighting their significance in edge computing environments.

## 2. On-Device AI Model Architectures
On-device AI models can be categorized based on their architecture, including:

- **Convolutional Neural Networks (CNNs)**: Widely used for image processing tasks.
- **Recurrent Neural Networks (RNNs)**: Suitable for sequential data analysis.
- **Transformer Models**: Gaining popularity for natural language processing tasks.

### 2.1 Model Compression Techniques
To deploy AI models on resource-constrained devices, various compression techniques are employed:

- **Pruning**: Removing less significant weights from the model.
- **Quantization**: Reducing the precision of the model weights.
- **Knowledge Distillation**: Training a smaller model to replicate the behavior of a larger model.

### 2.2 Hardware Acceleration
The performance of on-device AI models can be significantly enhanced through hardware acceleration. Techniques include:

- **Using specialized processors**: Such as GPUs, TPUs, and FPGAs.
- **Optimizing software frameworks**: Like TensorFlow Lite and PyTorch Mobile.

## 3. Applications of On-Device AI
On-device AI models have found applications across various domains, including:

- **Healthcare**: For real-time patient monitoring and diagnostics.
- **Smart Homes**: Enabling automation and energy management.
- **Autonomous Vehicles**: Supporting navigation and obstacle detection.

## 4. Challenges in Deployment
Despite the advantages, several challenges hinder the widespread adoption of on-device AI models:

- **Resource Constraints**: Limited computational power and memory on edge devices.
- **Data Privacy**: Ensuring user data is protected during processing.
- **Model Generalization**: Maintaining performance across diverse environments.

## 5. Future Directions
Future research should focus on:

- **Developing more efficient algorithms**: To improve model performance without compromising accuracy.
- **Enhancing privacy-preserving techniques**: Such as federated learning.
- **Exploring new hardware architectures**: Tailored for AI workloads.

## 6. Conclusion
On-device AI models represent a significant advancement in the field of artificial intelligence, enabling intelligent processing at the edge. This survey highlights the current state of research, applications, and challenges, paving the way for future innovations in edge intelligence.

## References
- [248] Tianming Zhao et al. (2022). A survey of deep learning on mobile devices: Applications, optimizations, challenges, and research opportunities. *Proceedings of the IEEE*, 110(3), 334–354.
- [249] Yue Zheng et al. (2024). A review on edge large language models: Design, execution, and applications. *arXiv preprint arXiv:2410.11845*.
- [250] Hong Zhong et al. (2023). Secure edge computing-assisted video reporting service in 5G-enabled vehicular networks. *IEEE Transactions on Information Forensics and Security*, 18, 3774–3786.
- [251] Qihua Zhou et al. (2021). Octo: INT8 training with loss-aware compensation and backward quantization for tiny on-device learning. In *USENIX Annual Technical Conference*, 177–191.
- [252] Qihua Zhou et al. (2021). On-device learning systems for edge intelligence: A software and hardware synergy perspective. *IEEE Internet of Things Journal*, 8(15), 11916–11934.
- [253] Sha Zhou and Lei Zhang. (2018). Smart home electricity demand forecasting system based on edge computing. In *2018 IEEE 9th International Conference on Software Engineering and Service Science (ICSESS’18)*, 164–167.
- [254] W. Zhou et al. (2019). Discovering and understanding the security hazards in the interactions between IoT devices, mobile apps, and clouds on smart home platforms. In *28th USENIX Security Symposium (USENIX security 19)*, 1133–1150.
- [255] Yan Zhou et al. (2020). Review of research on lightweight convolutional neural networks. In *2020 IEEE 5th Information Technology and Mechatronics Engineering Conference (ITOEC’20)*, 1713–1720.
- [256] Zhi Zhou et al. (2019). Edge intelligence: Paving the last mile of artificial intelligence with edge computing. *Proceedings of the IEEE*, 107(8), 1738–1762.
- [257] Bingzhao Zhu et al. (2020). ResOT: Resource-efficient oblique trees for neural signal classification. *IEEE Transactions on Biomedical Circuits and Systems*, 14(4), 692–704.
- [258] Sha Zhu et al. (2021). Green AI for IIoT: Energy efficient intelligent edge computing for industrial internet of things. *IEEE Transactions on Green Communications and Networking*, 6(1), 79–88.
- [259] Sha Zhu et al. (2022). Energy-efficient artificial intelligence of things with intelligent edge. *IEEE Internet of Things Journal*, 9(10), 7525–7532.
- [260] Barret Zoph et al. (2018). Learning transferable architectures for scalable image recognition. In *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition*, 8697–8710.

Received 23 July 2023; revised 7 December 2024; accepted 7 March 2025

*ACM Comput. Surv., Vol. 57, No. 9, Article 228. Publication date: April 2025.*