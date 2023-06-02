import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "./default/DashboardPage";
import { ProjectPage } from "./project/ProjectPage";
import { TaskPage } from "./task/TaskPage";
import { StepPage } from "../step/StepPage";
import { Project, ProjectContext } from "../../utils/GetProjectData";
import { useState } from "react";

export function DashboardRouter() {
  const [project, setProject] = useState<Project | null>(null);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/step/:id" element={<StepPage />} />
        <Route path="/task/:id" element={<TaskPage />} />
      </Routes>
    </ProjectContext.Provider>
  );
}
