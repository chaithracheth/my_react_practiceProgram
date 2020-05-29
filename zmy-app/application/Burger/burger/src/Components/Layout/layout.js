import React from 'react';
import Aux from '../../hoc/aux';
import '../Layout/layout.css'


const layout =(props)=>(
   <Aux>
       <div>Toolbar, SideDrawer,BackDro</div>
    <main className="Content">
    {props.children}
    
    </main>
   </Aux>
);

export default layout;