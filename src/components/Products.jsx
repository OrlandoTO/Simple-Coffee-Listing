import { useState } from "react";
import Badge from "./Badge";
import data from '../data/simple-coffee-listing-data.json'
import Card from '../components/Card'

export default function Products() {
    const [showAllProducts, setShowAllProducts] = useState(true);
    const [products, setProducts] = useState(data)
    
    const handleAllProducts = ()=>{
        setShowAllProducts(true)
        setProducts(data)
    }

    const availableProducts = ()=>{
        setShowAllProducts(false)
        setProducts(data.filter(e=>e.available))
    }
    return <>
        <section className="flex flex-col justify-center items-center mt-4 gap-6">
            <div className="flex gap-4">
                <Badge content="All Products" onClick={handleAllProducts} active={showAllProducts} />
                <Badge content="Available Now" onClick={availableProducts} active={!showAllProducts}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    products.map(product => (
                        <Card key={product.id} 
                            {...product}
                        
                        />
                    )
                    )
                }
            </div>
        </section>
    </>





}