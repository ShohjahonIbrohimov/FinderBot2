import React, { useState } from 'react'

function LoaderBtn({ loading }) {
    const [time, setTime] = useState(true)
    setTimeout(() => setTime(false), loading)
    return (
        <>
            {
                time && (
                    <div className="lds-overlay">
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                )
            }
        </>
    )
}

export default LoaderBtn
