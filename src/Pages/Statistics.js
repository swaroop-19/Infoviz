import { Typography } from '@mui/material'
import React from 'react'

export default function Statistics() {
  return (
    <div>
      <Typography variant="h2" component="h2">
        How It Works
      </Typography>
      <Typography variant="h6" component="h6">
      The initial page consists of an overview of the dataset created. Specifically, it displays the duration spent by each Analyst in one bar graph visualization and the count of each interaction for each Analyst in the other.

The user can select the analyst (U1 to U8) by clicking on the respective bar. It then displays the next page, which consists of time segments for the entire duration of the document analysis.

After the user selects the particular time segment by clicking on the bar, a customized visualization dashboard is displayed that consists of multiple information visuals.

Here on this page, the user can see various insights, such as the document he opened and read, frequencies of interaction types, the words an analyst has searched for in a particular document, the text he highlighted, etc. 

There are buttons to navigate to and fro from the visualizations provided at the bottom.
      </Typography>
      </div>
  )
}
