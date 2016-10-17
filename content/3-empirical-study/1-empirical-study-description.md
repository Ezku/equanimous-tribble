
# Empirical study description {#empirical-study-description}

This thesis uses empirical data collected ethnographically from daily activities in a software development team. Section \ref{research-context} describes the research context and the researcher's role in it. The environment of the daily as well as roles taken and tools used are detailed in section \ref{daily-setting}.

## Research context {#research-context}

The research was conducted as a case study of a Helsinki-based software startup in the mobile B2B industry with a headcount of approximately 20 people and a development team consisting of at most 10 at the time of the research. The development team's habit of gathering around a collection of a virtual kanban system every morning was taken as an opportunity to learn about the daily method as practiced within the context of a lean workflow.

The researcher took part in the development team's dailies having two roles. The role of an ordinary team member necessitated normal interaction with the team within the context of the daily. The role of a researcher involved recording the proceedings and logging observations directly after the event.

Attendees' overall roles in the team could be divided into four categories: *developers* working on the product directly, *quality assurance* responsible for testing the product and verifying that requirements are met, *product owners* capable of making backlog priorizations, and *management* whose opinion carries great weight in the way of conducting operations (such as the daily itself). Developers and quality assurance were by convention compelled to take part (at the absence of a good reason to the contrary), whereas product owners and management were not. <!-- Roles, *e.g.* that of product owner and management, may overlap; in this case the more situationally relevant label will be used per transcribed interaction. -->


## Daily setting, roles, tools and activities {#daily-setting}

The development team daily occurred every day after a short whole-company standup meeting scheduled to start at 10 in the morning. The context of the observed dailies was a meeting room equipped with a table, a couch, a TV screen to which laptop computers could be plugged to, and two whiteboards. Attendees would customarily be seated for the duration of the daily. There was not enough room for more than 8 people to sit, so in the case of meetings which more than that amount attended, some would be forced to stand or choose to sit on the floor. On the table, two people would have their laptops open: the *driver* and the *secretary*.

The driver and the secretary are the only explicit roles defined in the context of the observed daily. Both may be seen as facilitators for the daily, in that the driver presents a de facto agenda and the secretary ensures that items on the agenda, or any emerging ones, reach an outcome satisfactory for the team.

The driver connects their laptop to the TV screen, enabling the team to view their virtual kanban system and work items. Throughout the daily the driver will work through the kanban system and work items according to how the team's discussion proceeds. Usually, the driver will walk the team through boards and their work items in the order that they appear in. The team might make callouts and request that the driver deviate from this, and if the team's discussion diverges to a work item not currently shown the driver will attempt to accommodate.

The secretary puts into effect decisions made by the team. This can take the form of manipulating tasks on the boards, making modifications to board structure, and making meeting notes. Functioning in the role of the secretary necessitates that either the team make their decisions explicit or that the secretary intervene to clarify the outcomes from any discussion.

The most important tool made use of was Asana[^asana], a web-based task management application in which the team had encoded their workflow. It views work as *projects*, which consist of *tasks*, which can be delineated into segments with *labels*. Tasks consist of a title and a description, may be assigned to individuals, may be given tags, and may be commented on. The team modelled their workflow with the use of projects and labels and moved tasks in between them. According to the example on use of kanban from section \ref{ci}, in this study Asana projects were taken to be virtual kanban boards, segments were taken to be phases in the process and tasks were understood as kanban tokens for work items.

In addition, meeting minutes were published through Flowdock[^flowdock], a company-internal instant messaging and group chat application. The application structures communication in terms of *flows*, persistent message logs with a certain topic. One of these flows was dedicated for meeting minutes from dailies and used by the secretary during the daily.

Tools for sharing knowledge in the physical environment, such as post-its or the whiteboard present in the room, were available but seldom touched.

\begin{figure}
\includegraphics[width=\textwidth]{images/asana-overview.png}
\caption{Asana. On the bottom left is a list of the team's kanban boards. On the right, a single board with its labels and tasks can be seen.}
\end{figure}

[^asana]: [www.asana.com](http://www.asana.com)
[^flowdock]: [www.flowdock.com](http://www.flowdock.com)
