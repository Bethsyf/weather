import { useRouter } from "next/router";
import Layout from "../../components/views/Layout/Layout";

const datePage = () => {

    const router = useRouter();
    const {city} = router.query
    console

  return (
    <>
      <Layout/>
      <p>{city}</p>
      <div >
       <input        
            type='date'          
            name="date"           
                     
          />
          <button   >
          Ver el Clima de ese día
        </button>
        </div>
    </>
  )
}