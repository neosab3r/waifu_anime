import {useMemo} from "react";

export const useImageInfo = (randomImage, setImageInfo) => {
    useMemo(() => {
        if (!randomImage) {
            return;
        }
        let otherImageInfo = getOtherInfo(randomImage);
        let imageData = getImageData(randomImage);
        let artist = getArtistInfo(randomImage);

        let newImageInfo = {
            otherImageInfo: otherImageInfo,
            imageData: imageData,
            artistImageInfo: artist,
            imageTags: randomImage.tags
        };
        setImageInfo(newImageInfo);
    }, [randomImage]);
}

function getArtistInfo(randomImage) {
    let artist = {header: 'Автор', name: "Информация не найдена"};
    if (randomImage.artist) {

        let artist =
            {
                header: 'Автор',
                name: randomImage.artist.name ? randomImage.artist.name : null,
                socials: []
            };

        randomImage.artist.patreon ? artist.socials.push({
            text: 'Patreon',
            url: randomImage.artist.patreon,
            img: '/Patreon.svg'
        }) : {};
        randomImage.artist.pixiv ? artist.socials.push({
            text: 'Pixiv',
            url: randomImage.artist.pixiv,
            img: '/Pixiv.svg'
        }) : {};
        randomImage.artist.twitter ? artist.socials.push({
            text: 'Twitter',
            url: randomImage.artist.twitter,
            img: '/Twitter.svg'
        }) : {};
        randomImage.artist.deviant_art ? artist.socials.push({
            text: 'Devian Art',
            url: randomImage.artist.deviant_art,
            img: '/DeviantArt.svg'
        }) : {};
    }

    return artist;
}

function getImageData(randomImage) {
    return {
        dominantColor: randomImage.dominant_color,
        url: randomImage.url,
        source: randomImage.source,
        imageId: randomImage.image_id,
        extension: randomImage.extension,
        byte_size: randomImage.byte_size,
        signature: randomImage.signature,
    }
}

function getOtherInfo(randomImage) {
    return {
        header: 'Информация',
        isNSFW: randomImage.is_nsfw ? "Yes" : "No",
        arrayData: [
            {text: 'Формат', value: randomImage.extension},
            {text: 'Загружено', value: randomImage.uploaded_at ? formatDateWithIntl(randomImage.uploaded_at) : ""},
            {text: 'Разрешение', value: `${randomImage.width}x${randomImage.height}`},
        ]
    };
}

function formatDateWithIntl(isoString) {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    }).format(date);
}