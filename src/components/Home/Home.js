import React, { useEffect, useState } from 'react'
import './Home.scss'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from '../../store/product-actions'
import { CiSearch } from "react-icons/ci";
import ProductCard from '../ProductCard/ProductCard';

function Home() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [type, setType] = useState("Normal")
    const dispatch = useDispatch()
    let products = useSelector((state) => state.product.products)
    let categories = useSelector((state) => state.product.categories)
    const [filterProduct, setFilterProduct] = useState([])
    const handleSearch = (e) => {
        setSearch(e.target.value)
        if(search !== ""){
            const filteredProducts = products.filter((product) => {
                return product.title.toLowerCase().includes(search.toLowerCase())
            })
            setFilterProduct(filteredProducts)
        }else{
            setFilterProduct(products)
        }
    }
    const handleFilter = (e) => {
        
        setFilter(e.target.value)
        if(e.target.value !== "All"){
            const filteredProducts = products.filter((product) => {
                return product.category === e.target.value
            })
            console.log(filteredProducts)
            setFilterProduct(filteredProducts)
        }else{
            setFilterProduct(products)
        }
    }
    const handleSort = (item) => {
        setType(item)
        if(item === "Normal"){
            setFilterProduct(products)
        }else if(item === "High to Low"){
            const sortedProducts = [...filterProduct].sort((a, b) => b.price - a.price)
            setFilterProduct(sortedProducts)
        }else if(item === "Low to High"){
            const sortedProducts = [...filterProduct].sort((a, b) => a.price - b.price)
            setFilterProduct(sortedProducts)
        }
        }
    useEffect(() => {
        dispatch(fetchProducts())
        if(search === "" && filter === "All" && type === "Normal"){
            setFilterProduct(products)
        }
    }, [dispatch, products, search, filter, type])
  return (
    <div className='home'>
      <div className="filter_container">
        <div className="filter">
            <p className='title'>Filter</p>
            <div className="custom-select">
              <select value={filter} onChange={(e)=> handleFilter(e)}>
                <option value="All">All</option>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
        </div>
        <div className="sort">
            <p className='title'>Sort</p>
            <div className="btns">
                <button onClick={()=>handleSort('Normal')}>Normal</button>
                <button onClick={()=>handleSort('High to Low')}>High to Low</button>
                <button onClick={()=>handleSort('Low to High')}>Low to High</button>
            </div>
        </div>
        <div className="search">
        <div className="search_box">
            <input type="text"  placeholder='Search by product name' name='search' value={search} onChange={(e)=> handleSearch(e)} />
            <CiSearch className='search_icon' />
            </div>
        </div>
      </div>
      <div className="product_container">
        <p className='title'>Products</p>
        <p className='sub_title'>{filter}</p>
        <div className="product_grid">
          {filterProduct?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home