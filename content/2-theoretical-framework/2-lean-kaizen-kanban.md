
# The lean perspective {#lean-perspective}

In section \ref{agile} we described how agile took off after the prominent failure of plan-driven methods to help with software development, and how Scrum and dailies relate to the picture in terms of everyday software development activities. In this section we're going to cover the field of *lean software development*. First, we'll see how lean has a shared heritage with agile. Secondly, we'll find out about how lean principles are applicable to software development, which will finally lead us to kanban systems as a software development practice.

## Agile's lean heritage

The seminal work on lean software development is Lean Software Development by Mary and Tom Poppendieck (2003). We'll be using their description of lean to set the stage and see how the discourse is positioned in relation to agile.

In the book's foreword, Jim Highsmith and Ken Schwaber – both prominent signatories to the agile manifesto only some years earlier \citep{agile2001manifesto} – both individually rejoice at the possibility of applying lean industrial practices to software development \citep[p. xiii-xvi]{poppendieck2003lean}. Highsmith takes note that while agile had an heritage in lean industrial practices, they were simply unapplicable before this work. Schwaber explains that agile processes were constructed "based on experience, trial-and-error, knowledge of what didn't work, and best practices", and that these new tools would allow agile practitioners "to understand why and how the most common agile processes work, or to modify them based on a deep understanding of them, or to construct their own agile process".

What Schwaber is saying is that while he was able to put together a set of empirically discovered and validated practices, he was at a dead end when it came to finding a satisfying way of describing *why* they worked and what the constraints on their effectiveness would be. At the lack of the latter, adherents to Scrum would only have at hand a description of what to do, they'd be left fumbling if they discovered the results not to be to their liking. Indeed, you could be left with the idea that any deviations were harmful and your failure to find process nirvana was only due to failing at being strict enough. On the other hand, lean was pitched as reaching further towards the fundamentals of agile ideas, and allowing the discovery of new practices which would nevertheless serve to achieve the goals set by agile. Where Scrum had been a playbook detailing what was essentially black magic and the potential to devolve into cargo cult[^cargocult] software development, lean could serve as a process construction kit.

[^cargocult]: Cargo Cult Science being famous from Richard Feynman's commencement address at Caltech 1974. He relates a story of an indigenous people who imitate the operation of a runway in hopes of making cargo planes land, yet none do. They're missing something essential. \citep{feynman19986}

## Lean and software development

\citet{poppendieck2003lean} observe that software development might have a lot to learn from new product development in general. They leverage principles of what is called *lean development* according to an approach used by automotive manufacturers Toyota and Honda starting from the 1980s \citep[see e.g.][]{ohno1988toyota}, which they describe thusly:

> Don't make irreversible decisions in the first place; delay design decisions as long as possible, and when they are made, make them with the best available information to make them correctly.

To these and other related qualities they attribute a significant competetive advantage exhibited by the Japanese manufacturers over U.S. ones; advantage of this kind would ostensibly be desirable to any software company as well. What's good about this approach is that it doesn't come as a bundle of practices to apply, but as principles "understood and proven by managers in many disciplines outside of software development". Principles being universal guiding ideas and insights, which are however not easy to apply to particular environments.

The *seven lean principles* forming the basis of lean thinking are defined by \citet{poppendieck2003lean} as follows.

1. **Eliminate waste.** Anything in the process not contributing to value as perceived by the customer is waste.
2. **Amplify learning.** Software development is a process of learning what works, not an exercise of reducing variation; trying out different approaches and seeing what works must be enabled.
3. **Decide as late as possible.** Deferring decisions is a requirement for effective strategy in complex and evolving environments.
4. **Deliver as fast as possible.** Fast delivery is critical from both customer value and feedback cycle perspectives.
5. **Empower the team.** The people who actually do the work are the ones who understand how to achieve excellence in execution.
6. **Build integrity in.** Software must be sound conceptually, be able to maintain its usefulness over time, and altogether be fit for purpose.
7. **See the whole.** Measuring the specialized contribution of individuals or organizations leads to suboptimization, which is antithetical to integrity.

