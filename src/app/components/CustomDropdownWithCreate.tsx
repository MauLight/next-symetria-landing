
import { ReactNode, useState } from 'react'
import { motion } from 'motion/react'

export interface DropdownProps {
    list: string[]
    defaultValue?: string
}

function CustomDropdownWithCreate({
    list,
    defaultValue,
}: DropdownProps): ReactNode {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [choice, setChoice] = useState<string>(defaultValue || '')



    return (
        <div onClick={() => { setIsOpen(!isOpen) }} className='relative w-full h-9 flex justify-between items-center rounded-[3px] border border-[#292929] ring-0 focus:ring-0 focus:outline-none cursor-pointer'>
            <p className={`capitalize px-5 ${choice === '' ? 'text-sym_gray-300' : 'text-[#a1a1a1]'}`}>{choice === '' ? 'Choose one...' : choice}</p>
            {
                isOpen ? (
                    <i className="fa-solid fa-sm fa-arrow-up"></i>
                )
                    :
                    (
                        <i className="fa-solid fa-sm fa-arrow-down"></i>
                    )
            }
            {
                isOpen && (
                    <motion.div
                        initial={{ opacity: 0, top: 0 }}
                        animate={{ opacity: 1, top: 35 }}
                        transition={{ duration: 0.2, type: 'spring', bounce: 0.1 }}
                        className='absolute top-9 left-0 z-20 w-full max-h-[200px] overflow-y-scroll border border-[#292929] rounded-b-[5px] shadow-xl shadow-black'>
                        {
                            list.map((item: string, i: number) => (
                                <button key={`${item}-${i}`} onClick={() => { setChoice(item) }} className={`w-full h-9 bg-black text-[#a1a1a1] ring-0 focus:ring-0 focus:outline-none px-2 placeholder-[#292929] hover:text-[#ededed] active:text-[#ffffff] active:bg-[#10100e] transition-color duration-200`}>
                                    {
                                        item
                                    }
                                </button>
                            ))
                        }
                    </motion.div>
                )
            }
        </div>
    )
}

export default CustomDropdownWithCreate