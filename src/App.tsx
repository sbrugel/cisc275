import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "blue" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is my third task</h1>
            <Container>
                <Row>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <p>Hello World, I am Simon Brugel</p>
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                    <Col>
                        <img
                            src="https://archives.bulbagarden.net/media/upload/thumb/b/bc/1009Walking_Wake.png/250px-1009Walking_Wake.png"
                            alt="This is a Pokemon I like"
                        />
                        <ul>
                            <li>I am</li>
                            <li>passing this</li>
                            <li>test case</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
