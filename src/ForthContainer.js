import React from 'react'

function ForthContainer({giveref,forthState}) {
  return (
    <div style={{height: '100vh'}}>
        <img src="logo192.png" alt="" ref={ref => giveref.current = ref} style={{animation: forthState ? 'slidein 3s' : 'none',animationFillMode: forthState ? 'forwards' : 'none',transform: 'translateX(-400px)'}}/>
    </div>
  )
}

export default ForthContainer