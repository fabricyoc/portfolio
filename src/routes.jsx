import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>

				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/projetos" element={<Projetos />} />
				<Route path="/contatos" element={<Contatos />} />
				<Route path="*" element={<Page404 />} />

			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
