import '../styles/global.css'
import { ChakraProvider } from "@chakra-ui/react"
import React, { useEffect } from "react";
import Search from '../components/search'


function MyApp({ Component, pageProps, allPostsData }) {

  return (
    <ChakraProvider>
      <Search />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp