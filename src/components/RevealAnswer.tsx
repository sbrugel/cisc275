import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visibleText, setVisibleText] = useState<boolean>(false);
    return (
        <>
            <Button onClick={() => setVisibleText(!visibleText)}>
                Reveal Answer
            </Button>
            {visibleText && <p>42</p>}
        </>
    );
}
