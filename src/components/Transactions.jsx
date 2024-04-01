import {TableData} from "./constants"

export default function Transactions() {
    return (
        <div className="flex flex-col px-8 bg-gray-100">
            <div className="flex justify-between bg-white p-3 pb-3">
                <div className="flex w-1/3 border border-gray-200 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-gray-500 p-2 rounded-l-md">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" placeholder="Order ID or transaction ID" className="w-full h-10 p-2 outline-none rounded-sm" />
                </div>
                <div className="flex gap-5">
                    <button className="outline-none border border-gray-300 py-2 px-4 flex items-center gap-2">Sort
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                    </button>
                    <button className="outline-none border border-gray-300 py-2 px-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="bg-white p-5">
                <table className="w-full table-auto">
                    <thead>
                        <th className="grid grid-cols-5 pl-5 mb-5 text-left text-gray-600 text-sm font-semibold">
                            <td>ORDER ID</td>
                            <td>STATUS</td>
                            <td>TRANSACTION ID</td>
                            <td className="pl-5">REFUND DATE</td>
                            <td className="text-right pr-5">ORDER AMOUNT</td>
                        </th>
                    </thead>
                    <tbody className="flex flex-col text-right">
                        {TableData.map((item, index) => (
                            <tr key={index} className="grid grid-cols-5 pl-5 py-4 text-left text-sm text-gray-500 border-b border-gray-200">
                                <td className="font-medium text-blue-700">#{item.id}</td>
                                <td className="flex gap-2 items-center">
                                    { (item.status === "Successful") && <div className='h-2.5 w-2.5 rounded-full bg-green-500'/>}
                                    { (item.status === "Processing") && <div className='h-2.5 w-2.5 rounded-full bg-gray-400'/>}
                                    { (item.status === "Failed") && <div className='h-2.5 w-2.5 rounded-full bg-red-500'/>}
                                    {item.status}
                                </td>
                                <td>{item.transactionID}</td>
                                <td className="pl-5">{item.refundDate}</td>
                                <td className="text-right pr-5">{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}