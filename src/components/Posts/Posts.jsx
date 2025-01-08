"use client"
import {useState} from "react";

export default function Posts() {
    const Posts = () => {};
    const handleClick = () => alert('Terkirim');

 return (
    <button className="ml-[86%] rounded-lg px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    onClick={handleClick}>
     Kirim
    </button>
 );
}
