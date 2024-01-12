import { useQuery } from "@tanstack/react-query"
import { getTops } from "../../services/apiClothes"

import Spinner from "../../ui/Spinner"

function ClothesSelector() {
    const {data: clothes, error, isLoading} = useQuery({queryKey: ['clothes'], queryFn: getTops})

    if (isLoading) return <Spinner/>

    return (
        <div>
            <h1>This is the clothes selector</h1>
        </div>
    )
}

export default ClothesSelector
