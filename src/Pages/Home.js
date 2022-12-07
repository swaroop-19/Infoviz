import { Typography } from '@mui/material';
import React,{useRef, useEffect} from 'react'

const {tableau} = window;

export default function Home() {
  const ref=useRef(null);
  const url=
  "https://public.tableau.com/views/IVfinalproject-4/overview-firstpage?:language=en-US&:display_count=n&:origin=viz_share_link";
  function initViz(){
    new tableau.Viz(ref.current,url);
  }

  useEffect(() => {
    initViz();
  },[]);

  return (
    <div>
      <Typography> </Typography>
      <div ref={ref}></div>
    </div>
  );
}

