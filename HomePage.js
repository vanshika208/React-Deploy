import React from "react";
import Project from "./Project";
import Blog from "./Blog";
import SkillSection from "./SkillSection";
import Recommendation from "./Recommendation";
import Title from "./Title";
import About from "./About";

function HomePage() {
    return (
        <div>
            < Title 
                  name="ABC"  
                  leadText="I am a freelancer from India" />
             < Recommendation />
             < SkillSection />
             < Project />
             < About />
             < Blog />

        </div>
    );
}

export default HomePage;
    