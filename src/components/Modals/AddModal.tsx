
// import React, { useState } from "react";
// import { getRandomColors } from "../../helpers/getRandomColors";
// import { v4 as uuidv4 } from "uuid";

// interface Tag {
// 	title: string;
// 	bg: string;
// 	text: string;
// }

// interface AddModalProps {
// 	isOpen: boolean;
// 	onClose: () => void;
// 	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// 	handleAddTask: (taskData: any) => void;
// }

// const AddModal = ({ isOpen, onClose, setOpen, handleAddTask }: AddModalProps) => {
// 	const initialTaskData = {
// 		id: uuidv4(),
// 		title: "",
// 		description: "",
// 		priority: "",
// 		deadline: "",
// 		alt: "",
// 		tags: [] as Tag[],
// 	};

// 	const [taskData, setTaskData] = useState(initialTaskData);
// 	const [tagTitle, setTagTitle] = useState("");

// 	const handleChange = (
// 		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
// 	) => {
// 		const { name, value } = e.target;
// 		setTaskData({ ...taskData, [name]: value });
// 	};


// 	const handleAddTag = () => {
// 		if (tagTitle.trim() !== "") {
// 			const { bg, text } = getRandomColors();
// 			const newTag: Tag = { title: tagTitle.trim(), bg, text };
// 			setTaskData({ ...taskData, tags: [...taskData.tags, newTag] });
// 			setTagTitle("");
// 		}
// 	};

// 	const closeModal = () => {
// 		setOpen(false);
// 		onClose();
// 		setTaskData(initialTaskData);
// 	};

// 	const handleSubmit = () => {
// 		// Validate required fields
// 		if (taskData.title.trim() === "" ||
// 			taskData.description.trim() === "" ||
// 			taskData.priority === "" ||
// 			taskData.deadline.trim() === "") {
// 			alert("Please fill in all required fields.");
// 			return;
// 		}

// 		handleAddTask(taskData);
// 		closeModal();
// 	};

// 	return (
// 		<div
// 			className={`w-screen h-screen place-items-center fixed top-0 left-0 ${
// 				isOpen ? "grid" : "hidden"
// 			}`}
// 		>
// 			<div
// 				className="w-full h-full bg-black opacity-70 absolute left-0 top-0 z-20"
// 				onClick={closeModal}
// 			></div>
// 			<div className="md:w-[30vw] w-[90%] bg-white rounded-lg shadow-md z-50 flex flex-col items-center gap-3 px-5 py-6">
// 				<input
// 					type="text"
// 					name="title"
// 					value={taskData.title}
// 					onChange={handleChange}
// 					placeholder="Title"
// 					className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
// 				/>
// 				<input
// 					type="text"
// 					name="description"
// 					value={taskData.description}
// 					onChange={handleChange}
// 					placeholder="Description"
// 					className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
// 				/>
// 				<select
// 					name="priority"
// 					onChange={handleChange}
// 					value={taskData.priority}
// 					className="w-full h-12 px-2 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
// 				>
// 					<option value="">Priority</option>
// 					<option value="low">Low</option>
// 					<option value="medium">Medium</option>
// 					<option value="high">High</option>
// 				</select>
// 				<input
// 					type="date"
// 					name="deadline"
// 					value={taskData.deadline}
// 					onChange={handleChange}
// 					placeholder="Deadline"
// 					className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
// 				/>
// 				<input
// 					type="text"
// 					value={tagTitle}
// 					onChange={(e) => setTagTitle(e.target.value)}
// 					placeholder="Tag Title"
// 					className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
// 				/>
// 				<button
// 					className="w-full rounded-md h-9 bg-slate-500 text-amber-50 font-medium"
// 					onClick={handleAddTag}
// 				>
// 					Add Tag
// 				</button>
// 				<div className="w-full">
// 					{taskData.tags.length > 0 && <span>Tags:</span>}
// 					{taskData.tags.map((tag, index) => (
// 						<div
// 							key={index}
// 							className="inline-block mx-1 px-[10px] py-[2px] text-[13px] font-medium rounded-md"
// 							style={{ backgroundColor: tag.bg, color: tag.text }}
// 						>
// 							{tag.title}
// 						</div>
// 					))}
// 				</div>
				
// 				<button
// 					className="w-full mt-3 rounded-md h-9 bg-orange-400 text-blue-50 font-medium"
// 					onClick={handleSubmit}
// 				>
// 					Submit Task
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default AddModal;

import { useState } from "react";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  setOpen: (isOpen: boolean) => void;
  handleAddTask: (taskData: any) => void;
}

const AddModal = ({ isOpen, onClose, setOpen, handleAddTask }: AddModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [deadline, setDeadline] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = () => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      deadline,
      tags: tags.split(',').map((tag) => ({ title: tag.trim(), bg: "#ccc", text: "#000" })),
    };
    handleAddTask(newTask);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Priority</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Deadline</label>
          <input
            type="date"
            className="w-full border rounded px-3 py-2"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
