import React from "react";
import { useContext } from "react";
import { RoomContext } from "./Context";
import Title from "../components/Title";

/*
const getUnique = (hello,value)=>{
    return [...new Set(hello.map(item => item[value]))];
};*/
export default function RoomFilter(rooms) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  /*
    let types=getUnique(rooms,'type');
    types =['all',...types];
     types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>

     })
     */
  return (
    <section className="filter-container">
      <Title title="serch rooms" />
      <from className="filter-form">
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            <option value="all">all</option>
            <option value="single">Single</option>
            <option value="double">double</option>
            <option value="family">family</option>
            <option value="presidential">presidential</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            <option value="1 "> 1</option>
            <option value="2 "> 2</option>
            <option value="3 "> 3</option>
            <option value=" 4"> 4</option>
            <option value="5 "> 5</option>
            <option value=" 6"> 6</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="text"
              name="minSize"
              value={minPrice}
              id="size"
              onChange={handleChange}
              className="size-input"
            />

            <input
              type="text"
              name="maxSize"
              value={maxPrice}
              id="size"
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              checked={breakfast}
              id="breakfast"
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>

          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              id="pets"
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </from>
    </section>
  );
}
