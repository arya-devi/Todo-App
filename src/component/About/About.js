import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1 style={{ color: "grey", textAlign: "center", marginTop: "20px",letterSpacing:".6rem" }}>
        About Todo
      </h1>
      <div className="paragraph1">
        <p>
          A Todo app, short for "To-Do" application, is a software tool designed
          to help individuals or teams manage tasks, activities, and to-do items
          in an organized and efficient manner. These apps are popular for
          personal and professional use, offering a convenient way to keep track
          of what needs to be done. Here's a description of a typical Todo app:
        </p>
      </div>
      <div className="paragraph2">
        <p>
          1. Task List: The core feature of a Todo app is a list that displays
          tasks or to-do items. Each task is usually presented as a list item,
          card, or a similar visual representation.<br/> 
          2. Task Creation: Users can
          add new tasks to the list. This typically involves providing a title
          or description for the task, and sometimes additional information such
          as due dates, priorities, and labels. <br/> 
          3. Task Completion: Users can
          mark tasks as completed, typically by checking off a checkbox or using
          a similar action. Completed tasks are usually visually differentiated
          from active tasks. <br/> 
          4. Task Deletion: To keep the list organized, users
          can delete tasks they no longer need. This can be done using a
          "Delete" or "Remove" action associated with each task.<br/>  
          5. Task Editing: Users often have the option to edit the text and details of a
          task after it's been added to the list. This can be done through an
          "Edit" button or by enabling inline editing.<br/> 
          6. Task Priority: Some Todo apps allow users to set the priority of tasks, such 
          as high, medium, or low. This helps users prioritize their work.<br/> 
          7. Due Dates: Users can set due dates for tasks, and the app may provide reminders 
          or notifications to ensure tasks are completed on time.<br/> 
          8. Categories or Labels: Users can categorize or label tasks. This feature helps users
           organize their to-dos by grouping related tasks together.<br/> 
        </p>
      </div>
    </div>
  );
};
export default About;
