\pagebreak{}

## Change in the daily structure {#structural-change}

The previous section answered the question of how the daily happened. To support an argument about a relation between the daily and its sociomaterial context, in this section we attempt to reach for an understanding on how the daily could have come to take this form.

Observing table \ref{segments-vs-boards} where the segments undergone in the daily and the kanban boards have been overlaid, we find that the boards are in the same order as the team uses when proceeding through the daily. This gives rise to the idea that the structure of a daily and the structure of the boards are interrelated. Indeed, this is not an uncommon occurrence: `INBOX` – `FIRES` - `PRIORITY LANE` - `OUTBOX` - `QUESTIONS` is a typical sequence through the observation period.

Segments                 | Kanban board titles
-------------------------|------------------------------
INTRO                    | -
INBOX                    | INBOX (Composer 2)
FIRES                    | [FIRE]: This must be emptied
PRIORITY LANE            | Priority lane
OUTBOX                   | OUTBOX (ska diskuteras snart)
QUESTIONS                | QUESTIONS
NON-FUNCTIONAL CONTINUUM | CONTINUUM: Non-functional
BOARD OVERVIEW           | -

Table: List of daily segments and the kanban board list for daily `03` overlaid. \label{segments-vs-boards}

Table \ref{segment-deltas} details occurrences of daily segments. The segments `INBOX`, `FIRES`, `PRIORITY LANE`, `OUTBOX` and `QUESTIONS` occur from 17 to 21 times. We could consider these top segments to form the stable skeleton of a daily. Most other segments only get a handful of visits, with the runner-ups being `NON-FUNCTIONAL CONTINUUM` at 13 and `NON-CORE MODULE CONTINUUM` at 8 occurrences respectively.

\csvautolongtable[
  table head={
    \caption{First and last occurrences of segments through observation period with the count of occurrences in between.}\label{segment-deltas}\\\hline
    \csvlinetotablerow\\\hline
    \endfirsthead\hline
    \csvlinetotablerow\\\hline
    \endhead\hline
    \endfoot
  },
  respect all
]{data/processed/segment-deltas.csv}

It might be reasonable to infer a causality here. However, it's not evident if the team's daily structure is indeed encoded in the kanban boards' layout, or if the boards are merely arranged in imitation of the daily. To answer this question, consider what happens when the boards are disturbed. Table \ref{segment-deltas} gives a hint about where to look for such a disturbance: segments `MONEYBOX`, `MARKETING BOX` and `WATBOX` appear for the first time at the end of the observation period but are nowhere to be seen by daily `20`. To corroborate a hypothesis about a relation between the daily and the boards, a first order explanation of a change having been made to the boards would suffice. Table \ref{difference-in-board-layout} describes modifications made to the board layout for daily `19`.

| Prior to daily `19`           | Daily `19`                    |
|-------------------------------|-------------------------------|
| INBOX (Composer 2)            | INBOX (Composer 2)            |
| [FIRE]: This must be emptied  | [FIRE]: This must be emptied  |
| Priority lane                 | Priority lane                 |
| OUTBOX (ska diskuteras snart) | OUTBOX (ska diskuteras snart) |
| \-                            | MONEYBOX                      |
| QUESTIONS                     | QUESTIONS                     |
| \-                            | MARKETING                     |
| CONTINUUM: Non-functional     | CONTINUUM: Non-functional     |
| CONTINUUM: Modules            | CONTINUUM: Modules            |

Table: Difference in board layout for daily `19`.\label{difference-in-board-layout}

By daily `19`, boards associated with the segments `MONEYBOX` and `MARKETING BOX` appear in the layout, intermingled among the most commonly used boards. `WATBOX` seems to be an anomaly, because although it is exhibited in the daily segment after `MONEYBOX` the board itself is still out of the way and would not even be visible on the driver's screen. Apparently there was a commonality between the three, however, because in daily `20` the team has again groomed the boards for `MONEYBOX` and `MARKETING BOX` outside the group of most common boards and together with `WATBOX`.

One interpretation for this series of events is that there occurred a disturbance which necessitated the provision of new places to put things for them to get done eg. at the appropriate timeliness. The boards are perused once or twice in dailies until the team figures that it's not getting any use out of doing this commonally, at which point the boards are moved out of the way of the ordinary daily flow.

From the looks of things, it does stand to reason that the structure of the board and the daily go hand in hand. If this is a credible statement, it should be a hint that the daily and its sociomaterial context are engaged in a recursive loop of unfolding driven by tensions introduced and resolved during the practice of a daily. It's too early to make that claim, however. Of course, we're only investigating the matter on the level of segments and boards and ignoring most of the story. In the next section we will take the chance to have a closer look at the dynamics and nature of this processual evolution more closely.
