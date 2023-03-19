import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { singleProducts } from "../../redux/action/productAction";

export const Cards = ({cardTitle, cardText,imgPath,btnText,id,cardPrice }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToSinglePage = (id) =>{
        dispatch(singleProducts(id,(res)=>{
            if(res){
                navigate(`/single_product/${id}`)
            }
        }))
    }
  return (
    <>
      <div className="card" style={{ width: "15rem", margin: "15px" }}>
        <img src={imgPath} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">
           {cardText}
           <br/>
           <b>${cardPrice}</b>
          </p>
          <Button onClick={()=>goToSinglePage(id)} id={id} className="btn btnclr">
            {btnText}
          </Button>
        </div>
      </div>
    </>
  );
};
