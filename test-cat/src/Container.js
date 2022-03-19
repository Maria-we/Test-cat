import Photo from "./Photo";

const Container = props => {
    const displayPhoto = () => {
        return props.photo.map(photo=>{
            return <Photo url={photo.url} />;
        });
    }
    return (
        <>
            <div>
                {displayPhoto()}
            </div>
        </>
    );
}

export default Container;