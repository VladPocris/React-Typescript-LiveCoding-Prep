import Primitives from "./components/Primitives";
import Arrays from "./components/Arrays";
import Objects from "./components/Objects"
import TypeAllias from "./components/TypeAllias"
import ProjectsListPractice from "./components/ProjectsListPractice"
import UnionPractice from "./components/UnionPractise"
import ProfileCard from "./components/ProfileCard"
import StatePractice from "./components/StatePractice";
import InputPractice from "./components/InputPractice";
import FormPractice from "./components/FormPractice";
import { Link } from "react-router"

export default function App() {

  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/users">Users</Link>
        <Link to="/signup-form">Signup Form</Link>
        <Link to="/status">StatusMessage</Link>
      </nav>
      <Primitives />
      <Arrays />
      <Objects />
      <TypeAllias />
      <ProjectsListPractice />
      <UnionPractice />
      <ProfileCard
        name="John Doe"
        role="Developer"
        mainSkill="JavaScript"
        isAvailable={true}
      />
      <StatePractice />
      <InputPractice />
      <FormPractice />
    </>
  )
}