import React from 'react'
import TypeWriter from "typewriter-effect"

function MyText() {
    return (
        <TypeWriter options ={{
            strings :['Front-End Developer','Love Tech','Learner'],
            autoStart: true,
            loop :true,
            delay : 60
        }}
        />
    )
}

export default MyText

