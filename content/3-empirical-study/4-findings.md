
# Empirical findings {#empirical-findings}

This section presents empirical findings based on which we will answer the empirical research questions from section \ref{empirical-research-questions}. To settle **ERQ1**, in \ref{daily-structure} we describe the structure of a daily and link this structure to the use and arrangement of kanban boards.

## How is the daily structured? {#daily-structure}

This section describes the structure of a daily as it appears based on the segment analysis described in \ref{research-methodology}. No two dailies followed exactly the same structure, but there were clear tendencies to be observed. Let us consider daily `03` as a prototypical example. The daily's segment outline can be seen in table \ref{daily-03-outline}.

**Segment**        | **Duration**
-------------------+---------
INTRO	             | 00:10:45
INBOX	             | 00:01:45
FIRES	             | 00:04:05
PRIORITY LANE	     | 00:03:30
OUTBOX	           | 00:03:20
QUESTIONS	         | 00:02:00
BOARD OVERVIEW	   | 00:02:13
**Total duration** | 00:28:18

Table: Outline of daily `03`, presented here as a typical daily. Excerpt from appendix section \ref{daily-segment-lengths}. \label{daily-03-outline}

### Typical segments in depth

#### Introduction

The daily starts with an `INTRO` segment after making sure everyone is accounted for. It's noted that a team member has been absent for a while and that is affecting the team's capability of responding to fires. The team also takes issue with the state of communication between them and another team.

02:30
:   "Apparently it seems to be some ... hard to reach between business and marketing now, so–" (`D1`, referring to events from before the daily)
:   "You mean sales and marketing" (`M1`, correcting `D1`'s expression of the overall team structure)
02:41
:   "I'm just saying that we're not alone" (`D1` referring to difficulties shared with the team on a previous occasion)
02:58
:   "And I felt, it was like .. difficult" (`D1` starting to relate the experience)
03:01
:   "There's like .. two walls in between [..]" (`D2` continuing the sentiment metaphorically)
03:10
:   "So `M1` can you take down the walls or?" (`D3` asking for help in resolving the difficulties)
:   "Yes yes. `M2` comes back, we will shuffle the rooms anyway" (`M1`, referring to concrete workspace arrangements)

We can observe that the exchange is rich in history and context. Discussions from what appear to be previous dailies are referenced, as well as more immediate occurrences from the same day. The team seems content to describe the situation on a very abstract level, which could point to an understanding of concrete experiences already having been shared. The tension appears to be relieved by an explicit plea for help and a corresponding assurance that very concrete actions will be taken, despite the metaphorical level of discussion so far. Taken together, we see that the team uses the opportunity for coming together to discuss their woes and to find ways for recourse.

The team proceeds through an unstructured go-through of worries until arriving at what is apparently of immediate relevance: an upcoming feature will be requiring a significant amount of quality assurance after being shipped to production. The team assesses ways of approaching this, with `QA` and `M` negotiating the scope of testing required and the dependencies between work items that will have to be resolved to get to this stage.

08:28
:   "Done today then?" (`M`)
:   "We can't do that, the thing is not in production [..]" (`QA`)
08:35
:   "So what is blocking that?" (`M`)
:   "Uhh .. the [feature] hasn't passed QA" ('QA')
:   "Okay. And what is blocking that?" (`M`)
08:44
:   "`D` has fires." (`QA`)
:   "No, they're working right now, there's no [feature] related tasks" (`D`, challenging `QA`)
:   "Yes, there is." (`QA` restating their position)

This exchange appears to relate to the status of a specific cycle, but the team is not using the cycle's board to mediate the discussion. Thus the exchange is part of the `INTRO` segment, not `CYCLES`.

The team continues to negotiate the interrelations between work items handled by different team members and handovers required. Concern is expressed about a team member leaving for vacation after the ongoing week and some items perhaps not being completed by then, but reassurences to the contrary appear to placate everyone.

An attempt is made to start the `INBOX` segment with the prompt:

10:05
:   "What about starting from Asana now?" (`M`)

This is ineffective, because another team member wants to discuss handovers not yet mentioned. The secretary can be heard making meeting minutes on the subject.

#### Inbox

The `INBOX` segment finally starts at **11:25**. The *driver* opens Asana and allows the team to view items in the inbox on a TV screen. The inbox is a board that contains new items as input to the team and to be handled in the daily proceedings. Starting from the topmost item, item labels are read out loud. Most often, a variation of the following question is used to settle the imminence of items encountered:

11:51
:   "Fire or not?" (`M`)

Either the item is a fire, requiring the team's immediate attention, or it can be postponed to a later time. Fire would mean that the *secretary* moves the item for it to get handled in a later `FIRES` segment. The team members will respond with either "fire" or another board where the item would get handled in the appropriate fashion.

12:23
:   "Not a fire?" (`M`)
:   "No.." (`D`)
:   "Wishlist." (`M`)

The wishlist is a labeled section of the inbox board that is intended for a later grooming with relevant product owners involved. The secretary thus moves the item away from the inbox's topmost segment to the wishlist, and continuing in this way the inbox is gradually consumed of unhandled items.

<!--
- mitä suurin piirtein tapahtuu, miten osioista toiseen siirrytään
- tapahtuuko jotain arpomista sen suhteen mikä juttu otetaan seuraavaksi
- miten päätetään ollaanko valmiita
-->


### Relation between daily structure and kanban boards


Segments      | Kanban board titles
--------------|---------------
INTRO         | -
INBOX         | INBOX (Composer 2)
FIRES         | [FIRE]: This must be emptied
PRIORITY LANE | Priority lane
OUTBOX        | OUTBOX (ska diskuteras snart)
QUESTIONS     | QUESTIONS
\-            | CONTINUUM: Modules
\-            | CONTINUUM: Non-functional
\-            | (omitted)

Table: List of daily segments and the kanban board list for daily `03` overlaid. The team proceeds through the boards as they are presented.
