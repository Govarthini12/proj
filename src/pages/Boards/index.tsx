// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { useState } from "react";
// import { Board } from "../../data/board";
// import { Columns } from "../../types";
// import { onDragEnd } from "../../helpers/onDragEnd";
// import { AddOutline } from "react-ionicons";
// import AddModal from "../../components/Modals/AddModal";
// import TaskT from "../../components/Task";

// const Home = () => {
//   const [columns, setColumns] = useState<Columns>(Board);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedColumn, setSelectedColumn] = useState("");

//   const openModal = (columnId: any) => {
//     setSelectedColumn(columnId);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handleAddTask = (taskData: any) => {
//     const newBoard = { ...columns };
//     newBoard[selectedColumn].items.push(taskData);
//     setColumns(newBoard); // update the state after adding the task
//   };

//   const handleDeleteTask = (columnId: string, taskId: number) => {
//     const newBoard = { ...columns };
//     newBoard[columnId].items = newBoard[columnId].items.filter((task: any) => task.id !== taskId);
//     setColumns(newBoard); // update the state after deletion
//   };

//   const handleEditTask = (columnId: string, updatedTask: any) => {
//     const newBoard = { ...columns };
//     const taskIndex = newBoard[columnId].items.findIndex((task: any) => task.id === updatedTask.id);
//     if (taskIndex !== -1) {
//       newBoard[columnId].items[taskIndex] = updatedTask;
//     }
//     setColumns(newBoard); // update the state after editing
//   };

//   return (
//     <>
//       <DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
//         <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
//           {Object.entries(columns).map(([columnId, column]: any) => (
//             <div className="w-full flex flex-col gap-0" key={columnId}>
//               <Droppable droppableId={columnId} key={columnId}>
//                 {(provided: any) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                     className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
//                   >
//                     <div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
//                       {column.name}
//                     </div>
//                     {column.items.map((task: any, index: any) => (
//                       <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
//                         {(provided: any) => (
//                           <TaskT
//                             provided={provided}
//                             task={task}
//                             onEdit={(updatedTask: any) => handleEditTask(columnId, updatedTask)} // Pass the edit handler
//                             onDelete={() => handleDeleteTask(columnId, task.id)} // Pass the delete handler
//                           />
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//               <div
//                 onClick={() => openModal(columnId)}
//                 className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
//               >
//                 <AddOutline color={"#555"} />
//                 Add Task
//               </div>
//             </div>
//           ))}
//         </div>
//       </DragDropContext>

//       <AddModal isOpen={modalOpen} onClose={closeModal} setOpen={setModalOpen} handleAddTask={handleAddTask} />
//     </>
//   );
// };

// export default Home;

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { Columns } from "../../types";
import { onDragEnd } from "../../helpers/onDragEnd";
import { AddOutline } from "react-ionicons";
import AddModal from "../../components/Modals/AddModal";
import TaskT from "../../components/Task";

const Home = () => {
  const [columns, setColumns] = useState<Columns>({
    backlog: {
      name: "Backlog",
      items: [],
    },
    pending: {
      name: "Pending",
      items: [],
    },
    todo: {
      name: "To Do",
      items: [],
    },
    doing: {
      name: "Doing",
      items: [],
    },
    done: {
      name: "Done",
      items: [],
    },
  });
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  const openModal = (columnId: string) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddTask = (taskData: any) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
    setColumns(newBoard); // update the state after adding the task
    closeModal(); // Close the modal after adding the task
  };

  const handleDeleteTask = (columnId: string, taskId: number) => {
    const newBoard = { ...columns };
    newBoard[columnId].items = newBoard[columnId].items.filter((task: any) => task.id !== taskId);
    setColumns(newBoard); // update the state after deletion
  };

  const handleEditTask = (columnId: string, updatedTask: any) => {
    const newBoard = { ...columns };
    const taskIndex = newBoard[columnId].items.findIndex((task: any) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      newBoard[columnId].items[taskIndex] = updatedTask;
    }
    setColumns(newBoard); // update the state after editing
  };

  return (
    <>
      <DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div className="w-full flex flex-col gap-0" key={columnId}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
                  >
                    <div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
                      {column.name}
                    </div>
                    {column.items.map((task: any, index: any) => (
                      <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
                        {(provided: any) => (
                          <TaskT
                            provided={provided}
                            task={task}
                            onEdit={(updatedTask: any) => handleEditTask(columnId, updatedTask)}
                            onDelete={() => handleDeleteTask(columnId, task.id)}
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() => openModal(columnId)}
                className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
              >
                <AddOutline color={"#555"} />
                Add Task
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      <AddModal isOpen={modalOpen} onClose={closeModal} setOpen={setModalOpen} handleAddTask={handleAddTask} />
    </>
  );
};

export default Home;
