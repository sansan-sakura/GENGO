import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { Error } from "./ui/Error";
import { WelcomePage } from "./pages/WelcomePage";
import { Dashboard } from "./pages/Dashboard";
import { FlashcardPage } from "./pages/FlashcardPage";
import { DeckPage } from "./pages/DeckPage";
import { Settings } from "./pages/Settings";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { useCategory } from "./features/flashcards/hooks/category/useCategory";
import { useSetRecoilState } from "recoil";
import { categoryState, searchQueryCategory } from "./states/atoms/flashcardAtoms";

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
  const setCategory = useSetRecoilState(categoryState);
  const setSearchQueryCategory = useSetRecoilState(searchQueryCategory);
  const { isPending, categories, error } = useCategory();
  if (isPending) return <p>Pending</p>;
  if (error) return <Error />;
  setCategory(categories);
  setSearchQueryCategory(categories[0]._id);
  return <RouterProvider router={router} />;
}

export default App;
