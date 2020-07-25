import React from 'react'
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import { Typography, makeStyles,Icon } from '@material-ui/core'
import firebase from "../images/firebase.png"
import vs from "../images/visualstudio.png";
const useStyles = makeStyles(()=>({
    card:{
        marginLeft:"4rem", 
        padding:"0px 50px 50px 50px",
         
    },
    card_flex:{
        display:"flex",
        marginRight:"40px",
        cursor:"pointer"
    },
    
    heading:{
        fontSize:"3rem",
        textAlign:"center",
    },
}));


function Tools() {
    const classes = useStyles();
    return (
        <div className="tools">
             <Grid container spacing={3}>
                <Card className={classes.card}
                raised="true">
                    <Typography className ={classes.heading} variant="h1" component="h1">
                        Tools
                    </Typography>
                    <br/>
                    <br/>
                    <div className={classes.card_flex}>
                    <img src={firebase}/>
                    <img src={vs}/>
                    <Icon style={{fontSize:"7rem",cursor:"pointer"}}  className="devicon-git-plain-wordmark colored"></Icon>
                    </div>
                    </Card>
                    </Grid>   
        </div>
    )
}

export default Tools
