import Image from "next/image";

const Products = () => {
    // return ["1", "2", "3", "4"].map((path) => {
    //     return <div>
    //         {/* we can use (placeholder&blurDataURL) to discard layoutShift */}
    //         <Image placeholder="blur" blurDataURL={`/images/${path}.jpg`} key={path} src={`/images/${path}.jpg`} width={800} height={400} />
    //     </div>
    // })

    return (
        <div>
            {/* using (fixed || intristic) => the width & height is effect on this img. and size dos not change */}
            <div>
                {/* fixed: always size is fix */}
                <div>
                    <h2>fixed</h2>
                    <Image src="/images/1.jpg" layout="fixed" width={200} height={200} />
                </div>
                {/* intrinsic => img size dos not bigger than that size we put for width & height */}
                {/* but it can be smaller and the img is responsive */}
                <div>
                    <h2>intrinsic</h2>
                    <Image src="/images/2.jpg" layout="intrinsic" width={200} height={200} />
                </div>
            </div>
            {/* using (responsive || fill) => the width & height is effect on aspect ratio */}
            <div>
                {/* responsive => scale to fit width of container */}
                <div>
                    <h2>responsive</h2>
                    <Image src="/images/3.jpg" layout="responsive" width={200} height={200} />
                </div>
                {/* grow in X & Y axes to fill container && dont have width & height */}
                <div style={{ position: "relative", width: "600px", height: "300px" }} >
                    <h2>fill</h2>
                    <Image src="/images/4.jpg" layout="fill" objectFit="cover" />
                </div>
            </div>
        </div >
    )
}

export default Products;