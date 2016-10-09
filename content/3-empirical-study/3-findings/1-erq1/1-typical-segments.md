
## Typical daily segments {#typical-segments}

An overview of the structure of a daily is afforded to us by the segment analysis described in \ref{research-methodology}. No two dailies followed exactly the same sequence of segments, as the reader can observe from appendix \ref{daily-segment-lengths}. However, clear tendencies could be seen. In this section we first describe a prototypical example of a daily and proceed to paint a picture of how the daily came to be structured the way we observed. Let us consider daily `03` as a prototypical example, as it has close to average duration, attendees and a clear segment outline. The outline can be seen in table \ref{daily-03-outline}.

\pagebreak{}

| **Segment**               | **Duration** |
|---------------------------|--------------|
| INTRO                     | 00:10:45     |
| INBOX                     | 00:01:45     |
| FIRES                     | 00:04:05     |
| PRIORITY LANE             | 00:03:30     |
| OUTBOX                    | 00:03:20     |
| QUESTIONS                 | 00:00:41     |
| NON-FUNCTIONAL CONTINUUM  | 00:01:19     |
| BOARD OVERVIEW            | 00:02:13     |
| **Total duration**        | 00:28:18     |

Table: Outline of daily `03`, presented here as a typical daily. Excerpt from appendix section \ref{daily-segment-lengths}. \label{daily-03-outline}


#### Introduction, 00:40.

The daily starts with an `INTRO` segment after making sure everyone is accounted for. It's noted that a team member has been absent for a while and that is affecting the team's capability of responding to fires. The team also takes issue with the state of communication between them and another team.

