import React from 'react'
import { Link } from '@reach/router';
export default function BackButton() {
    return (
        <div className="m-2">
             <Link to='/' className="btn btn-primary">Back</Link>
        </div>
    )
}
