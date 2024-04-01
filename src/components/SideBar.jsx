import {ItemLists} from "./constants"

export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 w-56 p-2 min-h-lvh bg-blue-900 text-white/80 font-semibold flex flex-col justify-between">
          <div className="m-1 mb-5 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <div className="flex flex-col ml-3">
              <h1>Vivek</h1>
              <p className="underline font-normal text-gray-300">Visit Store</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className="ml-1 mt-2">
            {ItemLists.map((item, index) => <MenuItem key={index} svg={item.svg} name={item.name} />)}
          </div>
          <div className="bg-white/10 p-2 mb-2 rounded-md mt-auto flex items-center gap-2 cursor-pointer">
            <div className="rounded-md bg-white/10 p-2">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00312 1.79727C2.42636 1.79727 1.80313 2.35527 1.80313 3.24727V16.7473C1.80313 17.6393 2.42636 18.1973 3.00312 18.1973H21.0031C21.5799 18.1973 22.2031 17.6393 22.2031 16.7473V13.8473H17.0032C14.8769 13.8473 13.1532 12.1236 13.1532 9.99727C13.1532 7.87097 14.8769 6.14727 17.0032 6.14727H22.2031V3.24727C22.2031 2.35527 21.5799 1.79727 21.0031 1.79727H3.00312ZM23.8031 6.14727V3.24727C23.8031 1.65398 22.6355 0.197266 21.0031 0.197266H3.00312C1.37075 0.197266 0.203125 1.65398 0.203125 3.24727V16.7473C0.203125 18.3405 1.37075 19.7973 3.00312 19.7973H21.0031C22.6355 19.7973 23.8031 18.3405 23.8031 16.7473V13.8473H23.8532V6.14727H23.8031ZM16.0032 9.94727C16.0032 9.47783 16.3837 9.09727 16.8532 9.09727H18.1532C18.6226 9.09727 19.0032 9.47783 19.0032 9.94727C19.0032 10.4167 18.6226 10.7973 18.1532 10.7973H16.8532C16.3837 10.7973 16.0032 10.4167 16.0032 9.94727ZM14.8532 9.99727C14.8532 8.80986 15.8158 7.84727 17.0032 7.84727H22.1532V12.1473H17.0032C15.8158 12.1473 14.8532 11.1847 14.8532 9.99727Z" fill="white">
                </path>
              </svg>
            </div>
            <div className="flex flex-col justify-center hover:text-white">
              <p className="font-thin text-xs">Available Credits</p>
              <p className="font-medium">222.10</p>
            </div>
          </div>
        </div>
    )
}

function MenuItem({svg, name}) {
  return (
    <div className="pl-2 flex text-md p-2 mb-2 hover:bg-white/10 hover:rounded-md hover:text-white cursor-pointer">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d={svg} />
       </svg>
       <span className="pl-3">{name}</span>
    </div>
  )
}