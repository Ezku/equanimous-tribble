
# Improvement in practice

In what we have described so far, the theme of improvement has been most central. Practitioners of Scrum wished to discover a way of doing things better than plan-driven methods allowed for, and lean principles direct one not only towards one solution but a way of doing things such that change is not only tolerated but enabled and supported. In knowledge work organisations there is often little to force one's hand about how a process is laid out, because it exists largely in peoples' minds and not as a manufacturing pipeline. In this vein we could go deeper and attempt to find out what it is that enables a practice to support continuous improvement. How can we describe such a process of improvement and the means by which it happens? In the following we will draw from the theoretical toolbox of the practice-based approach in an attempt to find the necessary means of description.

## Improvement as a social process of innovation {#process-of-innovation}

The improvement of ways of working requires taking novel approaches distinct from how things are done in the present state. The word 'innovation', on the other hand, is often attached to concrete objects, yet it can take other forms; the key feature is simply *novelty*. \citep{slappendel1996perspectives} Innovation can be taken as "any idea, practice, material artefact perceived to be new by the relevant unit of adoption". <!-- FIXME: Sources --> (Zaltman et al 1973; also Rogers and Shoemaker 1971) Crucially, innovation may also be applied to the *process* through which new ideas are generated. \citep{slappendel1996perspectives}

<!--
- This characterisation of continuous improvement as *continuous innovation*, where the focus is on learning and knowledge management, is not a new one. \citet{boer2003continuous} observe that the field of research has been migrating towards that direction from the earlier *kaizen* or "shop floor CI" approach focused perspective.
-->

Should we take software development to be a collaborative activity where innovations are required to deliver novel solutions, we may also consider the process of delivering or aiding the delivery thereof as something that may be innovated on. Innovation in social interactions has been studied in *innovative knowledge communities*. \citet{hakkarainen2004communities} outline three different perspectives on them:

1. **SECI model.** \citep{nonaka1995knowledge} Knowledge is something that can be explicated and objectified. Innovation happens by transforming tacit knowledge to explicit.
2. **Activity theory.** \citep{engestrom1999perspectives} Knowledge is embedded within practices. Overcoming tensions inherent in the activity is a source of innovation.
3. **Conceptual artefacts.** \citep{bereiter2002education} Knowledge is expanded by manipulation of shared conceptual artefacts. The ability to extend and create novel artefacts is the source of innovation.

Out of these perspectives we should pick one suited especially for reflecting agile and lean practices. If we consider Engestrom's perspective and knowledge as being embedded in practices, then innovation must be the development of those practices. Indeed, Engestrom is specifically looking at communities where innovation is the development of practices with a shared object of activity. \citet{engestrom2000activity} claims activity theory may be used as a tool for analyzing and redesigning work. It is slated to be especially applicable when such learning occurs which has not been given as the objective from the outside, such as by management, but instead stems from contradictory demands experienced within the community. \citep{engestrom2001expansive,engestrom2010studies}

The most prominent conjunction of activity theory and software development has been in the field of human-computer interaction research, for example \citet{kuutti1996activity} and \citet{kaptelinin1996activity}. These works mainly take interest on what happens in the interface between human and computer instead of on what people do together. \citet{barthelmess2002view} and \citet{adler2005evolving}, however, take an activity theoretical view on the process of software development and show that the perspective is applicable for describing some of the industry's most problematic features. In their view, creation of software is distinct from "construction" in that it consists of conception and refinement of designed, intangible artefacts; yet the artefacts are complex and need to be specified in excruciating detail as a collaborative effort. Therefore software development deserves to be described as a knowledge based practice.

The activity theoretical approach appears to be a good fit for describing CI based on what we found out in section \ref{ci}. We will be looking at continuous improvement as taking place within the context of an interactive, social process of innovation as occurring on the level of a group of people having the same object of activity. In the empirical study we will be taking this view and applying a strategy inspired by \citet{nicolini2009zooming}, where we *zoom in* to a practice and inspect it on different levels - from patterns of interactions between individuals to the wider texture of related practices. But first, let's get acquainted with activity theory and how it relates to our focus of investigation, innovation.

## Activity theoretical perspective on innovation

### Principles of activity theory

Activity theory can be seen as a general paradigm of studying transformations and social processes, where different activities are distinguished by their objects. \citep{kerosuo2010promoting} The object of an activity is the reason the activity exists; without the object of work the activity would cease. \citep{engestrom2000activity} An activity system may be seen as a sensemaking device where the "raw" object is, as the outcome of a process, transformed into another, collectively understood object. \citep{engestrom2001expansive}

\citet{engestrom2001expansive} outlines the principles of activity theory as such:

