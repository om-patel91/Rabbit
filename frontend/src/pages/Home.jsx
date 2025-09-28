import React from 'react'
import Hero from "../components/Layout/Hero";
import GenderCollections from "../components/Products/GenderCollectionSection"
import NewArrival from "../components/Products/NewArrival";
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from '../components/Products/ProductGrid';
import FeaturedCollection from '../components/Products/FeaturedCollection';
import FeatureSection from '../components/Products/FeatureSection';

const placeholderProducts=[
    {
  _id:1,
  name:"Product 1",
  price:100,
  images:[{url:"https://picsum.photos/500/500?random=22"}]
},
{
    _id:2,
  name:"Product 2",
  price:100,
  images:[{url:"https://picsum.photos/500/500?random=21"}]
},
{
    _id:3,
  name:"Product 3",
  price:100,
  images:[{url:"https://picsum.photos/500/500?random=20"}]
},
{
    _id:4,
  name:"Product 4",
  price:100,
  images:[{url:"https://picsum.photos/500/500?random=19"}]
},
{
  _id:5,
  name:"Product 5",
  price:100,
  images:[{url:"https://picsum.photos/500/500?random=18"}]
},
{
    _id:6,
  name:"Product 6",
  price:100,
  images:[{url:"https://picsum.photos/500/500?random=17"}]
},
{
    _id:7,
  name:"Product 7",
  price:100,
  images:[{url:"https://picsum.photos/500/500?random=16"}]
},
{
    _id:8,
  name:"Product 8",
  price:100,
  images:[{url:"https://picsum.photos/500/500?random=15"}]
},
]

const Home = () => {
  return (
    <div>
      <Hero/>
      <GenderCollections/>
      <NewArrival/>
    
    {/* Best Seller */}
    <h2 className="text-center text-3xl font-bold mb-4">Best seller</h2>
      <ProductDetails/>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts}/>
      </div>
      <FeaturedCollection/> 
      <FeatureSection/>
    </div>
  )
}

export default Home
