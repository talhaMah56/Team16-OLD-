import Card from "react-bootstrap/Card";
import React from "react";
const tempMedia = [
    { name: "movie1", image: "favicon.ico", date: "2010" },
    { name: "movie2", image: "favicon.ico", date: "2020"},
    { name: "Awesome Show", image: "favicon.ico", date: "1990" },
    {
        name: "Bad Show Starring Mark 'the Zucc' Zuckerberg",
        image: "favicon.ico", date: "3000"
    },
    { name: "boring Documentary Volume X", image: "favicon.ico", date: "1988" },
    { name: "boring Documentary Volume XI", image: "favicon.ico", date: "1989" }
];


const mediaToElement = (media : {name: string, image: string, date: string}) => {
    return(
        <div>
            <Card border="dark" style={{ margin: "20px auto", width: "50%" }}>
                <Card.Img
                    variant="top"
                    src={media.image}
                    style={{ height: "50px", width: "50px", margin:"5px auto"}}
                />
                <span>
                    <Card.Body>Name: {media.name}</Card.Body>
                    <Card.Body>Released: {media.date}</Card.Body>
                </span>
            </Card>
        
        </div>
    );
};

export const BrowseMedia = (): JSX.Element => {
    return (
        <div className="HeroSection_section_hero__bCGwu">
            <h1 style={{ textAlign:"center" }}>Browse Media</h1>
            <div>
                {tempMedia.map((media: {name: string, image: string, date:string}): JSX.Element => mediaToElement(media))}
            </div>
        </div>
    );
};
