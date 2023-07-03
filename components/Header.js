import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span class="ml-3 text-xl">ToDo List</span>
                </div>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/"} class="mr-10 hover:text-gray-900 cursor-pointer">Home</Link>
                    <Link href={"/todos"}class="mr-10 hover:text-gray-900 cursor-pointer">My-ToDos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header