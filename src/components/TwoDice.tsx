import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [firstDice, setFirstDice] = useState<number>(1);
    const [secondDice, setSecondDice] = useState<number>(2);

    return (
        <>
            <p>
                <span data-testid="left-die">
                    <strong>L:</strong> {firstDice}{" "}
                </span>
                <span data-testid="right-die">
                    <strong>R:</strong> {secondDice}
                </span>
            </p>
            <Button onClick={() => setFirstDice(d6())}>Roll Left</Button>
            <Button onClick={() => setSecondDice(d6())}>Roll Right</Button>
            {firstDice === 1 && secondDice === 1 ? (
                <p>You lose...</p>
            ) : firstDice === secondDice ? (
                <p>You win!</p>
            ) : null}
        </>
    );
}
