import React from "react";
import styled from "styled-components";
import { Reorder } from "framer-motion/framer-motion";
import {zoomIn} from '../animations';
import toast from "react-hot-toast";
import {
  MdModeEdit,
  MdDeleteOutline,
  MdOutlineCircle,
  MdOutlineCheckCircle
} from "react-icons/md";

const TaskItem = ({ task, tasks, setTasks, setEditTask, inputRef, value }) => {
  const deleteHandler = () => {
    setTasks(tasks.filter((item) => item.id !== task.id));
    toast("Task deleted!", { icon: "👋🏻" });
  };

  const editHandler = ({ id }) => {
    const targetTask = tasks.find((item) => item.id === id);
    setEditTask(targetTask);
    inputRef.current.focus();
  };

  const completeHandler = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
    if (task.completed === false) {
      toast("Good job!", { icon: "👏🏻" });
    }
  };

  return (
    <StyledTaskItem
      className="list-style"
      value={value}
      variants={zoomIn}
    >
      <p className={`${task.completed ? "completed" : ""}`}>{task.text}</p>
      <MdModeEdit className="edit" onClick={() => editHandler(task)} />
      <MdDeleteOutline className="delete" onClick={deleteHandler} />
      <span className="check" onClick={completeHandler}>
        {task.completed ? <MdOutlineCheckCircle className="checked" /> : <MdOutlineCircle />}
      </span>
    </StyledTaskItem>
  );
};

export default TaskItem;

const StyledTaskItem = styled(Reorder.Item)`
  position: relative;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in;
  box-shadow: ${({ theme }) => theme.boxShadow};
  p {
    inline-size: 80%;
    overflow-wrap: break-word;
  }
  &::after {
    position: absolute;
    content: "";
    top: 10%;
    right: 4.5rem;
    width: 1px;
    height: 80%;
    background-color: ${({ theme }) => theme.textSecondary};
  }
  .check {
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    left: 0.75rem;
    cursor: pointer;
  }
  .completed {
    color: ${({ theme }) => theme.textSecondary};
    text-decoration: line-through;
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all .1s ease-in;
    &.edit {
      right: 2.75rem;
    }
    &.delete {
      right: 0.75rem;
    }
    &.checked {
      fill: ${({ theme }) => theme.textActive};
    }
    fill: ${({ theme }) => theme.textPrimary};
    cursor: pointer;
    width: 20px;
    height: 20px;
    &:hover {
      fill: ${({ theme }) => theme.textActive};
    }
  }
`;
