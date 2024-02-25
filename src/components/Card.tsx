import React, { type ReactElement, type ReactNode } from 'react'

interface CardProps {
  name: string
  children?: ReactNode
}

const Card = ({ name, children }: CardProps): ReactElement => {
  return (
    <div className="card p-5 rounded-4">
      <h5 className="card-title text-center mb-3 h2">{name}</h5>
      {children}
    </div>
  )
}

export default Card
