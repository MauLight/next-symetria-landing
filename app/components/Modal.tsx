import { motion } from 'motion/react'
import { ReactElement } from 'react'

interface ModalProps {
  children: ReactElement
  openModal: boolean
  handleOpenModal: () => void
  width?: string
  height?: string
  bgColor?: string
}

export const Modal = ({ children, openModal }: ModalProps): ReactElement => {
  return (
    <>
      {
        openModal ? (
          <div className='px-3'>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {
                children
              }
            </motion.div>

          </div>
        )
          :
          null
      }
    </>
  )
}