> 02:30
> :   "Apparently it seems to be some ... hard to reach between business and marketing now, so–" (`D1`, referring to events from before the daily)
> :   "You mean sales and marketing" (`M1`, correcting `D1`'s expression of the overall team structure)
> 02:41
> :   "I'm just saying that we're not alone" (`D1` referring to difficulties shared with the team on a previous occasion)
> 02:58
> :   "And I felt, it was like .. difficult" (`D1` starting to relate the experience)
> 03:01
> :   "There's like .. two walls in between [..]" (`D2` continuing the sentiment metaphorically)
> 03:10
> :   "So `M1` can you take down the walls or?" (`D3` asking for help in resolving the difficulties)
> :   "Yes yes. `M2` comes back, we will shuffle the rooms anyway" (`M1`, referring to concrete workspace arrangements)

We can observe that the exchange is rich in history and context. Discussions from what appear to be previous dailies are referenced, as well as more immediate occurrences from the same day. The team seems content to describe the situation on a very abstract level, which could point to an understanding of concrete experiences already having been shared. The tension appears to be relieved by an explicit plea for help and a corresponding assurance that very concrete actions will be taken, despite the metaphorical level of discussion so far. Taken together, we see that the team uses the opportunity for coming together to discuss their woes and to find ways for recourse.

The team proceeds through an unstructured go-through of worries until arriving at what is apparently of immediate relevance: an upcoming feature will be requiring a significant amount of quality assurance after being shipped to production. The team assesses ways of approaching this, with `QA` and `M` negotiating the scope of testing required and the dependencies between work items that will have to be resolved to get to this stage.

> 08:28
> :   "Done today then?" (`M`)
> :   "We can't do that, the thing is not in production [..]" (`QA`)
> 08:35
> :   "So what is blocking that?" (`M`)
> :   "Uhh .. the [feature] hasn't passed QA" (`QA`)
> :   "Okay. And what is blocking that?" (`M`)
> 08:44
> :   "`D` has fires." (`QA`)
> :   "No, they're working right now, there's no [feature] related tasks" (`D`, challenging `QA`)
> :   "Yes, there is." (`QA` restating their position)

This exchange appears to relate to the status of a specific cycle, but the team is not using the cycle's board to mediate the discussion. Thus the exchange is part of the `INTRO` segment, not `CYCLES`.

The team continues to negotiate the interrelations between work items handled by different team members and handovers required. Concern is expressed about a team member leaving for vacation after the ongoing week and some items perhaps not being completed by then, but reassurances to the contrary appear to placate everyone.

An attempt is made to start the `INBOX` segment with the prompt:

> 10:05
> :   "What about starting from Asana now?" (`M`)

This is ineffective, because another team member wants to discuss handovers not yet mentioned. The secretary can be heard making meeting minutes on the subject.

#### Inbox, 11:25.

The `INBOX` segment finally starts. The *driver* opens Asana and allows the team to view items in the inbox on a TV screen. The inbox is a board that contains new items as input to the team and to be handled in the daily proceedings. Starting from the topmost item, item labels are read out loud. Most often, a variation of the following question is used to settle the imminence of items encountered:

> 11:51
> :   "Fire or not?" (`M`)

Either the item is a fire, requiring the team's immediate attention, or it can be postponed to a later time. Fire would mean that the *secretary* moves the item for it to get handled in a later `FIRES` segment. The team members will respond with either "fire" or another board where the item would get handled in the appropriate fashion.

> 12:23
> :   "Not a fire?" (`M`)
> :   "No .." (`D`)
> :   "Wishlist." (`M`)

The wishlist is a labeled section of the inbox board that is intended for a later grooming with relevant product owners involved. The secretary thus moves the item away from the inbox's topmost segment to the wishlist, and continuing in this way the inbox is gradually consumed of unhandled items.

#### Fires, 13:10.

Once the inbox is empty, the driver without prompt moves the team's view to a board titled *"[FIRE]: This must be emptied"*, signaling the start of the `FIRES` segment. Again the team will proceed from top to bottom, this time discussing items that have moved between states since last observation.

Based on the board's labeling of states, (detailed in appendix \ref{kanban-board-structure}), the items further to the top are closer to having been resolved whereas at the bottom no work is being done on them. The more than a dozen different states communicate an intricate understanding of a work item's progression from backlog to development, to testing, production and finally a state of doneness that can be agreed on by the team.

Distinguishing this segment from the previous one, items will usually not be moved by the secretary. They may, however, be marked as complete after the team agrees there's nothing more to be done.

Progress with fire extinguishing, or lack thereof, can be touched briefly:

> 14:32
> :   "So `D1`, all ok, need anything?" (`QA`, referring to work item presented by driver)
> :   "Uh ... yeah, no, just to note that-that me and `D2`, we had a, had a prepared battle plan for this specific occasion, and our first attempt at-at fixing it instantly failed. So .. I'm going to have to *actually* fix this." (`D1`)
> 14:52
> :   "Can you actually fix this?" (`M` seeks confirmation)
> :   "Yes, I can actually fix this." (`D1` concludes)

In this case the details of how the actually-fixing would be done are omitted in the discussion as something that belongs outside the scope of the daily. What gets communicated is the belief that work items will be moving today despite lack of progress thus far.

Sometimes a balance between expedited technical implementation and other rationale, such as product design, needs to be reconsidered. Here, a developer presents a caveat in their intended approach to resolve a fire:

> 15:08
> :   "Most likely the fix is kind of .. people don't like it, but like that's the .. easiest way to fix" (`D`)
> :   "What?" (`QA`, incredulously)
> :   "You need to save the changes before you can open the [feature]" (`D`)
> 15:22
> :   "Why doesn't it save it automatically? [..]?" (`M`)
> :   "It did, but–" (`QA`)
> :   "No, it didn't" (`D`)
> :   "It looked like-!" (`QA`)
> :   "Yeeah it looked like, yeah, sure. (short laughter)" (`D`)
> 15:33
> :   "But why not that way?" (`M`)
> :   "Well, we could .. do that that way" (`D`)
> 15:37
> :   "Wouldn't that make more sense?" (`M`)
> :   "Yeah." (`D`)
> :   "Just saves it. Next." (`M`)

Negotiation on how thoroughly the board will be combed also happens. Here, a developer poses the question of whether *backlog items* (meaning items that have not yet moved since their addition to fires) should be handled at this time:

> 16:42
> :   "Do we want to discuss the backlog items?" (`D1`)
> :   "They are the same, I guess ... Not moved" (`D2`)
> :   "But no new fires. Or are these two by `D3`, are these new?" (`D1`)
> :   "No no, they were [new] yesterday" (`QA`)

It's shortly determined that there would be nothing to gain, and the team moves on to a new board.

#### Priority lane, 17:15.

The driver opens up *"Priority lane"*, commencing the `PRIORITY LANE` segment. The flow of discussion is similar, with moved work items getting discussed from top to bottom. However, the team has chosen to label the states differently. There is significantly less structure as compared to fires: **DONE**, **DOING**, **TODO** and **LONGSTANDING**. This can be attributed to the non-technical or perhaps ad-hoc nature of work items placed here.

A developer immediately starts relating the outcome of a discussion that was modelled as a work item on the priority lane and can now be seen by the team as "done":

> 17:15
> :   "This was huge: [..]" (`D`, adding explanation of defects discovered in production system)

Due to the critical nature of the findings, the team would expect there to have been a follow-up work item. A manager expresses concern on whether action will be taken. This gives rise to a discussion on how the flow of work is being modelled for the team's benefit in this specific occasion:

> 18:00
> :   "But isn't that kind of a fire?" (`M`)
> 18:08
> :   "I'm doing everything I can, I have the one other fire first." (`D`)
> :   "Yeah but where is this kind of task?" (`M`)
> :   "It's in the module continuum, it's being worked on .. like, right now .. there's .. this many tasks about it" (`D`)
> :   "Okay ... but wouldn't it make sense to promote them as a fires also? And not leave them into the module continuum?" (`M`)
> :   "Hhh if you want to-" (`D`)
> :   "For more visibility ... because you can have task in two projects" (`M`)

A rationale of visibility is presented, along with a bargain in that the developer's existing modelling can remain essentially undisturbed. It also becomes evident how the team has a conception of fires as *urgent-but-unplanned* versus *planned-and-prioritized*, which results in a curious tension:

> 18:48
> :   "Yeh ... which one do you want [to see in fires]?" (`D`)
> :   "Everything that's considered a fire [and is] in module continuum ... because that's essentially blocking the module continuum for continuing ... on the actual *planned* features" (`M`)
> 19:04
> :   "These are the planned features .. and fixes. These are what, uh, what we have prioritized with `PO`" (`D`)

The tension is resolved by refining the modeling to include the "fire-nature" of the work items and showing them in fires. The tension's root cause, of the model apparently omitting the `PO`'s existing priorization, was also discovered.

The team finishes up the priority lane by speeding through a few work items in the "todo" state, confirming them to be still relevant but undone. Once the list is combed, it's time for the next board.

#### Outbox, 20:45.

The driver opens up *"OUTBOX (ska diskuteras snart)"* and commences the `OUTBOX` segment with a callout from the secretary. As per the Swedish language subtitle of the board, it is used to keep track of discussions that should take place.

`M1` immediately calls for a comment to be added on an existing work item that there's new evidence, referring to the `INTRO` segment discussion about a team being difficult to reach. This is apparently done for the benefit of a discussion to be had with `M2`, who is not present. Another discussion item is called out as being "longstanding", and is moved to that section of the board by the secretary.

Due to the excursion by `M1` of bringing a task in the middle of the board to the team's attention, the linear top-to-bottom fashion of reading the board that was seemingly faithfully observed before has broken down at this point, but is resumed. To-be-had discussions are gone through and confirmed relevant in much the same fashion as the todo items in the previous segment.

In the following excerpt there's again a reference to the difficulties discussed in the `INTRO`, now accompanied with a desire to not only have a discussion but to *keep track* of whether a problem was in fact solved for good:

> 22:15
> :   "'Tech team doesn't see documentation being handled.' Really don't!" (`M` quoting work item title)
> :   "Well .." (`QA`)
> :   "Again. This morning." (`M`)
> :   "I have bumped and it's-" (`QA` stating a discussion was had)
> 22:25
> :   "Yeah but until we can really say that it's now being properly handled ... we see a few cycles where it just .. goes well" (`M`)

Ostensibly this would mean that the discussion item will be held in the "longstanding" section for evaluation, even if such a discussion as intended by the item did in fact take place as claimed by `QA`.

Lastly, we observe a callback to the issue with fires and work in the module continuum. There's an unhandled item for which the discussion has already taken place, but the team would need to be informed about the outcome.

> 23:36
> :   "'Ability to track module fires'" (`M` reading out item title as a prompt)
> :   "Yeah, `PO` requested that-that any uhh module fires also be added to the module continuum so you can take a look at the module continuum afterwards and see which have been completed" (`D` relating the result of the discussion)
> :   "Yes yes, very good" (`M`)

The PO's request itself happens to be an insignificant detail from the daily's perspective, because as shown in \ref{daily-segment-lengths}, the module continuum is never combed through in the daily. It provides another rationale for the tension observed earlier, however: the PO's wishes about work visualization in the continuum might have contributed to a conflict with the team's needs about transparency.

The "longstanding" discussion items are skipped with a callout from `M` getting an affirmative response from the secretary. This concludes the `OUTBOX` segment.

#### Questions, 24:05.

By this point, the team is evidently anxious to move forward: several members in succession call out the name of the next board, *"QUESTIONS"*. The purpose of the board is to make sure that information needs of parties, internal and customer alike, are not neglected. Concretely, there are both ongoing lines of inquiry and recurring "household keeping" themed tasks. Only the topmost tasks, belonging to the recurring category, are briefly confirmed as having been done.

> 24:39
> :   "So ..." (`D1`)
> 24:41
> :   "So ..." (`D2`)
> 24:43
> :   "Let's not be done yet." (`M`)

Team members express desire to move on and perhaps finish the daily, but the manager wants to be more thorough. With that note, the driver shows the next board.

#### Non-functional continuum, 24:46.

The non-functional continuum board consists of small tasks that have only superficial effect on the product and can thus be shipped immediately. The structure and sectioning is similar to "fires", but the work reflected therein is considered to be of less urgency by nature.

The manager appears to have had a clear agenda in moving to this board, because he proceeds to press on an uncompleted task.

> 24:48
> :   "There's [item description]" (`M`)
> :   "Has `D1`'s face on it [..]" (`QA`)
> 25:02
> :   "So `D1` could you add these things? There's a huge organisational waste when we have done [website content] already .. and they are not linked in the UI" (`M`)
> 25:12
> :   "Yeah yeah" (`D1`)
> :   "This is almost becoming a fire" (`M`)
> :   "... Yeah." (`D1`)
> 25:21
> :   "But like, we had this discussion before I left." (`M`)
> :   "Yeah yeah I can add" (`D1`)
> :   "But .. really" (`M`)
> :   "Yeah yeah yeah yeah yeah" (`D1`)
> 25:29
> :   "And... Start using the 'my tasks' thing [..]" (`M`)
> :   "That's how I do it cause otherwise I just don't remember what I ..." (`D2`)

From the manager's perspective, the team appears to have failed in accounting for the timeliness requirement of the task being discussed. Proximally, the reason is pinned on `D1` not using the team's common tooling for supporting this by seeing that the task exists and is assigned. However, the team members seem to acknowledge that it is not trivial to make good priorizations of when these individual tasks would best be done, as they are unrelated to the team's larger deliverables.

#### Board overview, 26:05.

The `NON-FUNCTIONAL CONTINUUM` segment fluidly transforms into `BOARD OVERVIEW` when the manager again prompts:

> 26:05
> :   "So what's the status of these numbered things? `QA`?" (`M`, referring to ongoing cycles)

No action is needed from the driver as the discussion items of this section are continuously visible on screen. `QA` elaborates on the statuses from their perspective. A developer is curious about the color coding `QA` uses for signifying project statuses, and gets an explanation. This is immediately taken into use by another developer by describing the state of the next project on the list as "green", meaning "in progress".

> 26:50
> :   "What's the definition of 'API'?" (`M` referring to cycle name)
> :   "It was more that I didn't want to use the 'partner integration funnel' for my tasks-" (`D`)
> 27:01
> :   "Okay.. could this be renamed so that it still means something? Like ... put in parenthesis that 'partner integration funnel'? Or something, because nobody has idea what's 'API' [in] this context" (`M`)

Manager calls for cycles being more clearly defined bundles of tasks, because a vague umbrella topic does not aid in understanding the work. The developer admits to not having been wanting to do this before. Perhaps the more specific name does not entirely describe the referred cycle's scope, or a better understanding has only recently arisen and the project's name is lagging behind.

<!-- Also of note is that the developer expresses having a sense of ownership over "his" tasks. There's apparently a domain that the developer personally is responsible for and this cycle would lie within that domain. -->

> 28:15
> :   "Alright ... Now we're done." (`M`)

Nobody objects; the daily is concluded.
