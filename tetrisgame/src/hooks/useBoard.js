import { useState } from "react";
import { buildboard } from "../negocinhos/board";

export const useBoard = ({ rows, columns }) => {
    const [board] = useState(buildboard({ rows, columns }));

    return [board];
}