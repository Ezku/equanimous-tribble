
# Daily segment lengths

\csvautolongtable[
  table head={
    \caption{Identified segments in dailies by their timestamp in the recording and duration.}\label{tab:daily-segment-lengths}\\\hline
    \csvlinetotablerow\\\hline
    \endfirsthead\hline
    \csvlinetotablerow\\\hline
    \endhead\hline
    \endfoot
  },
  respect all
]{data/processed/daily-segment-lengths.csv}
