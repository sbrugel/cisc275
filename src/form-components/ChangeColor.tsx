import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white"
    ];
    const [chosenColor, setChosenColor] = useState<string>("red");

    const updateChosenColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChosenColor(e.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="formChangeColor">
                <Form.Label>Color choices:</Form.Label>
                {COLORS.map((colorName: string) => (
                    <Form.Check
                        type="radio"
                        name="colorChoices"
                        key={colorName}
                        onChange={updateChosenColor}
                        id={`color-choice-${colorName}`}
                        label={
                            <span style={{ backgroundColor: colorName }}>
                                {colorName}
                            </span>
                        }
                        value={colorName}
                        inline={true}
                        checked={chosenColor === colorName}
                    />
                ))}
            </Form.Group>
            <p>
                You chose{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </span>
            </p>
        </div>
    );
}
