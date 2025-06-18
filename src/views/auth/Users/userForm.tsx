import { Input, FormItem } from '@/components/ui'
import { addUser, editUser } from '@/services/users'
import { Formik, Form, Field } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserList from './userList'
import { Users } from '@/@types/Users'
import appConfig from '@/configs/app.config'
import ApiService from '@/services/ApiService'

const UserForm = () => {
  const [data, setData] = useState({
    userName: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const { id } = useParams()

  const onSubmit = async (data:any) => {
    const res = await addUser(data) // Pass form values to addUser
    console.log('User added:', res)
    setData(data)
    navigate('/user-list')
    console.log('Form Submitted:', data)
  }
  



  return (
    <div>
      <Formik initialValues={data}  key={id || 'new'} onSubmit={onSubmit} enableReinitialize>
        {() => (
          <Form>
            <FormItem label="User Name">
              <Field
                type="text"
                name="userName"
                values="userName"
                 autoComplete="off"
                placeholder="User Name"
                as={Input}
              />
            </FormItem>

            <FormItem label="Email">
              <Field
                type="email"
                name="email"
                values="userName"
                 autoComplete="off"
                placeholder="Email"
                as={Input}
              />
            </FormItem>

            <FormItem label="Password">
              <Field
                type="password"
                values="userName"
                name="password"
                 autoComplete="off"
                placeholder="Password"
                as={Input}
              />
            </FormItem>

            <div className="float-end">
              <button
                className="p-2 bg-blue-500 text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserForm

function getUserById(id: string) {
  throw new Error('Function not implemented.')
}
