
import React, {useState} from 'react'

export default function TextForm(props) {
    

    const UpperCase = () =>{
        // console.log("uppercase");
        let newText = text.toUpperCase();
        setText(newText)
        props.showMessage("converted to uppercase","success")
    }

    const LowerCase = () =>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showMessage("converted to Lowercase","success")
    }

    const clear = () =>{ 
        let newText = ('');
        setText(newText)
        props.showMessage("Text Cleared!","success")
    }

    const FontColor = () =>{ 
        let newColor = prompt("Enter the color name:");

        setColor(newColor) 
        document.querySelector('#textarea').style.color=newColor;
        
        props.showMessage(`Color changed to ${newColor} `,"success")    
    }

    const Font = () =>{ 
        setfont('cursive')   
        props.showMessage("Font changed to cursive !!","success")  
    }

    const FontSizeplus = () =>{ 
        setfontSize( fontSize + 2);
        props.showMessage("Font size increased by 2","success")
       
    }

    const FontSizeminus = () =>{ 
        setfontSize( fontSize - 2);
        props.showMessage("Font size decreased by 2","success")
       
    }

    

    const handleOnChange = (event) =>{
        console.log("changed");
        setText(event.target.value);
    }


    const [text, setText] = useState("");
    const [color, setColor] = useState("black");
    const [fontSize, setfontSize] = useState(16);
    const [font, setfont] = useState('serif');

    return (
        <>
        <div className='container' style={{color: props.mode===`light`?`black`:`white`}}> 
            <h1 className="head" style={{font: 'cursive' }}>{props.heading}</h1>  
        <div className="mb-3">
            
            <textarea className="form-control" onChange={handleOnChange}  value={text}  style = {{fontSize: `${fontSize}px`, 
             fontFamily: `${font}`, backgroundColor: props.mode===`light` ? `white`:`#A37C27`,
            color: props.mode===`light`?`black`:`white`}}  id="textarea" rows="7"></textarea>
        </div>
        <div className="button">
        <button className="bt bt-primary" onClick={UpperCase} style={{backgroundColor: props.mode===`light`?``:`#6A8A82`, color: props.mode===`light`?`black`:`white`}}>Change to <b>Uppercase </b></button>
        <button className="bt bt-primary" onClick={LowerCase} style={{backgroundColor: props.mode===`light`?``:`#6A8A82`, color: props.mode===`light`?`black`:`white`}}>Change to <b> Lowercase </b></button>
        <button className="bt bt-primary" onClick={FontSizeplus} style={{backgroundColor: props.mode===`light`?``:`#6A8A82`, color: props.mode===`light`?`black`:`white`}}><b>Increase</b> Font Size</button>
        <button className="bt bt-primary" onClick={FontSizeminus} style={{backgroundColor: props.mode===`light`?``:`#6A8A82`, color: props.mode===`light`?`black`:`white`}}><b>Decrease</b> Font Size</button>
        <button className="bt bt-primary" onClick={FontColor} style={{backgroundColor: props.mode===`light`?``:`#6A8A82`, color: props.mode===`light`?`black`:`white`}}>Change font <b> color</b> to blue</button>
        <button className="bt bt-primary" onClick={Font} style={{backgroundColor: props.mode===`light`?``:`#6A8A82`, color: props.mode===`light`?`black`:`white`}}>Change font to <b>cursive </b> </button>
        {/* <button className="bt bt-primary" onClick={Font}>Change font to cursive</button> */}
        <button className="bt bt-primary" onClick={clear} style={{backgroundColor: props.mode===`light`?``:`#6A8A82`, color: props.mode===`light`?`black`:`white`}}><b>Clear</b> the text</button>
        </div>
        </div>
        <div className="container my-3" style={{color: props.mode===`light`?`black`:`white`}}>
            <h2>Text Summary</h2>
            <p>
               <span>{text.length>0 ? text.trim().split(" ").length:0} words </span> 
               <br />
               <span>{text.length===" " ? 0: text.length } characters </span>
               <br />
               <span>{text.length>0 ? text.trim().split(".").length:0} sentences</span>
            </p>
        </div>
        </>
    )
}

