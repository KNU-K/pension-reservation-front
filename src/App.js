import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Index from "./pages/Index";
import Architecture from "./pages/Prologue/Architecture";
import Location from "./pages/Prologue/Location";
import Prologue from "./pages/Prologue/Prologue";
import Story from "./pages/Prologue/Story";
import Reservation from "./pages/Reservation/Reservation";
import ReservationConfirm from "./pages/Reservation/ReservationConfirm";

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

                <Route path="/reservation" element={<Reservation />} />
                <Route path="/confirm-reservation" element={<ReservationConfirm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
