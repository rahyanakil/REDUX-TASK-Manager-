import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";
import { AddTaskModal } from "../module/tasks/AddTaskModal";
import TaskCard from "../module/tasks/TaskCard";
export default function Tasks() {
  const tasks = useAppSelector(selectTasks);

  // console.log(tasks);
  // console.log("Tasks:", tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
