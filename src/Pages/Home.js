// export default function Home() {
//     return (
//       <div>Home</div>
//     )
// }

import Content from "./Content"

const Home = () => {
    return (
        <Content name="Dashboard"  />
    )
}

const home = {
    props: {
        path: '/',
        element: <Home />
    }
}

export default home