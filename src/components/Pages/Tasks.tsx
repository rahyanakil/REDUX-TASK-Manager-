import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";
import TaskCard from "../module/tasks/TaskCard";
export default function Tasks() {
  const tasks = useAppSelector(selectTasks);

  // console.log(tasks);
  console.log("Tasks:", tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="space-y-5 mt-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}
