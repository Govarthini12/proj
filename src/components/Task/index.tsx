// import { TimeOutline } from "react-ionicons";
// import { TaskT } from "../../types";
// import { useState } from "react";

// interface TaskProps {
//   task: TaskT;
//   provided: any; // Replace with the appropriate type from react-beautiful-dnd
//   onEdit: (updatedTask: TaskT) => void;
//   onDelete: (taskId: number) => void;
// }

// const TaskT = ({ task, provided, onEdit, onDelete }: TaskProps) => {
//   const { id, title, description, priority, deadline, tags } = task;

//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(title);
//   const [editedDescription, setEditedDescription] = useState(description);
//   const [editedPriority, setEditedPriority] = useState(priority);
//   const [editedDeadline, setEditedDeadline] = useState(deadline);

//   const [editedTags, setEditedTags] = useState(tags);

//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSave = () => {
//     onEdit({
//       ...task,
//       title: editedTitle,
//       description: editedDescription,
//       priority: editedPriority,
//       deadline: editedDeadline,
     
//       tags: editedTags,
//     });
//     toggleEditMode();
//   };

//   const handleDelete = () => {
//     onDelete(id);
//   };

//   return (
//     <div
//       ref={provided.innerRef}
//       {...provided.draggableProps}
//       {...provided.dragHandleProps}
//       className="w-full cursor-grab bg-[#fff] flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4"
//     >
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={editedTitle}
//             onChange={(e) => setEditedTitle(e.target.value)}
//             className="border rounded px-2 py-1 w-full"
//           />
//           <textarea
//             value={editedDescription}
//             onChange={(e) => setEditedDescription(e.target.value)}
//             className="border rounded px-2 py-1 w-full"
//           ></textarea>
//           <input
//             type="text"
//             value={editedPriority}
//             onChange={(e) => setEditedPriority(e.target.value)}
//             className="border rounded px-2 py-1 w-full"
//           />
//           <input
//             type="date"
//             value={editedDeadline}
//             onChange={(e) => setEditedDeadline(e.target.value)}
//             className="border rounded px-2 py-1 w-full"
//           />
//           <input
//             type="text"
//             value={editedTags.map(tag => tag.title).join(", ")}
//             onChange={(e) => {
//               const newTags = e.target.value.split(",").map(title => ({ title: title.trim(), bg: "#ccc", text: "#000" })); // Adjust based on your Tag structure
//               setEditedTags(newTags);
//             }}
//             placeholder="Tags (comma separated)"
//             className="border rounded px-2 py-1 w-full"
//           />
//           <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
//             Save
//           </button>
//           <button onClick={toggleEditMode} className="bg-gray-500 text-white px-4 py-2 rounded">
//             Cancel
//           </button>
//         </>
//       ) : (
//         <>
//           {image && alt && <img src={image} alt={alt} className="w-full h-[170px] rounded-lg" />}
//           <div className="flex items-center gap-2">
//             {tags.map((tag) => (
//               <span
//                 key={tag.title}
//                 className="px-[10px] py-[2px] text-[13px] font-medium rounded-md"
//                 style={{ backgroundColor: tag.bg, color: tag.text }}
//               >
//                 {tag.title}
//               </span>
//             ))}
//           </div>
//           <div className="w-full flex items-start flex-col gap-0">
//             <span className="text-[15.5px] font-medium text-[#555]">{title}</span>
//             <span className="text-[13.5px] text-gray-500">{description}</span>
//           </div>
//           <div className="w-full border border-dashed"></div>
//           <div className="w-full flex items-center justify-between">
//             <div className="flex items-center gap-1">
//               <TimeOutline color={"#666"} width="19px" height="19px" />
//               <span className="text-[13px] text-gray-700">{deadline}</span>
//             </div>
//             <div
//               className={`w-[60px] rounded-full h-[5px] ${
//                 priority === "high" ? "bg-red-500" : priority === "medium" ? "bg-orange-500" : "bg-blue-500"
//               }`}
//             ></div>
//           </div>
//           <button onClick={toggleEditMode} className="text-blue-500">
//             Edit
//           </button>
//           <button onClick={handleDelete} className="text-red-500">
//             Delete
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default TaskT;
// import { TimeOutline } from "react-ionicons";
// import { TaskT } from "../../types";
// import { useState } from "react";

// interface TaskProps {
//   task: TaskT;
//   provided: any; // Replace with the appropriate type from react-beautiful-dnd
//   onEdit: (updatedTask: TaskT) => void;
//   onDelete: (taskId: number) => void;
// }

// const TaskT = ({ task, provided, onEdit, onDelete }: TaskProps) => {
//   const { id, title, description, priority, deadline, tags } = task;

//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(title);
//   const [editedDescription, setEditedDescription] = useState(description);
//   const [editedPriority, setEditedPriority] = useState(priority);
//   const [editedDeadline, setEditedDeadline] = useState(deadline);

//   const [editedTags, setEditedTags] = useState(tags);

//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSave = () => {
//     onEdit({
//       ...task,
//       title: editedTitle,
//       description: editedDescription,
//       priority: editedPriority,
//       deadline: editedDeadline,
     
