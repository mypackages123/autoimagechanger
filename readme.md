# @webwithsam/autoimagechanger
A lightweight React component for automatically changing images at configurable intervals or specified times.


## Features

- Automatically change the images.
- Configure tme in millisec intervals.
- Simple integration with React.
- Lightweight and reusable.
- Easy to configure.

## Installation

```bash
npm install @webwithsam/autoimagechanger
```

## Usage

Explain how to import and use your package.

```js
import yourFunction from "@webwithsam/autoimagechanger";
```
```js
##example
import myimage from "@webwithsam/autoimagechanger"
const Myimage = myimage();
// from react component
<div style={{
  width: '130px',             
  height: '500px',        
 
}}>
 <img src={`${Myimage}`}>
</div>

```

## Parameters

Explain the parameters accepted by your function.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `initialvalue` | number | no | the initial value of the array to start with default is 0. |
| `Time` | Number | No | time at what interval the image change default is 1000  |
| `Array ` | array | yes | the list of the name of images the default value is taken from my emoj folder . |
| `Mainpath` | String | yes | this is the main path of the folder were images are found the default value are taken on the my  emoj folder . |

 example parameters with the actual arguments supported by the function.

## Examples

```js
// example with parameter
import myimage from "@webwithsam/autoimagechanger"
const Myimage = myimage({
    Time:2000, // use  the same spelling Time to set time 
    Mainpath:"/your-folder-path", // use the same spelling in declaring the path
    Array:["put_the_list_of_your_image_names in string form ", "1.png"],
    initailvalue:3
});
// the naming convertion should be the same as it is to change the default value 


```

## Requirements
react , react-dom 

## Contributinguse the same spelling 

Suggestions, bug reports, and contributions are welcome.

## License

ISC