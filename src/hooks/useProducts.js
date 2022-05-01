import { useEffect, useState } from "react"

const useProducts = (loading) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://evening-basin-87782.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [loading])
    return [products, setProducts]
}

export default useProducts;