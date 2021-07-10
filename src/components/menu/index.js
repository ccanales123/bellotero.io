import React, { useContext, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import AppContext from '../../context/app/context';
import axios from "axios";
import { LOAD_MENU } from "../../context/app/reducer";

const Menu = () => {

    const { appState, appDispatch } = useContext(AppContext);

    useEffect(() => {
        (async () => {
            try {
                let resp = await axios.get("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json");
                appDispatch({ type: LOAD_MENU, payload: resp.data.menu })
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src="bellotero.png" className="d-inline-block align-top" ></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="me-auto justify-content-end Margin-menu">
                        {
                            appState.menu.map((menu, index) => {
                                return (
                                    <Nav.Link key={index + "menu"} href={menu.route}>{menu.text}</Nav.Link>)
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;