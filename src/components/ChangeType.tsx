import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    return (
        <>
            <Button
                onClick={() => {
                    const newType: QuestionType =
                        type === "multiple_choice_question"
                            ? "short_answer_question"
                            : "multiple_choice_question";
                    setType(newType);
                }}
            >
                Change Type
            </Button>
            <p>
                {type === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </p>
        </>
    );
}
