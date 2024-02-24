import React from 'react'

export default function PromiseCard({title , para}) {
  return (
    <>
    <div className="HomePromisesSecCard col-lg-3 col-md-6 col-sm-12 card" style={{width: "18rem"}}>
        <div className="HomePromisesSecCardTitle card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{para}</p>
        </div>
    </div>
    </>
  )
}

