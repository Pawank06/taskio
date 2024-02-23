import classNames from "classnames"
import React from "react"


const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={classNames("max-w-[120rem] mx-auto px-7", className)}>
      {children}
    </div>
  )
}

export default Container
