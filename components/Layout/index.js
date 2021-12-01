import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className='container mx-auto'>
      <Nav />
      <div>{children}</div>
    </div>
  )
}
