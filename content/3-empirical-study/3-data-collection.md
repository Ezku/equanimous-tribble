
# Data collection and analysis

## Research methodology

From December 2015 to January 2016, a period of time including a break for seasonal holidays, 20 individual daily events were observed and recorded. The time span was chosen both to get a representative sample of dailies and to allow for the potential discovery of a shift in the team's understanding of the system of work and the flow of work through the system.

The events observed were part of the everyday proceedings of the software development team. The team was informed beforehand of the intent to record the proceedings and that the intent would *not* be to interfere with what occurs naturally or deploy interventions for purposes of study. The author took part in all of these events and took the same role of secretary (as described in \ref{daily-roles}) in each one. The dailies took place in a meeting room that was fitted with a table, on which a mobile device was set for purposes of recording before the beginning of each daily.

Audio recordings consitute the main body of research data. After dailies, notes on what went on were made to accompany the recordings as basis for further analysis later. In addition to audio recordings and the accompanying notes, the kanban boards' structure was captured as screenshots from the virtual kanban board tool described in section \ref{daily-tools}.

Audio recordings were transferred from the recording device, an *iPhone 5S*, as *mp4* files, and played back using *VLC Player*. An initial analysis and structuring of the material was carried out for each daily by first reviewing the associated notes as a clue on possible interesting events, features, or background information useful for understanding the proceedings and then playing back the audio in a linear fashion. Notes of the audio were made in text format, logging timestamps of discussion topics and interactions that were found to be of interest. This *segment analysis* yielded an outline of dailies that is further described in section \ref{durations-and-segments}.

Capturing the kanban boards' structure as screenshots yielded material of two different kinds. The web software Asana described in \ref{daily-tools} presents what the researcher understood as kanban boards as a linear list. The contents of this list were extracted and are presented as indexes in appendix section \ref{kanban-board-lists}. The individual kanban boards' structure, expressed likewise as a linear list of labels or 'states', was extracted in a similar fashion and presented fully in appendix section \ref{kanban-board-structure}.


## Overview of collected data

This section presents an outline on the data and its salient features. Table \ref{daily-overview} is introduced as a basis for reference.

Daily index  |Date        |Recorded | Effective | Language| Attendance
-------------|------------|--------:|----------:|---------|----------:
01           | 8.12.2015  | 36:36   | 34:01     | English | 7
02           | 9.12.2015  | 48:53   | 47:19     | English | ?
03           | 10.12.2015 | 28:30   | 27:38     | English | 7
04           | 11.12.2015 | 33:51   | 32:25     | English | 9
05           | 14.12.2015 | 28:16   | 27:34     | Finnish | 7
06           | 15.12.2015 | 17:47   | 15:23     | Finnish | 5
07           | 16.12.2015 | 27:08   | 26:42     | Finnish | 5
08           | 17.12.2015 | 20:26   | 19:50     | Finnish | ?
09           | 18.12.2015 | 19:03   | 17:20     | Finnish | ?
10           | 21.12.2015 | 31:13   | 30:10     | Finnish | 4
11           | 22.12.2015 | 11:57   | 11:07     | Finnish | 3
12           | 7.1.2016   | 34:28   | 32:14     | English | 8
13           | 8.1.2016   | 47:33   | 45:52     | English | 7
14           | 11.1.2016  | 36:06   | 35:16     | English | 10
15           | 12.1.2016  | 51:44   | 51:03     | English | 9
16           | 13.1.2016  | 1:00:21 | 59:36     | English | 8
17           | 14.1.2016  | 53:35   | 52:02     | English | ?
18           | 15.1.2016  | 40:29   | 40:00     | English | 7
19           | 18.1.2016  | 49:57   | 48:25     | English | 8
20           | 19.1.2016  | 41:11   | 39:24     | English | 8

Table: Overview of audio material on dailies by daily index number and date. *Recorded* is the duration of the audio recording. *Effective* represents the duration of the part of the recording that was interpreted to constitute the daily activities (see \ref{daily-segment-lengths}). *Attendance* is the number of participants present. \label{daily-overview}

### Attendance and language

The dailies gathered an attendance of three to ten participants. As table \ref{daily-overview} shows, there is a drop in attendance halfway through the observation period. This is attributable to national holidays and the associated vacation periods starting in a staggered fashion. The team's mean daily attendance during normal operation appears to be seven to eight participants (dailies 01 to 05 and 12 to 20).

Due its international composition, the team handled most of the dailies in English, reverting to Finnish when team member attendance allowed for it. Seven out of the twenty dailies observed were conducted in Finnish (dailies 06 to 11). When quotes originally in Finnish are presented in the empirical findings section, translations by the researcher are shown for accessibility.

### Durations and segments {#durations-and-segments}

The 20 dailies recorded altogether consist of a total of 11 hours, 59 minutes and 12 seconds of audio. According to the segment analysis the recordings could be trimmed to a total effective duration of 11 hours, 33 minutes and 21 seconds constituting the entirety of what was considered as the daily activities. The average effective duration of a daily was 34 minutes and 40 seconds.

Metric       |            | Effective
-------------|------------|----------:
**Total**    |            | 11:33:21
**Average**  |            | 00:34:40

Table: Aggregate metrics of effective daily durations.

A total of 13 different daily segments were identified in the material. Table \ref{total-segment-lengths} shows a summary of the data. Complete tables of the daily segments observed can be found in appendix section \ref{daily-segment-lengths}.

\csvautolongtable[
  table head={
    \caption{Total durations of identified segments, their average length and counts of their occurrences in the material.}\label{total-segment-lengths}\\\hline
    \csvlinetotablerow\\\hline
    \endfirsthead\hline
    \csvlinetotablerow\\\hline
    \endhead\hline
    \endfoot
  },
  respect all
]{data/processed/total-segment-lengths.csv}
