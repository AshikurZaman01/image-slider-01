import css from './style.css';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


const Home = () => {
    return (
        <div>
            <div className="container mx-auto">

                <div className="slide">

                    <div className="item"
                        style={{
                            background: `url('https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D')`,

                        }}
                    >
                        <div className="content">
                            <h1 className='name '>Bangladesh</h1>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fuga veritatis voluptate sint similique eaque voluptatum totam libero ratione at et est ducimus, atque nemo expedita deleniti! Tempore, nam earum.</p>
                            <button className='btn btn-sm'>See More</button>
                        </div>
                    </div>

                    <div className="item"
                        style={{
                            background: `url('https://images.unsplash.com/photo-1682687221323-6ce2dbc803ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8')`,
                        }}
                    >
                        <div className="content">
                            <h1 className='name '>India</h1>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fuga veritatis voluptate sint similique eaque voluptatum totam libero ratione at et est ducimus, atque nemo expedita deleniti! Tempore, nam earum.</p>
                            <button className='btn btn-sm'>See More</button>
                        </div>
                    </div>

                    <div className="item"
                        style={{
                            background: `url('https://images.unsplash.com/photo-1683009427041-d810728a7cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D')`,
                        }}
                    >
                        <div className="content">
                            <h1 className='name '>Norway</h1>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fuga veritatis voluptate sint similique eaque voluptatum totam libero ratione at et est ducimus, atque nemo expedita deleniti! Tempore, nam earum.</p>
                            <button className='btn btn-sm'>See More</button>
                        </div>
                    </div>

                    <div className="item"
                        style={{
                            background: `url('https://images.unsplash.com/photo-1704740533983-d3f6a9d190bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D')`,
                        }}
                    >
                        <div className="content">
                            <h1 className='name '>Chaina</h1>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fuga veritatis voluptate sint similique eaque voluptatum totam libero ratione at et est ducimus, atque nemo expedita deleniti! Tempore, nam earum.</p>
                            <button className='btn btn-sm'>See More</button>
                        </div>
                    </div>

                    <div className="item"
                        style={{
                            background: `url('https://images.unsplash.com/photo-1682685797168-613fd0cae41d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D')`,
                        }}
                    >
                        <div className="content">
                            <h1 className='name '>Sea Beach</h1>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fuga veritatis voluptate sint similique eaque voluptatum totam libero ratione at et est ducimus, atque nemo expedita deleniti! Tempore, nam earum.</p>
                            <button className='btn btn-sm'>See More</button>
                        </div>
                    </div>

                    <div className="item"
                        style={{
                            background: `url('https://images.unsplash.com/photo-1704790024545-d801eb3d3e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D')`,
                        }}
                    >
                        <div className="content">
                            <h1 className='name '>New York</h1>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fuga veritatis voluptate sint similique eaque voluptatum totam libero ratione at et est ducimus, atque nemo expedita deleniti! Tempore, nam earum.</p>
                            <button className='btn btn-sm'>See More</button>
                        </div>
                    </div>


                </div>

                <div className="buttons ">
                    <button className='prev btn'><GrFormPrevious /></button>
                    <button className='next btn'><MdOutlineNavigateNext /></button>
                </div>

            </div>
        </div>
    );
};

export default Home;
