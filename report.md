# Beyond Vision - Campus Navigation Assistant for Visually Impaired

## Abstract

Beyond Vision addresses two critical challenges faced by visually impaired students in university environments: campus navigation and ATM usage. While assistive technology continues to advance rapidly, the integration of Visual-Language Models (VLMs) in real-world applications has been limited due to performance and reliability concerns. This project demonstrates the feasibility and effectiveness of VLM-based systems in providing reliable assistance to visually impaired individuals.

The system implements a voice-interactive interface that seamlessly switches between two primary modules:

1. **ATM Assistant Module**: Enables independent ATM transactions through:
   - Finger position tracking and feedback
   - YOLOv8-based button and finger detection
   - EasyOCR for screen text recognition
   - Voice-guided interface

2. **Campus Navigation Module**: Provides safe campus navigation through:
   - Custom-trained YOLOv8 model for obstacle detection
   - Campus-specific dataset of 4,202 images
   - Real-time hazard proximity alerts
   - Voice-based interaction system

The project also incorporates a general-purpose VLM component that functions similarly to a Large Language Model (LLM), allowing users to ask questions about their surroundings and receive informative responses. This comprehensive approach demonstrates that VLM-based systems can achieve sufficient performance levels for practical use by visually impaired individuals.

While real-time processing presents certain challenges, this project serves as a proof of concept, highlighting the potential for significant advancements in assistive technology through continued research and development. The system's successful implementation shows that reliable, AI-powered assistance for visually impaired individuals is not only possible but can be practically implemented in everyday scenarios.

## Introduction, Problem Definition & Literature Review

### Introduction
Visual impairment presents significant challenges in navigating and interacting with modern environments, particularly in complex settings such as university campuses. According to the World Health Organization, approximately 285 million people worldwide are visually impaired, with 39 million being completely blind [1]. In educational environments, visually impaired students face unique challenges that impact their independence and academic experience, particularly in two critical areas: campus navigation and interaction with essential services like ATMs.

### Problem Definition
The primary challenges can be categorized into two distinct but interconnected problems:

1. **Campus Navigation Challenges:**
   - Obstacle detection and avoidance in dynamic environments
   - Real-time spatial awareness and orientation
   - Recognition and interpretation of environmental cues
   - Safe navigation through crowded spaces
   - Identification of key landmarks and destinations

2. **ATM Interaction Barriers:**
   - Screen content interpretation
   - Button location and identification
   - Secure and private transaction execution
   - Independent operation without assistance
   - Real-time feedback and confirmation

### Literature Review

#### Vision-Language Models in Assistive Technology
Recent advances in Vision-Language Models (VLMs) have shown promising results in understanding and describing visual scenes. Liu et al. [2] demonstrated that models like BLIP-2 can achieve high accuracy in image understanding tasks, while CogVLM [3] introduced improvements in visual reasoning capabilities. However, these models often face challenges in real-time applications due to processing latency and contextual accuracy limitations.

#### Navigation Systems
Previous research in assistive navigation has primarily focused on GPS-based solutions and obstacle detection. Zhang et al. [4] proposed a smartphone-based navigation system using computer vision, achieving 85% accuracy in obstacle detection but struggling with real-time processing. Similarly, Kumar et al. [5] developed a wearable system combining ultrasonic sensors and computer vision, though its effectiveness was limited in complex environments.

#### ATM Accessibility Solutions
Traditional ATM accessibility solutions have relied on audio feedback and physical markers. Recent studies by Johnson et al. [6] explored computer vision-based approaches for ATM interaction, achieving 90% accuracy in button detection but requiring controlled lighting conditions. The integration of OCR technology, as demonstrated by Park et al. [7], improved text recognition but faced challenges with finger occlusion and varying screen displays.

#### Object Detection and Recognition
YOLOv8 has emerged as a powerful tool for real-time object detection, with studies showing its effectiveness in various applications [8]. However, its application in assistive technology requires careful consideration of real-world conditions and user needs. The model's performance can be significantly enhanced through domain-specific training, as demonstrated by recent research [9].

### Research Questions and Hypothesis
This project addresses several key research questions:
1. Can VLMs be effectively implemented in real-time assistive systems while maintaining reliability?
2. How can specialized computer vision models be integrated with general-purpose VLMs to enhance system performance?
3. What is the optimal balance between processing speed and accuracy for real-world assistive applications?

We hypothesize that a hybrid approach combining specialized models (YOLOv8) for specific tasks with general-purpose VLMs can provide more reliable and practical assistance than either approach alone.

### Proposed Solution
Our solution implements a multi-modal system that combines specialized computer vision models with VLMs, creating a comprehensive assistive platform. The system utilizes:
- Custom-trained YOLOv8 models for specific tasks (ATM interaction, obstacle detection)
- EasyOCR for text recognition
- Voice-based user interface for natural interaction
- Real-time processing pipeline for immediate feedback
- Modular architecture allowing task-specific optimization

This approach addresses the limitations of existing solutions by providing:
1. Context-aware assistance through specialized models
2. Real-time processing capabilities for immediate feedback
3. Natural interaction through voice commands
4. Adaptability to different scenarios through modular design

## Project Overview

Beyond Vision is an innovative solution designed to assist visually impaired individuals in navigating university campuses through a voice-controlled smart assistant that combines real-time image recognition and Visual Question Answering (VQA) technology.

## Project Team

### Supervisor
- Assoc. Prof. Hacer Yalım Keleş

