/* eslint-disable react/prop-types */
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'

const BookModel = ({ book, onClose }) => {
  return (
    <div 
        className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
        onClick={onClose}
    >
        <div
            onClick={(event) => event.stopPropagation()}
            className='w-[600px] max-w-full h-[400] bg-white rounded-xl p-4 flex flex-col relative'
        >
            <AiOutlineClose 
                className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                onClick={onClose}
            />
            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
            {book.publishYear}
          </h2>
          <h4 className='my-2 text-gray-500'>{book._id}</h4>
          <div className='flex justify-start items-center gap-x-2'>
            <PiBookOpenTextLight className='text-red-300 text-2xl' />
            <h2 className='my-1'>{book.title}</h2>
          </div>
          <div className='flex justify-start items-center gap-x-2'>
            <BiUserCircle className='text-red-300 text-2xl'/>
            <h2 className='my-1'>{book.author}</h2>
          </div>
          <p className='mt-4'>Deshan Bandara Book Store</p>
          <p className='my-2'>
            The try block contains the code that may potentially throw an error or exception.
            If an error occurs within the try block, JavaScript immediately stops executing the code inside the try block and jumps to the corresponding catch block.
            The catch block contains the code to handle the error. The error parameter (or any other identifier specified after the catch keyword) represents the error object that contains information about the error that occurred.
            After the catch block is executed, the program continues to execute the code that follows the try...catch statement.
          </p>
        </div>
    </div>
  )
}

export default BookModel