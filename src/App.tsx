import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./styles/theme";
import { store } from "./redux/store";
import NavbarComponent from "./components/nabar";
import StatisticsPage from "./pages/statistics";
import SongsPage from "./pages/songs";
import HomePage from "./pages/home";
import BodyContainer from "./components/container";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavbarComponent />
          <BodyContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/songs" element={<SongsPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
            </Routes>
          </BodyContainer>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
