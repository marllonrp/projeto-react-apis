import{BrowserRouter, Routes, Route} from "react-router-dom"
import { Details } from "../Pages/DetailsPage"
import { HomePage } from "../Pages/HomePage"
import { PokedexPage } from "../Pages/PokedexPage"

export const Router = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="home/" element={<HomePage/>}/>
            <Route path="pokedex/" element={<PokedexPage/>}/>
            <Route path="details/:details" element={<Details/>}/>
        </Routes>
        </BrowserRouter>)
}