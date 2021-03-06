
# Improvement in practice {#improvement-in-practice}

In what we have described so far, the theme of improvement has been most central. Practitioners of Scrum wished to discover a way of doing things better than plan-driven methods allowed for, and lean principles direct a practitioner not only towards one solution but a way of doing things such that change is not merely tolerated but enabled and supported. In this vein we could go deeper and attempt to find out what it is that enables a practice to support continuous improvement. In the following we will draw from the theoretical toolbox of the practice-based approach in an attempt to find the necessary means of description for such a process and the means by which continuous improvement happens.

## Improvement as a social process of innovation {#process-of-innovation}

Innovation can be taken as ideas, practices or artefacts perceived to be new to whomever is adopting them \citep{zaltman1973innovations,rogers1971communication}. Crucially, innovation may also be applied to the process through which new ideas are generated. Even though the word innovation is often attached to concrete objects, the key feature is simply novelty \citep{slappendel1996perspectives}.

The improvement of ways of working requires taking novel approaches distinct from how things are done in the present state. Should we take software development to be a collaborative activity where innovations are required to deliver novel solutions, we may also consider the process of delivering or aiding the delivery thereof as something that may be innovated on. Innovation in social interactions has been studied in *innovative knowledge communities*. \citet{hakkarainen2004communities} outline three different perspectives on them:

1. **SECI model** \citep{nonaka1995knowledge}. Knowledge is something that can be explicated and objectified. Innovation happens by transforming tacit knowledge to explicit.
2. **Activity theory** \citep{engestrom1999perspectives}. Knowledge is embedded within practices. Overcoming tensions inherent in the activity is a source of innovation.
3. **Conceptual artefacts** \citep{bereiter2002education}. Knowledge is expanded by manipulation of shared conceptual artefacts. The ability to extend and create novel artefacts is the source of innovation.

Out of these three perspectives, it is Engestrom's that is best suited for describing improvement in ways of working. If knowledge is embedded in practices \citep{engestrom1999perspectives}, then innovation must be the development of those practices. Engestrom is specifically looking at communities where innovation is the development of practices with a shared object of activity, which meshes well with the idea of an agile team working with a kanban system. Also directly relating to the goal of the study, \citet{engestrom2000activity} claims activity theory may be used as a tool for analyzing and redesigning work. It is stated to be especially applicable when such learning occurs which has not been given as the objective from the outside, such as by management, but instead stems from contradictory demands experienced within the community \citep{engestrom2001expansive,engestrom2010studies}.

The most prominent conjunction of activity theory and software development so far has been in the field of human-computer interaction research, for example \citet{kuutti1996activity} and \citet{kaptelinin1996activity}. These works mainly take interest on what happens in the interface between human and computer, in the context of an activity system, instead of on what people do together. \citet{barthelmess2002view} and \citet{adler2005evolving}, however, take an activity theoretical view on the process of software development and show that the perspective is applicable for describing some of the industry's most problematic features. In a study on software development environments, \citet{barthelmess2002view} motivate the use of activity theory by characterising the process of software development as collaborative effort around complex, intangible artefacts. In doing so, they claim to make a break from typically "production-oriented" descriptions of software engineering. \citet{adler2005evolving} characterise software development as non-routine knowledge-work, the nature of which is affected by the model used to describe it. Activity theoretical concepts are used to describe how a specific modelling may add to the challenge of responding to contradictory demands \citep[p. 421]{adler2005evolving}.

The activity theoretical approach appears to be a good fit for describing CI based on what we found out in section \ref{ci}. We will be looking at continuous improvement as taking place within the context of an interactive, social process of innovation as occurring on the level of a group of people having the same object of activity. In the empirical study we will be taking this view and applying a strategy inspired by \citet{nicolini2009zooming}, where we *zoom in and out* of a practice and inspect it on different levels - from patterns of interactions between individuals to the wider texture of related practices. In the next section we will familiarize ourselves with activity theory and how it relates to our focus of investigation, innovation.

\pagebreak{}

## Activity theoretical perspective on innovation {#activity-theory}

Activity theory can be seen as a general paradigm of studying transformations and social processes, where different activities are distinguished by their objects \citep{kerosuo2010promoting}. The object of an activity is the reason the activity exists; without the object of work the activity would cease \citep{engestrom2000activity}. An activity system may be seen as a sensemaking device where the "raw" object is, as the outcome of a process, transformed into another, collectively understood object \citep{engestrom2001expansive}.

\citet{engestrom2001expansive} outlines the principles of activity theory as such:

1. Activity system as the prime unit of analysis
2. Multi-voicedness
3. Historicity
4. Contradictions as sources of change
5. Possibility of expansive transformations

