import { createPortal } from 'react-dom'
import { useStore } from '../../store'

const Portal = ({ children }: any) => {
  const { showPopup } = useStore()

  if (showPopup) {
    const $el = document.getElementById('modal')
    
    return createPortal(children, $el)
  }

  return null
}

export default Portal
