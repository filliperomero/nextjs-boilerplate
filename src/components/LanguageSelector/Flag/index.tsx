import React, { forwardRef } from 'react'

import BrazilFlag from '../../../assets/brazilFlag.svg'
import UsaFlag from '../../../assets/usaFlag.svg'

type IFlagProps = {
  flag: 'brazil' | 'usa'
  isSelected: boolean
}

type IFlagIcon = {
  [key: string]: any // eslint-disable-line
}

const Flag = forwardRef(function Flag({ flag, isSelected, ...rest }: IFlagProps, ref: any) {
  const flagIcon: IFlagIcon = {
    brazil: <BrazilFlag />,
    usa: <UsaFlag />
  }

  return (
    <button
      ref={ref}
      type="button"
      className={
        (isSelected ? 'filter-grayscale' : 'hover:filter-grayscale') +
        ' ' +
        'w-8 h-8 focus:outline-none'
      }
      disabled={isSelected}
      {...rest}
    >
      {flagIcon[flag]}
    </button>
  )
})

export default Flag
