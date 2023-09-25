import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function getNextByDate(holiday: string): string {
    const order = ["🥚", "🚂", "🦃", "🎄", "🎂"];
    if (order.indexOf(holiday) === 4) return order[0];
    else {
        return order[order.indexOf(holiday) + 1];
    }
}

export function getNextByAlphabet(holiday: string): string {
    const order = ["🎂", "🎄", "🥚", "🚂", "🦃"];
    if (order.indexOf(holiday) === 4) return order[0];
    else {
        return order[order.indexOf(holiday) + 1];
    }
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<string>("🎂");
    return (
        <>
            <p>Holiday: {currentHoliday}</p>
            <Button
                onClick={() =>
                    setCurrentHoliday(getNextByAlphabet(currentHoliday))
                }
            >
                Next in Alphabet
            </Button>
            <Button
                onClick={() => setCurrentHoliday(getNextByDate(currentHoliday))}
            >
                Next in Year
            </Button>
        </>
    );
}
