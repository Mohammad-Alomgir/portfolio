import { Link } from "react-router-dom"

const CustomThemeButton = ({src="",children,state}) => {
  return (
    <Link state={state} to={src} className='themeButton'>
      {children}
    </Link>
  )
}

export default CustomThemeButton
