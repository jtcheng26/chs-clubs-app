/* Adapted from https://flowbite.com/docs/forms/search-input */
import { debounce } from 'lodash'
import React, { useMemo, useState } from 'react'

interface SearchProps {
    setSearchQuery: (s: string) => void
}

export default function Search({ setSearchQuery }: SearchProps) {
    const [query, setQuery] = useState('')

    const setSearchQueryDebounced = useMemo(
        () =>
            debounce(setSearchQuery, 500, {
                trailing: true,
            }),
        [setSearchQuery]
    )

    function search(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSearchQuery(query)
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setQuery(e.currentTarget.value)
        setSearchQueryDebounced(e.currentTarget.value)
    }

    return (
        <div className="z-10">
            <form className="flex items-center" onSubmit={search}>
                <label className="sr-only" htmlFor="search">
                    Search
                </label>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="search"
                        className="bg-white shadow-md transition-shadow duration-200 ring-0 border-none outline-none text-gray-900 text-lg rounded-full focus:shadow-xl block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Search"
                        required
                        value={query}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    )
}
