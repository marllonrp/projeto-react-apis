import{BrowserRouter, Routes, Route} from "react-router-dom"
import { Details } from "../Pages/DetailsPage"
import { ErrorPage } from "../Pages/ErrorPage"
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
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>)
}