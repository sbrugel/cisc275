import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    const updateAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Your Answer: </Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                    placeholder={"Your answer goes here"}
                />
            </Form.Group>
            <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
