import { Button } from "@mui/material";

function Ejemplo(){

    const ejecutar = () => {
        console.log("Estas tocandome!!")
    }
    return <div>
        <Button variant="outlined" onClick={
            (e)=>{
                ejecutar()
            }
        }>Primary</Button>
    </div>
}
export default Ejemplo;