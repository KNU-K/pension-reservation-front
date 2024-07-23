import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Index from "./pages/Index";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
