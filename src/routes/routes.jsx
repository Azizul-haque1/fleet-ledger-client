import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>hdlad</h1>,
        children: [
            {
                index: true,
            }
        ]
    }
])