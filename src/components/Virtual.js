import React, { useState } from 'react';
import { imageList } from './../helpers/helper';
import { imageListNew } from './../helpers/helpers_1';
import { imageListBlur } from './../helpers/helpers_2';
import './images.css';
import { Button, Alert } from 'react-bootstrap';

let k = 0;
let rotateFlag = false
let mouseFlag = false
var direction = "", oldx = 0;
const Virtual = () => {
    const [imgPath, setImgPath] = useState(imageList[0]);
    const [show, setShow] = useState(false);
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showTitle, setTitle] = useState();
    const [showText, setShowText] = useState();
    let flag = false;
    let i = 0;
    let j = imageList.length - 1;

    const rightClick = () => {
        setShowThree(false);
        setShowTwo(false)
        setShowOne(false)
        setShow(false)
        if (i < imageList.length - 1) {
            setTimeout(() => {
                setImgPath(imageList[i])
                rightClick();
                i++;
            }, 0)
        }
        else {
            flag = false;
        }
    }

    const leftClick = () => {
        setShowThree(false);
        setShowTwo(false)
        setShow(false)
        setShowOne(false)
        if (j > 0) {
            setTimeout(() => {
                setImgPath(imageList[j])
                leftClick();
                j--;
            }, 0)
        }
        else {
            flag = false;
        }
    }

    const rotateClick = () => {
        setShowThree(false)
        setShowTwo(false)
        setShow(false)
        setShowOne(false)
        if (rotateFlag) {
            k = 0;
            rotateFlag = false
        }

        for (let m = 0; m < parseInt(imageList.length / 8); m++) {
            setTimeout(function timer() {
                if (k < imageList.length) {
                    setImgPath(imageList[k]);
                    k++;
                }
                else {
                    console.log("EEEEEEEEE", k)
                    rotateFlag = true;
                    setImgPath(imageList[0]);
                }
            }, m * 50);
        }
    }

    const clickOne = () => {
        setShow(false)
        setShowOne(true)
        setShowTwo(false)
        setShowThree(false);
        setImgPath(imageListNew[0])
        k = 43
    }
    const clickTwo = () => {
        setShowOne(false);
        setShowTwo(true)
        setShow(false)
        setShowThree(false);
        setImgPath(imageListNew[1])
        k = 32
    }

    const clickThree = () => {
        setShowTwo(false)
        setShowOne(false);
        setShow(false)
        setShowThree(true);
        setImgPath(imageListNew[2])
        k = 21
    }

    const handleEye1 = () => {
        setTitle("Conjunctiva")
        setShowText("The thin, clear membrane covering the front of the eye and inner eyelids. Cells in this lining produce mucous that helps lubricate the eye")
        setImgPath(imageListBlur[0])
        setShow(true)
    }
    const handleEye2 = () => {
        setTitle("Cornea")
        setShowText("A continuation of the sclera, the cornea, together with the lens, focuses light onto the retina.")
        setImgPath(imageListBlur[1])
        setShow(true)
    }
    const handleEye3 = () => {
        setTitle("Lens")
        setShowText("A transparent structure behind the iris, the lens, together with the cornea, focuses light onto the retina.")
        setImgPath(imageListBlur[2])
        setShow(true)
    }
    const handleEye4 = () => {
        setTitle("Ciliary Muscle")
        setShowText("A circular band of muscles that contracts or expands the lens allowing the eye to focus on objects at different distances.")
        setImgPath(imageListBlur[3])
        setShow(true)
    }
    const handleEye5 = () => {
        setTitle("Retina")
        setShowText("A light-sensitive lining that converts light into electric impulses that are sent through the optic nerve.")
        setImgPath(imageListBlur[4])
        setShow(true)
    }
    const handleEye6 = () => {
        setTitle("Macula")
        setShowText("A small area in the retina that contains special light-sensitive cells that allows fine details and color to be seen clearly.")
        setImgPath(imageListBlur[5])
        setShow(true)
    }
    const handleEye7 = () => {
        setTitle("Optic Nerve")
        setShowText("Carries the electric impulses created by the retina to the brain.")
        setImgPath(imageListBlur[6])
        setShow(true)
    }
    const handleEye8 = () => {
        setTitle("Retinal blood vessels")
        setShowText("The network of blood vessels inside the retina, including the central retinal artery and vein, and vascular circle of the optic nerve.")
        setImgPath(imageListBlur[7])
        setShow(true)
    }
    const handleEye9 = () => {
        setTitle("Sclera")
        setShowText("The white, fibrous, protective outer layer of the eye.")
        setImgPath(imageListBlur[8])
        setShow(true)
    }
    const handleEye10 = () => {
        setTitle("Iris")
        setShowText("The colored part of the eye that contracts or expands the pupil to control how much light enters the eye.")
        setImgPath(imageListBlur[9])
        setShow(true)
    }
    const handleEye11 = () => {
        setTitle("Pupil")
        setShowText("The dark opening in the middle of the iris that lets light enter the eye.")
        setImgPath(imageListBlur[10])
        setShow(true)
    }
    const mouseDown = () => {
        mouseFlag = true
    }

    const mouseUp = () => {
        mouseFlag = false
    }

    const mouseMove = (event) => {
        if (mouseFlag) {
            if (event.pageX < oldx) {
                direction = "left"
            } else if (event.pageX > oldx) {
                direction = "right"
            }
            oldx = event.pageX;
            if (event.clientX % 1 === 0) {
                if (direction === "left") {
                    if (k >= imageList.length) {
                        k = 0;
                    }
                    setImgPath(imageList[k]);
                    k++
                }
                else {
                    if (k === 0) {
                        k = imageList.length - 1;
                    }
                    setImgPath(imageList[k]);
                    k--
                }
                console.log(k)
            }
        }
    }
    return (
        <div>
            <img src={imgPath} alt="one" className="image" style={{ cursor: "move" }} draggable={false}
                onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove} />

            <Alert show={show} variant="success" style={{ width: "40%", marginLeft: "30%", marginTop: "20px" }}>
                <Alert.Heading>{showTitle}</Alert.Heading>
                <p>
                    {showText}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => {
                        setShow(false)
                        if (showOne) {
                            setImgPath(imageListNew[0])
                        }
                        else if (showTwo) {
                            setImgPath(imageListNew[1])
                        }
                        else {
                            setImgPath(imageListNew[2])
                        }
                    }} variant="outline-success">
                        Close
          </Button>
                </div>
            </Alert>
            <div>
                <Button variant="warning" onClick={rightClick}>Right</Button>
                <span>      </span>
                {showOne && <button type="button" style={{ position: "absolute", top: "101px", left: "575px", width: "20px", height: "20px", border: "none", background: "none" }} onClick={handleEye1} />}
                {showOne && <button type="button"
                    style={{ position: "absolute", top: "161px", left: "531px", width: "20px", height: "20px", background: "none", border: "none" }}
                    onClick={handleEye2} />}
                {showOne && <button type="button"
                    style={{ position: "absolute", top: "287px", left: "538px", width: "20px", height: "20px", background: "none", border: "none" }}
                    onClick={handleEye3} />}
                {showOne && <button type="button"
                    style={{ position: "absolute", top: "325px", left: "566px", width: "20px", height: "20px", background: "none", border: 'none' }}
                    onClick={handleEye4} />}
                {showTwo && <button type="button" style={{ position: "absolute", top: "100px", left: "578px", width: "20px", height: "20px", background: "none", border: "none" }} onClick={handleEye5} />}
                {showTwo && <button type="button"
                    style={{ position: "absolute", top: "158px", left: "772px", width: "20px", height: "20px", background: "none", border: 'none' }}
                    onClick={handleEye6} />}
                {showTwo && <button type="button"
                    style={{ position: "absolute", top: "200px", left: "786px", width: "20px", height: "20px", background: "none", border: 'none' }}
                    onClick={handleEye7} />}
                {showTwo && <button type="button"
                    style={{ position: "absolute", top: "350px", left: "724px", width: "20px", height: "20px", background: "none", border: 'none' }}
                    onClick={handleEye8} />}
                {showThree && <button type="button" style={{ position: "absolute", top: "110px", left: "723px", width: "20px", height: "20px", background: "none", border: "none" }} onClick={handleEye9} />}
                {showThree && <button type="button"
                    style={{ position: "absolute", top: "144px", left: "748px", width: "20px", height: "20px", background: "none", border: 'none' }}
                    onClick={handleEye10} />}
                {showThree && <button type="button"
                    style={{ position: "absolute", top: "185px", left: "764px", width: "20px", height: "20px", background: "none", border: 'none' }}
                    onClick={handleEye11} />}
                <Button variant="primary" onClick={leftClick}>Left</Button>
                <span>  </span>
                <Button variant="dark" onClick={rotateClick}>Rotate</Button>
                <br /><br />
                <Button variant="danger" onClick={clickOne}>one</Button>
                <span>  </span>

                <Button variant="danger" onClick={clickTwo}>two</Button>
                <span>  </span>
                <Button variant="danger" onClick={clickThree}>three</Button>

            </div>
        </div>
    );
}

export default Virtual;
