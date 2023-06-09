// export default function Home() {
//     return (
//       <div>Home</div>
//     )
// }

import Content from "./Content"

// const Home = () => {
//     return (
//         <Content  />
//     )
// }

export default {
    props: {
        path: '/',
        element: <Content name="Home" />
    }
}