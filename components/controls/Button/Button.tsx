import { useRouter } from 'next/router';
import { Location } from '../../../interfaces/city-props';
import styles from './Button.module.scss'

interface Props {
  location: Location
}

const Button = ({ location }: Props) => {
  
  const router = useRouter();
  const onClick = () => {    
    router.push(`/location/${location?.name}`)
  }
  return (
    <div className={styles.container} >
        
        <div onClick={ onClick }>
        <button  
        type="submit"
        className={styles.btn}>
          Ver el Clima
        <span></span>        
        </button>
        </div>
    </div>
  )
}

export default Button