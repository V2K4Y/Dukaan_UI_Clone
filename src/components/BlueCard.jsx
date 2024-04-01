export default function BlueCard({message, amount, orderCount}) {
    return (
        <div className="rounded-md overflow-hidden">
            <div className="p-5 shadow-md text-white bg-blue-700 hover:bg-blue-750 grid gap-y-4">
                <div className="flex items-center gap-2">
                    {message}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-3xl font-semibold">₹ {amount}</p>
                    <p className="underline flex items-center">
                        {orderCount} orders
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </p>
                </div>
            </div>
            <div className="flex justify-between px-6 py-2 bg-blue-800 text-white text-sm">
                <p>Next payout date:</p>
                <p>Today, 04:00 PM</p>
            </div>
        </div>
    )
}