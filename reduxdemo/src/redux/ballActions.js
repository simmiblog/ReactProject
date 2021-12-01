export const buyBall = (qty)=>{
    //action creator
    return{
        type : "BUY_BALL",
        payload : qty
    }
}