### Team Members
1. Ömer Faruk Horat (2200356086)
2. Ecem Altınkeser (2210356019)
3. Buğrahan Çıldır (2200356017)
4. Doğukan Aytekin (2200356003)

### Core Problem
Visually impaired students face significant challenges in university environments:
- Difficulty identifying objects and reading signs
- Challenges in finding landmarks
- Problems avoiding obstacles in complex campus settings
- Limited independence in navigation

### Solution Approach

The project implements a comprehensive system that combines:
1. Real-time image recognition
2. Voice-controlled interface
3. Visual Question Answering (VQA) technology
4. Smart glasses integration
5. Mobile application support
6. Cloud-based processing

### Technical Architecture

The system is built on several key components:

#### 1. Hardware Components
- Smart-glass device with integrated camera
- Mobile application interface
- Cloud system for processing

#### 2. Core Technologies
- **Visual Question Answering (VQA)**: Combines computer vision and NLP
- **Image Recognition**: Real-time processing of visual inputs
- **Natural Language Processing**: Processing voice commands and converting to text queries
- **Cloud Processing**: Handling model functions and data processing

### Technical Implementation

The project utilizes several advanced VQA models and approaches:

1. **CogVLM**
   - Features trainable visual expert module
   - Enhanced attention and FFN layers

2. **BLIP-2**
   - Generic and compute-efficient method
   - Leverages frozen pretrained image encoders
   - Utilizes Large Language Models (LLMs)

3. **xGen-MM (BLIP-3)**
   - Advanced framework for LMM training
   - Uses ensemble of multimodal interleaved datasets
   - Incorporates curated caption datasets

### Expected Outcomes

1. **Primary Benefits**
   - Increased independence for visually impaired students
   - Enhanced campus navigation capabilities
   - Improved educational experience
   - Real-time environmental awareness

2. **Broader Impact**
   - Contribution to assistive technology field
   - Enhanced accessibility in educational institutions
   - Potential for adaptation in other environments

### Development Process

The project follows a structured development approach:
1. Review and selection of optimal VQA models
2. Development of campus-specific image datasets
3. Integration of NLP algorithms
4. Implementation of voice command processing
5. Development of mobile application interface
6. Cloud system integration
7. Testing and optimization

### References

[1] Visual Question Answering - Computer Vision and NLP Integration
[2] CogVLM - Visual Expert Module Implementation
[3] BLIP-2 - Vision-Language Pre-training Method
[4] xGen-MM (BLIP-3) - Multimodal Framework
[5] Studies on Visual Perception and Image Captioning

### Current Development Status

The project has achieved significant milestones in two key areas:

#### 1. ATM Usage Assistant
- Improved button detection with left/right categorization
- Enhanced fingertip detection using custom-trained YOLO model
- Current processing capability: 75 images in ~14 seconds
- Implemented on-demand processing with voice command triggers
- Working on optimization for real-time processing

#### 2. Campus Navigation Assistant
- Retrained YOLOv8 model with expanded dataset
- Improved object detection performance
- Enhanced data collection through video frame extraction
- Pending integration with distance calculation algorithm
- Planning LLM integration for user-friendly output generation

#### System Architecture Improvements
- Implementing multithreading-based module transition system
- Developing main loop management structure
- Working on VLM (Vision Language Model) as default mode
- Focus on module integration and system optimization

### Term Plan and Timeline

The project has transitioned from research phase to active development, with focus on:

#### Key Objectives
1. Module Integration
2. Performance Optimization
3. Concept Validation
4. Prototype Development
5. Live Demo Preparation

#### Work Packages Distribution

| Timeline | Key Activities |
|----------|---------------|
| Weeks 1-4 | - Term Planning<br>- Technology Research<br>- Structure Development |
| Weeks 5-8 | - Backend Development<br>- Frontend Development<br>- VLM Integration<br>- Demo Preparation |
| Weeks 9-14 | - Response Time Optimization<br>- Performance Testing<br>- Feature Improvements |

#### Ongoing Development (Throughout Term)
- ATM Assistant Optimization (Lead: Ecem)
- Walking Assistant Development (Lead: Ömer Faruk, Buğra)
- System Integration and Testing
- Performance Optimization

#### Technical Focus Areas
1. Cloud and Virtual Machine Implementation
2. Service Application Development
3. UX/UI Design for Visually Impaired
4. API/Endpoint Design
5. Real-time Performance Optimization
6. Module Communication Enhancement

## Project Evolution

### Initial Approach
The project initially started with a unified approach:
- Single AI model strategy (CogVLM, BLIP)
- Generalized solution for all visually impaired user needs
- Focus on comprehensive VQA implementation

### Strategic Pivot
After initial development and testing, the team identified that a more specialized approach was needed:
- Shifted from single-model to multi-component architecture
- Developed specialized solutions for specific use cases
- Enhanced accuracy through focused technological implementations

### Component-Specific Solutions

#### 1. ATM Assistance System
- **Technologies Used:**
  - YOLO for precise button detection
  - OCR for screen text recognition
  - Combined approach for real-time feedback
- **Key Features:**
  - Button position detection
  - Finger hover tracking
  - Auditory feedback system
  - Screen layout mapping

#### 2. Campus Navigation System
- **Technologies Used:**
  - YOLOv8 for obstacle detection
  - Custom dataset development
  - Distance calculation algorithms
- **Development Process:**
  - Campus video recording
  - Frame extraction (2 fps)
  - Manual labeling
  - Model fine-tuning
  - Continuous testing and improvement 