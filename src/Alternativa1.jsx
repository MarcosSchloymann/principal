import Header from "./components/Header";
import "./App.css"
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NosotrosPage from "./pages/NosotrosPage";
import AppMovilePage from "./pages/AppMovilePage";
import PaginasWebPage from "./pages/PaginasWebPage";
import ManejoDeRedesPage from "./pages/ManejoDeRedesPage";
import DisenosPage from "./pages/DisenosPage";

const Alternativa1 = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/nosotros" element={<NosotrosPage />} />
                    <Route path="/appmobil" element={<AppMovilePage />} />
                    <Route path="/paginasweb" element={<PaginasWebPage />} />
                    <Route path="/diseno" element={<DisenosPage />} />
                    <Route path="/manejoredes" element={<ManejoDeRedesPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default Alternativa1