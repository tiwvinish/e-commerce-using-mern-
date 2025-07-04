import { BrowserRouter, Route, Routes } from "react-router-dom"

import * as pages from "@/pages"
import { Layout } from "@/components"


export const AppRoutes = ()=>{
return <BrowserRouter>
<Routes>
    <Route path="/" element ={<Layout/>} >
           <Route index element={<pages.dashboard.Home/>} />
    </Route>
</Routes>
</BrowserRouter>
}