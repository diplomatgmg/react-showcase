import React, { type ReactElement, type ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  name: string
  widthClass?: string
  children?: ReactNode
}

const Card = ({ name, widthClass = '', children }: CardProps): ReactElement => {
  const cardClass = clsx('card', 'p-5', 'rounded-4', widthClass)

  return (
    <div className={cardClass}>
      <h5 className="card-title text-center mb-3 h2">{name}</h5>
      {children}
    </div>
  )
}

export default Card
