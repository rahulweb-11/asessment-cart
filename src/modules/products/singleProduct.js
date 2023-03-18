import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Headers from "../../components/header/Header";
import { singleProducts } from "../../redux/action/productAction";
import "./singleproduct.scss";

export const SingleProduct = () => {
    const [productDetail, setProductDetail] = useState({});
    const {data} = useSelector(store=>store.singleProduct.products);

    useEffect(()=>{
        setProductDetail(data);
    },[data])

  return (
    <>
      <div className="header-color">
        <Headers />
      </div>
      <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="card">
              <div class="row">
                <div class="col-md-6">
                  <div class="images p-3">
                    <div class="text-center p-4">
                      <img
                        id="main-image"
                        src={data?.images[0]}
                        // src={productDetail?.images[0]}
                        width="250"
                      />{" "}
                    </div>
                    <div class="thumbnail text-center">
                      {" "}
                      <img
                        src={data?.images[1]}
                        width="70"
                      />{" "}
                      <img
                        onclick="change_image(this)"
                        src={data?.images[2]}
                        width="70"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="product p-4">
                   
                    <div class="mt-4 mb-3">
                      {" "}
                      <span class="text-uppercase text-muted brand">
                        {productDetail.category}
                      </span>
                      <h5 class="text-uppercase">{productDetail.title}</h5>
                      <div class="price d-flex flex-row align-items-center">
                        {" "}
                        <span class="act-price">${productDetail.price}</span>
                        <div class="ml-2">
                          {" "}
                          <small class="dis-price">${productDetail.price+100}</small>{" "}
                          <span>{productDetail.discountPercentage}% OFF</span>{" "}
                        </div>
                      </div>
                    </div>
                    <p class="about">
                        {productDetail.description}
                    </p>
                    <div class="cart mt-4 align-items-center">
                      {" "}
                      <button type="button" class="btn btn-danger text-uppercase mr-2 px-4">
                        Add to cart
                      </button>{" "}
                      <i class="fa fa-heart text-muted"></i>{" "}
                      <i class="fa fa-share-alt text-muted"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
