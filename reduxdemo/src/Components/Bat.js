import React,{useState} from 'react'
import {connect} from 'react-redux'

function Bat (props){
   // const [bat,setBat] = useState(20) // local to the componentnpx build
   console.log(props);
 return(
     <div>
          <h1>Bats: {props.batss}</h1>
         <button onClick = {props.buyBat}>Buy bats</button> 
     </div>
 )
}

const mapStateToProps = (state) => {
    return{
        batss: state.bat.bats
    }
}

const mapDispatchToProp = (dispatch) => {
    return{
        buyBat : ()=>dispatch({type:'BUY_BAT'})
    }
}

export default connect(mapStateToProps,mapDispatchToProp) (Bat)