import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import LifeStyle from './LifeStyle';
import Sports from './Sports';
import Technology from './Technology'

const Content = () => {
    return (
        <body>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/coding" element={<Technology/>}/>
                <Route path="/football" element={<Sports/>}/>
                <Route path="/cooking" element={<LifeStyle/>}/>
            </Routes>
        </body>
    )

}

export default Content