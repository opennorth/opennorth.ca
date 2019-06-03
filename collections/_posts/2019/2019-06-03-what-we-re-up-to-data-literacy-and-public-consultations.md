---
published: true
layout: post
title: 'What we''re up to: Data literacy and public consultations '
categories:
  - applied research lab
image: 2019-06-03-data-computer.jpg
author: Hannah Ker
description: >-
  Reflections on developing data literacy for civil servants implementing public
  consultations
---
Data literacy is an increasingly important skill for individuals and organizations across many sectors. Before anyone can make decisions based on data (ie. the “data-driven decision making” paradigm that we hear so much about), they first need to be able to open, read, process, analyze, and summarize that data. 

OpenNorth’s work in the domain of public consultation has highlighted a need for increased data literacy in public officials who are involved in consultation activities. We recently worked with the Privy Council Office in the Government of Canada to develop an online learning tool to address this need.  

## Data and public consultation? Data literacy and public consultation?

As discussed in a [past blog post](https://www.opennorth.ca/2019/03/22/what-happened-to-my-feedback), public consultation can be conceptualized as a data collection activity where feedback and comments from citizens are the data of interest. Thus, tasks such as developing data entry protocols, data cleaning, and conducting reproducible analysis become an important part of public consultation activities. 

There are a wealth of resources available online for those looking to build a foundation in data literacy. Less common, however, are resources tailored specifically to the context of public consultation. This context requires additional competencies, such as stakeholder engagement and policy development that interact with data literacy skills in unique ways. The interpersonal element of public consultation must not be lost in efforts to collect high quality data. Public consultation may also take place in complex bureaucratic environments to which data management activities must be adapted.

## Building an online learning tool

A recent project with the Privy Council Office gave us the opportunity to build a prototype for an online learning tool on data literacy for public consultation. This learning tool was designed for public officials engaging in consultation activities in the Canadian Federal Government. 

We created an outline for a series of five learning modules and implemented the first two modules on an online platform. These two modules focused on introducing the concept of public consultation results as data, and basic data preprocessing techniques and considerations. 

Thanks to the flexibility of the web, we were able to experiment with different levels of user interactivity as we developed these learning modules. We wanted users to be engaged with the learning material by exploring example datasets and performing basic data exploration and cleaning tasks on their own. However, we also wanted to ensure that users followed a structured curriculum and clearly-defined learning path. We balanced these two objectives by creating a learning experience that was organized according to a clearly-defined path, but also offered many opportunities to branch off from this path an engage in applied, self-guided learning. 

Example datasets from past Government of Canada public consultations (available as open data, [for example](https://open.canada.ca/data/en/dataset/5e9433bf-2334-463a-bd48-03ba53a7051c)) provided plenty of opportunities to demonstrate basic preprocessing needs such as restructuring, removing duplicate responses, and filtering data. We also implemented interactive multiple choice quizzes where users could test their knowledge of each learning module’s subject matter.

In addition to creating educational material for public officials, this project also required us to think about needs such as the Web Content Accessibility Guidelines ([WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)) and how to structure the text content on the website such that it could be easily translated into French (we decided to use a JSON structure to populate all website text, including button and heading text, and extract this using JQuery). Throughout the process of designing our web interface it became apparent that trade-offs between interactivity and accessibility were necessary. In some cases, expectations for the interface were not compatible with the WCAG 2.0 guidelines. Therefore, a collaborative and iterative design process was important. 

We also conducted basic user testing to ensure the website could be navigated intuitively by our intended audience. The feedback we received from our user testing revealed how design elements, such as button positioning, text layout, and colour palette, are an important part of the online learning experience - testers had their own preferences when it came to web design.

## Final reflections

The overarching aim of this project was to highlight how technical competencies are an important part of open, transparent government. Data is increasingly becoming part of policy development and public engagement activities; a shift that demands new skills of today’s public officials. Technical competencies such as restructuring spreadsheets and computationally analyzing large datasets may no longer be just for computer scientists and IT specialists. 

What are other sectors or use cases where data literacy is becoming increasingly important?
