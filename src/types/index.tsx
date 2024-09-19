// export type Tag = {
// 	title: string;
// 	bg: string;   // Background color for the tag (e.g., '#f0f0f0')
// 	text: string; // Text color for the tag (e.g., '#000000')
//   };
  
//   export type TaskT = { 
// 	id: number;                // Unique identifier for each task
// 	title: string;             // Task title
// 	description: string;       // Task description
// 	priority: 'low' | 'medium' | 'high'; // Priority level
// 	deadline: Date;            // Deadline with both date and time
// 	tags: Tag[];               // Array of tags associated with the task
//   };
  
//   export type columns = {
// 	backlog: Column;
// 	pending: Column;
// 	todo: Column;
// 	doing: Column;
// 	done: Column;       // Array of tasks in the column
//   };
  
  
//   type TaskProps = {
// 	task: TaskT;
// 	provided: any;
//   };
  
//   export const TaskT = ({ task, provided }: TaskProps) => {
// 	const { title, description, priority, deadline, tags } = task;
  
// 	return (
// 	  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
// 		<h3>{title}</h3>
// 		<p>{description}</p>
// 		<p>Priority: {priority}</p>
// 		<p>Deadline: {deadline.toString()}</p>
// 		<div>
// 		  {tags.map((tag) => (
// 			<span key={tag.title} style={{ backgroundColor: "" }}>
// 			  {tag.title}
// 			</span>
// 		  ))}
// 		</div>
// 	  </div>
// 	);
//   };

export type Tag = {
	title: string;
	bg: string;   // Background color for the tag (e.g., '#f0f0f0')
	text: string; // Text color for the tag (e.g., '#000000')
  };
  
  export type TaskT = { 
	id: number;                // Unique identifier for each task
	title: string;             // Task title
	description: string;       // Task description
	priority: 'low' | 'medium' | 'high'; // Priority level
	deadline: Date;            // Deadline with both date and time
	tags: Tag[];               // Array of tags associated with the task
  };
  
  export type Columns = {
	id: string;               // Column ID
	name: string;             // Column name (e.g., 'To Do', 'In Progress', 'Done')
	tasks: TaskT[];           // Array of tasks in the column
  };
  
  
  type TaskProps = {
	task: TaskT;
	provided: any;
  };
  
  export const TaskT = ({ task, provided }: TaskProps) => {
	const { title, description, priority, deadline, tags } = task;
  
	return (
	  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
		<h3>{title}</h3>
		<p>{description}</p>
		<p>Priority: {priority}</p>
		<p>Deadline: {deadline.toString()}</p>
		<div>
		  {tags.map((tag) => (
			<span key={tag.title} style={{ backgroundColor: "" }}>
			  {tag.title}
			</span>
		  ))}
		</div>
	  </div>
	);
  };


