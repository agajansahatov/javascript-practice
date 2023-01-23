checkSpeed(74);

function checkSpeed(speed){
    const SpeedLimit = 70;
    const KmPerPoint = 5;

    if(speed < SpeedLimit + KmPerPoint){
        console.log("Ok");
        return;
    }
    
    let pts = (speed - SpeedLimit) / KmPerPoint;
    const Points = Math.floor(pts);
    if(Points >= 12)
        console.log("License suspended!");
    else
        console.log("Points", Points);
}