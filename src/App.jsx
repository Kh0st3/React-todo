import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Headers";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
    {
        id: 1,
        title: "Complete online Javascript bluuweb Curse",
        completed: true,
    },
    { id: 2, title: "Go to the gym", completed: false },
    { id: 3, title: "10 minutes mediation", completed: false },
    { id: 4, title: "Pick up groceries", completed: false },
    { id: 5, title: "Complete todo app on Frontend Mentor", completed: false },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
            <Header />

            <main className="container mx-auto px-4 mt-8">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />

                <TodoComputed />

                <TodoFilter />
            </main>

            <Footer />
        </div>
    );
};

export default App;
