// export default function Explore() {
//     return (
//       <div>Explore</div>
//     )
// }

// const Explore = () => {
//     return (
//         <div>Explore</div>
//     )
// }

import Content from "./Content";

export default {
    props: {
        path: '/explore',
        element: <Content name="Explore" /> //<Explore />
    }
}