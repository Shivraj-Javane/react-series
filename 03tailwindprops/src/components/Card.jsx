import React from 'react'

function Card(username, btnText) {
    console.log(username);
    
    return(
        <div className="card sm:max-w-sm">
        <figure><img src="https://cdn.flyonui.com/fy-assets/components/card/image-7.png" alt="headphone" /></figure>
        <div className="card-body">
          <h5 className="card-title mb-2.5">Airpods Max</h5>
          <p className="mb-4">A perfect balance of exhilarating high-fidelity audio and the effortless magic of Airpods.</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-secondary btn-soft">Add to cart</button>
          </div>
        </div>
      </div>
    )
}

export default Card