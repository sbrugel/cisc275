import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    const updateAttemptsRequested = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isNaN(parseInt(event.target.value)))
            setAttemptsRequested(parseInt(event.target.value));
    };

    return (
        <div>
            <p>You have {attemptsLeft} attempts left</p>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>How many attempts would you like?</Form.Label>
                <Form.Control
                    type="number"
                    onChange={updateAttemptsRequested}
                />
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft <= 0}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + attemptsRequested)
                }
            >
                Gain
            </Button>
        </div>
    );
}
