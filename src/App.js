// ** react imports
import React, { useState } from "react";

// ** 3rd party
import { ToastContainer } from "react-toastify";

// ** style imports
import "./App.css";

// ** 3rd party styles
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

// ** Components
import FoodOrder from "./views/FoodOrder";

// ** Store imports
import Store from "./store/Store";

function App() {
    const [initialCart, setInitialCart] = useState(null);

    return (
        <Store initialCart={initialCart}>
            <div className="App">
                <FoodOrder />
            </div>
            <ToastContainer />
        </Store>
    );
}

export default App;