Activity theory concerns the analysis of activity systems which are oriented towards an object of activity, mediated by artefacts and collaborative in nature. Multi-voicedness stems from the fact that in a collaborative effort there are always multiple viewpoints; division of labor serves to create different viewpoints for collaborators with different personal histories. The system itself is historical, too, with rules, conventions and artefacts to attest to that. Stemming from historicity and interactions with an environment, activity systems may be seen as residing inherently in a perpetual state of contradiction, structural tensions between aspects of the system. Finally, it's recognized that these contradictions may be aggravated such that qualitative, expansive transformations in the activity system takes place.

An activity system has a few interesting features in terms of change, learning and innovation. Historicity, the fact that before this state of the activity system there was another state that looked a bit different, implies that the system can get out of date with regard to objects and other systems it interfaces with. It is these expansive transformations which constitute innovation in the terms we lined out in section \ref{process-of-innovation}.

Innovation tends to occur when there is pressure to change. Within practices, this pressure may be attributed to a "functional failure" of the practice \citep{miettinen2006sources}. When the world changes, the way the practice used to work suddenly might not. \citet{engestrom1987learning,engestrom2001expansive} describe these situations as developmental contradictions in the practice that generate disturbances. Disturbances are episodes of deviation from standard script \citep{engestrom1996change,norros1996system} or, simply, the breaking of a habit, and serve as indication that the system exhibits change potential.

Expressing contradictions alone is not sufficient for change. Contradictions surfacing as disturbances need to be grasped and taken as a motive \citep{engestrom2010studies}. Transformations in the practice may result from deliberate collaborative change effort within cycles of expansive learning \citep{engestrom2001expansive}. In activity systems, learning actions in such cycles are the means by which contradictions may be recognized and addressed \citep{engestrom2000activity,engestrom2010studies}. Learning actions in the "ideal" cycle of expansive learning have been linked to four tiers of contradictions as follows \citep{engestrom2001expansive,engestrom2010studies}:

<!-- TODO: expansive learning cycle visualization -->

1. **Questioning.** Some parts of accepted practice are questioned, criticized, or rejected. (Stems from a *primary contradiction*.)
2. **Analyzing.** Transformation of the situation to find out causes or explanations. (*Secondary contradictions* are presented.)
3. **Modeling.** A simplified, explicit model of the explanatory relationship may be offered.
4. **Examining the model.** The model's applicability is tested.
5. **Implementing the model.** Practical applications, enrichment and conceptual extension bring the model to life. (*Tertiary contradictions* manifest as resistance from other parts of practice.)
6. **Reflection.** The reality of the implemented model's viability is observed.
7. **Consolidation.** The new practice becomes stable and is aligned with neighbouring practices. (*Quaternary contradictions* occur due to realignment.)

From this view, change in a practice amounts to the outcome of a pressure exerted by the existence of a primary contradiction. This pressure is resisted by the other contradictions. There may not be an evident transformation of the situation such that the contradiction would be resolved acceptably. Attempting to implement such a transformation might require adjustment to other parts of practice, so the group needs to undertake effort not initially visioned. Finally, even if this group of practitioners finds something that works for them, the surrounding network of activity systems will need to deal with the effects too.

The different levels of contradiction present a way of mapping arising disturbances and contradictions to a typology where they can be distinguished as being connected to different stages in the expansive learning process. In the empirical analysis section we will be leveraging the following characterisation of the manifestation of contradictions in practice, adapted from \citet{yamagata2009using}:

> Primary
> :   Practitioners encounter contradictory demands attached to an element of practice.
> Secondary
> :   Practitioners encounter a new element of activity, and the process of assimilating the new element into the practice generates conflict.
> Tertiary
> :   Practitioners encounter a newly advanced method for achieving the object of a practice which is in conflict with the existing state of practice.
> Quaternary
> :   Practitioners encounter changes to the practice that are in conflict with neighboring practices.

Expansive learning is thus to be understood as a process of construction and resolution of contradictions that follow from each other. These actions don't, however, need to follow each other in temporal order, and they don't all need to be present for learning to occur. Also noteworthy is the fact that it is not *individuals* who change, but instead the object of collective activity and thus the components of the activity system linked to it. \citep{engestrom2010studies}

If we are to understand innovation, we must start with seeing the shared object of activity as its basis \citep{miettinen2006sources}. Furthermore, in order to understand the an expansive learning process in action, we need to gain an understanding of contradictions and their transformations in the activity \citep{kerosuo2010promoting}. This will be the undertaking awaiting us in the empirical research chapter.
