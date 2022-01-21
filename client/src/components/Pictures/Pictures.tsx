import { useEffect, useState } from "react";
import "./Pictures.css";
import PicturePreview from "../PicturePreview/PicturePreview";
import Picture from "../Picture/Picture";
import { Switch, Route } from "react-router-dom";
type pictureType = {
  id: string;
  artist: string;
  price: number;
  thumbnailUrl: string;
  description: string;
};
const Pictures = () => {
  const [pictures, setPictures] = useState<pictureType[]>([]); //useState
  useEffect(() => {
    fetch("/pictures")
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setPictures(body.pictures);
        console.log(body);
      });
  }, []);

  return (
    <div className="Pictures">
      {pictures.map((picture) => {
        return (
          <PicturePreview
            id={picture.id}
            artist={picture.artist}
            price={picture.price}
            thumbnailUrl={picture.thumbnailUrl}
          />
        );
      })}
      <Switch>
        <Route
          render={(props) => {
            const { id } = props.match.params; //??
            const picture = pictures.find((picture) => {
              if (id === picture.id) {
                return true;
              }
              return false;
            });

            if(picture=== undefined ){
              return 
            }
            return <Picture {...picture} />;
          }}
          path="/picture/:id"
        />
      </Switch>
    </div>
  );
};

export default Pictures;
