const Photo = (props) => {

    return (
        <div>
            <img src={"https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1"} alt="Photo" />
        </div>
    )
}

export default Photo;