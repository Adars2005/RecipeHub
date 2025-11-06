import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MyRecipes from './pages/MyRecipes.jsx';
import RecipeDetail from './pages/RecipeDetail.jsx';

export default function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">🍳 GenAI Recipes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Generate</Nav.Link>
              <Nav.Link as={Link} to="/my">My Recipes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my" element={<MyRecipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Container>
    </>
  );
}
