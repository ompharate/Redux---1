import { useSelector,useDispatch } from "react-redux";
import { increment } from "../actions";
function Home() {
    
    const value = useSelector(state=>state.home.value);
    const dispatch = useDispatch()

    return(

        <div>
            <h1>Value of Counter is:{value}</h1>
            <button onClick={()=>dispatch(increment())}>Increment++</button>
        
        </div>

    )

}

export default Home;