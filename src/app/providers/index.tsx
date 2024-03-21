import { BrouderRouter } from "./RouterProvider";
import { Provider } from "react-redux";
import { store } from "../redux";


export const Providers = () => {
  return ( 
  <Provider store={store}>
    <BrouderRouter />
  </Provider> 
    );
};
