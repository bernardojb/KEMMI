import { useRouter } from "next/navigation"

function ActiveLink({ children, href }) {
    const router = useRouter()

    console.log("ROUTER", router)

    const style = {
      marginRight: 10,
      color: router.asPath === href ? 'red' : 'black',
    }
   
    const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
    }
   
    return (
      <a href={href} onClick={handleClick} style={style}>
        {children}
      </a>
    )
  }
   
  export default ActiveLink