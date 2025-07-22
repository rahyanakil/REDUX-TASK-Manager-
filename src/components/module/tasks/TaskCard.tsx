import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteStatus,
  updateTask,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";
import EditTaskModal from "./EditTaskModal";

interface IProps {
  task: ITask;
}
export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(updateTask())}
      className="border px-5 py-3 rounded-md"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            variant="link"
            className="p-0 text-red-500"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => {
              dispatch(toggleCompleteStatus(task.id));
            }}
          />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
      <EditTaskModal task={task} /> {/* 👈 this opens pre-filled form */}
    </div>
  );
}
