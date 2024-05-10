/*
An example of using map and props
The object called images in App.js has each item mapped to a GalleryProps component
Note that we need what's called a key.
This is linked to a variable here called pics.index
Probably should have called pics images, but whatever, next time.
So in this case pics stands in for the object
And note that only the portions of the component that are in the brackets after the mapping function are repeated.


*/

export default function GalleryProps(props) {
  return (
    <section className='container'>
      <h2 className="gallery-title">An Example of Map and Props</h2>
      <div className='gallery-container'>
        {props.pics.map(pics => (
          <div className='gallery-box' >
            <img key={pics.index} src={pics.url}></img>
            <h2>{pics.name}</h2>
            <p>{pics.description}</p>
          </div>
          ))}
      </div>
    </section>
  )
}

