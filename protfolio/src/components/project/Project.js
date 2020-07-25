import React from 'react'
import Grid from "@material-ui/core/Grid"
import amazon from "../images/amazon.png"
import movie from "../images/movie.png"
import wallpaper from "../images/wallpaper.png"
import protfolio from "../images/protfolio.png"
import ProjectList from "./ProjectList"
import './Project.css'
import  Fade  from 'react-reveal/Fade';

function Project() {
    return (
        <div id="project">
            <Fade left>
                <div className="project__title">
                    My Projects
                </div>
                </Fade>
                
                <Fade bottom>
                <Grid container spacing={3}>
                
                       <Grid item xs={12} sm={6} lg={6}>
                           <ProjectList
                           img = {amazon}
                           title ="Amazon-Clone"
                           tech ="devicon-react-original-wordmark colored"
                           deployLink = "https://clone-3a2b6.web.app/"
                           gitLink ="https://github.com/mouli3029/amazon-clone"
                           />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                           <ProjectList
                           img = {wallpaper}
                           title ="Wallpaper-Generator"
                           tech ="devicon-react-original-wordmark colored"
                           deployLink = "https://wallpaper-generator-d8f04.web.app"
                           gitLink ="https://github.com/mouli3029/wallpaper-generator"
                           />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                           <ProjectList
                           img = {movie}
                           title ="Search Movie"
                           tech ="devicon-react-original-wordmark colored"
                           deployLink = "https://movie-search-bca2a.web.app/"
                           gitLink ="https://github.com/mouli3029/movie-search"
                           />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                           <ProjectList
                           img = {protfolio}
                           title ="MyProtfolio"
                           tech ="devicon-react-original-wordmark colored"
                           deployLink = "#"
                           gitLink ="https://github.com/mouli3029/protfolio"
                           />
                       </Grid>
                      
                   </Grid> 
                   </Fade> 
                     
   </div>
    )
}

export default Project
