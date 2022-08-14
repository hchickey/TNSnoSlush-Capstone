import { useEffect, useState } from "react"
import { Img } from "./Img"


export const ImgList = ({location}) => {
    const [imgList, setImgList] = useState([])

    useEffect(
        () => {
        fetch(`http://localhost:8088/images`)
        .then(res => res.json())
        .then((imgArray) => {
            const myImages = imgArray.filter(img => img.LocationId === location?.id)
            setImgList(myImages)
        })
        }, 
        [location]
    )

    return <article className="images">
        {
            imgList.map((image) => <Img key={`image--${image.id}`}
            imgObject={image} />)
        }
    </article>
}