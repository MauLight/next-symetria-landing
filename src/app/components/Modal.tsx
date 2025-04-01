import { ReactElement } from 'react'
import { motion } from 'motion/react'

interface ModalProps {
  children: ReactElement
  openModal: boolean
  handleOpenModal: () => void
  width?: string
  height?: string
  bgColor?: string
  theme?: string
}

export const Modal = ({ children, openModal, theme }: ModalProps): ReactElement => {
  return (
    <>
      {
        openModal ? (
          <div className='px-3 w-full h-full absolute top-20 left-0'>

            <div
              className='z-20'
            >
              {
                children
              }
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className='absolute top-0 left-0 glass w-full h-full z-0'></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.88 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-0 ${theme === 'dark' ? 'bg-black -left-1' : 'bg-[#ededed] left-0'} w-full h-full z-0`}></motion.div>

          </div>
        )
          :
          null
      }
    </>
  )
}
