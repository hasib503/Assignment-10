import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>lol</h1> ,
        children: [
            {
                path: '/',
                element: <h1>home </h1>,
                
            
            }
        ]
    }
])

export default router;