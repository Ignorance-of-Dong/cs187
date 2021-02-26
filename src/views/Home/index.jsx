import React, {useState, Suspense, useEffect, memo} from "react";
import "./index.css";




const TextComponent = () => import("../../component/Text");
const ImageComponent = () => import("../../component/Image");
const VideoComponent = () => import("../../component/Video");
const TableComponent = () => import("../../component/Table");
const EmailComponent = () => import("../../component/Email");



let tabList = [
    {
        id: 0,
        title: "Text",
        component: TextComponent
    },
    {
        id: 1,
        title: "Image",
        component: ImageComponent
    },
    {
        id: 2,
        title: "Video",
        component: VideoComponent
    },
    {
        id: 3,
        title: "Table",
        component: TableComponent
    },
    {
        id: 4,
        title: "Email",
        component: EmailComponent
    }
]



function SubMoudle ({ com }) {
    
    let Components = React.lazy(() => com());
    
    return <>
        <Suspense fallback={null}>
            <Components/>
        </Suspense>
    </>
}

let Moudle = memo(SubMoudle)
function Home () {
    let [tabIndex, setTabIndex] = useState(0)
    let [tabContent, setTabContent] = useState(tabList[tabIndex])
    let [top, settop] = useState("-30rem")
    const change = (index) => {
        setTabIndex(index)
        setTabContent(tabList[index])
        settop("-30rem")
    }
    const drown = () => {
        settop("4rem")
    }
    return <>
        <div className="tab-container">
            <div className="tab-header">
                {
                    tabList.map(item => {
                        return <div key={item.id} className={item.id === tabIndex ? "tab-item tab-checked": "tab-item"} onClick={() => {change(item.id)}}>
                                {item.title}
                        </div>
                    })
                }
            </div>
            <div className="tab-down-menu">
                <span>{tabContent["title"]}</span>
                <span onClick={() => drown()} className="drop">
                    <img src="https://alipic.lanhuapp.com/SketchPng4ed40ec7e55775405d6053e95598c9abe1f0c8a6a1df0c47e2e929bf3c231966" alt=""/>
                </span>
                <div className="tab-down-menu-content" style={{top: top}}>
                {
                    tabList.map(item => {
                        return <div key={item.id} className={item.id === tabIndex ? "tab-menu-item tab-checked": "tab-menu-item"} onClick={() => {change(item.id)}}>
                            {item.title}
                        </div>
                    })
                }
                </div>
            </div>
            <div className="tab-content">
                <Moudle com={tabContent.component}/>
            </div>
        </div>
    </>
}

export default Home;