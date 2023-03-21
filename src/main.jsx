import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async';

import {
	RouterProvider
} from "react-router-dom";
import { router } from "@/routes"
import '@/Assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>		<ChakraProvider>    
			<RouterProvider router={router} />
		</ChakraProvider>
</HelmetProvider>
	</React.StrictMode>,
)
