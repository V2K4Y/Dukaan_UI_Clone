import BlueCard from "./BlueCard";
import RevenueCard from "./RevenueCard";

export default function OverView() {
    return (
        <div className="flex flex-col gap-6 p-6 px-8 bg-gray-100">
            <div className="flex justify-between">
                <p className=" text-xl font-semibold">Overview</p>
                <button className="border border-gray-300 p-1 px-2 flex rounded-sm">
                    This Month
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-gray-700">
                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                <BlueCard message={"Next payout"} amount={"2,312.23"} orderCount={"23"} />
                <RevenueCard message={"Amount Pending"} amount={"92,312.20"} orderCount={"13"}/>
                <RevenueCard message={"Amount Pending"} amount={"92,312.20"} orderCount={"13"}/>
            </div>
            <div className="flex flex-col gap-5">
                <p className=" text-xl font-semibold mt-2">Transactions | This Month</p>
                <div className="flex gap-3">
                    <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-full text-sm">Payouts (22)</button>
                    <button className="bg-blue-700 text-white py-2 px-4 rounded-full text-sm">Refunds (6)</button>
                </div>
            </div>
        </div>
    )
}