1. Activity system as the prime unit of analysis
2. Multi-voicedness
3. Historicity
4. Contradictions as sources of change
5. Possibility of expansive transformations

Activity theory concerns the analysis of activity systems which are oriented towards an object of activity, mediated by artefacts and collaborative in nature. Multi-voicedness stems from the fact that in a collaborative effort there are always multiple viewpoints; division of labor serves to create different viewpoints for collaborators with different personal histories. The system itself is historical, too, with rules, conventions and artefacts to attest to that. Stemming from historicity and interactions with an environment, activity systems may be seen as residing inherently in a perpetual state of contradiction, structural tensions between aspects of the system. Finally, it's recognized that these contradictions may be aggravated such that qualitative, expansive transformations in the activity system takes place.

An activity system has a few interesting features in terms of change, learning and innovation. Historicity, the fact that before this state of the activity system there was another state that looked a bit different, implies that the system can get out of date with regard to objects and other systems it interfaces with. It is these expansive transformations which constitute innovation in the terms we lined out in section \ref{process-of-innovation}. Let us dig deeper into the terms of contradiction and how a process of expansive transformation might take place.

### Contradictions as a source of innovation

Innovation tends to occur when there is pressure to change. Within practices, this pressure may be attributed to a "functional failure" of the practice. When the world changes, the way the practice used to work suddenly might not. \citep{miettinen2006sources} \citet{engestrom1987learning} describes these developing contradictions through a state of need that arises first as errors, disturbances or plain discontent with no apparent source. Disturbances are episodes of deviation from standard script <!-- FIXME: Sources --> (Engestrom 1996, Norros 1996) or, simply, the breaking of a habit, and serve as indication that the system exhibits change potential.

Contradictions alone are not sufficient for change. In activity systems, transformations occur by cycles of expansive learning where contradictions manifest as part of learning actions.  \citep{engestrom2000activity,engestrom2010studies} There are four different tiers of contradictions. Primary contradictions are latent, emergent and may appear within any nodes of the activity system. Secondary contradictions manifest openly _between_ nodes. When a part of practice changes but faces difficulty with other parts, that is called a tertiary contradiction. Finally, quaternary contradictions occur when the changed practice interacts with its neighboring activity systems. We may map these to the "ideal" epistemic cycle of learning actions presented in \citet{engestrom2010studies} as follows \citep{engestrom2001expansive}:

1. **Questioning.** Some parts of accepted practice are questioned, criticized, or rejected. (Stems from a *primary contradiction*.)
2. **Analyzing.** Transformation of the situation to find out causes or explanations. (*Secondary contradictions* are presented.)
3. **Modeling.** A simplified, explicit model of the explanatory relationship may be offered.
4. **Examining the model.** The model's applicability is tested.
5. **Implementing the model.** Practical applications, enrichment and conceptual extension bring the model to life. (*Tertiary contradictions* manifest as resistance from other parts of practice.)
6. **Reflection.** The reality of the implemented model's viability is observed.
7. **Consolidation.** The new practice becomes stable and is aligned with neighbouring practices. (*Quaternary contradictions* occur due to realignment.)

From this view, change in a practice amounts to the outcome of a pressure exerted by the existence of a primary contradiction. This pressure is resisted by the other contradictions. There may not be an evident transformation of the situation such that the contradiction would be resolved acceptably. Attempting to implement such a transformation might require adjustment to other parts of practice, so the group needs to undertake effort not initially visioned. Finally, even if this group of practitioners finds something that works for them, the surrounding network of activity systems will need to deal with the effects too.

In the interest of being able to see these different contradictions in the empirical data later on, we might wish to consider what an expression of them would look like. I suggest that the emotions involved with pressure and resistance expressed throughout the expansive learning cycle could be characterised, in exaggeration, like this:

Primary
:   "This thing that we're doing sucks."
Secondary
:   "Yes, but there is a reason why it has to suck like that."
Tertiary
:   "We made it differently and look at what happened. We should have known it would suck."
Quaternary
:   "Now that we made it work, the others think this sucks for them."

Expansive learning is thus to be understood as a process of construction and resolution of contradictions that follow from each other. These actions don't, however, need to follow each other in temporal order, and they don't all need to be present for learning to occur. Also noteworthy is the fact that it is not *individuals* who change, but instead the object of collective activity and thus the components of the activity system linked to it. \citep{engestrom2010studies}

If we are to understand innovation, we must start with seeing the shared object of activity as its basis. \citep{miettinen2006sources} Furthermore, in order to understand the an expansive learning process in action, we need to gain an understanding of contradictions and their transformations in the activity. \citep{kerosuo2010promoting} This will be the undertaking awaiting us in the empirical research chapter.
