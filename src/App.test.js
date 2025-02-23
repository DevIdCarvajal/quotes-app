import { render, screen } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

test('renders heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const linkElement = screen.getByText(/Citas ilustres/i)
  expect(linkElement).toBeInTheDocument()
})
