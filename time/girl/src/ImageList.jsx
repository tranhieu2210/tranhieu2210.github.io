import ImageItem from './ImageItem';

const ImageList = (props) => {
    return (
        <div className='container'>
            {props.image.map((image) => (
                <ImageItem key={image.id} image={image} />
            )

            )}
        </div>
    )

}

export default ImageList