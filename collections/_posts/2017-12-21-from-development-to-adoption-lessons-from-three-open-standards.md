---
published: true
layout: post
title: 'From Development to Adoption: Lessons from Three Open Standards'
author: OpenNorth
---
We are pleased to announce the report for a standards documentation project under the Open Data Institute (UK). The ODI recently launched their new R&D programme to advance data innovation, framed under [six themes](https://theodi.org/news/odi-secures-6m-to-advance-data-innovation). This project fell under the standards theme, with the aim to research the process of developing open standards for data and document best practices. We were selected as one Canadian organization among a group of organizations, including [W3C](https://www.w3.org/), [Porism](https://porism.com/), [Open Data Services Coop](http://opendataservices.coop/), to undertake documentation of our respective experiences in creating or maintaining data standards.

OpenNorth documented three standards for this project: 

- **Open511 [www.open511.org](www.open511.org)**
A data standard for real-time road event data such as various types of roadworks, road closures, and cultural events. Implemented via API as JSON or XML. Designed as a lighter format for government-to-government and government-to-citizen communication of road closures. For more information, see the documentation website, and see Province of British Columbia’s DriveBC dataset for a live implementation.
- **Popolo [www.popoloproject.com](www.popoloproject.com)**
A data standard for legislative data such as elected representatives, debates, motions, votes, and speeches. Designed to facilitate interoperability between app developers in civil society and civic tech community. Adopted by civil society around the world, particularly for parliamentary monitoring. For more information, see the documentation website. 
- **Represent [represent.opennorth.ca](represent.opennorth.ca)**
A data standard for basic elected representative information, such as name, political party, address, and other contact details. Implemented as a CSV, and separate from Popolo. It was designed to standardise the data collected through OpenNorth’s Represent API, which collects and makes searchable every elected representative in Canada, at all levels of government. For more information.


Open511 was the created and led by Stéphane Guidoin (formerly our Director of Produce and Service Development), while Popolo and Represent were the brainchild of our former Director and Co-founder, James McKinney. To document the three standards, we research public documentation and interviewed the two lead standards developers, and a conducted a supplementary interview with Michael Mulley, a developer who created the working implementation of Open511 (and who worked on Represent API prior to the CSV schema).
Positive Feedback in Standards Adoption?
One idea that arose from the interviews and documentation was a potential positive feedback loop of standards adoption.

### Positive Feedback in Standards Adoption?

One idea that arose from the interviews and documentation was a potential positive feedback loop of standards adoption.

<img src="https://s3.amazonaws.com/public.citizenbudget.com/uploads/custom/opennorth/Standards%20Adoption%20Graph.png">

This is best exemplified in Represent. Represent API is OpenNorth’s free, publicly available, open source service that was developed to solve one specific problem: the fragmentation of information on elected representatives across Canada. In Canada, we have multiple levels of political jurisdiction (and therefore political representatives), to contend with. This includes the House of Commons, Provincial level legislative bodies (such as the Quebec National Assembly), and city councils. Since, lists of representatives at each of these levels is neither centralised nor standardised, with each legislative body maintaining a list on its own website, simply finding out who the political representatives are for a given geographic location is difficult. Represent API was created to collect all of this information and enable the public to search for their own elected representatives based on location.

From the development and maintenance of the API, it quickly became clear that adjusting scripts after every election (and by-election) and website modification, was quickly becoming unsustainable. To address this issue, a simple [CSV schema](https://represent.opennorth.ca/government/) was developed to encourage standardisation of this data from the outset. The schema was designed to be as simple and easy to understand and implement as possible. Comprised of just 21 fields, 7 of which are recommended fields, the schema does not have hierarchical relationships between terms and can be implemented in a single CSV file.

By making the standard this simple, we were able to get a number of adopters onboard and outputting their lists of elected representatives on their own open data portals. We observed that the incentive to adopt comes from two main vectors: the public (and civil society), and other governments. Demonstrating existing demand and documenting impact for a service, can help a government see the potential impact of their own compliance. Meanwhile, showing evidence of adoption by a potential adopter’s peers (i.e. neighbouring government jurisdictions) that they are contributing to consensus, rather than fragmentation. OpenNorth does all of this through documentation of impact by our Represent users, a simple compliance procedure, and targeted outreach supported by the feedback we receive. Since Represent’s data is based on authoritative, not crowdsourced data, maintaining timeliness of updates is a priority. Through government compliance with the schema, the public receives data that is structured better, while Represent is more easily updated. All of this feeds back into the quality of Represent in what is potentially a positive feedback loop (which ends with 100% coverage). Once the ecosystem has reached a certain inflection point (where the largest or most important data providers are in compliance), diminishing returns may be felt from increased adoption.

### Results and Recommendations

A number recommendations arose from our research, which we list below:

- Create standards based on demand for data
- Create simple, lightweight standards
- Involve official collaborators as early on as possible and maintain their engagement throughout
- Involved domain experts and IT professionals
- Create software tools to ease adoption (e.g. data validation, data conversion)
- Seek software publisher support (e.g. large enterprise platforms used by government)
- Factor in costs of outreach, facilitation, and maintenance


Standards are created to be adopted, not just read. Therefore, standards developers may need to think about, and plan, the entire adoption process. They may need to take on roles including: facilitation and convening of collaborative development, decision making authorities for conflict resolution, and public relations and outreach to potential adopters. In the case where the standard developer is not the same as the domain expert or end user of the standard, convening of stakeholders is particularly important to ensure the eventual standard is relevant to both data suppliers and end users.

### Project Outputs and Outcomes

A final report was created and delivered to the ODI. [You can read the full report here](https://drive.google.com/file/d/1MnuQKJ3N_V7y4ZCJi8uPfNJWY1iGuGYD/view)

We also attended a gathering of our fellow project members at a workshop in London, hosted by the ODI. Here we discussed our different experiences and models for adoption. We presented our findings of our three standards in the presentation embedded below:

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRRzl6yELnSbsh1y2eABfkrxuXF5nEl-FkS-woWZ4wSUsnwobc7RTuEmUu-gn6ILE2OsuAu0V79q7kF/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Finally, for those of you wishing for a more soothing standards experience, check out our podcast! We recorded a short summary of findings for your listening pleasure.

<audio controls>
  <source src="https://s3.amazonaws.com/public.citizenbudget.com/uploads/custom/opennorth/OpenNorth%20podcast.mp3" type="audio/mpeg">
  TEST
</audio>
  
We would like to thank the Open Data Institute for their support, feedback, and facilitation of the project.
