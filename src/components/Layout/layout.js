import React from 'react'
import "./layout.css"

const Layout = (props) => (
    <React.Fragment>
        <div>Toolbar, Sidedrawer, Backdrop</div>

        <main className="main">
            {props.children}
        </main>
    </React.Fragment>
)


export default Layout;