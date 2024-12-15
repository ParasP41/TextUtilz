import React from 'react'

export default function Alert(props) {
    return (
        <div className='h-7'>
           {props.alert && <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4 px-3'>
                <div className="p-3 mb-4 md:w-[100rem] w-[100rem]  md:text-l text-sm flex items-center justify-between flex-wrap text-blue-900 rounded-lg bg-blue-50 " role="alert">
                    <span>{props.alert.type} : {props.alert.msg}</span>
                </div>
            </div>}
        </div>
    )
}
