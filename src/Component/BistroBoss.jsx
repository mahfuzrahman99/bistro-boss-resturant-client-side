import Bistro from '../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <div
            className="bg-cover bg-center bg-opacity-40 h-[380px] relative"
            style={{ backgroundImage: `url(${Bistro})` }}
        >
            <div className="bg-white p-4 m-32 text-center absolute ">
                <h1 className="font-normal text-xl md:text-4xl font-cinzel">Bistro Boss</h1>
                <h1 className="font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </h1>
            </div>
        </div>
    );
};

export default BistroBoss;

