import React from "react";
import {  Routes, Route,  useNavigate } from "react-router-dom";
import { About } from "../pages/About";
import { styled } from "@mui/material";
import { MenuCourses } from "../pages/MenuCourses";
import { Notifications } from "../pages/Notifications";
import { Aside } from "../pages/Aside";
import { Ratings } from "../pages/Ratings";
import { Students } from "../pages/Students";
import {  Students2 } from "../pages/Students2";
import { Material } from "../pages/Materials";
import { MaterialContent } from "../pages/Material-Content";
import { VailSubWaitLate } from "../pages/VailSubWaitLate";
import { Anouncements } from "../pages/Anouncements";
 const Loyut = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Aside/>
   
      <main>
        <Routes>
            <Route path="/courses" element={<MenuCourses/>}>
            <Route path="materials" element={<Material/>}/>
            <Route path="materials/:materialId/detail" element={<MaterialContent/>}>
              <Route path="submitted" element={<VailSubWaitLate children={"Submitted page"}/>}/>
              <Route path="waiting" element={<VailSubWaitLate children={"Waiting page"}/>}/>
              <Route path="late" element={<VailSubWaitLate children={"Late page"}/>}/>
            </Route>
            <Route path="students" element={<Students/>}/>
              <Route path="students/:paramId/detail" element={<Students2/>}/>
            <Route path="ratings" element={<Ratings children={'Ratings page'} addNavigate={() => navigate("/courses")} childrenButton={"Go to Curses"}/>}/>
            </Route>

          <Route path="/anouncements" element={<Anouncements/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/schedule" element={<About children={" Schedule  Page"}  childrenButton={"Go to Notifications Page"}/>} />
        </Routes>
        
      </main>
    </div>
  );
};

export {Loyut}

 


