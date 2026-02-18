import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/Body";
import Head from "./component/Head";
import store from "./utils.js/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import { WatchPage } from "./component/WatchPage";
import Demo from "./component/Demo";
import Demo2 from "./component/Demo2";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/demo",
          element: (
            <>
              <Demo /> <Demo2 />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
