import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const authRoute: Routes = [
    {
        key: 'signIn',
        path: `/sign-in`,
        component: lazy(() => import('@/views/auth/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: `/sign-up`,
        component: lazy(() => import('@/views/auth/SignUp')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: `/forgot-password`,
        component: lazy(() => import('@/views/auth/ForgotPassword')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `/reset-password`,
        component: lazy(() => import('@/views/auth/ResetPassword')),
        authority: [],
    }, 
    {
        key: 'userlist',
        path: `/user-list`,
        component: lazy(() => import('@/views/auth/Users')),
        authority: [],
    }, 
     {
        key: 'userform',
        path: `/user-form/:id?`,
        component: lazy(() => import('@/views/auth/Users/userForm')),
        authority: [],
    }, 

]

export default authRoute
