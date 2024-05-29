import React, {useEffect, useState} from "react";
import BlogTab from "./BlogTab";
import axios from "axios";

const BlogTabMenu = () => {
    const [cate, setCate] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);
    useEffect(() => {
        const fetchCates = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/blogCate/all`);
                setCate(response.data);
            } catch (error) {
                console.error("Error fetching cates:", error);
            }
        };
        fetchCates();
    }, []);
    const handleCategoryClick = (event, categoryId) => {
        event.preventDefault();
        setSelectedCategoryId(categoryId);
    }
    return (
        <>
            <ul className="nav justify-content-md-center nav-gray-700 mb-5 flex-nowrap flex-md-wrap overflow-auto overflow-md-visible"
                id="featuredBooks" role="tablist">
                <li className="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
                    <a id="tab-all_cats" className={`nav-link px-0 ${selectedCategoryId === 0 ? 'active' : ''}`} data-toggle="tab"
                       role="tab" aria-controls="all_cats" aria-selected="false" onClick={(event) => {event.preventDefault(); setSelectedCategoryId(0);}}>All</a>
                </li>
                {cate.map((category) => (
                    <li className="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1" key={category.id}>
                        <a id={`tab-${category.id}`} className={`nav-link px-0 ${selectedCategoryId === category.id ? 'active' : ''}`} data-toggle="tab"
                           role="tab" aria-controls={category.id} aria-selected="false" onClick={(event) => handleCategoryClick(event, category.id)}>{category.name}</a>
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                <BlogTab categoryId={selectedCategoryId}/>
            </div>
        </>
    );
}
export default BlogTabMenu;