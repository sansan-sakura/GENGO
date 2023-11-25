import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { RecoilRoot } from "recoil";
import { AppLayout } from "./ui/AppLayout";
import { Error } from "./ui/Error";
import { WelcomePage } from "./pages/WelcomePage";
import { Dashboard } from "./pages/Dashboard";
import { FlashcardPage } from "./pages/FlashcardPage";
import { DeckPage } from "./pages/DeckPage";
import { Settings } from "./pages/Settings";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  { path: "/", element: <WelcomePage />, errorElement: <Error /> },
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: "/flashcards",
        element: <FlashcardPage />,
        errorElement: <Error />,
      },
      {
        path: "/deck",
        element: <DeckPage />,
        errorElement: <Error />,
      },
      {
        path: "/settings",
        element: <Settings />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
