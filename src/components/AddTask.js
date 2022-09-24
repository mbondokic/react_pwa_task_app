import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import toast from "react-hot-toast";
import { MdAddCircleOutline, MdSync } from "react-icons/md";

const AddTask = ({
  inputTask,
  setInputTask,
  tasks,
  setTasks,
  editTask,
  setEditTask,
  inputRef
}) => {
  useEffect(() => {
    if (editTask) {
      setInputTask(editTask.text);
    } else {
      setInputTask("");
    }
  }, [setInputTask, editTask]);

  const inputHandler = (e) => {
    setInputTask(e.target.value);
  };

  const updateTask = (text, id, completed) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { text, id, completed } : task
    );
    setTasks(updatedTask);
    setEditTask("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputTask) {
      toast.error("Please add your task.");
      return;
    }

    if (!editTask) {
      setTasks([
        {
          text: inputTask,
          id: uuidv4(),
          completed: false
        },
        ...tasks
      ]);
      toast.success("Task added!");
    } else {
      updateTask(inputTask, editTask.id, editTask.completed);
      toast.success("Task updated!");
    }

    setInputTask("");
  };

  return (
    <StyledInput>
      <form className="list-style" onSubmit={submitHandler}>
        <div className="add-task">
          <input
            autoFocus
            type="text"
            id="fname"
            name="task"
            className="list-style"
            placeholder="Add Task"
            onChange={inputHandler}
            value={inputTask}
            ref={inputRef}
          />
          <button type="submit" onClick={submitHandler}>
            {editTask ? <MdSync /> : <MdAddCircleOutline />}
          </button>
        </div>
      </form>
    </StyledInput>
  );
};

export default AddTask;

const StyledInput = styled.div`
  margin-bottom: 2rem;
  transition: all 0.3s ease-in;
  box-shadow: ${({ theme }) => theme.boxShadow};
  .add-task {
    position: relative;
    input {
      inline-size: 85%;
      padding: 0;
      border: none;
    }
    input:focus-visible {
      outline: none;
    }
    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      background-color: transparent;
      outline: none;
      border: none;
      svg {
        fill: ${({ theme }) => theme.textPrimary};
        cursor: pointer;
        width: 25px;
        height: 25px;
        transition: all 0.1s ease-in;
        &:hover {
          fill: ${({ theme }) => theme.textActive};
        }
      }
    }
  }
`;
