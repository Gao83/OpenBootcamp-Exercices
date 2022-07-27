import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginFormik from './pages/LoginPage'
import RegisterFormik from './pages/RegisterPage'
import TasksPage from './pages/TaskPage'
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap'

function AppRouting() {

    let isLogged = false

    return (
        <Router>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Exercice Routing</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/login' element={<LoginFormik />} />
                        <Route path='/register' element={<RegisterFormik />} />
                        <Route path='/tasks' element={isLogged ? <TasksPage /> : <Navigate to='/login' />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default AppRouting