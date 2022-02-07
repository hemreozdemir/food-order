// ** react imports
import React, { useState } from "react";

// ** style imports
import "./App.css";

// ** Components
import FoodOrder from "./views/FoodOrder";

// ** Store imports
import Store from "./Store/Store";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [initialCart, setInitialCart] = useState(null);
    return (
        <Store initialCart={initialCart}>
            <div className="App">
                <FoodOrder />
            </div>
        </Store>
    );
}

export default App;
