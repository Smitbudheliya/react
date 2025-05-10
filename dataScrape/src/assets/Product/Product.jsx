import './Product.css'
function Product({ ProductList }) {
    return (
        <>
            <div className="container py-5 bg-light rounded">
                {ProductList.map((product, i) =>
                    Object.entries(product).map(([gender, categoriesArr]) => (
                        <div key={`${gender}-${i}`} className="mb-4">
                            <h2 className="mb-4 text-capitalize border-bottom pb-2">{gender}</h2>

                            {Object.entries(categoriesArr[0]).map(([categoryName, products]) => (
                                <div key={categoryName} className="mb-5">
                                    <h4 className="mb-3 text-capitalize text-primary">{categoryName}</h4>

                                    <div className="d-flex overflow-auto custom-scroll" style={{ gap: "1.2rem" }}>
                                        {products.map((item) => (
                                            <div
                                                key={`${categoryName}-${item.id}`}
                                                className="card shadow-sm border-0"
                                                style={{ minWidth: "220px", flex: "0 0 auto", borderRadius: "12px" }}
                                            >
                                                <img
                                                    src={item.image}
                                                    className="card-img-top"
                                                    alt={item.name || item.model}
                                                    style={{
                                                        height: "150px",
                                                        objectFit: "cover",
                                                        borderTopLeftRadius: "12px",
                                                        borderTopRightRadius: "12px",
                                                    }}
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title text-truncate">{item.name || item.model}</h5>
                                                    <p className="card-text text-muted mb-1">{item.brand}</p>
                                                    <span className="badge bg-success">₹{item.price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                )}
            </div>
        


        </>
    )
}
export default Product