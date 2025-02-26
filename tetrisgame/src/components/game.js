import Menu from './menu'
import {useGameover} from '../hooks/useGameover'
import Tetris from '../components/tetris'
import "../components/game.css"

const Game = ({ rows,columns }) => {
    const [gameover, setGameover, resetGameover] = useGameover();

    const start = () => {
        resetGameover();
    }

    return(
        <div className='Game'>
            {gameover ? (
                <Menu onClick={start}/>
            ) : (
                <Tetris rows={rows} columns={columns} setGameover={setGameover} className="nome"/>
            )}

        </div>
    )
}

export default Game;