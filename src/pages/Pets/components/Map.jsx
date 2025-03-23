import { Icon } from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Cluster from "react-leaflet-markercluster";
import { useDispatch, useSelector } from "react-redux";
import { setPanel } from "../../../redux/slices/mapnav";
import { fetchShopDetail, setShopId } from "../../../redux/slices/shopdetail";
import { changeCenter, changeZoom } from "../../../redux/slices/map";

const Map = () => {
  const { shops } = useSelector((state) => state.petShop)
  const currentLocation = [20.298059, 85.8248];
  const [map, setMap] = useState(null);
  const dispatch = useDispatch()
  const {zoom,center} = useSelector((state) => state.map);
  const selectedShop = useSelector((state) => state.shopDetail.shopId);
  useEffect(() => {
    if (map) {
      map.setZoom(zoom);
    }
  }, [zoom, map]);
  useEffect(() => {
    if (map) {
      map.setView([center[0], center[1]], 16);
    }
  }, [center,map]);

  return (
    <MapContainer
      center={currentLocation}
      zoom={14}
      scrollWheelZoom={true}
      ref={setMap}
      style={{ minHeight: "calc(100vh - 60px)", width: "calc(100vw - 400px)" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Cluster maxClusterRadius={40}  >
        
        {
          shops.map((shop) => (
            
            shop.species == undefined &&
            <Marker
              key={shop.id}
              position={[shop.location.latitude, shop.location.longitude]}
              eventHandlers={{
                click: () =>
                {
                  if(selectedShop!==shop.id){
                    dispatch(setPanel("SHOP_DETAIL"))
                    dispatch(fetchShopDetail(shop.id))
                    dispatch(setShopId(shop.id))
                    dispatch(changeCenter([shop.location.latitude, shop.location.longitude])) 
                  }
                }
              }}
              icon={
                new Icon({
                  iconUrl:
                    "https://media.istockphoto.com/id/1355290974/photo/dog-near-different-variation-of-goods-for-animals.jpg?s=612x612&w=0&k=20&c=mL_5zyUinqzo32fKV_0lb0ycD8NnvvlsKCBg51CbO2Q=",
                  iconSize: selectedShop==shop.id?[60,60] :[36, 36],
                  className: `rounded-full border-2 border-gray-800 marker ${selectedShop==shop.id? 'border-4 border-highlight':''} `,
                })
              }
            />

          ))
        }
      </Cluster>


      {
        currentLocation != null && <Marker icon={
          new Icon({
            iconUrl: "/map/gps.png",
            iconSize: [60, 60]
          })
        } position={currentLocation}>
        </Marker>
      }
    </MapContainer>
  );
};

export default Map;