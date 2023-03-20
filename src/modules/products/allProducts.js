import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Headers from "../../components/header/Header";
import { allProducts, searchProducts } from "../../redux/action/productAction";
import "./products.scss";
import { Cards } from "../../components/cards/Cards";
import { Filter } from "../../components/filters/Filter";
import { useDebounce } from "../../customHook";
import TablePagination from "@mui/material/TablePagination";

export const AllProducts = () => {
  const [search, setSearch] = useState("");

  const searchResult = useDebounce(search, 2000);
  const dispatch = useDispatch();
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    dispatch(
      allProducts((res) => {
        const data = res.data.products;
        const a = data.sort((a, b) => (a.title > b.title ? 1 : -1));
        console.log(res.data, "aaaa");
        setListProducts(a);
      })
    );
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(
      searchProducts(search, (res) => {
        setListProducts(res);
      })
    );
  }, [searchResult]);
  return (
    <>
      <div className="header-color">
        <Headers onChange={handleSearch} />
      </div>
      {/* <Filter onChange={handleSearch}/> */}
      <div className="container-fluid">
        <div className="row card-row">
          <div className="col" style={{ display: "contents" }}>
            {listProducts?.map((item) => (
              <Cards
                cardTitle={item?.title}
                imgPath={item?.images[0]}
                btnText="View Product"
                cardText={item?.description.slice(0,50)+"..."}
                id={item?.id}
                cardPrice={item?.price}
              />
            ))}
          </div>
         
        </div>
      </div>
    </>
  );
};
