import { Header } from "../components/Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";



describe("Header component", () => {
    
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
    });
  
    test("check Logo should be in the Header and has image", () => {
      const Logo = screen.getByAltText("Logo");
      expect(Logo).toBeInTheDocument();

    });

    test("check events", () => {
      fireEvent.click(Logo);
      expect(window.location.pathname).toBe("/");
  
    });
  });