"use client"

import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CarProps } from '@/types';

import { useState } from 'react';
import { CustomButton } from '.';
import { DefaultCardProps } from '@/types';



const PaymentCard = ({ isOpen, closeModal, car }: DefaultCardProps) => {
  
  const [doOpen, setIsOpen] = useState(false);

  return (
    <>
        <Transition appear show = {isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25">

                    </div>
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                   <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white
                   shadow-xl p-6 transition-all flex flex-col gap-5"> 
                        <button
                        className='absolute w-fit p-2 bg-primary-blue-100 rounded-full z-10 right-2 top-2'
                        type="button"
                        onClick={closeModal}
                        >
                            <Image
                            src="close.svg"
                            alt="close"
                            width={20}
                            height={20}
                            className='object-obtain'
                            />
                        </button>
                        <div className="flex-1 flex flex-col gap-2">
                        <h2 className='font-semibold text-xl capitalize pb-10'>
                        <Image
                            src='/logo.svg'
                            alt='logo'
                            width={118}
                            height={18}
                            className='object-contain'
                          />
                        </h2>
                        </div>
                        <div className="circle">
                        <div className="tick">

                        </div>
                        </div>
                       
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                        <h1 className="animate-slidein300 text-lg">
                        Оплата прошла успешно!
                        </h1>

                    </Dialog.Panel> 
                </Transition.Child>
                    </div>
                    
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default PaymentCard