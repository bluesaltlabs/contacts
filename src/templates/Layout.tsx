import React from 'react'
import './Layout.css'

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

// todo: add a header and footer element to this page.
// todo: update the title so it's closer to the header and not in the middle of the page.
//
const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      {!title ? null : <h1>{title}</h1>}

      {/* todo: is there a way to store these routes in one place so I don't have to hard code them? */}
      <div className="card">
        <a href="/">Home</a>
        |
        <a href="/about.html">About</a>
        |
        <a href="/people.html">People</a>
        <br />
      </div>
      {!children ? null :
        <div className="card">
          {children}
        </div>
      }
    </>
  )
}

export default Layout
