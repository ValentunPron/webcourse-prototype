import React from 'react'

import Link from 'next/link'
import { auth, signOut, signIn } from '@/auth'

const Navbar = async () => {
    const session: any = await auth()

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className='flex justify-between items-center'>
                <Link className='flex items-center gap-2' href="/">
                    <img width="40" height="40" src="https://img.icons8.com/office/40/knowledge-sharing.png" alt="knowledge-sharing"/>
                    <h2 className='text-3xl font-bold'>Education</h2>
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session && session?.user 
                    ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server";
                                
                                await signOut({redirectTo: '/'})
                                }}>
                                <button  className='cursor-pointer' type='submit'>Logout</button>
                            </form>

                            <Link href={`user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    )
                    : <form action={async () => {
                        "use server"
                        
                        await signIn('github')
                        }}>
                        <button className='cursor-pointer' type='submit'>Login</button>
                    </form>
                }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
