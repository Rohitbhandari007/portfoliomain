import { extendTheme } from '@chakra-ui/react'
import "@fontsource/dejavu-mono"
import "@fontsource/patrick-hand"




const theme = extendTheme({
    fonts: {
        heading: `'Patrick Hand', cursive`,
        body: `'DejaVu Mono', monospace`,
        // `'Poppins', sans-serif`
    },
})

export default theme