//       tags: editedTags,
//     });
//     toggleEditMode();
//   };

//   const handleDelete = () => {
//     onDelete(id);
//   };

//   return (
//     <div
//       ref={provided.innerRef}
//       {...provided.draggableProps}
//       {...provided.dragHandleProps}
//       className="w-full cursor-grab bg-[#fff] flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4"
//     >
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={editedTitle}
//             onChange={(e) => setEditedTitle(e.target.value)}
//             className="border rounded px-2 py-1 w-full"
//           />
//           <textarea
//             value={editedDescription}
//             onChange={(e) => setEditedDescription(e.target.value)}
//             className="border rounded px-2 py-1 w-full"
//           ></textarea>
//           <input
//             type="text"
//             value={editedPriority}
//             onChange={(e) => setEditedPriority(e.target.value)}
//             className="border rounded px-2 py-1 w-full"
//           />
//           <input
//             type="date"
//             value={editedDeadline}
//             onChange={(e) => setEditedDeadline(e.target.value)}
//             className="border rounded px-2 py-1 w-full"
//           />
//           <input
//             type="text"
//             value={editedTags.map(tag => tag.title).join(", ")}
//             onChange={(e) => {
//               const newTags = e.target.value.split(",").map(title => ({ title: title.trim(), bg: "#ccc", text: "#000" })); // Adjust based on your Tag structure
//               setEditedTags(newTags);
//             }}
//             placeholder="Tags (comma separated)"
//             className="border rounded px-2 py-1 w-full"
//           />
//           <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
//             Save
//           </button>
//           <button onClick={toggleEditMode} className="bg-gray-500 text-white px-4 py-2 rounded">
//             Cancel
//           </button>
//         </>
//       ) : (
//         <>
//           <div className="flex items-center gap-2">
//             {tags.map((tag) => (
//               <span
//                 key={tag.title}
//                 className="px-[10px] py-[2px] text-[13px] font-medium rounded-md"
//                 style={{ backgroundColor: tag.bg, color: tag.text }}
//               >
//                 {tag.title}
//               </span>
//             ))}
//           </div>
//           <div className="w-full flex items-start flex-col gap-0">
//             <span className="text-[15.5px] font-medium text-[#555]">{title}</span>
//             <span className="text-[13.5px] text-gray-500">{description}</span>
//           </div>
//           <div className="w-full border border-dashed"></div>
//           <div className="w-full flex items-center justify-between">
//             <div className="flex items-center gap-1">
//               <TimeOutline color={"#666"} width="19px" height="19px" />
//               <span className="text-[13px] text-gray-700">{deadline}</span>
//             </div>
//             <div
//               className={`w-[60px] rounded-full h-[5px] ${
//                 priority === "high" ? "bg-red-500" : priority === "medium" ? "bg-orange-500" : "bg-blue-500"
//               }`}
//             ></div>
//           </div>
//           <button onClick={toggleEditMode} className="text-blue-500">
//             Edit
//           </button>
//           <button onClick={handleDelete} className="text-red-500">
//             Delete
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default TaskT;

import { TimeOutline } from "react-ionicons";
import { TaskT as TaskType } from "../../types";
import { useState } from "react";

interface TaskProps {
  task: TaskType;
  provided: any; // Replace with the appropriate type from react-beautiful-dnd
  onEdit: (updatedTask: TaskType) => void;
  onDelete: () => void;
}

const TaskT = ({ task, provided, onEdit, onDelete }: TaskProps) => {
  const { id, title, description, priority, deadline, tags } = task;

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleEdit = () => {
    onEdit(updatedTask);
    setIsEditing(false);
  };

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="w-full py-2 px-2 rounded-md bg-white shadow-sm text-[#333] min-h-[120px] cursor-pointer flex flex-col"
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
            className="border w-full mb-2 p-1"
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
            className="border w-full mb-2 p-1"
          />
          <button onClick={handleEdit} className="bg-green-500 text-white px-2 py-1 rounded">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-2 py-1 rounded">
            Cancel
          </button>
        </>
      ) : (
        <>
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex flex-col gap-1">
              <span className="text-[15px] font-medium">{title}</span>
              <span className="text-[12px] text-[#555]">{description}</span>
            </div>
            <div className="w-[12px] h-[12px] rounded-full" style={{ backgroundColor: priority === "high" ? "red" : priority === "medium" ? "orange" : "green" }} />
          </div>
          <div className="w-full flex items-center justify-between gap-3">
            <div className="flex items-center justify-center gap-1 mt-2">
              <TimeOutline width="14px" height="14px" color="#777" />
              <span className="text-[11px] text-[#777]">{deadline}</span>
            </div>
            <div className="flex items-center justify-center gap-1 mt-2">
              {tags && tags.map((tag: any, index: number) => (
                <span key={index} className="px-2 py-1 text-[10px] rounded" style={{ backgroundColor: tag.bg, color: tag.text }}>
                  {tag.title}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 text-[13px] cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="text-red-500 text-[13px] cursor-pointer"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskT;
