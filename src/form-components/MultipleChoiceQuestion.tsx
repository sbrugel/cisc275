import React, { useState } from "react";
import { Form } from "react-bootstrap";

/*
When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
*/
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentOption, setCurrentOption] = useState<string>(options[0]);

    const updateCurrentOption = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCurrentOption(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formMCQ">
                <Form.Label>Your answer:</Form.Label>
                <Form.Select
                    value={currentOption}
                    onChange={updateCurrentOption}
                >
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>{currentOption === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
