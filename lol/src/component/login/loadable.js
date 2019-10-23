import React from 'react';
import Loadable from 'react-loadable';

//通用的过场组件
const loadingComponent =()=>{
    return (
        <div>loading</div>
    ) 
}


export default Loadable({
    //懒加载的组建
    loader:() => import('./index.js'),
    //没加载出来的过程组件
    loading:loadingComponent
});