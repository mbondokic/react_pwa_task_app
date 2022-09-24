import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/framer-motion";
import { zoomIn } from "../animations";
import toast from "react-hot-toast";

const Actions = ({ tasks, setTasks, status, setStatus }) => {
  const clearCompleted = () => {
    setTasks(
      tasks.map((item) => {
        return { ...item, completed: false };
      })
    );
    setStatus("all");
    toast("All tasks are active!", { icon: "😎"});
  };

  const itemsLeft = tasks.filter((task) => task.completed === false);
  const itemsLeftCounter = itemsLeft.length;

  return (
    <StyledActions
      className="list-style"
      variants={zoomIn}
      initial="hidden"
      animate="show"
    >
      <small className="items-left">
        {itemsLeftCounter} {itemsLeftCounter > 1 ? "items" : "item"} left
      </small>
      <div className="filter">
        <small
          className={status === "all" ? "active" : ""}
          onClick={() => setStatus("all")}
        >
          All
        </small>
        <small
          className={status === "active" ? "active" : ""}
          onClick={() => setStatus("active")}
        >
          Active
        </small>
        <small
          className={status === "completed" ? "active" : ""}
          onClick={() => setStatus("completed")}
        >
          Completed
        </small>
      </div>
      <small className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </small>
    </StyledActions>
  );
};

export default Actions;

const StyledActions = styled(motion.div)`
  color: ${({ theme }) => theme.textSecondary};
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  transition: all 0.3s ease-in;
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media (min-width: 365px) {
    flex-wrap: nowrap;
  }
  small {
    &:hover:not(:first-child) {
      color: ${({ theme }) => theme.textPrimary};
    }
  }
  .filter {
    @media (max-width: 365px) {
      order: 3;
      margin: 0 auto;
    }
    small {
      cursor: pointer;
      margin-right: 0.5rem;
      &.active {
        color: ${({ theme }) => theme.textActive};
      }
    }
  }
  .clear-completed {
    cursor: pointer;
  }
`;
