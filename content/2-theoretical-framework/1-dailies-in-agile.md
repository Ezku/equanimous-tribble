
# Dailies in Agile {#agile}

## Discovering Scrum

Common wisdom used to hold that software development could be modelled after a *plan-driven* fashion. \citep{abrahamsson2002agile} These models are well-researched and mature \citep{huo2004software}, but heavy. They assume that requirements may be discovered beforehand, that they will not undergo significant change through the duration of a project and that, fundamentally, the process of developing software is predictable and repeatable \citep{sutherland2001agile}. The quintessential example of a plan-driven methodology[^methodology] would be the *waterfall*[^waterfall]: gather requirements, devise a solution, program the solution, bring it to customers \citep{sutherland2001agile,huo2004software}. Rinse and repeat.

[^methodology]: *Methodology* is an ascriptive description of techniques: what to do, how, when, by whom and so on.

[^waterfall]: It should be noted that this simplistic construction of the waterfall is essentially a strawman argument. Winston Royce's 1970 original work detailing the "waterfall" itself remarked how a process without feedback cycles was unlikely to work. \citep[p. 24-25]{poppendieck2003lean}

Turns out, this analytical view of software processes has multiple points of failure. To start with: a project's premises may change on the way \citep{highsmith2002agile} and defining requirements is notoriously tricky \citep{lindstrom2004extreme}. In fact it appears that plan-driven models on the whole don't reflect the reality of software development well at all – especially in fast growing industries \citep{abrahamsson2002agile}, where every company is trying to get the jump on their competitors.

Enter agility. The _Manifesto for Agile Software Development_ \citep{agile2001manifesto} introduced the umbrella moniker "agile" as a word to describe a new class of models. Reality being complex and diverse, it's no surprise that the manifesto itself covers five different models \citep{fowler2001agile}, and *e.g.* \citet{abrahamsson2002agile} identify eight. Agility may well be seen as an ideological movement, or a culture of which many interpretations exist \citep{glass2001agile,kruchten2007voyage}. \citet{abrahamsson2002agile} characterise agile models with the following attributes:

> Incremental
> :   Delivery of software in short cycles
> Cooperative
> :   Developers and their clients in unhindered, continuous communication
> Straightforward
> :   Easy to learn, well documented, readily adaptable
> Adaptive
> :   Options are not locked down, making alterations as needed is enabled

The term agile is thus identified as remarkably polysemous and dependant on context. To get more concrete, we will be discussing a specific agile process methodology called *Scrum*.

## Overview on the Scrum methodology {#scrum-overview}

Scrum is part of the original suite of methodologies giving rise to the agile manifesto \citep{agile2001manifesto}. It has also been recognized among the most popular methodologies \citep{west2010agile} and heralded as virtually a de-facto industry standard \citep{marchenko2008scrum}. Albeit no single method is endorsed by all things agile \citep{kruchten2007voyage}, in terms of industry adoption and influence on generic expectations of what it means to be agile, there is simply no better example than Scrum.

\citet{schwaber1995scrum} defines the Scrum methodology as a process of software development consisting of phases of pregame, game and postgame[^game]. Planning, conceptualization, analysis, and high level architectural design are part of pregame. Postgame consists of the project's closure, when the product under development is deemed ready and will be released. Game is where the product is developed in iterative increments called sprints. It is also the part where Schwaber distinguishes the methodology from the derided waterfall; without the keyword *iterative*, one could find a very obvious mapping from the Scrum words to the world of waterfall.

[^game]: The curious use of the term *game* stems from a sports analogy by \citet{takeuchi1986new}. They argued that software development is not best seen as a game of passing the baton, but as a rugby team advancing the ball by passing it back and forth between team members. It is not coincidental that Schwaber's use of the word Scrum to describe his methodology also derives from rugby.

A sprint is defined by \citet{schwaber1995scrum} as a collaborative team performance over a preset period of time, where the processes of develop, wrap, review and adjust take place. Development "consists of the micro process of discovery, invention and implementation". Wrapping is about making sure the work is observable, eg. that the resulting software can be ran. Review means a meeting where progress is presented, problems raised and resolved, identified risks observed and responded to. Adjustment refers to taking the freshly gained information and consolidating it to shared artefacts.

Work items that describe how the product fails to satisfy current requirements are dubbed the backlog  \citep{schwaber1995scrum}, from which the most important ones are prioritised for completion in a sprint in a sprint planning event \citep{schwaber2011scrum}. After a sprint has ran to completion, it is followed by an all-hands sprint review \citep{schwaber1995scrum}. This represents an opportunity for reflecting on what was learned in the last sprint and reprioritizing or modifying the work items accordingly \citep{highsmith2002agile}.

Here we've seen an outline of Scrum and how it applies to the whole process of software development. So far our level of abstraction is at the *sprint* stage, or weeks of calendar time. But what about the day-to-day work? In the next section we will see how this is supported in Scrum by the daily Scrum meeting.

## The archetypal Scrum daily {#scrum-daily}

> The heart of the Scrum is the daily stand-up meeting
> \citep{west2010agile}

The original Scrum formulation by \citet{schwaber1995scrum} does not explicate the need of a daily. Scrum's co-originator \citep{agile2001manifesto}, Jeff Sutherland, describes in his book on Scrum \citep{sutherland2014scrum} that he was inspired in 1993 by a kind of warrior ceremony of the Maori people from New Zealand called the 'haka':

> The haka is a warrior dance that charges up people about to go into battle. While watching it, you can almost see the energy come out of each player and coalesce into a greater whole. With synchronized stomping and clapping and chanting—ritualized movements of cutting an enemy’s throat—you can see ordinary men transform themselves into something bigger, something greater. They’re invoking a warrior spirit that does not accept defeat or dismay.

Sutherland's team analysed the practices of successful teams and found an example in Borland Software Corporation, who gathered their team together every single day to discuss progress and resolve challenges. In trying to find a way to distill Borland's one-hour daily to its essence, Sutherland with his team ended up with the idea of *three questions* and a set of rules.

According to the rules, the daily:

1. Should be held at the same time every day and be attended by everyone.
2. Should not last more than 15 minutes.
3. Should be done standing up to help everyone participate.

During this time, the team members address three questions. The rules may change or be bent \citep[see eg.][]{rising2000scrum,yip2006s}, but the three questions tend to be cited essentially intact \citep{rising2000scrum,yip2006s,schwaber2011scrum}:

1. What did I do yesterday?
2. What will I do today?
3. Are there impediments to progress?

As the reader might agree, dailies are very simple to describe. Indeed, that is part of their allure as part of the agile toolkit, second in uptake only to iterations \citep{west2010agile}. We have thus described the essential constituents of a daily scrum, daily stand-up, daily meeting or henceforth just *daily*: discussing progress with everyone every day to focus and empower the team. We have also provided some clarification on how the daily relates to the texture of agile software development activities as a whole.

Due to its popularity, Scrum-inspired agile is reality to many in the industry. However, being a methodology, Scrum may leave you without direction should you wish to adapt its methods to suit your own context. In the next section we'll take a dive to the industrial heritage of agile and see if, instead of ascribed, empirically discovered methods, we can find something more fundamental.
