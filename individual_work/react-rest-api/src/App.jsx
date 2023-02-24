import {useState, useEffect} from "react";
import Todo from "./Todo";
import reactLogo from "./assets/react.svg";

function App() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [variable, setVariable] = useState("hello world")

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const responseJson = await response.json();
        setData(responseJson);
        console.log(responseJson);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>React App</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {data ? (
                        <div>
                            {data.map((item) => (
                                <Todo
                                    key={item.id}
                                    title={item.title}
                                    userId={item.userId}
                                    id={item.id}
                                >
                                </Todo>
                            ))}
                        </div>
                    ) : (
                        <p>No data</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;