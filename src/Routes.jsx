import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import UserProfile from "./pages/User/UserProfile";
import EditDonation from "./components/UserProfile/EditDonation";
import UserDonations from "./components/UserProfile/UserDonations"; // Importe o componente UserDonations
import Eco_Detalhes from "./pages/Eco_Detalhes/Eco_Detalhes";
import ProductForm from "./pages/ProductForm/ProductForm";
import Register from "./pages/Register/Register"
import Ecopontos from "./pages/Ecopontos/Ecopontos";
import Prod_Detalhes from "./pages/Prod_Detalhes/Prod_Detalhes";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Donation" element={<Donation />} />
                <Route path="/User/:activepage" element={<UserProfile />} />
                <Route path="/EditDonation/:Id" element={<EditDonation />} />
                <Route path="/User/user-donations" element={<UserDonations />} />
                <Route path="/Eco_Detalhes" element={<Eco_Detalhes />} />
                <Route path="/ProductForm" element={<ProductForm />}></Route>
                <Route path="/Register" element={<Register />} />
                <Route path="/Ecopontos" element={<Ecopontos />} />
                <Route path="/Prod_Detalhes" element={<Prod_Detalhes />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