Of these principles, the first is declared most important and the rest can be seen as following from them. To complete the picture and allow the reader to apply these principles to forming agile practices applicable to their context, \citet{poppendieck2003lean} present 22 different tools. Some of these tools, like the use of iterations, refactoring and testing, will be readily familiar to most agile practitioners \citep{west2010agile}. We will be taking a further look at something less familiar – what on this list of tools is introduced as *pull systems*, otherwise known by the Japanese name kanban.

## Kanban as a way for continuous improvement {#ci}

\citet{poppendieck2003lean} motivate pull systems as a way to address principle 4, *deliver as fast as possible*. The argumentation is profoundly simple: people showing up for work need a way to tell what to do. The alternatives are for you to order them to do something, or give them a way to discover that for themselves. In a fast-moving and complex environment, they argue, only the second option for work coordination is viable. This is attributed to the fact that in a chain of connected events, any variation is amplified, making any predefined scheduling invalid in short order. A pull system, therefore, is devised to make work items visible and enable self-direction such that team members may make the most productive use of their time. The name *kanban* for such a practice derives from Japanese for "card" or "placard" and refers to the tokens which stand in for work items.

In software development, \citet{poppendieck2003lean} suggest, kanban may take the form of a board on which work item cards flow through a procession of steps defined by the team. This conceptualization of kanban could be argued to have little more to it than simply allowing developers themselves pick items from a backlog of work items (described in \ref{scrum-overview}). A literature review by \citet{ahmad2013kanban} points at the current conceptualization of kanban in the context of software development having been born in 2004. The following may be considered the kanban principles \citep{anderson2010kanban}, found to be congruent with the lean ones \citep{ahmad2013kanban}:

1. Visualize the workflow.
2. Limit work in progress.
3. Measure and manage flow.
4. Make process policies explicit.
5. Improve collaboratively.

The clearest benefits \citet{ahmad2013kanban} can find attributed to use of kanban in the literature are better understanding of whole process, improved software quality and improved customer satisfaction. Challenges, on the other hand, include the fact that kanban is not a standalone measure but requires supporting practices (eg. agile ones) and that it necessitates a difficult change in organisational culture. The potential for better understanding of the whole software development process is especially interesting, as \citet{ikonen2010exploring} suggest that kanban supports the ability to *see waste in the process*.

What happens when we take lean principles and find tools to implement them in practice can be described in more general terms. The drive for a collaborative and continuous elimination of waste may be taken as the defining characteristic of a process of *continuous improvement* (CI). That definition is posed by \citet{bhuiyan2005overview}, who in their literature review place lean manufacturing in a whole class of methodologies sharing the characteristic (six sigma, balanced scorecard, and lean six sigma being the others). It would take little imagination to claim that when lean methods are applied in software development, what they serve to enable is likewise continuous improvement.

\citet{boer2003continuous} go further to define that when the CI from manufacturing context is overlaid with learning and innovation, it instead becomes *continuous innovation*. We see how, given the view by \citet{poppendieck2003lean} that software development is inherently a learning activity, it could be argued that lean software development is by necessity an exercise in continuous innovation. On the other hand, the distinction can be seen as meaningless in the context of software development. In favor of staying within the lean discourse we will opt for the term continuous improvement to characterise this process.

We have described how lean software development is formed by a collection of principles, the most fundamental of which is waste reduction. The principles taken together aim at the collaborative activity of continuous improvement. Practices derived from these principles may thus be taken to be, in effect, activities in a process of continuous improvement. Due to the nature of software development activities, this process will inherently involve learning and finding new ways of doing. Kanban is a practice the basic use of which is work visualization and self-direction, but which can also be used as a way for seeing waste and through this be an instrument of continuous improvement.
