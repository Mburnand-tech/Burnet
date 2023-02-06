import { Routes, Route } from 'react-router-dom';
import Home from './Home'

const Content = () => {
    return (
        <body>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/coding" element={<p>Coding</p>}/>
                <Route path="/football" element={<p>Football</p>}/>
                <Route path="/cooking" element={<p>Cooking</p>}/>
            </Routes>
        </body>

    )

}

export default Content