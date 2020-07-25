import React from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'
import "./Contact.css"
const useStyles = makeStyles(()=>({
    contact :{
        display:"flex",
        flexWrap:"1"
    },
    LinkedIn :{
        border:"2px solid blue ",
        color:"blue",
        padding:"5px",
        marginRight:"40px"
    },
    Instagram:{
        border:"2px solid darkorange",
        color:"darkorange",
        padding:"5px",
        marginRight:"40px"
    },
    GitHub:{
        border:"2px solid black",
        color:"black",
        padding:"5px",
        marginRight:"40px"    
    },
    Gmail:{
        border:"2px solid red",
        color:"red",
        padding:"5px",
        marginRight:"40px"    
    },
    Twitter:{
        border:"2px solid darkblue",
        color:"darkblue",
        padding:"5px",
        marginRight:"40px"      
    }
}))
function Contact() {
    const classes = useStyles();
    return (
        <div id="contact">
            <div className="contact__title">
                Contact 
            </div>
            <div >
                <Grid className ={classes.contact} container>
                    <Grid item xs={6} sm={4} lg={2}>
                        <Button className={classes.LinkedIn} href="https://www.linkedin.com/in/venkata-mouli-a347351a0/"><img src="https://img.icons8.com/color/26/000000/linkedin.png"/>  Linkedin</Button>
                    </Grid>
                    <Grid item xs={6} sm={4} lg={2}>
                        <Button className={classes.Instagram} href="https://www.instagram.com/m.o.u.l.i___/"><img src="https://img.icons8.com/color/48/000000/instagram-new.png"/>   Instagram</Button>
                        
                    </Grid>
                    <Grid item xs={6} sm={4} lg={2}>
                        <Button className={classes.GitHub} href="https://github.com/mouli3029"><img src="https://img.icons8.com/ios-filled/48/000000/github.png"/>   GitHub</Button>
                        
                    </Grid>
                    <Grid item xs={6} sm={4} lg={2}>
                        <Button className={classes.Gmail} href="mailto: venkatmouli823@gmail.com"><img src="https://img.icons8.com/color/48/000000/gmail.png"/>   Gmail</Button>
                        
                    </Grid>
                    <Grid item xs={6} sm={4} lg={2}>
                        <Button className={classes.Twitter} href="https://twitter.com/Mouli37888336"><img src="https://img.icons8.com/color/48/000000/twitter.png"/>   Twitter</Button>   
                    </Grid>
                </Grid>
            </div>
             
        </div>
    )
}
export default Contact
