import { useCallback, useState} from "react";

export const useGameover = () => {
    const [gameover, setGameover] = useState(true)

    const resetGameover = useCallback(() => {
        setGameover(false);
    }, []);

    return [gameover, setGameover, resetGameover];

};

export default useGameover