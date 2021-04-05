import React, { ButtonHTMLAttributes } from 'react'

import BrazilFlag from '../assets/brazil-flag.svg'
import UsaFlag from '../assets/usa-flag.svg'

type IFlagProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  flag: 'brazil' | 'usa'
  isSelected: boolean
}

type IFlagIcon = {
  [key: string]: any // eslint-disable-line
}

const Flag: React.FC<IFlagProps> = ({ flag, isSelected, ...rest }) => {
  const flagIcon: IFlagIcon = {
    brazil: <BrazilFlag />,
    usa: <UsaFlag />
  }

  return (
    <button
      type="button"
      className={
        (isSelected ? 'filter-grayscale' : 'hover:filter-grayscale') +
        ' ' +
        'w-12 h-12 focus:outline-none'
      }
      disabled={isSelected}
      {...rest}
    >
      {flagIcon[flag]}
    </button>
  )
}

export default Flag
