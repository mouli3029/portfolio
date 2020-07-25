import React from 'react'
import "./Skills.css"
import { Grid, makeStyles } from '@material-ui/core'
import FrontEnd from "../Cards/FrontEnd";
import Languages from "../Cards/Languages"
import Tools from "../Cards/Tools"
import Fade from "react-reveal/Fade"

const useStyles = makeStyles(()=>({
    it:{
        direction:"flex",
        flexDirection:"row-reverse"
    }
}))
function Skills() {
    const classes = useStyles();
    return (
        <div id="skills">
            <div className="skills">
                <Fade left>
               <div className="skills__title">
                   TECH SKILLS
               </div>
               </Fade>
               <Grid container spacing={4}>
                   <Grid item xs={12} sm={6} lg={4}>
                       <Fade left>
                       <FrontEnd/>
                       </Fade>
                   </Grid>
                   <Grid item xs={12} sm={6} lg={4}>
                       <Fade bottom>
                       <Languages/>
                       </Fade>
                   </Grid>
                   <Grid item alignItems="center" xs={12} sm={6} lg={4}>
                       <Fade right>
                       <Tools/>
                       </Fade>
                   </Grid>       
               </Grid>   
            </div>    
        </div>
    )
}

export default Skills
