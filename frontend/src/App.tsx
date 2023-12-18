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

import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { LoginSignUpLayout } from "./ui/LoginSignUpLayout";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "./states/atoms/userAtoms";
import { useEffect } from "react";

const router = createBrowserRouter([
  { path: "/", element: <WelcomePage />, errorElement: <Error /> },
  {
    element: <LoginSignUpLayout />,
    errorElement: <Error />,
    children: [
      { path: "/login", element: <Login />, errorElement: <Error /> },
      { path: "/register", element: <SignUp />, errorElement: <Error /> },
    ],
  },
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
        path: "/deck/:id",
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
  const setCurrentUser = useSetRecoilState(currentUserState);
  useEffect(() => {
    const user = localStorage.getItem("userName");
    if (user) setCurrentUser({ name: user, login: true });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
