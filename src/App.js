import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Index from "./pages/Index";
import Architecture from "./pages/Prologue/Architecture";
import Location from "./pages/Prologue/Location";
import Prologue from "./pages/Prologue/Prologue";
import Story from "./pages/Prologue/Story";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/main" element={<Main />} />
                <Route path="/architecture" element={<Architecture />} />
                <Route path="/location" element={<Location />} />
                <Route path="/story" element={<Story />} />
                <Route path="/prologue" element={<Prologue />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
