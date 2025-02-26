import './menu.css'
import logo from '../imagens/tetris.png'

const Menu = ( { onClick } ) => {
    return(
    
        <div class="Menu">

            <img className='logotetris' src={logo} alt="tetris logo" width={400}/>

            <button className='play' onClick={onClick}>
                Jogar
            </button>
        </div>
    )
}

export default Menu;