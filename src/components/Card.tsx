import React, { type ReactElement, type ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
}

const Card = ({ children }: CardProps): ReactElement => {
  return (
    <div className="card p-5 rounded-4">
      {children}
    </div>
  )
}

export default Card
