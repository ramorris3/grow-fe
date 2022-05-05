import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react"
import '@fontsource/khula/300.css'
import '@fontsource/khula/400.css'
import '@fontsource/khula/600.css'
import '@fontsource/khula/700.css'
import '@fontsource/khula/800.css'
import { QueryClient, QueryClientProvider } from 'react-query';

import { ArticleSearch, NavBar } from './components';

const queryClient = new QueryClient();

export const App = () => {

  const theme = extendTheme({
    colors: {
      "green": {
        "50": "#EBFAF4",
        "100": "#C7F0E0",
        "200": "#A3E6CC",
        "300": "#7FDCB8",
        "400": "#5BD2A4",
        "500": "#37C890",
        "600": "#2CA073",
        "700": "#217856",
        "800": "#165039",
        "900": "#0B281D"
      },
      "yellow": {
        "50": "#FEF8E6",
        "100": "#FDEBB9",
        "200": "#FCDF8C",
        "300": "#FBD260",
        "400": "#FAC633",
        "500": "#F9B906",
        "600": "#C79405",
        "700": "#966F03",
        "800": "#644A02",
        "900": "#322501"
      },
    },
    fonts: {
      body: "Khula, sans-serif",
      heading: "Khula, sans-serif",
    },
    fontWeights: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    textStyles: {
      h1: {
        fontSize: '3xl',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '2xl',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: 'xl',
        fontWeight: 'bold'
      },
      p1: {
        fontSize: 'lg',
      },
      p2: {
        fontSize: 'md',
      },
      p3: {
        fontSize: 'sm'
      }
    }
  });

  const PageWrap = Box;

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <PageWrap 
          minWidth="100vw"
          minHeight="100vh"
        >
          <NavBar />
          <ArticleSearch />
        </PageWrap>
      </ChakraProvider>
    </QueryClientProvider>
  );
};
