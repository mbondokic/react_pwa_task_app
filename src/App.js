import React, { useState, useEffect, useRef } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
// Theme
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
// Notifications
import { Toaster } from 'react-hot-toast';
// Components
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Actions from "./components/Actions";
import Footer from "./components/Footer";

function App() {
  // Theme setup
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  // Check for tasks in localStorage
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  // States
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState(initialState);
  const [editTask, setEditTask] = useState(null);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const inputRef = useRef(null);
  
  useEffect(() => {
    filterHandler();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case "active":
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  if (!componentMounted) {
    return <div />;
  }

  const toastStyle = {
    style: {
      borderRadius: "0.375rem",
      backgroundColor: `${theme === 'light' ? '#fff' : '#25273c'}`,
      color: `${theme === 'light' ? '#333' : '#fff'}`,
      transition: 'all 0.3s ease-in'
    }
  }
  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <AddTask
          inputTask={inputTask}
          setInputTask={setInputTask}
          tasks={tasks}
          setTasks={setTasks}
          editTask={editTask}
          setEditTask={setEditTask}
          inputRef={inputRef}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          setEditTask={setEditTask}
          filteredTasks={filteredTasks}
          inputRef={inputRef}
        />
        {tasks.length > 0 && (
          <Actions
            tasks={tasks}
            setTasks={setTasks}
            status={status}
            setStatus={setStatus}
          />
        )}
        {tasks.length > 1 && <Footer/>}
        <Toaster toastOptions={toastStyle} />
      </ThemeProvider>
    </div>
  );
}

export default App;
