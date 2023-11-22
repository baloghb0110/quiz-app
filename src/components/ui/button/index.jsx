/* eslint-disable react/prop-types */

import { ButtonStyle, IconLeft, IconRight } from "./styled"

const Button = ({
  text,
  onClick,
  icon,
  iconPosition,
  outline,
  big,
  disabled,
}) => {
  return (
    <ButtonStyle
      onClick={onClick}
      outline={outline}
      bold={true}
      big={big}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && <IconLeft>{icon}</IconLeft>}
      {text}
      {icon && iconPosition === 'right' && <IconRight>{icon}</IconRight>}
    </ButtonStyle>
  )
}

export default Button