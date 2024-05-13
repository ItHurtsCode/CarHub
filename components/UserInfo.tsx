"use client"

import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CarProps } from '@/types';

import { useState } from 'react';
import { CustomButton } from '.';
import PaymentCard from './PaymentCard';
import { DefaultCardProps } from '@/types';

const UserInfo = ({isOpen, car, closeModal}: DefaultCardProps) => {

    const [doOpen, setIsOpen] = useState(false);
    const [isShowing, setIsShowing] = useState(false)
    const [isComplete, setIsComplete] = useState(false);
    const [isCompleteCVV, setIsCompleteCVV] = useState(false);
    const [isCompletePhone, setIsCompletePhone] = useState(false);
    const [isCompleteFio, setIsCompleteFio] = useState(false);
    const [isCompleteDate, setIsCompleteDate] = useState(false);


    
    const [input, setInput] = useState('');
    const [card, setCard] = useState('');
    const [cvv, setCvv] = useState('')
    const [fio, setFio] = useState('')
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
  
    

    const handleChange = (event: any) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/[^\d]/g, '').match(/.{1,4}/g)?.join(' ') || ''.substring(0, 19)
        setIsComplete(event.target.value.length === 19);
        setCard(numericValue);
      };
      const handleChangeCvv = (event: any) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/[^\d]/g, '').substring(0, 4)
        setIsCompleteCVV(event.target.value.length === 3);
        setCvv(numericValue);
      };
      const handleChangeFio = (event: any) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/[^а-яёА-ЯЁ\s]/g, '').substring(0, 22)
        setIsCompleteFio(event.target.value.length >= 5);

        setFio(numericValue);
      };
     
      const handleChangeDate = (event: any) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/[^0-9/]/g, '').substring(0, 5)
        setIsCompleteDate(event.target.value.length === 5);
        setDate(numericValue);
      };
      const handleChangePhone = (event: any) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/[^\d]/g, '').substring(0, 15)
        setIsCompletePhone(event.target.value.length === 13);
        setPhone(numericValue);
      };
      const handleChangeMail = (event: any) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/[^a-zA-Z\d\s!-/:-@[-`{-~]+/g, '')
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
                        <h2 className='font-semibold text-xl capitalize pb-10'>
                                {car.make} {car.model}
                                <br />
                                <h3 className=' text-center pt-2 font-thin text-sm'>Данные для оплаты</h3>
                        </h2>

                        </div>
                        <div className="grid">
                        <h3 className='flex'>Номер карты</h3>
                        <input value={card} 
                        
                        onChange={handleChange} 
                        maxLength={19} 
                        style={{
                            padding: '10px',
                            fontSize: '20px',
                            border: '2px solid',
                            borderRadius: '5px',
                            backgroundColor: isComplete ? '#dff0d8' : 'white',
                            color: isComplete ? '#28a745' : 'black',
                          }}
                        className='border w-full h-8 text-md border-black pl-2' type="text" />
                        <h3 className='flex'>Фамилия Имя</h3>
                        <input value={fio} 
                        onChange={handleChangeFio} 
                        style={{
                            padding: '10px',
                            fontSize: '20px',
                            border: '2px solid',
                            borderRadius: '5px',
                            backgroundColor: isCompleteFio ? '#dff0d8' : 'white',
                            color: isCompleteFio ? '#28a745' : 'black',
                          }}
                        className='border w-full h-8 text-md border-black pl-2 capitalize' type="text" />
                        <div className="grid-rows-1 flex mt-6 pl-2">
                        <h3 className='flex mr-2'>CVV</h3>
                        <input value={cvv} 
                        onChange={handleChangeCvv} 
                        maxLength={3} 
                        style={{
                            padding: '10px',
                            fontSize: '20px',
                            border: '2px solid',
                            borderRadius: '5px',
                            backgroundColor: isCompleteCVV ? '#dff0d8' : 'white',
                            color: isCompleteCVV ? '#28a745' : 'black',
                          }}
                        className='border w-32 h-8 text-md border-black pl-2' type="text" />
                        <h3 className='flex ml-8 mr-2'>MM/YY</h3>
                        <input value={date} 
                        onChange={handleChangeDate}  
                        maxLength={5}
                        style={{
                            padding: '10px',
                            fontSize: '20px',
                            border: '2px solid',
                            borderRadius: '5px',
                            backgroundColor: isCompleteDate ? '#dff0d8' : 'white',
                            color: isCompleteDate ? '#28a745' : 'black',
                          }}
                        className='border w-52 h-8 text-md border-black pl-2' type="text" />
                        </div>
                        <h3 className='flex'>Номер телефона</h3>
                        <input value={phone} 
                        onChange={handleChangePhone} 
                        maxLength={13} 
                        style={{
                            padding: '10px',
                            fontSize: '20px',
                            border: '2px solid',
                            borderRadius: '5px',
                            backgroundColor: isCompletePhone ? '#dff0d8' : 'white',
                            color: isCompletePhone ? '#28a745' : 'black',
                          }}
                        className='border w-full h-8 text-md border-black pl-2' type="text" />
                        <h3 className='flex'>Электроная почта</h3>
                        <input value={mail} 
                        style={{
                            padding: '10px',
                            fontSize: '20px',
                            border: '2px solid',
                            borderRadius: '5px',
                          }}
                        onChange={handleChangeMail}  
                        className='border w-full h-8 text-md border-black pl-2' type="text" />
                        </div>
                        
                        <CustomButton
                        title='Оплатить'
                        containerStyles='w-full py-[24px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                        />

                        
                    </Dialog.Panel> 
                </Transition.Child>
                    </div>
                    <PaymentCard isOpen={doOpen} closeModal={() => setIsOpen(false)}  car={car}/> 
                    
                    
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default UserInfo