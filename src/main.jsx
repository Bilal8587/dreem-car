import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import path from 'path'
import './index.css'

import Home from './Home'
import Contact from './Contact'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import Profile from './profile'
import AddListing from './add-listing'
import { Toaster } from "@/components/ui/sonner"
import SearchByCategory from './search/[category]'
import SearchByOptions from './search'
import ListingDetail from './listing-details/[id]'


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/contact', element: <Contact /> },
  { path: '/profile', element: <Profile /> },
  { path: '/add-listing', element: <AddListing /> },
  { path: '/search/:category', element: <SearchByCategory/>},
  { path: '/search', element: <SearchByOptions/>},
  { path: '/listing-details/:id', element: <ListingDetail/>}
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster />

    </ClerkProvider>
  </StrictMode>,
)