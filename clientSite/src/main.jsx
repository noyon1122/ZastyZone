import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from '../src/Routes/Routes'
import AuthProvider from '../src/Providers/AuthProvider'
import toast, { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider><RouterProvider router={router}></RouterProvider>
 <Toaster></Toaster>
</AuthProvider>
  </StrictMode>,
)
