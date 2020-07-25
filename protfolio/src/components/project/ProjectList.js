import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, Icon, CardActions, Button, makeStyles, Divider } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    buttonStyle :{
        backgroundColor:"#9921ef",
        color :"#fff",
        
        "&:hover":{
            boxShadow : "0 6px 5px 4px rgba(128,41,143,0.4)",
            color :"#000"
        }
    },
    content :{
        textAlign:"center",
    }
}));
function ProjectList(props) {
    const classes = useStyles();
    return (
        <div className="projectList">
            <Grid
            container
            direction="column"
            justify="center"
            spacing={5}
            >
                <Grid item xs={12} sm={12} lg={12}>
                    <Card raised={true}>
                        <CardMedia
                        className="card__image"
                        component="img"
                        image={`${props.img}`}
                        alt={props.title}
                        />
                        <CardContent className ={classes.content}>
                            <Typography
                            variant ="h5"
                            component="h2"
                            >
                              {props.title}
                            </Typography>
                            <Typography
                            variant = "p"
                            component="h4" 
                            >
                                Technology Used
                            </Typography>
                            <Icon
                            style={{fontSize :"4rem"}}
                            class={props.tech}
                            />   
                        </CardContent>
                        <CardActions>
                            <Button
                            className ={classes.buttonStyle}
                            href={props.deployLink}
                            >
                                Demo
                            </Button>
                            <Button
                            className ={classes.buttonStyle} 
                            href={props.gitLink}
                            >
                                View Code
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <br/>
            <br/>         
        </div>
        

    )
}
export default ProjectList
