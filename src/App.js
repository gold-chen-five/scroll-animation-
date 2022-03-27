import {useEffect,useState,useRef} from 'react'
import logo from './logo.svg';
import './App.css';
import ForthContainer from './ForthContainer';

function App() {
  const [animate,setAnimate] = useState(false)
  const secondRef = useRef()
  const [second,setSecond] = useState(false)
  const forthRef = useRef()
  const [forth,setForth] = useState(false)

  const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop 
  }

  const scrollElementHeight = (ref) => {
    const scrollElement = ref.current 
    const scrollHeight = elementInView(scrollElement)
    return scrollHeight
  }
  const scroll = () => {
    scrollElementHeight(secondRef) <= 0 && setSecond(true)
    scrollElementHeight(forthRef) <= 0 && setForth(true)

  }

  useEffect(() => {
   window.addEventListener('scroll',scroll)
   console.log(forthRef.current)
  }, []);
  return (
    <div className="App">
        <div style={{height: '100vh'}}>
          <img src="logo192.png" alt="" style={{animation: 'slidein 2s'}}/>
        </div>
        <div style={{height: '100vh'}}>
          <img src="logo192.png" alt="" ref={ref => secondRef.current = ref} style={{animation: second ? 'slidein 3s' : 'none',animationFillMode: second ? 'forwards' : 'none'}}/>
        </div>
        <div style={{height: '100vh'}}>
          <img src="logo192.png" alt="" />
        </div>
        <div style={{height: '100vh'}}>
          <img src="logo192.png" alt="" />
        </div>
        <ForthContainer giveref={forthRef} forthState={forth} />
        
    </div>
  );
}

export default App;
