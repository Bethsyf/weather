import { useRouter } from "next/router";
import { useState } from "react";
import { apiHistory, getData } from "../../../api/getData";
import Button from "../../controls/Button/Button";

const Form = () => {
    const [nameCity, setNameCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(`${apiHistory}${nameCity}&dt=${lastDate}`);  
         
      };
      
        
  return (
    <>
    <div >
    <form onSubmit={handleSubmit}>
    <div className={styles.contagen}>
        <input 
        className={styles.container} 
        type="date"
        placeholder='Fecha'
        onChange={(e) => setNameCity(e.target.value)}        
        />
    </div>
      <Button />     
      </form>
      
      </div>
      </>
  )
}

export default Form