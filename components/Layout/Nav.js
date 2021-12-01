import Link from 'next/link'
export const NavItem = ({ text, href }) => {
  return (
    <li className='text-sm font-bold text-gray-700 px-2 hover:bg-gray-400 rounded transition-colors duration-300'>
      <Link href={href}>
        <a className='p-3'>{text}</a>
      </Link>
    </li>
  )
}

export default () => {
  return (
    // <div className='container mx-auto'>
    <nav className='flex justify-between p-4'>
      <div className='flex items-center'>
        <div className='inline-block h-6 w-6 rounded-full bg-gray-400' />
        <span>Logo</span>
      </div>
      <div>
        <ul className='flex space-x-3'>
          <NavItem href='/test' text='Home' />
          <NavItem href='/ucs' text='UCs' />
          <NavItem href='/download' text='Download' />
          <NavItem href='/customers' text='Customers' />
          <NavItem href='/remote-work' text='Remote work' />
          <NavItem href='/remote-work' text='Remote work' />
          <NavItem href='/pricing' text='Pricing' />
          <NavItem href='/jobs' text='Jobs' />
          <NavItem href='/login' text='Login' />
          <NavItem href='/signup' text='Sign Up' />
        </ul>
      </div>
    </nav>
    // </div>
  )
}
