import Calculator from './calc/Calculator';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg'
import './reactCalcStyles.css'
import './logoStyles.css'


function App() {
    return (
        <>
        <div className='logoBox'>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React Calculator</h1>
        <div>
            {<Calculator/>}
        </div>
        </>
        
    )
}

export default App
