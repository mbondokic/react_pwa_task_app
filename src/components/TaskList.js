import React from "react";
import styled from "styled-components";
import { motion, Reorder } from "framer-motion";
import { pageAnimation, zoomIn } from "../animations";
import TaskItem from "../components/TaskItem";

const TaskList = ({
  tasks,
  setTasks,
  setEditTask,
  filteredTasks,
  inputRef
}) => {
  return (
    <>
      {filteredTasks?.length ? (
        <StyledList
          axis="y"
          values={tasks}
          onReorder={setTasks}
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          {filteredTasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                value={task}
                tasks={tasks}
                setTasks={setTasks}
                setEditTask={setEditTask}
                inputRef={inputRef}
              />
            );
          })}
        </StyledList>
      ) : (
        <NoTasksMessage variants={zoomIn} initial="hidden" animate="show">
          No tasks to show.
        </NoTasksMessage>
      )}
    </>
  );
};

export default TaskList;

const StyledList = styled(Reorder.Group)`
  transition: all 0.3s ease-in;
  li {
    padding-left: 2.5rem;
  }
`;

const NoTasksMessage = styled(motion.p)`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.5rem;
  text-align: center;
`;
