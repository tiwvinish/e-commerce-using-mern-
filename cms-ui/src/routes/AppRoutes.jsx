import { BrowserRouter, Route, Routes } from "react-router-dom"

import * as pages from "@/pages"
import { Layout } from "@/components"


export const AppRoutes = ()=>{
return <BrowserRouter>
<Routes>
    <Route path="/" element ={<Layout/>} >
           <Route index element={<pages.dashboard.Home/>} />
           <Route path="about" element={<pages.dashboard.About/>} />
           <Route path="contact" element={<pages.dashboard.Contact/>} />
    </Route>
</Routes>
</BrowserRouter>
}