import React, {useState} from 'react';
import '../Styles/Search.css';
import CellImage from "../Components/CellImage/CellImage.jsx";
import SearchForm from "../Components/SearchForm/SearchForm.jsx";
import {useSearchImages} from "../Hooks/useSearchImages.js";
import InfiniteScroll from "react-infinite-scroll-component";
import {useFetchAllTags} from "../Hooks/useFetchAllTags.js";
import ModalContainer from "../Components/ModalContainer/ModalContainer.jsx";
import ImageForm from "../Components/ImageForm/ImageForm.jsx";
import {useImageInfo} from "../Hooks/useImageInfo.js";

const Search = () => {
    const [images, setImages] = useState([]);

    const [ImageError, setError] = useState('');
    const {fetchImages, hasMoreImages} = useSearchImages(setImages, setError);

    const {TagError, allTags} = useFetchAllTags()
    const [selectedTags, setFormTags] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const [imageInfo, setImageInfo] = useState({
        otherImageInfo: {},
        artistImageInfo: {},
        imageTags: [],
        imageData: {},
    });

    useImageInfo(modalImage, setImageInfo);

    async function scrollGetImages() {
        await fetchImages(selectedTags);
    }

    function onClickImage(imageData) {
        setModalImage(imageData);
        setModalVisible(true);
    }

    return (
        <div className="search">
            <SearchForm
                searchTagsCallback={fetchImages}
                setFormTags={setFormTags}
                selectedTags={selectedTags}
                allTags={allTags}
                TagsError={TagError}
            />
            {ImageError && <h1>{ImageError}</h1>}
            <ModalContainer visible={modalVisible} setVisible={setModalVisible}>
                <ImageForm imageInfo={imageInfo}/>
            </ModalContainer>
            <InfiniteScroll
                className="grid"
                next={scrollGetImages}
                hasMore={hasMoreImages}
                loader={<p>Loading</p>}
                dataLength={images.length}
            >
                {images.map((image, index) => (
                    <div key={index} className="grid-item">
                        <CellImage
                            onClick={() => {
                                onClickImage(image)
                            }}
                            key={image.signature}
                            url={image.url}
                            source={image.source}
                        />
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default Search;