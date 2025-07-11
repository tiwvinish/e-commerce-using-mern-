import { BrowserRouter, Route, Routes } from "react-router-dom"

import * as pages from "@/pages"
import { Layout } from "@/components"
import { Landing } from "@/pages";


export const AppRoutes = ()=>{
return <BrowserRouter>
<Routes>
    <Route path="/" element ={<Layout/>} >
           <Route index element={<Landing />} />
           <Route path="home" element={<pages.dashboard.Home/>} />
           <Route path="about" element={<pages.dashboard.About/>} />
           <Route path="contact" element={<pages.dashboard.Contact/>} />
           <Route path="/products" element={<pages.dashboard.Products />} />
           <Route path="/orders" element={<pages.dashboard.Orders />} />
    </Route>
</Routes>
</BrowserRouter>
}