import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function CardProduct({image, titleProduct, price, linkDetailProduct, seller}) {
    return (
        <div>
            <div className="col-6 col-md-4 col-lg-2 my-3">
                <div className="rounded-md shadow overflow-hidden">
                    <Image src={image} layout="responsive" width={236} height={136} />
                    <div className="p-3">
                        <Link href={linkDetailProduct}><a className="m-0 fs-6 fw-bold">{titleProduct}</a></Link>
                        <p className="text-danger fw-bold fs-6" >{price}</p>
                        <p className="color-gray" style={{ fontSize: "12px" }}>{seller}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
