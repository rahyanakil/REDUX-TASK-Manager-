import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Sample Task",
      description: "This is a sample task",
      dueDate: "2023-10",
      priority: "medium",
      isCompleted: false,
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      // console.log(action);
      state.tasks.push(taskData);
    },
    toggleCompleteStatus: (state, action: PayloadAction<string>) => {
      // console.log(action);
      state.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => {
        return task.id !== action.payload;
      });
    },
    updateTask(
      state,
      action: PayloadAction<{ id: string; data: Partial<ITask> }>
    ) {
      const { id, data } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          ...data,
        };
      }
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask, toggleCompleteStatus, deleteTask, updateTask } =
  taskSlice.actions;
export default taskSlice.reducer;
