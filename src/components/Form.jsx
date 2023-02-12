import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/form.css'
import defaultValues from '../utils/defaultValues'

const Form = ({ createNewUser, userUpdate, setUserUpdate, setIsOpen, isOpen, updateDataUser }) => {


    const { register, handleSubmit, reset } = useForm()

    const cleanForm = () => {
        reset(defaultValues)
        setUserUpdate()
    }

    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('card__form')) {
            setIsOpen(false)
            setUserUpdate()
            reset(defaultValues)
        }
    })

    useEffect(() => {
        if (userUpdate) reset(userUpdate)
    }, [userUpdate])

    const submit = data => {
        if (userUpdate) {
            updateDataUser(userUpdate.id, data)
        } else {
            createNewUser(data);
        }

        setIsOpen(false)
        reset(defaultValues)
    }

    return (
        <div className={`card__form ${isOpen && 'show__form'}`}>
            <form onSubmit={handleSubmit(submit)}>
                <input {...register('email')} type="text" placeholder='Enter your email' />
                <input {...register('password')} type="password" placeholder='Enter your password' />
                <input {...register('first_name')} type="text" placeholder='Enter your first name' />
                <input {...register('last_name')} type="text" placeholder='Enter your last name' />
                <input {...register('birthday')} type="date" />
                <button>{userUpdate ? 'Update data' : 'Register'} </button>
                <button type='reset' onClick={cleanForm}>Clean</button>
            </form>
        </div>

    )
}

export default Form