"use client"

import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CarProps } from '@/types';

import { useState } from 'react';
import { CustomButton } from '.';
import PaymentCard from './PaymentCard';
import { DefaultCardProps } from '@/types';
import UserInfo from './UserInfo';

const CarDetails = ({ isOpen, closeModal, car }: DefaultCardProps) => {
  
  const [doOpen, setIsOpen] = useState(false);
  const [isShowing, setIsShowing] = useState(false)


  const [card, setCard] = useState('');
  const [cvv, setCvv] = useState('')
  const [fio, setFio] = useState('')
  const [name, setName] = useState('')
  const [otv, setOtv] = useState('')
  const [adress, setAdress] = useState('')
  const [phone, setPhone] = useState('')
  const [mail, setMail] = useState('')




  
  const handleChangeCvv = (event: any) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^\d]/g, '').substring(0, 4)
    setCvv(numericValue);
  };
  const handleChangeFio = (event: any) => {
    const inputValue = event.target.value;
    const numericValue = inputValue
    setFio(numericValue);
  };
  const handleChangeName = (event: any) => {
    const inputValue = event.target.value;
    const numericValue = inputValue
    setName(numericValue);
  };const handleChangeOtv = (event: any) => {
    const inputValue = event.target.value;
    const numericValue = inputValue
    setOtv(numericValue);
  };
  const handleChangeAdress = (event: any) => {
    const inputValue = event.target.value;
    const numericValue = inputValue
    setAdress(numericValue);
  };
  const handleChangePhone = (event: any) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^\d]/g, '').substring(0, 15)
    setPhone(numericValue);
  };
  const handleChangeMail = (event: any) => {
    const inputValue = event.target.value;
    const numericValue = inputValue
    setMail(numericValue);
  };
 

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
                        <h2 className='font-semibold text-xl capitalize pb-5'>
                                {car.make} {car.model}
                        </h2>

                        </div>
                        <div className="grid">
                        
                        <h3 className='flex'>Фамилия</h3>
                        <input value={fio} 
                        onChange={handleChangeFio} 
                        className='border w-full h-8 text-md border-black pl-2 capitalize' type="text" />
                        <h3 className='flex'>Имя</h3>
                        <input value={name} 
                        onChange={handleChangeName} 
                        className='border w-full h-8 text-md border-black pl-2 capitalize' type="text" />
                        <h3 className='flex'>Отечество</h3>
                        <input value={otv} 
                        onChange={handleChangeOtv} 
                        className='border w-full h-8 text-md border-black pl-2 capitalize' type="text" />
                        <h3 className='flex'>Адрес</h3>
                        <input value={adress} 
                        onChange={handleChangeAdress}  
                        className='border w-full h-8 text-md border-black' type="text" />
                        <h3 className='flex'>Номер телефона</h3>
                        <input value={phone} 
                        onChange={handleChangePhone} 
                        maxLength={13} 
                        className='border w-full h-8 text-md border-black pl-2' type="text" />
                        <h3 className='flex'>Электроная почта</h3>
                        <input value={mail} 
                        onChange={handleChangeMail}  
                        className='border w-full h-8 text-md border-black pl-2' type="text" />
                        </div>
                        <CustomButton
                        title='Далее'
                        containerStyles='w-full py-[24px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                        />

                        
                    </Dialog.Panel> 
                </Transition.Child>
                    </div>
                    <UserInfo isOpen={doOpen} closeModal={() => setIsOpen(false)}  car={car}/> 
                    
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default CarDetails