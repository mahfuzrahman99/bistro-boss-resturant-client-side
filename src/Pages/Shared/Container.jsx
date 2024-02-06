/* eslint-disable react/prop-types */




const Container = ({Children}) => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                {Children}
            </div>
        </div>
    );
};

export default Container;