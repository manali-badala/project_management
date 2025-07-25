import NewTask from "./NewTask";

export default function Tasks({onAdd, onDelete, tasks}){ 
    return (
        <section>
            <h2 className="test-xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd}/>
           {tasks.length === 0 && (
            <p className="my-4 text-stone-800">
                This project does not have any tasks yet.
            </p>
           )}
           {tasks.length > 0 && (
               <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task) => (
                    <li key={task.id} className="my-4 flex justify-between">
                        <p className="text-stone-600">{task.text}</p>
                        <button 
                        onClick={() => onDelete(task.id)}
                        className="text-stone-700 hover:text-red-500"
                        >Clear</button>
                    </li>
                ))}
               </ul>
           )}
        </section>
    );
}