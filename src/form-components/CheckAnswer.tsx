import React, { useState } from "react";
import { Form } from "react-bootstrap";

/*
The CheckAnswer component allows a user to enter an answer to a short answer question, and then displays whether they got it correct or incorrect. 
The component takes in a parameter representing the expectedAnswer.

You will need a state to handle the user’s given answer
The user’s given answer should initially be the empty string
When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
*/
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    const updateAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value);
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
