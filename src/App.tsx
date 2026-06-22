import Primitives from "./topics/Primitives";
import Arrays from "./topics/Arrays";
import Objects from "./topics/Objects"
import TypeAllias from "./topics/TypeAllias"
import ProjectsListPractice from "./topics/ProjectsListPractice"
import UnionPractice from "./topics/UnionPractise"
import ProfileCard from "./topics/ProfileCard"
import StatePractice from "./topics/StatePractice";
import InputPractice from "./topics/InputPractice";
import FormPractice from "./topics/FormPractice";
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