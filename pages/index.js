import React from "react";
import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import Filters from "../components/Filters";
import Head from 'next/head';
import CardList from '../components/CardList';
export default function Home({ data, queryParams }) {

  const [missions, setMissions] = useState([]);
  const [filters, setFilters] = useState({
    "launch_year": '',
    "launch_success": '',
    "land_success": '',
  });
  const initialRender = useRef(true);
  useEffect(() => {
    if (queryParams) {
      
      let updatedFilters = {};
    updatedFilters = { ...filters };
      if (queryParams.launch_year) {
        updatedFilters.launch_year = queryParams.launch_year
      }
      if (queryParams.launch_success) {
        updatedFilters.launch_success=queryParams.launch_success
      }
      if (queryParams.land_success) {
        updatedFilters.land_success=queryParams.land_success
      }
      setFilters(updatedFilters);
      Object.keys(updatedFilters).forEach((key) => {
        if (updatedFilters[key] == '') {
          delete updatedFilters[key];
        }
      });
      if (window) {
        const url = new URL(window.location);
        let searchParams = new URLSearchParams(updatedFilters);
        url.search=searchParams;
        window.history.replaceState({}, '', url);
      }
    }
  }, [])

  

  useEffect(() => {
    
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    async function fetchData() {
      try {
        const missionsDetails = await getData();
        setMissions(missionsDetails.props.data)
      } catch (e) {
        console.log('Some error occured');
      }
    }

    fetchData();
  }, [filters]);

  const changeFilters = (filterType, value)=> {
    let updatedFilters = {};
    updatedFilters = { ...filters };
    updatedFilters[filterType] = value;
    Object.keys(updatedFilters).forEach((key) => {
      if (updatedFilters[key] == null) {
        delete updatedFilters[key];
      }
    });
    const url = new URL(window.location);
    let searchParams = new URLSearchParams(updatedFilters);
    url.search=searchParams;
    window.history.replaceState({}, '', url);
    setFilters(prevState=>({...prevState,[filterType]:value}));
    
    //let searchParams = new URLSearchParams(filters);
    //window.location.search = searchParams.toString();
    
  };

 
    return (
      <>
        <Head>
        <title>Spacex App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="Description" content="Space Launch Programs Application."></meta>
        </Head>
        <header>
          <h1>SpaceX Launch Programs</h1>
        </header>

        <main className="container">
          <div className="filter">
            <Filters
              filters={filters}
              changeFilters={changeFilters}
            />
          </div>
          <div className="cards">
            <CardList missions={missions}/>
          </div>
        </main>
        <footer className="footer">
          <b>Developed by: </b> Vikram Singla
        </footer>
      </>
    );
  
}

const getData = async (queryParams) =>{
 
  let apiFilters = {};
  if(queryParams){
  let params = new URLSearchParams(queryParams);

  if (params.get("launch_year")) {
    apiFilters.launch_year = params.get("launch_year");
  }
  if (params.get("launch_success")) {
    apiFilters.launch_success = params.get("launch_success");
  }
  if (params.get("land_success")) {
    apiFilters.land_success = params.get("launch_landing");
  }
  }else{
    apiFilters=window.location.search;
  }
    try {
      const res = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&${new URLSearchParams(apiFilters).toString()}`);
      const data = await res.json();
      return {
        props: { data, queryParams }
      }
    } catch (e) {
      console.log(`Some error occurred`);
    }
}
export async function getServerSideProps(ctx) {
  return getData(ctx.query);
}
