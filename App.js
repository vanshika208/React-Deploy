import React from "react";
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Writearecommendation from "./components/Writearecommendation";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import ProjectPage from "./components/ProjectPage";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import AddProject from "./components/AddProject";
import AddBlog from "./components/AddBlog";
import {Provider} from "./context";
import AllProjects from "./components/AllProjects";
import ScrollToTop from "./components/ScrollToTop";
import AllBlogs from "./components/AllBlogs";
import Test from "./components/Test";


function App() {
  return (
    <Provider>
      <BrowserRouter>
       <ScrollToTop />
       <Navbar />
       <Switch>
         <Route exact path="/" component={HomePage} /> 
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/writearecommendation" component={Writearecommendation} />
         <Route exact path ="/allprojects" component={AllProjects} />
         <Route exact path ="/allblogs" component={AllBlogs} />
         <Route exact path="/project/add" component={AddProject} />
         <Route exact path="/project/:id" component={ProjectPage} />
         <Route exact path="/blog/add" component={AddBlog} />
         <Route exact path="/blog/:id" component={BlogPage} />
         <Route exact path="/test" component={Test} />
         <Route>
           < NotFound />
         </Route>
       </Switch>
              
       < Footer />
   
         
     
      </BrowserRouter>

    </Provider>
    
  );
        
}

export default App;
