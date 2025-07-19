import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Initialize frontend",
      description: "Create home page and routing",
      dueDate: "2025-11-01",
      isComplete: false,
      priority: "High",
    },
    {
      id: "2",
      title: "Initializing GitHub repository",
      description: "Create a new repository for the project",
      dueDate: "2025-11-01",
      isComplete: false,
      priority: "Medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
