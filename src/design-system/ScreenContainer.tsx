
import React from 'react';

export default function ScreenContainer(
  children: React.ReactNode,
){
  return (
    <div
      className="justify-center items-center h-screen"
    >
      {children}
    </div>
  )
}
