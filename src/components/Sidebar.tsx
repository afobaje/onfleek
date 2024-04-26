
// import React from 'react'
// import { Activities, HomeIcon, Logo, Message, Wallet } from './Icons'
// import ActiveLink from './ActiveLink'


// const items = ['Home', 'Activities', 'Message', 'Wallet']
// export default function Sidebar() {
//   return (
//     <aside className='bg-theme-blue  h-full basis-14 px-2  curbe relative z-10'>
//       <div className="wrapper h-full flex  flex-col">
//         <div className="logo mt-5"><Logo /> </div>
//         <div className="flex justify-evenly w-full items-center h-[60%] flex-col">
//           <div className='w-full'>
//             <ActiveLink href='/'>
//               <HomeIcon />
//             </ActiveLink>
//           </div>
//           <div>
//             <ActiveLink href='/activities'>
//               <Activities />
//             </ActiveLink>
//           </div>
//           <div>
//             <ActiveLink href='/message'>
//               <Message />
//             </ActiveLink>
//           </div>
//           <div>
//             <ActiveLink href='/wallet'>
//               <Wallet />
//             </ActiveLink>
//           </div>
//           {/* {
//             items.map((item: string, index: number) => <div key={index}>
//               {item}
//             </div>)
//           } */}
//         </div>

//       </div>

//     </aside>
//   )
// }





import React from 'react'
import { Activities, HomeIcon, Logo, Message, Wallet } from './Icons'
import ActiveLink from './ActiveLink'

export default function Sidebar() {
  return (
    <aside className='bg-theme-blue rounded-2xl md:rounded-none  w-full h-16 md:h-full basis-14 px-2  curbe fixed -bottom-2 md:bottom-0 md:relative z-50 md:z-10'>
      <div className="wrapper bottom-0 h-full flex flex-col">
        <div className="logo mt-5 hidden md:block"><Logo /> </div>
        <div className="flex justify-evenly w-full items-center md:h-[60%] md:flex-col">
          <div className='md:w-full'>
            <ActiveLink styles='w-16' href='/'>
              <HomeIcon />
            </ActiveLink>
          </div>
          <div>
            <ActiveLink styles='w-16' href='/activities'>
              <Activities />
            </ActiveLink>
          </div>
          <div>
            <ActiveLink styles='w-16' href='/message'>
              <Message />
            </ActiveLink>
          </div>
          <div>
            <ActiveLink styles='w-16' href='/wallet'>
              <Wallet />
            </ActiveLink>
          </div>
          
        </div>

      </div>

    </aside>
  )
}
