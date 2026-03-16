import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TodosProvider from "./contexts/todosContext";
import { ToastProvider } from "./contexts/ToastContext";
const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },

  palette: {
    primary: {
      main: "#dd2c00",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodosProvider>
        <ToastProvider>
          <div className="App appContainer">
            <TodoList />
          </div>
        </ToastProvider>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
